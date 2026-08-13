module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},48745,a=>{"use strict";let b=/\b(FC|SC|AC|AS|AJ|SK|KV|KVC|KAA|KRC|RSC|RWDM|OGC|RC|SV|VV|CF|KSV|RFC|LOSC|ASSE)\b/gi;function c(a){let c=a.replace(/\b([A-Z]\.){2,}/g,"").replace(b,"").replace(/\s{2,}/g," ").trim();return c.length>=3?c:a}a.s(["shortClubName",0,c,"tinyClubName",0,function(a){return c(a).split(" ").filter(Boolean).slice(0,2).join(" ")||a}])},70227,a=>{"use strict";var b=a.i(12714),c=a.i(50227);async function d(){try{return(await (0,b.readFile)((0,c.resolve)(process.cwd(),"../../commitments/ledger.jsonl"),"utf-8")).trim().split("\n").filter(a=>a.trim()).map(a=>JSON.parse(a))}catch{return[]}}async function e(a){return(await d()).find(b=>b.day===a)??null}a.s(["ledgerEntryFor",0,e,"readLedger",0,d])},87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
    SELECT m.kickoff_utc, dom.canonical_name AS home, ext.canonical_name AS away,
           (r.payload->>'full_time_home_goals')::int AS hg,
           (r.payload->>'full_time_away_goals')::int AS ag
    FROM matches m
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    JOIN LATERAL (
      SELECT f.payload FROM match_facts f
      WHERE f.match_id = m.id AND f.fact_type = 'result'
      ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE m.status = 'played'
      AND ((m.home_club_id = ${a} AND m.away_club_id = ${b})
        OR (m.home_club_id = ${b} AND m.away_club_id = ${a}))
    ORDER BY m.kickoff_utc DESC
    LIMIT 5
  `)).rows.map(a=>({kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,homeGoals:Number(a.hg),awayGoals:Number(a.ag)}))}async function i(a){return(await f.db.execute(d.sql`
    SELECT m.kickoff_utc, m.home_club_id,
           dom.canonical_name AS home, ext.canonical_name AS away,
           (r.payload->>'full_time_home_goals')::int AS hg,
           (r.payload->>'full_time_away_goals')::int AS ag
    FROM matches m
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    JOIN LATERAL (
      SELECT f.payload FROM match_facts f
      WHERE f.match_id = m.id AND f.fact_type = 'result'
      ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE m.status = 'played'
      AND (m.home_club_id = ${a} OR m.away_club_id = ${a})
    ORDER BY m.kickoff_utc DESC
    LIMIT 5
  `)).rows.map(b=>{let c=Number(b.home_club_id)===a,d=Number(c?b.hg:b.ag),e=Number(c?b.ag:b.hg);return{kickoffUtc:new Date(b.kickoff_utc),opponent:c?b.away:b.home,score:`${b.hg}–${b.ag}`,result:d>e?"V":d===e?"N":"D",home:c}})}async function j(a){return(await f.db.execute(d.sql`
    SELECT rating::float8 AS rating, valid_from
    FROM elo_ratings
    WHERE club_id = ${a} AND method_version = 'elo-ha-v1'
    ORDER BY valid_from DESC
    LIMIT 12
  `)).rows.map(a=>({rating:Number(a.rating),from:new Date(a.valid_from)})).reverse()}async function k(){let a=(0,e.currentIsoWeek)();return(await f.db.execute(d.sql`
    -- Même barème que le classement général : solo à l unité, combo en tout
    -- ou rien avec bonus linéaire. « En jeu » = ce qui n est pas encore joué,
    -- bonus compris pour les combos encore vivants.
    WITH juge AS (
      SELECT p.user_id, p.combo_id, p.p_at_pick,
             (r.payload IS NOT NULL) AS regle,
             (r.payload IS NOT NULL AND p.outcome::text = CASE
                WHEN (r.payload->>'full_time_home_goals')::int > (r.payload->>'full_time_away_goals')::int THEN 'home'
                WHEN (r.payload->>'full_time_home_goals')::int = (r.payload->>'full_time_away_goals')::int THEN 'draw'
                ELSE 'away' END) AS gagne
      FROM picks p
      JOIN matches m ON m.id = p.match_id
      LEFT JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
        ORDER BY f.id DESC LIMIT 1
      ) r ON TRUE
      WHERE to_char(date_trunc('week', m.kickoff_utc), 'IYYY-IW') = ${a}
    ),
    solo AS (
      SELECT user_id,
             sum(CASE WHEN gagne THEN round(100 * (1 - p_at_pick)) ELSE 0 END)::int AS points,
             sum(CASE WHEN NOT regle THEN round(100 * (1 - p_at_pick)) ELSE 0 END)::int AS pending
      FROM juge WHERE combo_id IS NULL GROUP BY user_id
    ),
    combo AS (
      SELECT user_id, combo_id, count(*) AS n,
             bool_and(gagne) AS tout_gagne, bool_and(regle) AS tout_regle,
             sum(round(100 * (1 - p_at_pick))) AS base
      FROM juge WHERE combo_id IS NOT NULL GROUP BY user_id, combo_id
    ),
    combos_joueur AS (
      SELECT user_id,
             sum(CASE WHEN tout_regle AND tout_gagne
                      THEN round(base * (1 + 0.25 * (least(n, 5) - 1))) ELSE 0 END)::int AS points,
             -- un combo encore vivant mais pas fini reste « en jeu » entier
             sum(CASE WHEN NOT tout_regle AND tout_gagne
                      THEN round(base * (1 + 0.25 * (least(n, 5) - 1))) ELSE 0 END)::int AS pending
      FROM combo GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar,
           (coalesce(s.points, 0) + coalesce(c.points, 0))::int AS points,
           (coalesce(s.pending, 0) + coalesce(c.pending, 0))::int AS pending
    FROM auth_user u
    LEFT JOIN solo s ON s.user_id = u.id
    LEFT JOIN combos_joueur c ON c.user_id = u.id
    WHERE s.user_id IS NOT NULL OR c.user_id IS NOT NULL
    ORDER BY points DESC, pending DESC, u.name
    LIMIT 30
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),pending:Number(a.pending)}))}async function l(a){let b=(0,e.currentIsoWeek)(),c=(await f.db.execute(d.sql`
    SELECT p.p_at_pick, dom.canonical_name AS home, ext.canonical_name AS away,
           (r.payload IS NOT NULL) AS juge
    FROM picks p
    JOIN matches m ON m.id = p.match_id
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    LEFT JOIN LATERAL (
      SELECT f.payload FROM match_facts f
      WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
      ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE p.user_id = ${a}
      AND to_char(date_trunc('week', m.kickoff_utc), 'IYYY-IW') = ${b}
  `)).rows.map(a=>({p:Number(a.p_at_pick),home:a.home,away:a.away,juge:!!a.juge})),g=c.filter(a=>!a.juge),h=g.reduce((a,b)=>null===a||b.p<a.p?b:a,null);return{total:c.length,enCours:g.length,oses:g.filter(a=>a.p<.45).length,prudents:g.filter(a=>a.p>=.45).length,meilleurCoup:h?{home:h.home,away:h.away,points:Math.round(100*(1-h.p))}:null}}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"myWeek",0,l,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1),51715,a=>{"use strict";a.s(["pct",0,function(a){return`${Math.round(100*a)} %`},"pts",0,function(a){let b=Math.round(100*a);return 0===b?0===a?"0 pt":"moins d’1 pt":`${b>0?"+":"−"}${Math.abs(b)} pt${Math.abs(b)>1?"s":""}`},"surDix",0,function(a){let b=Math.round(10*a);return b<=0?"quasiment jamais":b>=10?"presque à tous les coups":`${b} fois sur 10`}])},71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let n=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,competitionId:h.schema.matches.competitionId,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3,pModelHome:h.schema.fixtureInsights.pModelHome,pModelDraw:h.schema.fixtureInsights.pModelDraw,pModelAway:h.schema.fixtureInsights.pModelAway,factors:h.schema.fixtureInsights.factors,predictionHash:h.schema.fixtureInsights.predictionHash,predictedAt:h.schema.fixtureInsights.predictedAt}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)?.name??`club ${a.homeClubId}`,away:b.get(a.awayClubId)?.name??`club ${a.awayClubId}`,homeColors:b.get(a.homeClubId)?.colors??null,awayColors:b.get(a.awayClubId)?.colors??null}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName,colors:h.schema.clubs.colors}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,{name:a.name,colors:a.colors}]))}async function l(a=400){return(await g.db.execute(f.sql`
    SELECT m.id AS match_id, m.kickoff_utc,
           dom.canonical_name AS home, ext.canonical_name AS away,
           p.p_home::float8 AS p_home, p.p_draw::float8 AS p_draw,
           p.p_away::float8 AS p_away,
           (r.payload->>'full_time_home_goals')::int AS home_goals,
           (r.payload->>'full_time_away_goals')::int AS away_goals
    FROM matches m
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    JOIN LATERAL (
        SELECT p2.p_home, p2.p_draw, p2.p_away
        FROM predictions p2
        WHERE p2.match_id = m.id AND p2.calibrated
        ORDER BY p2.model_version_id DESC LIMIT 1
    ) p ON TRUE
    WHERE m.status = 'played'
    ORDER BY m.kickoff_utc DESC, m.id
    LIMIT ${a}
  `)).rows.map(a=>{let b=[a.p_home,a.p_draw,a.p_away],c=a.home_goals,d=a.away_goals,e=c>d?0:c===d?1:2,f=[0,0,0].map((a,b)=>+(b===e)),g=0,h=0,i=0;for(let a=0;a<2;a+=1)g+=b[a],h+=f[a],i+=(g-h)**2;return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,pHome:b[0],pDraw:b[1],pAway:b[2],homeGoals:c,awayGoals:d,outcome:e,predictedOutcome:b.indexOf(Math.max(...b)),rps:i/2}})}async function m(){let[a]=await g.db.select({computedAt:h.schema.fixtureInsights.computedAt,modelVersionId:h.schema.fixtureInsights.modelVersionId}).from(h.schema.fixtureInsights).orderBy((0,d.desc)(h.schema.fixtureInsights.computedAt)).limit(1);return a??null}a.s(["MEASURED_RELIABILITY",0,n,"insightsFreshness",0,m,"observedReliability",0,function(a){return(n.find(b=>a>=b.lo&&a<b.hi)??n[n.length-1]).observed},"trackRecord",0,l,"upcomingFixtures",0,j]),c()}catch(a){c(a)}},!1),4689,a=>a.a(async(b,c)=>{try{var d=a.i(71512),e=b([d]);[d]=e.then?(await e)():e;let f=["home","draw","away"];a.s(["toFixture",0,function(a){var b;let c=Math.max(a.pHome,a.pDraw,a.pAway),e=null!==a.weatherTempC&&null!==a.weatherPrecipMm&&null!==a.weatherWindKmh?{tempC:a.weatherTempC,precipMm:a.weatherPrecipMm,windKmh:a.weatherWindKmh}:null,f=null!==a.expGoals&&null!==a.over25&&null!==a.btts?{expected:a.expGoals,moreThan25:a.over25,bothScore:a.btts,topScores:[{score:a.score1,p:a.pScore1},{score:a.score2,p:a.pScore2},{score:a.score3,p:a.pScore3}].filter(a=>null!==a.score&&null!==a.p)}:null;return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),competitionId:a.competitionId,home:a.home,away:a.away,homeColors:a.homeColors,awayColors:a.awayColors,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,confidence:c,verifiedRate:(0,d.observedReliability)(c),status:a.status,marketAnchorShare:a.blendBeta,identified:a.identified,formHome:a.formHome,formAway:a.formAway,weather:e,goals:f,pModel:null!==a.pModelHome&&null!==a.pModelDraw&&null!==a.pModelAway?{home:a.pModelHome,draw:a.pModelDraw,away:a.pModelAway}:null,factors:(b=a.factors,null===b||"object"!=typeof b?null:{form:b.form,weather:b.weather,house:b.house,market:b.market,formTerm:b.form_term,formTotalTerm:b.form_total_term,weatherTerm:b.weather_term,houseHome:b.house_home,houseAway:b.house_away,stadium:b.stadium??null}),seal:null!==a.predictionHash&&null!==a.predictedAt?{hash:a.predictionHash,archivedAt:a.predictedAt.toISOString()}:null}},"toTrackRecordEntry",0,function(a){return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,score:`${a.homeGoals}–${a.awayGoals}`,outcome:f[a.outcome],predictedOutcome:f[a.predictedOutcome],hit:a.outcome===a.predictedOutcome,rps:a.rps}}]),c()}catch(a){c(a)}},!1),71837,a=>{"use strict";var b=a.i(62109),c=a.i(54465),d=a.i(11246);a.i(80115);let e=(0,b.instrumentModuleGetter)(()=>a.r(34005)),f=(0,b.instrumentModuleGetter)(()=>a.r(82134)),g=(0,b.instrumentModuleGetter)(()=>a.r(14488)),h=(0,b.instrumentModuleGetter)(()=>a.r(41619)),i=(0,b.instrumentModuleGetter)(()=>a.r(11751)),j=(0,b.instrumentModuleGetter)(()=>a.r(23817)),k=(0,b.instrumentModuleGetter)(()=>a.r(82134)),l=(0,b.instrumentModuleGetter)(()=>a.r(14488)),m=(0,b.instrumentModuleGetter)(()=>a.r(41619)),n=["",{children:["(app)",{children:["analyses",{children:["[id]",{children:["__PAGE__",{},{metadata:{},page:[(0,b.instrumentModuleGetter)(()=>a.r(65611)),"[project]/apps/web/src/app/(app)/analyses/[id]/page.tsx"]},[]]},{metadata:{}},[]]},{metadata:{}},[]]},{metadata:{},layout:[j,"[project]/apps/web/src/app/(app)/layout.tsx"],"not-found":[k,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[l,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[m,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"]},[]]},{layout:[e,"[project]/apps/web/src/app/layout.tsx"],"not-found":[f,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[g,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[h,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"],"global-error":[i,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/global-error.js"]},[]],o=a.r.bind(a),p=a.l.bind(a),q=(0,c.createAppPageEntrypoint)({tree:n,page:"/(app)/analyses/[id]/page",pathname:"/analyses/[id]",require:o,loadChunk:p,interopDefault:d.interopDefault}),r=q.__next_app__,s=q.routeModule,t=q.handler;a.s(["__next_app__",0,r,"handler",0,t,"routeModule",0,s],28659),a.i(28659);var u=a.i(54327);a.s(["ClientPageRoot",()=>u.ClientPageRoot,"ClientSegmentRoot",()=>u.ClientSegmentRoot,"Fragment",()=>u.Fragment,"HTTPAccessFallbackBoundary",()=>u.HTTPAccessFallbackBoundary,"InstantValidation",()=>u.InstantValidation,"LayoutRouter",()=>u.LayoutRouter,"LoadingBoundaryProvider",()=>u.LoadingBoundaryProvider,"Postpone",()=>u.Postpone,"RenderFromTemplateContext",()=>u.RenderFromTemplateContext,"RootLayoutBoundary",()=>u.RootLayoutBoundary,"SegmentViewNode",()=>u.SegmentViewNode,"SegmentViewStateNode",()=>u.SegmentViewStateNode,"__next_app__",0,r,"captureOwnerStack",()=>u.captureOwnerStack,"collectPrefetchHints",()=>u.collectPrefetchHints,"collectSegmentData",()=>u.collectSegmentData,"createElement",()=>u.createElement,"createMetadataComponents",()=>u.createMetadataComponents,"createPrerenderParamsForClientSegment",()=>u.createPrerenderParamsForClientSegment,"createPrerenderSearchParamsForClientPage",()=>u.createPrerenderSearchParamsForClientPage,"createServerParamsForServerSegment",()=>u.createServerParamsForServerSegment,"createServerSearchParamsForServerPage",()=>u.createServerSearchParamsForServerPage,"createTemporaryReferenceSet",()=>u.createTemporaryReferenceSet,"decodeAction",()=>u.decodeAction,"decodeFormState",()=>u.decodeFormState,"decodeReply",()=>u.decodeReply,"handler",0,t,"isEmptyHTMLPrelude",()=>u.isEmptyHTMLPrelude,"patchFetch",()=>u.patchFetch,"preconnect",()=>u.preconnect,"preloadFont",()=>u.preloadFont,"preloadStyle",()=>u.preloadStyle,"prerender",()=>u.prerender,"prerenderToNodeStream",()=>u.prerenderToNodeStream,"renderToPipeableStream",()=>u.renderToPipeableStream,"renderToReadableStream",()=>u.renderToReadableStream,"routeModule",0,s,"serverHooks",()=>u.serverHooks,"taintObjectReference",()=>u.taintObjectReference],71837)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1h9nnpo._.js.map