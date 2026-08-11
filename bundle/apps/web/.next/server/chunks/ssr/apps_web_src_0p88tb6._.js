module.exports=[20614,a=>{"use strict";a.s(["Explainer",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call Explainer() from the server but Explainer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/ligues/explainer.tsx","Explainer")},5692,a=>{"use strict";var b=a.i(20614);a.n(b)},14205,a=>{"use strict";a.s(["LeagueForms",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call LeagueForms() from the server but LeagueForms is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/ligues/league-forms.tsx","LeagueForms")},75357,a=>{"use strict";var b=a.i(14205);a.n(b)},55792,a=>{"use strict";a.s(["Segments",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call Segments() from the server but Segments is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/ligues/segments.tsx","Segments")},91023,a=>{"use strict";var b=a.i(55792);a.n(b)},22453,a=>{"use strict";a.s(["ShareLeague",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call ShareLeague() from the server but ShareLeague is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/ligues/share-league.tsx","ShareLeague")},61848,a=>{"use strict";var b=a.i(22453);a.n(b)},18326,a=>{"use strict";a.s(["SheetPlus",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call SheetPlus() from the server but SheetPlus is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/ligues/sheet.tsx","SheetPlus")},2886,a=>{"use strict";var b=a.i(18326);a.n(b)},97878,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963);a.i(43668);var f=a.i(88156),g=a.i(18145),h=a.i(90157),i=a.i(87217),j=a.i(83033),k=a.i(5692),l=a.i(75357),m=a.i(91023),n=a.i(61848),o=a.i(2886),p=b([g,h,i,j]);[g,h,i,j]=p.then?(await p)():p;let t=["🥇","🥈","🥉"];function q({l:a,moi:b}){return(0,d.jsxs)("div",{className:`flex items-center gap-3 px-3.5 py-2.5 ${a.userId===b?"bg-renard/8":""}`,children:[(0,d.jsx)("span",{className:"w-7 text-center shrink-0",children:a.rank<=3?(0,d.jsx)("span",{className:"text-lg",children:t[a.rank-1]}):(0,d.jsx)("span",{className:"font-mono text-sourdine-2 text-sm",children:a.rank})}),(0,d.jsx)("img",{src:(0,j.avatarSrc)(a.avatar),alt:"",className:"w-7 h-7 shrink-0 rounded-full bg-surface-2 ring-1 ring-ligne"}),(0,d.jsxs)("span",{className:"flex-1 text-sm text-encre truncate",children:[a.name,a.userId===b?(0,d.jsx)("span",{className:"text-renard text-xs",children:" · toi"}):null]}),void 0!==a.pending&&a.pending>0?(0,d.jsxs)("span",{className:"text-[11px] font-mono text-renard shrink-0",children:["+",a.pending," à venir"]}):null,void 0!==a.settled?(0,d.jsxs)("span",{className:"text-[10px] text-sourdine-2 shrink-0",children:[a.settled,"/",a.totalPicks]}):null,(0,d.jsxs)("span",{className:"font-mono font-black text-encre text-sm shrink-0",children:[a.points," pts"]})]})}function r({lignes:a,moi:b}){if(0===a.length)return(0,d.jsx)("p",{className:"px-4 py-3 text-sm text-sourdine-2",children:"Personne n'a encore de match terminé."});let c=a.slice(0,3),e=a.find(a=>a.userId===b&&a.rank>3),f=a.slice(3).filter(a=>a.userId!==b);return(0,d.jsxs)("div",{className:"divide-y divide-ligne",children:[c.map(a=>(0,d.jsx)(q,{l:a,moi:b},a.userId)),e?(0,d.jsxs)(d.Fragment,{children:[e.rank>4?(0,d.jsx)("p",{className:"px-3.5 py-0.5 text-center text-[10px] text-sourdine-2",children:"⋯"}):null,(0,d.jsx)(q,{l:e,moi:b})]}):null,f.length>0?(0,d.jsxs)("details",{children:[(0,d.jsxs)("summary",{className:"px-3.5 py-2 text-center text-[11px] text-renard font-bold cursor-pointer list-none",children:["voir les ",f.length," autres ▾"]}),(0,d.jsx)("div",{className:"divide-y divide-ligne border-t border-ligne",children:f.map(a=>(0,d.jsx)(q,{l:a,moi:b},a.userId))})]}):null]})}async function s(){let a=await g.auth.api.getSession({headers:await (0,e.headers)()});a||(0,f.redirect)("/login");let b=a.user.id,[c,j,p,q]=await Promise.all([(0,h.myLeagues)(b),(0,h.standings)(),(0,h.myPickHistory)(b),(0,i.weeklyRace)()]),s=p.filter(a=>a.settled),t=s.reduce((a,b)=>a+(b.points??0),0),u=p.length>0,v=(0,d.jsxs)("div",{className:"rounded-2xl bg-surface border-2 border-renard/40 overflow-hidden",children:[(0,d.jsxs)("div",{className:"px-4 py-3 border-b border-ligne",children:[(0,d.jsx)("p",{className:"text-encre font-semibold",children:"🏁 La course de la semaine"}),(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:"Tout le monde repart à zéro chaque lundi. « À venir » = les points de tes matchs pas encore joués."})]}),0===q.length?(0,d.jsx)("p",{className:"px-4 py-3 text-sm text-sourdine-2",children:"Personne dans la course cette semaine. Fais 1 prono et tu y es."}):(0,d.jsx)(r,{lignes:q,moi:b})]}),w=(0,d.jsxs)("div",{className:"space-y-3",children:[(0,d.jsxs)("div",{className:"rounded-2xl bg-surface border border-ligne p-4 flex items-baseline justify-between",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"ta saison"}),(0,d.jsxs)("p",{className:"text-encre text-2xl font-black font-mono",children:[t," pts"]})]}),(0,d.jsxs)("p",{className:"text-xs text-sourdine-2 text-right",children:[s.filter(a=>a.won).length," bons pronos sur ",s.length," matchs finis",(0,d.jsx)("br",{}),p.length-s.length," match",p.length-s.length>1?"s":""," pas encore joué",p.length-s.length>1?"s":""]})]}),(0,d.jsxs)("div",{className:"rounded-2xl bg-surface border border-ligne overflow-hidden",children:[(0,d.jsxs)("div",{className:"px-4 py-3 border-b border-ligne",children:[(0,d.jsx)("p",{className:"text-encre font-semibold",children:"🌍 Classement général"}),(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:"Tous les joueurs, depuis le début de la saison."})]}),(0,d.jsx)(r,{lignes:j,moi:b})]}),p.length>0?(0,d.jsxs)("details",{className:"rounded-2xl bg-surface border border-ligne overflow-hidden",children:[(0,d.jsxs)("summary",{className:"px-4 py-3 text-sm text-encre font-semibold cursor-pointer list-none flex items-center justify-between",children:["Mes pronostics",(0,d.jsxs)("span",{className:"text-[11px] text-renard font-bold",children:[p.length," ▾"]})]}),(0,d.jsx)("div",{className:"border-t border-ligne overflow-x-auto",children:(0,d.jsx)("table",{className:"w-full text-sm min-w-[480px]",children:(0,d.jsx)("tbody",{children:p.map(a=>(0,d.jsxs)("tr",{className:"border-b border-ligne last:border-b-0",children:[(0,d.jsxs)("td",{className:"px-4 py-2 text-sourdine",children:[(0,d.jsx)("span",{className:"text-encre",children:a.home})," — ",a.away,(0,d.jsxs)("span",{className:"block text-[10px] text-sourdine-2",children:[new Date(a.kickoffUtc).toLocaleDateString("fr-BE",{timeZone:"UTC"}),a.score?` \xb7 ${a.score}`:""]})]}),(0,d.jsx)("td",{className:"px-3 py-2 text-xs text-sourdine",children:"home"===a.outcome?`${a.home.split(" ")[0]} gagne`:"draw"===a.outcome?"match nul":`${a.away.split(" ")[0]} gagne`}),(0,d.jsx)("td",{className:"px-4 py-2 text-right font-mono",children:a.settled?a.won?(0,d.jsxs)("span",{className:"text-vert font-bold",children:["+",a.points," pts"]}):(0,d.jsx)("span",{className:"text-rouge",children:"0 pt"}):(0,d.jsxs)("span",{className:"text-sourdine-2",children:["+",a.potential," pts ?"]})})]},a.matchId))})})})]}):null]}),x=(0,d.jsxs)("div",{className:"space-y-3",children:[(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2",children:"Un classement rien qu'entre amis, sur toute la saison. Le bouton « Inviter » envoie le lien qui fait tout."}),c.map(a=>(0,d.jsxs)("div",{className:"rounded-2xl bg-surface border border-ligne overflow-hidden",children:[(0,d.jsxs)("div",{className:"px-4 py-3 border-b border-ligne flex items-center justify-between gap-3",children:[(0,d.jsxs)("div",{className:"min-w-0",children:[(0,d.jsx)("p",{className:"text-encre font-semibold truncate",children:a.name}),(0,d.jsxs)("p",{className:"text-xs text-sourdine-2",children:["code ",a.code]})]}),(0,d.jsx)(n.ShareLeague,{name:a.name,code:a.code})]}),(0,d.jsx)(r,{lignes:a.standings,moi:b})]},a.id)),(0,d.jsx)(o.SheetPlus,{children:(0,d.jsx)(l.LeagueForms,{})})]});return(0,d.jsxs)("div",{className:"max-w-md mx-auto space-y-5",children:[(0,d.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{className:"text-encre text-xl font-bold",children:"Ligues"}),(0,d.jsx)("p",{className:"text-sm text-sourdine mt-0.5",children:"Compare-toi aux autres. C'est gratuit, tu ne mises rien : on compte des points, c'est tout."})]}),u?(0,d.jsx)(k.Explainer,{initialOuvert:!1}):null]}),u?null:(0,d.jsx)(k.Explainer,{initialOuvert:!0}),(0,d.jsx)(m.Segments,{semaine:v,saison:w,ligues:x})]})}a.s(["default",0,s,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),64733,function(a){a.n(a.i(97878))},90157,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);function j(a){return Math.round(100*(1-a))}async function k(a){let b=await g.db.select({matchId:h.schema.picks.matchId,outcome:h.schema.picks.outcome,pAtPick:h.schema.picks.pAtPick}).from(h.schema.picks).where((0,e.eq)(h.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function l(a){return(await g.db.execute(f.sql`
    SELECT u.id AS user_id, u.name, u.avatar,
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
    ${a?f.sql`WHERE p.user_id IN (SELECT user_id FROM league_members WHERE league_id = ${a})`:f.sql``}
    GROUP BY u.id, u.name, u.avatar
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
    WHERE p.user_id = ${a}
    ORDER BY m.kickoff_utc DESC
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.outcome,e=Number(a.p_at_pick),f=null===b||null===c?null:b>c?"home":b===c?"draw":"away";return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:d,pAtPick:e,potential:j(e),settled:null!==f,won:null===f?null:f===d,points:null===f?null:f===d?j(e):0,score:null===b?null:`${b}–${c}`}})}[g]=i.then?(await i)():i,a.s(["joinLeague",0,m,"myLeagues",0,n,"myPickHistory",0,o,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l]),c()}catch(a){c(a)}},!1),87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
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
    SELECT u.id AS user_id, u.name, u.avatar,
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
    GROUP BY u.id, u.name, u.avatar
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
  `)).rows.map(a=>({p:Number(a.p_at_pick),home:a.home,away:a.away,juge:!!a.juge})),g=c.filter(a=>!a.juge),h=g.reduce((a,b)=>null===a||b.p<a.p?b:a,null);return{total:c.length,enCours:g.length,oses:g.filter(a=>a.p<.45).length,prudents:g.filter(a=>a.p>=.45).length,meilleurCoup:h?{home:h.home,away:h.away,points:Math.round(100*(1-h.p))}:null}}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"myWeek",0,l,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_0p88tb6._.js.map