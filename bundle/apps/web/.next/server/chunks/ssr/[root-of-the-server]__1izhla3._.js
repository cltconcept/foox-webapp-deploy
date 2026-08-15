module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},22105,a=>{"use strict";a.s(["CarrouselGlisse",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call CarrouselGlisse() from the server but CarrouselGlisse is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/carrousel-glisse.tsx","CarrouselGlisse")},54608,a=>{"use strict";var b=a.i(22105);a.n(b)},87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
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
  `)).rows.map(a=>({p:Number(a.p_at_pick),home:a.home,away:a.away,juge:!!a.juge})),g=c.filter(a=>!a.juge),h=g.reduce((a,b)=>null===a||b.p<a.p?b:a,null);return{total:c.length,enCours:g.length,oses:g.filter(a=>a.p<.45).length,prudents:g.filter(a=>a.p>=.45).length,meilleurCoup:h?{home:h.home,away:h.away,points:Math.round(100*(1-h.p))}:null}}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"myWeek",0,l,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1),21439,a=>{"use strict";var b=a.i(62109),c=a.i(54465),d=a.i(11246);a.i(80115);let e=(0,b.instrumentModuleGetter)(()=>a.r(34005)),f=(0,b.instrumentModuleGetter)(()=>a.r(82134)),g=(0,b.instrumentModuleGetter)(()=>a.r(14488)),h=(0,b.instrumentModuleGetter)(()=>a.r(41619)),i=(0,b.instrumentModuleGetter)(()=>a.r(11751)),j=(0,b.instrumentModuleGetter)(()=>a.r(23817)),k=(0,b.instrumentModuleGetter)(()=>a.r(84225)),l=(0,b.instrumentModuleGetter)(()=>a.r(82134)),m=(0,b.instrumentModuleGetter)(()=>a.r(14488)),n=(0,b.instrumentModuleGetter)(()=>a.r(41619)),o=["",{children:["(app)",{children:["aujourdhui",{children:["__PAGE__",{},{metadata:{},page:[(0,b.instrumentModuleGetter)(()=>a.r(21518)),"[project]/apps/web/src/app/(app)/aujourdhui/page.tsx"]},[]]},{metadata:{}},[]]},{metadata:{},layout:[j,"[project]/apps/web/src/app/(app)/layout.tsx"],loading:[k,"[project]/apps/web/src/app/(app)/loading.tsx"],"not-found":[l,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[m,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[n,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"]},[]]},{layout:[e,"[project]/apps/web/src/app/layout.tsx"],"not-found":[f,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[g,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[h,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"],"global-error":[i,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/global-error.js"]},[]],p=a.r.bind(a),q=a.l.bind(a),r=(0,c.createAppPageEntrypoint)({tree:o,page:"/(app)/aujourdhui/page",pathname:"/aujourdhui",require:p,loadChunk:q,interopDefault:d.interopDefault}),s=r.__next_app__,t=r.routeModule,u=r.handler;a.s(["__next_app__",0,s,"handler",0,u,"routeModule",0,t],46908),a.i(46908);var v=a.i(54327);a.s(["ClientPageRoot",()=>v.ClientPageRoot,"ClientSegmentRoot",()=>v.ClientSegmentRoot,"Fragment",()=>v.Fragment,"HTTPAccessFallbackBoundary",()=>v.HTTPAccessFallbackBoundary,"InstantValidation",()=>v.InstantValidation,"LayoutRouter",()=>v.LayoutRouter,"LoadingBoundaryProvider",()=>v.LoadingBoundaryProvider,"Postpone",()=>v.Postpone,"RenderFromTemplateContext",()=>v.RenderFromTemplateContext,"RootLayoutBoundary",()=>v.RootLayoutBoundary,"SegmentViewNode",()=>v.SegmentViewNode,"SegmentViewStateNode",()=>v.SegmentViewStateNode,"__next_app__",0,s,"captureOwnerStack",()=>v.captureOwnerStack,"collectPrefetchHints",()=>v.collectPrefetchHints,"collectSegmentData",()=>v.collectSegmentData,"createElement",()=>v.createElement,"createMetadataComponents",()=>v.createMetadataComponents,"createPrerenderParamsForClientSegment",()=>v.createPrerenderParamsForClientSegment,"createPrerenderSearchParamsForClientPage",()=>v.createPrerenderSearchParamsForClientPage,"createServerParamsForServerSegment",()=>v.createServerParamsForServerSegment,"createServerSearchParamsForServerPage",()=>v.createServerSearchParamsForServerPage,"createTemporaryReferenceSet",()=>v.createTemporaryReferenceSet,"decodeAction",()=>v.decodeAction,"decodeFormState",()=>v.decodeFormState,"decodeReply",()=>v.decodeReply,"handler",0,u,"isEmptyHTMLPrelude",()=>v.isEmptyHTMLPrelude,"patchFetch",()=>v.patchFetch,"preconnect",()=>v.preconnect,"preloadFont",()=>v.preloadFont,"preloadStyle",()=>v.preloadStyle,"prerender",()=>v.prerender,"prerenderToNodeStream",()=>v.prerenderToNodeStream,"renderToPipeableStream",()=>v.renderToPipeableStream,"renderToReadableStream",()=>v.renderToReadableStream,"routeModule",0,t,"serverHooks",()=>v.serverHooks,"taintObjectReference",()=>v.taintObjectReference],21439)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1izhla3._.js.map