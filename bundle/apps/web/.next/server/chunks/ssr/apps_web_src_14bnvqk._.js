module.exports=[14205,a=>{"use strict";a.s(["LeagueForms",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call LeagueForms() from the server but LeagueForms is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/ligues/league-forms.tsx","LeagueForms")},75357,a=>{"use strict";var b=a.i(14205);a.n(b)},97878,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963);a.i(43668);var f=a.i(88156),g=a.i(18145),h=a.i(90157),i=a.i(87217),j=a.i(75357),k=b([g,h,i]);function l({titre:a,sousTitre:b,lignes:c,moi:e}){return(0,d.jsxs)("div",{className:"rounded-xl bg-surface border border-ligne overflow-hidden",children:[(0,d.jsxs)("div",{className:"px-4 py-3 border-b border-ligne",children:[(0,d.jsx)("p",{className:"text-encre font-semibold",children:a}),b?(0,d.jsx)("p",{className:"text-xs text-sourdine-2",children:b}):null]}),0===c.length?(0,d.jsx)("p",{className:"px-4 py-3 text-sm text-sourdine-2",children:"Aucun pronostic jugé pour l'instant."}):(0,d.jsx)("table",{className:"w-full text-sm",children:(0,d.jsx)("tbody",{children:c.map(a=>(0,d.jsxs)("tr",{className:`border-b border-ligne last:border-b-0 ${a.userId===e?"bg-renard/8":""}`,children:[(0,d.jsx)("td",{className:"px-4 py-2 w-8 font-mono text-sourdine-2",children:a.rank}),(0,d.jsxs)("td",{className:"px-2 py-2 text-encre",children:[a.name,a.userId===e?(0,d.jsx)("span",{className:"text-renard text-xs",children:" · vous"}):null]}),(0,d.jsxs)("td",{className:"px-3 py-2 text-right font-mono text-encre font-bold",children:[a.points," pts"]}),(0,d.jsxs)("td",{className:"px-4 py-2 text-right text-xs text-sourdine-2",children:[a.settled,"/",a.totalPicks," jugés"]})]},a.userId))})})]})}async function m(){let a=await g.auth.api.getSession({headers:await (0,e.headers)()});a||(0,f.redirect)("/login");let[b,c,k,m]=await Promise.all([(0,h.myLeagues)(a.user.id),(0,h.standings)(),(0,h.myPickHistory)(a.user.id),(0,i.weeklyRace)()]),n=k.filter(a=>a.settled),o=n.reduce((a,b)=>a+(b.points??0),0);return(0,d.jsxs)("div",{className:"space-y-8",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{className:"text-encre text-xl font-bold",children:"Ligues & pronostics"}),(0,d.jsxs)("p",{className:"text-sm text-sourdine mt-1 max-w-3xl",children:["Jeu gratuit — aucune mise, aucun achat, rien à gagner que le classement. Barème : ",(0,d.jsx)("span",{className:"font-mono text-encre",children:"100 × (1 − probabilité)"})," ","points si l'issue choisie se produit. Suivre le favori rapporte peu, oser un outsider qui passe rapporte gros."]})]}),(0,d.jsxs)("section",{className:"grid gap-4 md:grid-cols-2",children:[(0,d.jsx)(j.LeagueForms,{}),(0,d.jsxs)("div",{className:"rounded-xl bg-surface border border-ligne p-4",children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"votre saison"}),(0,d.jsxs)("p",{className:"text-encre text-2xl font-bold font-mono",children:[o," pts"]}),(0,d.jsxs)("p",{className:"text-xs text-sourdine-2",children:[n.filter(a=>a.won).length," réussi(s) sur ",n.length," jugé(s) ·"," ",k.length-n.length," en attente"]})]})]}),m.length>0?(0,d.jsxs)("div",{className:"rounded-xl bg-surface border-2 border-renard/40 overflow-hidden",children:[(0,d.jsxs)("div",{className:"px-4 py-3 border-b border-ligne flex items-baseline justify-between",children:[(0,d.jsx)("p",{className:"text-encre font-semibold",children:"🏁 Course de la semaine"}),(0,d.jsx)("p",{className:"text-[10px] text-sourdine-2",children:"points de la semaine · reset lundi"})]}),(0,d.jsx)("table",{className:"w-full text-sm",children:(0,d.jsx)("tbody",{children:m.slice(0,10).map(b=>(0,d.jsxs)("tr",{className:`border-b border-ligne last:border-b-0 ${b.userId===a.user.id?"bg-renard/8":""}`,children:[(0,d.jsx)("td",{className:"px-4 py-2 w-8 font-mono text-sourdine-2",children:b.rank}),(0,d.jsxs)("td",{className:"px-2 py-2 text-encre",children:[b.name,b.userId===a.user.id?(0,d.jsx)("span",{className:"text-renard text-xs",children:" · vous"}):null]}),(0,d.jsxs)("td",{className:"px-3 py-2 text-right font-mono text-encre font-bold",children:[b.points," pts"]}),(0,d.jsx)("td",{className:"px-4 py-2 text-right text-xs font-mono text-renard",children:b.pending>0?`+${b.pending} en jeu`:""})]},b.userId))})})]}):null,b.map(b=>(0,d.jsx)(l,{titre:b.name,sousTitre:`Code d'invitation \xe0 partager : ${b.code}`,lignes:b.standings,moi:a.user.id},b.id)),(0,d.jsx)(l,{titre:"Classement général",sousTitre:"Tous les joueurs de la bêta",lignes:c,moi:a.user.id}),k.length>0?(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{className:"text-sourdine text-sm font-semibold border-b border-ligne pb-1.5 mb-3",children:"Mes pronostics"}),(0,d.jsx)("div",{className:"rounded-xl bg-surface border border-ligne overflow-x-auto",children:(0,d.jsx)("table",{className:"w-full text-sm min-w-[480px]",children:(0,d.jsx)("tbody",{children:k.map(a=>(0,d.jsxs)("tr",{className:"border-b border-ligne last:border-b-0",children:[(0,d.jsxs)("td",{className:"px-4 py-2 text-sourdine",children:[(0,d.jsx)("span",{className:"text-encre",children:a.home})," — ",a.away,(0,d.jsxs)("span",{className:"block text-[10px] text-sourdine-2",children:[new Date(a.kickoffUtc).toLocaleDateString("fr-BE",{timeZone:"UTC"}),a.score?` \xb7 ${a.score}`:""]})]}),(0,d.jsx)("td",{className:"px-3 py-2 text-xs text-sourdine",children:"home"===a.outcome?"domicile":"draw"===a.outcome?"nul":"extérieur"}),(0,d.jsx)("td",{className:"px-4 py-2 text-right font-mono",children:a.settled?a.won?(0,d.jsxs)("span",{className:"text-vert font-bold",children:["+",a.points," pts"]}):(0,d.jsx)("span",{className:"text-rouge",children:"0 pt"}):(0,d.jsxs)("span",{className:"text-sourdine-2",children:["+",a.potential," pts ?"]})})]},a.matchId))})})})]}):null]})}[g,h,i]=k.then?(await k)():k,a.s(["default",0,m,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),64733,function(a){a.n(a.i(97878))},90157,a=>a.a(async(b,c)=>{try{a.i(66680);var d=a.i(62332),e=a.i(21592),f=a.i(31415),g=a.i(49232),h=b([f]);function i(a){return Math.round(100*(1-a))}async function j(a){let b=await f.db.select({matchId:g.schema.picks.matchId,outcome:g.schema.picks.outcome,pAtPick:g.schema.picks.pAtPick}).from(g.schema.picks).where((0,d.eq)(g.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function k(a){return(await f.db.execute(e.sql`
    SELECT u.id AS user_id, u.name,
           count(*) FILTER (WHERE r.payload IS NOT NULL)::int AS settled,
           coalesce(sum(
             CASE WHEN r.payload IS NOT NULL AND p.outcome::text = CASE
                    WHEN (r.payload->>'full_time_home_goals')::int > (r.payload->>'full_time_away_goals')::int THEN 'home'
                    WHEN (r.payload->>'full_time_home_goals')::int = (r.payload->>'full_time_away_goals')::int THEN 'draw'
                    ELSE 'away' END
                  THEN round(100 * (1 - p.p_at_pick))
                  ELSE 0 END
           ), 0)::int AS points,
           count(*)::int AS total_picks
    FROM picks p
    JOIN auth_user u ON u.id = p.user_id
    JOIN matches m ON m.id = p.match_id
    LEFT JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    ${a?e.sql`WHERE p.user_id IN (SELECT user_id FROM league_members WHERE league_id = ${a})`:e.sql``}
    GROUP BY u.id, u.name
    ORDER BY points DESC, settled DESC, u.name
    LIMIT 50
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function l(a){let b=await f.db.select({id:g.schema.leagues.id,name:g.schema.leagues.name,code:g.schema.leagues.code,ownerId:g.schema.leagues.ownerId}).from(g.schema.leagueMembers).innerJoin(g.schema.leagues,(0,d.eq)(g.schema.leagues.id,g.schema.leagueMembers.leagueId)).where((0,d.eq)(g.schema.leagueMembers.userId,a));return Promise.all(b.map(async a=>({...a,standings:await k(a.id)})))}async function m(a,b=60){return(await f.db.execute(e.sql`
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
    WHERE p.user_id = ${a}
    ORDER BY m.kickoff_utc DESC
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.outcome,e=Number(a.p_at_pick),f=null===b||null===c?null:b>c?"home":b===c?"draw":"away";return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:d,pAtPick:e,potential:i(e),settled:null!==f,won:null===f?null:f===d,points:null===f?null:f===d?i(e):0,score:null===b?null:`${b}–${c}`}})}[f]=h.then?(await h)():h,a.s(["myLeagues",0,l,"myPickHistory",0,m,"myPicks",0,j,"standings",0,k]),c()}catch(a){c(a)}},!1),87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
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
    SELECT u.id AS user_id, u.name,
           coalesce(sum(
             CASE WHEN r.payload IS NOT NULL AND p.outcome::text = CASE
                    WHEN (r.payload->>'full_time_home_goals')::int > (r.payload->>'full_time_away_goals')::int THEN 'home'
                    WHEN (r.payload->>'full_time_home_goals')::int = (r.payload->>'full_time_away_goals')::int THEN 'draw'
                    ELSE 'away' END
                  THEN round(100 * (1 - p.p_at_pick)) ELSE 0 END
           ), 0)::int AS points,
           coalesce(sum(
             CASE WHEN r.payload IS NULL
                  THEN round(100 * (1 - p.p_at_pick)) ELSE 0 END
           ), 0)::int AS pending
    FROM picks p
    JOIN auth_user u ON u.id = p.user_id
    JOIN matches m ON m.id = p.match_id
    LEFT JOIN LATERAL (
      SELECT f.payload FROM match_facts f
      WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
      ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE to_char(date_trunc('week', m.kickoff_utc), 'IYYY-IW') = ${a}
    GROUP BY u.id, u.name
    ORDER BY points DESC, pending DESC, u.name
    LIMIT 30
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,points:Number(a.points),pending:Number(a.pending)}))}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_14bnvqk._.js.map