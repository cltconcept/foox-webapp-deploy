module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},4579,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963),f=a.i(38045);a.i(43668);var g=a.i(88156),h=a.i(18145),i=a.i(90157),j=b([h,i]);async function k({params:a}){let b=await h.auth.api.getSession({headers:await (0,e.headers)()});b||(0,g.redirect)("/login");let{code:c}=await a,j=await (0,i.joinLeague)(b.user.id,c);return(0,d.jsxs)("div",{className:"max-w-md mx-auto text-center py-10 space-y-5 anim-rise",children:[(0,d.jsx)("img",{src:j?"/assets/mascotte/confiance.webp":"/assets/mascotte/surprise.webp",alt:"La mascotte Foox",className:"w-36 mx-auto"}),j?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{className:"text-encre text-2xl font-black",children:["Bienvenue dans « ",j.name," » !"]}),(0,d.jsx)("p",{className:"text-sm text-sourdine",children:"Tu es dans le groupe. Chaque prono compte pour ton classement entre amis — et la course de la semaine repart à zéro chaque lundi."}),(0,d.jsxs)("div",{className:"space-y-3 pt-2 max-w-xs mx-auto",children:[(0,d.jsx)(f.default,{href:"/pronos",className:"btn-p text-center py-3.5",children:"Faire mes pronos"}),(0,d.jsx)(f.default,{href:"/ligues",className:"btn-s text-center py-3.5",children:"Voir le classement"})]})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"text-encre text-2xl font-black",children:"Lien d'invitation invalide"}),(0,d.jsx)("p",{className:"text-sm text-sourdine",children:"Ce code ne correspond à aucun groupe. Demande à ton ami de te renvoyer son lien d'invitation depuis sa page Ligues."}),(0,d.jsx)(f.default,{href:"/ligues",className:"btn-s inline-block text-center py-3.5 px-8",children:"Voir le classement"})]})]})}[h,i]=j.then?(await j)():j,a.s(["default",0,k,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),17481,function(a){a.n(a.i(4579))},90157,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);function j(a){return Math.round(100*(1-a))}async function k(a){let b=await g.db.select({matchId:h.schema.picks.matchId,outcome:h.schema.picks.outcome,pAtPick:h.schema.picks.pAtPick}).from(h.schema.picks).where((0,e.eq)(h.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function l(a,b){return(await g.db.execute(f.sql`
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
      WHERE (${a??null}::text IS NULL
             OR p.user_id IN (SELECT user_id FROM league_members WHERE league_id = ${a??null}))
        AND (${b??null}::int IS NULL OR m.competition_id = ${b??null})
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
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function m(){return(await g.db.execute(f.sql`
    SELECT DISTINCT co.id, co.name, co.country
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN competitions co ON co.id = m.competition_id
    ORDER BY co.name
  `)).rows.map(a=>({id:Number(a.id),name:a.name,country:String(a.country).trim()}))}async function n(a){let b=await g.db.select({competitionId:h.schema.userCompetitionFavorites.competitionId}).from(h.schema.userCompetitionFavorites).where((0,e.eq)(h.schema.userCompetitionFavorites.userId,a));return new Set(b.map(a=>a.competitionId))}async function o(a,b){let c=await g.db.delete(h.schema.userCompetitionFavorites).where((0,e.and)((0,e.eq)(h.schema.userCompetitionFavorites.userId,a),(0,e.eq)(h.schema.userCompetitionFavorites.competitionId,b))).returning({id:h.schema.userCompetitionFavorites.id});0===c.length&&await g.db.insert(h.schema.userCompetitionFavorites).values({id:(0,d.randomUUID)(),userId:a,competitionId:b}).onConflictDoNothing()}async function p(a,b){let[c]=await g.db.select({id:h.schema.leagues.id,name:h.schema.leagues.name}).from(h.schema.leagues).where((0,e.eq)(h.schema.leagues.code,b.toUpperCase().trim())).limit(1);return c?(await g.db.insert(h.schema.leagueMembers).values({id:(0,d.randomUUID)(),leagueId:c.id,userId:a}).onConflictDoNothing(),c):null}async function q(a){let b=await g.db.select({id:h.schema.leagues.id,name:h.schema.leagues.name,code:h.schema.leagues.code,ownerId:h.schema.leagues.ownerId}).from(h.schema.leagueMembers).innerJoin(h.schema.leagues,(0,e.eq)(h.schema.leagues.id,h.schema.leagueMembers.leagueId)).where((0,e.eq)(h.schema.leagueMembers.userId,a));return Promise.all(b.map(async a=>({...a,standings:await l(a.id)})))}async function r(a,b=60){return(await g.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.outcome,e=Number(a.p_at_pick),f=null===b||null===c?null:b>c?"home":b===c?"draw":"away";return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:d,pAtPick:e,potential:j(e),settled:null!==f,won:null===f?null:f===d,points:null===f?null:f===d?j(e):0,score:null===b?null:`${b}–${c}`}})}[g]=i.then?(await i)():i,a.s(["PICK_LOCK_MINUTES",0,30,"gameCompetitions",0,m,"joinLeague",0,p,"myFavoriteCompetitionIds",0,n,"myLeagues",0,q,"myPickHistory",0,r,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l,"toggleFavoriteCompetition",0,o]),c()}catch(a){c(a)}},!1),34279,a=>{"use strict";var b=a.i(62109),c=a.i(54465),d=a.i(11246);a.i(80115);let e=(0,b.instrumentModuleGetter)(()=>a.r(34005)),f=(0,b.instrumentModuleGetter)(()=>a.r(82134)),g=(0,b.instrumentModuleGetter)(()=>a.r(14488)),h=(0,b.instrumentModuleGetter)(()=>a.r(41619)),i=(0,b.instrumentModuleGetter)(()=>a.r(11751)),j=(0,b.instrumentModuleGetter)(()=>a.r(23817)),k=(0,b.instrumentModuleGetter)(()=>a.r(84225)),l=(0,b.instrumentModuleGetter)(()=>a.r(82134)),m=(0,b.instrumentModuleGetter)(()=>a.r(14488)),n=(0,b.instrumentModuleGetter)(()=>a.r(41619)),o=["",{children:["(app)",{children:["ligues",{children:["rejoindre",{children:["[code]",{children:["__PAGE__",{},{metadata:{},page:[(0,b.instrumentModuleGetter)(()=>a.r(17481)),"[project]/apps/web/src/app/(app)/ligues/rejoindre/[code]/page.tsx"]},[]]},{metadata:{}},[]]},{metadata:{}},[]]},{metadata:{}},[]]},{metadata:{},layout:[j,"[project]/apps/web/src/app/(app)/layout.tsx"],loading:[k,"[project]/apps/web/src/app/(app)/loading.tsx"],"not-found":[l,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[m,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[n,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"]},[]]},{layout:[e,"[project]/apps/web/src/app/layout.tsx"],"not-found":[f,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/not-found.js"],forbidden:[g,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/forbidden.js"],unauthorized:[h,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/unauthorized.js"],"global-error":[i,"[project]/node_modules/.pnpm/next@16.3.0_@types+node@24._b6663641b762618a1a66d4436962a7a1/node_modules/next/dist/client/components/builtin/global-error.js"]},[]],p=a.r.bind(a),q=a.l.bind(a),r=(0,c.createAppPageEntrypoint)({tree:o,page:"/(app)/ligues/rejoindre/[code]/page",pathname:"/ligues/rejoindre/[code]",require:p,loadChunk:q,interopDefault:d.interopDefault}),s=r.__next_app__,t=r.routeModule,u=r.handler;a.s(["__next_app__",0,s,"handler",0,u,"routeModule",0,t],15129),a.i(15129);var v=a.i(54327);a.s(["ClientPageRoot",()=>v.ClientPageRoot,"ClientSegmentRoot",()=>v.ClientSegmentRoot,"Fragment",()=>v.Fragment,"HTTPAccessFallbackBoundary",()=>v.HTTPAccessFallbackBoundary,"InstantValidation",()=>v.InstantValidation,"LayoutRouter",()=>v.LayoutRouter,"LoadingBoundaryProvider",()=>v.LoadingBoundaryProvider,"Postpone",()=>v.Postpone,"RenderFromTemplateContext",()=>v.RenderFromTemplateContext,"RootLayoutBoundary",()=>v.RootLayoutBoundary,"SegmentViewNode",()=>v.SegmentViewNode,"SegmentViewStateNode",()=>v.SegmentViewStateNode,"__next_app__",0,s,"captureOwnerStack",()=>v.captureOwnerStack,"collectPrefetchHints",()=>v.collectPrefetchHints,"collectSegmentData",()=>v.collectSegmentData,"createElement",()=>v.createElement,"createMetadataComponents",()=>v.createMetadataComponents,"createPrerenderParamsForClientSegment",()=>v.createPrerenderParamsForClientSegment,"createPrerenderSearchParamsForClientPage",()=>v.createPrerenderSearchParamsForClientPage,"createServerParamsForServerSegment",()=>v.createServerParamsForServerSegment,"createServerSearchParamsForServerPage",()=>v.createServerSearchParamsForServerPage,"createTemporaryReferenceSet",()=>v.createTemporaryReferenceSet,"decodeAction",()=>v.decodeAction,"decodeFormState",()=>v.decodeFormState,"decodeReply",()=>v.decodeReply,"handler",0,u,"isEmptyHTMLPrelude",()=>v.isEmptyHTMLPrelude,"patchFetch",()=>v.patchFetch,"preconnect",()=>v.preconnect,"preloadFont",()=>v.preloadFont,"preloadStyle",()=>v.preloadStyle,"prerender",()=>v.prerender,"prerenderToNodeStream",()=>v.prerenderToNodeStream,"renderToPipeableStream",()=>v.renderToPipeableStream,"renderToReadableStream",()=>v.renderToReadableStream,"routeModule",0,t,"serverHooks",()=>v.serverHooks,"taintObjectReference",()=>v.taintObjectReference],34279)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1uy0ws0._.js.map