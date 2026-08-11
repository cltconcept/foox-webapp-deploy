module.exports=[91723,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963),f=a.i(38045);a.i(43668);var g=a.i(88156),h=a.i(18145),i=a.i(90157),j=a.i(87217),k=a.i(93221),l=a.i(71512),m=a.i(4689),n=b([h,i,j,k,l,m]);[h,i,j,k,l,m]=n.then?(await n)():n;let p={home:"1",draw:"N",away:"2"};async function o(){let a=await h.auth.api.getSession({headers:await (0,e.headers)()});a||(0,g.redirect)("/login");let b=a.user.id,[c,n,o,q,r,s]=await Promise.all([(0,l.upcomingFixtures)(),(0,i.myPicks)(b),(0,k.progression)(b),(0,i.standings)(),(0,i.myPickHistory)(b,40),(0,j.weeklyRace)()]),t=s.find(a=>a.userId===b),u=Date.now(),v=c.map(m.toFixture).filter(a=>new Date(a.kickoffUtc).getTime()>u),w=v.filter(a=>!n.has(a.matchId)).length,x=a.user.name.split(" ")[0]??a.user.name,y=q.find(a=>a.userId===b),z=r.filter(a=>!a.settled),A=z.reduce((a,b)=>a+b.potential,0),B=r.filter(a=>a.settled).slice(0,3),C=v[0]??null,D=o.level.next,E=D?(o.xp-o.level.minXp)/(D.minXp-o.level.minXp):1;return(0,d.jsxs)("div",{className:"max-w-md mx-auto space-y-6 pt-1",children:[(0,d.jsxs)("section",{className:"flex items-end gap-3 anim-rise",children:[(0,d.jsx)("img",{src:w>0?"/assets/mascotte/analyse.webp":"/assets/mascotte/clin_doeil.webp",alt:"La mascotte Foox",className:"w-20 shrink-0"}),(0,d.jsxs)("div",{className:"flex-1 rounded-2xl rounded-bl-sm bg-surface border border-ligne px-4 py-3",children:[(0,d.jsx)("p",{className:"text-sm text-encre font-semibold leading-snug",children:w>0?`${x}, ${w} match${w>1?"s":""} attend${w>1?"ent":""} ton prono !`:`Tout est pronostiqu\xe9, ${x}.`}),C?(0,d.jsxs)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:["prochain coup d'envoi ",function(a){let b=Math.round((a.getTime()-Date.now())/36e5);if(b<1)return"imminent";if(b<24)return`dans ${b} h`;let c=Math.round(b/24);return`dans ${c} jour${c>1?"s":""}`}(new Date(C.kickoffUtc))," :"," ",C.home," — ",C.away]}):null]})]}),(0,d.jsx)(f.default,{href:"/pronos",className:"btn-p text-center text-base py-4 anim-rise anim-rise-1",children:w>0?`Faire mes pronos (${w})`:"Revoir mes pronos"}),(0,d.jsxs)("section",{className:"grid grid-cols-2 gap-2.5 anim-rise anim-rise-2",children:[(0,d.jsxs)(f.default,{href:"/ligues",className:"rounded-2xl bg-surface border border-ligne p-3.5",children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"points de la saison"}),(0,d.jsx)("p",{className:"text-encre text-2xl font-black font-mono",children:o.points}),(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2",children:y?`${y.rank}ᵉ au classement g\xe9n\xe9ral`:"classement à venir"})]}),(0,d.jsxs)("div",{className:"rounded-2xl bg-surface border border-ligne p-3.5",children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"en attente de verdict"}),(0,d.jsxs)("p",{className:"text-renard text-2xl font-black font-mono",children:["+",A]}),(0,d.jsxs)("p",{className:"text-[11px] text-sourdine-2",children:["sur ",z.length," prono",z.length>1?"s":""," posé",z.length>1?"s":""]})]}),(0,d.jsxs)(f.default,{href:"/vestiaire",className:"rounded-2xl bg-surface border border-ligne p-3.5 col-span-2",children:[(0,d.jsxs)("div",{className:"flex items-baseline justify-between",children:[(0,d.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:["niveau ",o.level.name]}),(0,d.jsxs)("p",{className:"text-[11px] font-mono text-sourdine-2",children:[o.xp,D?` / ${D.minXp} XP`:" XP · max"]})]}),(0,d.jsx)("div",{className:"mt-2 h-2.5 rounded-full bg-surface-2 overflow-hidden",children:(0,d.jsx)("span",{className:"block h-full bg-renard rounded-full bar-anime",style:{width:`${Math.min(100,Math.round(100*E))}%`}})})]})]}),B.length>0?(0,d.jsxs)("section",{className:"anim-rise anim-rise-3",children:[(0,d.jsx)("h2",{className:"text-sourdine-2 text-[11px] font-semibold uppercase tracking-wider mb-1.5",children:"Derniers verdicts"}),(0,d.jsx)("div",{className:"rounded-2xl bg-surface border border-ligne divide-y divide-ligne overflow-hidden",children:B.map(a=>(0,d.jsxs)("div",{className:"flex items-center gap-3 px-3.5 py-2.5",children:[(0,d.jsx)("span",{className:`shrink-0 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center ${a.won?"bg-vert/15 text-vert":"bg-rouge/15 text-rouge"}`,children:a.won?"✓":"✗"}),(0,d.jsxs)("span",{className:"flex-1 text-sm text-encre leading-tight",children:[a.home," ",(0,d.jsx)("span",{className:"text-sourdine-2",children:"—"})," ",a.away,(0,d.jsxs)("span",{className:"block text-[10px] text-sourdine-2",children:[a.score," · prono ",p[a.outcome]]})]}),(0,d.jsx)("span",{className:`font-mono font-black text-sm ${a.won?"text-vert":"text-rouge"}`,children:a.won?`+${a.points}`:"0"})]},a.matchId))})]}):null,(0,d.jsxs)(f.default,{href:"/ligues",className:"block rounded-2xl border-2 border-renard/40 bg-renard/8 p-3.5",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-renard font-black",children:"🏁 course de la semaine"}),(0,d.jsx)("p",{className:"text-[10px] text-sourdine-2",children:"se termine dimanche soir"})]}),(0,d.jsxs)("div",{className:"flex items-baseline justify-between mt-1",children:[(0,d.jsx)("p",{className:"text-encre font-black text-lg",children:t?`${t.rank}ᵉ \xb7 ${t.points} pts`:"pas encore dans la course"}),t&&t.pending>0?(0,d.jsxs)("p",{className:"text-renard font-mono font-bold text-sm",children:["+",t.pending," en jeu"]}):null]}),s[0]&&s[0].userId!==b?(0,d.jsxs)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:["en tête : ",s[0].name," (",s[0].points," pts)"]}):t?(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:"tu mènes la course 👑"}):(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:"un prono cette semaine suffit pour entrer"})]}),(0,d.jsx)("section",{className:"grid grid-cols-3 gap-2",children:o.weekChallenges.map(a=>(0,d.jsxs)("div",{title:`${a.description} \xb7 +${a.xp} XP`,className:`rounded-2xl border p-2.5 text-center ${a.done?"border-vert/50 bg-vert/10 defi-fait":"border-ligne bg-surface"}`,children:[(0,d.jsxs)("p",{className:`text-[11px] font-bold ${a.done?"text-vert":"text-encre"}`,children:[a.done?"✓ ":"",a.label.replace("Le ","").replace("L'","")]}),(0,d.jsx)("div",{className:"mt-1.5 h-1 rounded-full bg-surface-2 overflow-hidden",children:(0,d.jsx)("span",{className:`block h-full bar-anime ${a.done?"bg-vert":"bg-renard"}`,style:{width:`${a.current/a.target*100}%`}})}),(0,d.jsxs)("p",{className:"text-[9px] font-mono text-sourdine-2 mt-1",children:[a.current,"/",a.target," · +",a.xp," XP"]})]},a.id))}),q.length>0?(0,d.jsxs)("section",{children:[(0,d.jsxs)("div",{className:"flex items-baseline justify-between mb-1.5",children:[(0,d.jsx)("h2",{className:"text-sourdine-2 text-[11px] font-semibold uppercase tracking-wider",children:"Classement général"}),(0,d.jsx)(f.default,{href:"/ligues",className:"text-[11px] text-renard font-bold",children:"tout voir →"})]}),(0,d.jsx)("div",{className:"rounded-2xl bg-surface border border-ligne divide-y divide-ligne overflow-hidden",children:q.slice(0,3).map((a,c)=>(0,d.jsxs)("div",{className:`flex items-center gap-3 px-3.5 py-2.5 ${a.userId===b?"bg-renard/8":""}`,children:[(0,d.jsx)("span",{className:"text-lg w-7 text-center",children:["🥇","🥈","🥉"][c]}),(0,d.jsxs)("span",{className:"flex-1 text-sm text-encre",children:[a.name,a.userId===b?(0,d.jsx)("span",{className:"text-renard text-xs",children:" · toi"}):null]}),(0,d.jsxs)("span",{className:"font-mono font-black text-encre text-sm",children:[a.points," pts"]})]},a.userId))})]}):null,(0,d.jsxs)(f.default,{href:"/analyses",className:"flex items-center justify-between rounded-2xl bg-surface border border-ligne px-4 py-3",children:[(0,d.jsxs)("span",{className:"text-sm text-encre font-semibold",children:["Les analyses complètes",(0,d.jsx)("span",{className:"block text-[11px] text-sourdine-2 font-normal",children:"probabilités calibrées, forme, météo, marchés de buts"})]}),(0,d.jsx)("span",{className:"rounded-full bg-jaune/15 border border-jaune/50 text-jaune text-[10px] font-black uppercase tracking-wider px-2 py-0.5 shrink-0",children:"Pro"})]})]})}a.s(["default",0,o,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),21518,function(a){a.n(a.i(91723))},90157,a=>a.a(async(b,c)=>{try{a.i(66680);var d=a.i(62332),e=a.i(21592),f=a.i(31415),g=a.i(49232),h=b([f]);function i(a){return Math.round(100*(1-a))}async function j(a){let b=await f.db.select({matchId:g.schema.picks.matchId,outcome:g.schema.picks.outcome,pAtPick:g.schema.picks.pAtPick}).from(g.schema.picks).where((0,d.eq)(g.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function k(a){return(await f.db.execute(e.sql`
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
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,points:Number(a.points),pending:Number(a.pending)}))}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1),71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let n=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)??`club ${a.homeClubId}`,away:b.get(a.awayClubId)??`club ${a.awayClubId}`}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,a.name]))}async function l(a=400){return(await g.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=[a.p_home,a.p_draw,a.p_away],c=a.home_goals,d=a.away_goals,e=c>d?0:c===d?1:2,f=[0,0,0].map((a,b)=>+(b===e)),g=0,h=0,i=0;for(let a=0;a<2;a+=1)g+=b[a],h+=f[a],i+=(g-h)**2;return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,pHome:b[0],pDraw:b[1],pAway:b[2],homeGoals:c,awayGoals:d,outcome:e,predictedOutcome:b.indexOf(Math.max(...b)),rps:i/2}})}async function m(){let[a]=await g.db.select({computedAt:h.schema.fixtureInsights.computedAt,modelVersionId:h.schema.fixtureInsights.modelVersionId}).from(h.schema.fixtureInsights).orderBy((0,d.desc)(h.schema.fixtureInsights.computedAt)).limit(1);return a??null}a.s(["MEASURED_RELIABILITY",0,n,"insightsFreshness",0,m,"observedReliability",0,function(a){return(n.find(b=>a>=b.lo&&a<b.hi)??n[n.length-1]).observed},"trackRecord",0,l,"upcomingFixtures",0,j]),c()}catch(a){c(a)}},!1),4689,a=>a.a(async(b,c)=>{try{var d=a.i(71512),e=b([d]);[d]=e.then?(await e)():e;let f=["home","draw","away"];a.s(["toFixture",0,function(a){let b=Math.max(a.pHome,a.pDraw,a.pAway),c=null!==a.weatherTempC&&null!==a.weatherPrecipMm&&null!==a.weatherWindKmh?{tempC:a.weatherTempC,precipMm:a.weatherPrecipMm,windKmh:a.weatherWindKmh}:null,e=null!==a.expGoals&&null!==a.over25&&null!==a.btts?{expected:a.expGoals,moreThan25:a.over25,bothScore:a.btts,topScores:[{score:a.score1,p:a.pScore1},{score:a.score2,p:a.pScore2},{score:a.score3,p:a.pScore3}].filter(a=>null!==a.score&&null!==a.p)}:null;return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,confidence:b,verifiedRate:(0,d.observedReliability)(b),status:a.status,marketAnchorShare:a.blendBeta,identified:a.identified,formHome:a.formHome,formAway:a.formAway,weather:c,goals:e}},"toTrackRecordEntry",0,function(a){return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,score:`${a.homeGoals}–${a.awayGoals}`,outcome:f[a.outcome],predictedOutcome:f[a.predictedOutcome],hit:a.outcome===a.predictedOutcome,rps:a.rps}}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_197prjm._.js.map