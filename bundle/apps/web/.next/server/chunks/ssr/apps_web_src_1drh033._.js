module.exports=[91723,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963),f=a.i(38045);a.i(43668);var g=a.i(88156),h=a.i(18145),i=a.i(90157),j=a.i(93221),k=a.i(71512),l=a.i(4689),m=b([h,i,j,k,l]);[h,i,j,k,l]=m.then?(await m)():m;let o=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],p=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],q={home:"1",draw:"N",away:"2"};async function n(){let a=await h.auth.api.getSession({headers:await (0,e.headers)()});a||(0,g.redirect)("/login");let[b,c,m,n]=await Promise.all([(0,k.upcomingFixtures)(),(0,k.insightsFreshness)(),(0,i.myPicks)(a.user.id),(0,j.progression)(a.user.id)]),r=Date.now(),s=b.map(l.toFixture).filter(a=>new Date(a.kickoffUtc).getTime()>r),t=s.filter(a=>!m.has(a.matchId)).length,u=a.user.name.split(" ")[0]??a.user.name,v=new Map;for(let a of s.slice(0,30)){var w;let b=(w=new Date(a.kickoffUtc),`${o[w.getUTCDay()]} ${w.getUTCDate()} ${p[w.getUTCMonth()]}`);v.set(b,[...v.get(b)??[],a])}return(0,d.jsxs)("div",{className:"max-w-md mx-auto space-y-6",children:[(0,d.jsxs)("section",{className:"flex items-end gap-3 anim-rise",children:[(0,d.jsx)("img",{src:t>0?"/assets/mascotte/analyse.webp":"/assets/mascotte/clin_doeil.webp",alt:"La mascotte Foox",className:"w-24 shrink-0"}),(0,d.jsxs)("div",{className:"relative flex-1 rounded-2xl rounded-bl-sm bg-surface border border-ligne px-4 py-3",children:[(0,d.jsx)("p",{className:"text-sm text-encre font-semibold leading-snug",children:t>0?`${u}, ${t} match${t>1?"s":""} attend${t>1?"ent":""} ton prono !`:`Tout est pronostiqu\xe9, ${u} — beau travail.`}),(0,d.jsx)("p",{className:"text-[11px] text-sourdine-2 mt-0.5",children:t>0?"Deux minutes suffisent. La régularité fait le classement.":"Reviens quand les nouvelles affiches tombent."})]})]}),(0,d.jsx)(f.default,{href:"/pronos",className:"block rounded-2xl bg-renard text-nuit text-center font-black text-lg py-4 active:scale-[0.98] transition-transform anim-rise anim-rise-1",children:t>0?`Faire mes pronos (${t})`:"Revoir mes pronos"}),(0,d.jsx)("section",{className:"grid grid-cols-3 gap-2 anim-rise anim-rise-2",children:n.weekChallenges.map(a=>(0,d.jsxs)("div",{title:`${a.description} \xb7 +${a.xp} XP`,className:`rounded-xl border p-2.5 text-center ${a.done?"border-vert/50 bg-vert/10 defi-fait":"border-ligne bg-surface"}`,children:[(0,d.jsxs)("p",{className:`text-[11px] font-bold ${a.done?"text-vert":"text-encre"}`,children:[a.done?"✓ ":"",a.label.replace("Le ","").replace("L'","")]}),(0,d.jsx)("div",{className:"mt-1.5 h-1 rounded-full bg-surface-2 overflow-hidden",children:(0,d.jsx)("span",{className:`block h-full bar-anime ${a.done?"bg-vert":"bg-renard"}`,style:{width:`${a.current/a.target*100}%`}})}),(0,d.jsxs)("p",{className:"text-[9px] font-mono text-sourdine-2 mt-1",children:[a.current,"/",a.target," · +",a.xp," XP"]})]},a.id))}),(0,d.jsx)("section",{className:"space-y-4",children:[...v.entries()].map(([a,b])=>(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"text-sourdine-2 text-[11px] font-semibold uppercase tracking-wider capitalize mb-1.5",children:a}),(0,d.jsx)("div",{className:"rounded-xl bg-surface border border-ligne divide-y divide-ligne overflow-hidden",children:b.map(a=>{let b=m.get(a.matchId),c=new Date(a.kickoffUtc);return(0,d.jsxs)(f.default,{href:`/pronos?match=${a.matchId}`,className:"flex items-center gap-3 px-3.5 py-3 active:bg-surface-2",children:[(0,d.jsxs)("span",{className:"text-[10px] font-mono text-sourdine-2 shrink-0 w-10",children:[String(c.getUTCHours()).padStart(2,"0"),"h",String(c.getUTCMinutes()).padStart(2,"0")]}),(0,d.jsxs)("span",{className:"flex-1 text-sm text-encre leading-tight",children:[a.home,(0,d.jsx)("span",{className:"text-sourdine-2",children:" — "}),a.away]}),b?(0,d.jsx)("span",{className:"shrink-0 w-7 h-7 rounded-lg bg-renard/15 border border-renard/50 text-renard text-xs font-black flex items-center justify-center",children:q[b.outcome]}):(0,d.jsx)("span",{className:"shrink-0 text-[10px] font-bold text-nuit bg-renard rounded-full px-2 py-1",children:"à toi !"})]},a.matchId)})})]},a))}),c?(0,d.jsxs)("p",{className:"text-[10px] text-sourdine-2 text-center",children:["probabilités calculées le"," ",c.computedAt.toLocaleString("fr-BE",{timeZone:"UTC"})," UTC · détails de chaque match dans « l'avis du renard »"]}):null]})}a.s(["default",0,n,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),21518,function(a){a.n(a.i(91723))},90157,a=>a.a(async(b,c)=>{try{a.i(66680);var d=a.i(62332),e=a.i(21592),f=a.i(31415),g=a.i(49232),h=b([f]);function i(a){return Math.round(100*(1-a))}async function j(a){let b=await f.db.select({matchId:g.schema.picks.matchId,outcome:g.schema.picks.outcome,pAtPick:g.schema.picks.pAtPick}).from(g.schema.picks).where((0,d.eq)(g.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function k(a){return(await f.db.execute(e.sql`
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
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.outcome,e=Number(a.p_at_pick),f=null===b||null===c?null:b>c?"home":b===c?"draw":"away";return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:d,pAtPick:e,potential:i(e),settled:null!==f,won:null===f?null:f===d,points:null===f?null:f===d?i(e):0,score:null===b?null:`${b}–${c}`}})}[f]=h.then?(await h)():h,a.s(["myLeagues",0,l,"myPickHistory",0,m,"myPicks",0,j,"standings",0,k]),c()}catch(a){c(a)}},!1),71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let n=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)??`club ${a.homeClubId}`,away:b.get(a.awayClubId)??`club ${a.awayClubId}`}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,a.name]))}async function l(a=400){return(await g.db.execute(f.sql`
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

//# sourceMappingURL=apps_web_src_1drh033._.js.map