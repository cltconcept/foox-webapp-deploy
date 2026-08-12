module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},48745,a=>{"use strict";let b=/\b(FC|SC|AC|AS|AJ|SK|KV|KVC|KAA|KRC|RSC|RWDM|OGC|RC|SV|VV|CF|KSV|RFC|LOSC|ASSE)\b/gi;function c(a){let c=a.replace(/\b([A-Z]\.){2,}/g,"").replace(b,"").replace(/\s{2,}/g," ").trim();return c.length>=3?c:a}a.s(["shortClubName",0,c,"tinyClubName",0,function(a){return c(a).split(" ").filter(Boolean).slice(0,2).join(" ")||a}])},90157,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);function j(a){return Math.round(100*(1-a))}async function k(a){let b=await g.db.select({matchId:h.schema.picks.matchId,outcome:h.schema.picks.outcome,pAtPick:h.schema.picks.pAtPick}).from(h.schema.picks).where((0,e.eq)(h.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function l(a){return(await g.db.execute(f.sql`
    -- Un prono solo compte pour lui-même ; un prono de combo ne compte QUE si
    -- tous ses camarades passent aussi (tout ou rien), avec un bonus linéaire
    -- 1 + 0,25 × (n − 1) plafonné à 5 pronos. Le barème reste entièrement
    -- dérivé : rien n est stocké, rien ne peut se désynchroniser.
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
      ${a?f.sql`WHERE p.user_id IN (SELECT user_id FROM league_members WHERE league_id = ${a})`:f.sql``}
    ),
    solo AS (
      SELECT user_id,
             sum(CASE WHEN gagne THEN round(100 * (1 - p_at_pick)) ELSE 0 END)::int AS points,
             count(*) FILTER (WHERE regle)::int AS regles,
             count(*)::int AS total
      FROM juge WHERE combo_id IS NULL GROUP BY user_id
    ),
    combo AS (
      SELECT user_id, combo_id, count(*) AS n,
             bool_and(gagne) AS tout_gagne, bool_and(regle) AS tout_regle,
             sum(round(100 * (1 - p_at_pick))) AS base,
             count(*) FILTER (WHERE regle) AS regles
      FROM juge WHERE combo_id IS NOT NULL GROUP BY user_id, combo_id
    ),
    combos_joueur AS (
      SELECT user_id,
             sum(CASE WHEN tout_regle AND tout_gagne
                      THEN round(base * (1 + 0.25 * (least(n, 5) - 1)))
                      ELSE 0 END)::int AS points,
             sum(regles)::int AS regles,
             sum(n)::int AS total
      FROM combo GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar,
           (coalesce(s.points, 0) + coalesce(c.points, 0))::int AS points,
           (coalesce(s.regles, 0) + coalesce(c.regles, 0))::int AS settled,
           (coalesce(s.total, 0) + coalesce(c.total, 0))::int AS total_picks
    FROM auth_user u
    LEFT JOIN solo s ON s.user_id = u.id
    LEFT JOIN combos_joueur c ON c.user_id = u.id
    WHERE coalesce(s.total, 0) + coalesce(c.total, 0) > 0
    ORDER BY points DESC, settled DESC, u.name
    LIMIT 50
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function m(a,b){let[c]=await g.db.select({id:h.schema.leagues.id,name:h.schema.leagues.name}).from(h.schema.leagues).where((0,e.eq)(h.schema.leagues.code,b.toUpperCase().trim())).limit(1);return c?(await g.db.insert(h.schema.leagueMembers).values({id:(0,d.randomUUID)(),leagueId:c.id,userId:a}).onConflictDoNothing(),c):null}async function n(a){let b=await g.db.select({id:h.schema.leagues.id,name:h.schema.leagues.name,code:h.schema.leagues.code,ownerId:h.schema.leagues.ownerId}).from(h.schema.leagueMembers).innerJoin(h.schema.leagues,(0,e.eq)(h.schema.leagues.id,h.schema.leagueMembers.leagueId)).where((0,e.eq)(h.schema.leagueMembers.userId,a));return Promise.all(b.map(async a=>({...a,standings:await l(a.id)})))}async function o(a,b=60){return(await g.db.execute(f.sql`
    SELECT p.match_id, p.outcome::text AS outcome, p.p_at_pick, m.kickoff_utc,
           dom.canonical_name AS home, ext.canonical_name AS away,
           (r.payload->>'full_time_home_goals')::int AS hg,
           (r.payload->>'full_time_away_goals')::int AS ag
    FROM picks p
    JOIN matches m ON m.id = p.match_id
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    LEFT JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE p.user_id = ${a} AND p.combo_id IS NULL
    ORDER BY m.kickoff_utc DESC
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.outcome,e=Number(a.p_at_pick),f=null===b||null===c?null:b>c?"home":b===c?"draw":"away";return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:d,pAtPick:e,potential:j(e),settled:null!==f,won:null===f?null:f===d,points:null===f?null:f===d?j(e):0,score:null===b?null:`${b}–${c}`}})}[g]=i.then?(await i)():i,a.s(["PICK_LOCK_MINUTES",0,30,"joinLeague",0,m,"myLeagues",0,n,"myPickHistory",0,o,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l]),c()}catch(a){c(a)}},!1),71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let n=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3,pModelHome:h.schema.fixtureInsights.pModelHome,pModelDraw:h.schema.fixtureInsights.pModelDraw,pModelAway:h.schema.fixtureInsights.pModelAway,factors:h.schema.fixtureInsights.factors,predictionHash:h.schema.fixtureInsights.predictionHash,predictedAt:h.schema.fixtureInsights.predictedAt}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)??`club ${a.homeClubId}`,away:b.get(a.awayClubId)??`club ${a.awayClubId}`}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,a.name]))}async function l(a=400){return(await g.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=[a.p_home,a.p_draw,a.p_away],c=a.home_goals,d=a.away_goals,e=c>d?0:c===d?1:2,f=[0,0,0].map((a,b)=>+(b===e)),g=0,h=0,i=0;for(let a=0;a<2;a+=1)g+=b[a],h+=f[a],i+=(g-h)**2;return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,pHome:b[0],pDraw:b[1],pAway:b[2],homeGoals:c,awayGoals:d,outcome:e,predictedOutcome:b.indexOf(Math.max(...b)),rps:i/2}})}async function m(){let[a]=await g.db.select({computedAt:h.schema.fixtureInsights.computedAt,modelVersionId:h.schema.fixtureInsights.modelVersionId}).from(h.schema.fixtureInsights).orderBy((0,d.desc)(h.schema.fixtureInsights.computedAt)).limit(1);return a??null}a.s(["MEASURED_RELIABILITY",0,n,"insightsFreshness",0,m,"observedReliability",0,function(a){return(n.find(b=>a>=b.lo&&a<b.hi)??n[n.length-1]).observed},"trackRecord",0,l,"upcomingFixtures",0,j]),c()}catch(a){c(a)}},!1),4689,a=>a.a(async(b,c)=>{try{var d=a.i(71512),e=b([d]);[d]=e.then?(await e)():e;let f=["home","draw","away"];a.s(["toFixture",0,function(a){var b;let c=Math.max(a.pHome,a.pDraw,a.pAway),e=null!==a.weatherTempC&&null!==a.weatherPrecipMm&&null!==a.weatherWindKmh?{tempC:a.weatherTempC,precipMm:a.weatherPrecipMm,windKmh:a.weatherWindKmh}:null,f=null!==a.expGoals&&null!==a.over25&&null!==a.btts?{expected:a.expGoals,moreThan25:a.over25,bothScore:a.btts,topScores:[{score:a.score1,p:a.pScore1},{score:a.score2,p:a.pScore2},{score:a.score3,p:a.pScore3}].filter(a=>null!==a.score&&null!==a.p)}:null;return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,confidence:c,verifiedRate:(0,d.observedReliability)(c),status:a.status,marketAnchorShare:a.blendBeta,identified:a.identified,formHome:a.formHome,formAway:a.formAway,weather:e,goals:f,pModel:null!==a.pModelHome&&null!==a.pModelDraw&&null!==a.pModelAway?{home:a.pModelHome,draw:a.pModelDraw,away:a.pModelAway}:null,factors:(b=a.factors,null===b||"object"!=typeof b?null:{form:b.form,weather:b.weather,house:b.house,market:b.market,formTerm:b.form_term,formTotalTerm:b.form_total_term,weatherTerm:b.weather_term,houseHome:b.house_home,houseAway:b.house_away,stadium:b.stadium??null}),seal:null!==a.predictionHash&&null!==a.predictedAt?{hash:a.predictionHash,archivedAt:a.predictedAt.toISOString()}:null}},"toTrackRecordEntry",0,function(a){return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,score:`${a.homeGoals}–${a.awayGoals}`,outcome:f[a.outcome],predictedOutcome:f[a.predictedOutcome],hit:a.outcome===a.predictedOutcome,rps:a.rps}}]),c()}catch(a){c(a)}},!1),40907,a=>{"use strict";var b=a.i(62109),c=a.i(54465),d=a.i(11246);a.i(80115);let e=(0,b.instrumentModuleGetter)(()=>a.r(34005)),f=(0,b.instrumentModuleGetter)(()=>a.r(82134)),g=(0,b.instrumentModuleGetter)(()=>a.r(14488)),h=(0,b.instrumentModuleGetter)(()=>a.r(41619)),i=(0,b.instrumentModuleGetter)(()=>a.r(11751)),j=(0,b.instrumentModuleGetter)(()=>a.r(23817)),k=(0,b.instrumentModuleGetter)(()=>a.r(82134)),l=(0,b.instrumentModuleGetter)(()=>a.r(14488)),m=(0,b.instrumentModuleGetter)(()=>a.r(41619)),n=["",{children:["(app)",{children:["pronos",{children:["__PAGE__",{},{metadata:{},page:[(0,b.instrumentModuleGetter)(()=>a.r(5556)),"[project]/apps/web/src/app/(app)/pronos/page.tsx"]},[]]},{metadata:{}},[]]},{metadata:{},layout:[j,"[project]/apps/web/src/app/(app)/layout.tsx"],"not-found":[k,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[l,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[m,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"]},[]]},{layout:[e,"[project]/apps/web/src/app/layout.tsx"],"not-found":[f,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[g,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[h,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"],"global-error":[i,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/global-error.js"]},[]],o=a.r.bind(a),p=a.l.bind(a),q=(0,c.createAppPageEntrypoint)({tree:n,page:"/(app)/pronos/page",pathname:"/pronos",require:o,loadChunk:p,interopDefault:d.interopDefault}),r=q.__next_app__,s=q.routeModule,t=q.handler;a.s(["__next_app__",0,r,"handler",0,t,"routeModule",0,s],20467),a.i(20467);var u=a.i(54327);a.s(["ClientPageRoot",()=>u.ClientPageRoot,"ClientSegmentRoot",()=>u.ClientSegmentRoot,"Fragment",()=>u.Fragment,"HTTPAccessFallbackBoundary",()=>u.HTTPAccessFallbackBoundary,"InstantValidation",()=>u.InstantValidation,"LayoutRouter",()=>u.LayoutRouter,"LoadingBoundaryProvider",()=>u.LoadingBoundaryProvider,"Postpone",()=>u.Postpone,"RenderFromTemplateContext",()=>u.RenderFromTemplateContext,"RootLayoutBoundary",()=>u.RootLayoutBoundary,"SegmentViewNode",()=>u.SegmentViewNode,"SegmentViewStateNode",()=>u.SegmentViewStateNode,"__next_app__",0,r,"captureOwnerStack",()=>u.captureOwnerStack,"collectPrefetchHints",()=>u.collectPrefetchHints,"collectSegmentData",()=>u.collectSegmentData,"createElement",()=>u.createElement,"createMetadataComponents",()=>u.createMetadataComponents,"createPrerenderParamsForClientSegment",()=>u.createPrerenderParamsForClientSegment,"createPrerenderSearchParamsForClientPage",()=>u.createPrerenderSearchParamsForClientPage,"createServerParamsForServerSegment",()=>u.createServerParamsForServerSegment,"createServerSearchParamsForServerPage",()=>u.createServerSearchParamsForServerPage,"createTemporaryReferenceSet",()=>u.createTemporaryReferenceSet,"decodeAction",()=>u.decodeAction,"decodeFormState",()=>u.decodeFormState,"decodeReply",()=>u.decodeReply,"handler",0,t,"isEmptyHTMLPrelude",()=>u.isEmptyHTMLPrelude,"patchFetch",()=>u.patchFetch,"preconnect",()=>u.preconnect,"preloadFont",()=>u.preloadFont,"preloadStyle",()=>u.preloadStyle,"prerender",()=>u.prerender,"prerenderToNodeStream",()=>u.prerenderToNodeStream,"renderToPipeableStream",()=>u.renderToPipeableStream,"renderToReadableStream",()=>u.renderToReadableStream,"routeModule",0,s,"serverHooks",()=>u.serverHooks,"taintObjectReference",()=>u.taintObjectReference],40907)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q18ete._.js.map