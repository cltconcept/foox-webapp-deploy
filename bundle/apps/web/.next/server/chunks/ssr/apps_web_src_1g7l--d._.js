module.exports=[46887,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963),f=a.i(38045);a.i(43668);var g=a.i(88156),h=a.i(18145),i=a.i(87217),j=a.i(71512),k=a.i(4689),l=b([h,i,j,k]);function m(a){return`${Math.round(100*a)} %`}function n({points:a}){if(a.length<2)return null;let b=Math.min(...a),c=Math.max(...a)-b||1,e=a.map((d,e)=>{let f=e/(a.length-1)*100;return`${0===e?"M":"L"}${f.toFixed(1)},${(28-(d-b)/c*24).toFixed(1)}`}).join(" "),f=a[a.length-1]>=a[0];return(0,d.jsx)("svg",{viewBox:"0 0 100 32",className:"w-full h-8",preserveAspectRatio:"none",children:(0,d.jsx)("path",{d:e,fill:"none",stroke:f?"var(--color-vert)":"var(--color-rouge)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function o({forme:a}){return(0,d.jsx)("div",{className:"flex gap-1.5",children:a.map(a=>(0,d.jsx)("span",{title:`${a.home?"vs":"@"} ${a.opponent} \xb7 ${a.score}`,className:`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center ${"V"===a.result?"bg-vert/15 text-vert":"N"===a.result?"bg-jaune/15 text-jaune":"bg-rouge/15 text-rouge"}`,children:a.result},+a.kickoffUtc))})}async function p({params:a}){await h.auth.api.getSession({headers:await (0,e.headers)()})||(0,g.redirect)("/login");let b=Number((await a).id);Number.isInteger(b)||(0,g.notFound)();let c=(await (0,j.upcomingFixtures)()).find(a=>a.matchId===b);c||(0,g.notFound)();let l=(0,k.toFixture)(c),[q,r,s,t,u]=await Promise.all([(0,i.headToHead)(c.homeClubId,c.awayClubId),(0,i.recentForm)(c.homeClubId),(0,i.recentForm)(c.awayClubId),(0,i.eloTrend)(c.homeClubId),(0,i.eloTrend)(c.awayClubId)]),v=new Date(l.kickoffUtc);return(0,d.jsxs)("div",{className:"max-w-2xl mx-auto space-y-6",children:[(0,d.jsx)(f.default,{href:"/analyses",className:"text-xs text-sourdine-2 hover:text-encre",children:"← Analyses"}),(0,d.jsxs)("div",{className:"text-center space-y-1",children:[(0,d.jsxs)("p",{className:"text-[11px] text-sourdine-2 font-bold uppercase tracking-widest",children:[v.toLocaleDateString("fr-BE",{timeZone:"UTC"})," ·"," ",String(v.getUTCHours()).padStart(2,"0"),"h",String(v.getUTCMinutes()).padStart(2,"0")," UTC"]}),(0,d.jsxs)("h1",{className:"text-encre text-xl font-black leading-snug",children:[l.home," ",(0,d.jsx)("span",{className:"text-sourdine-2 font-normal",children:"—"})," ",l.away]}),l.identified?null:(0,d.jsx)("p",{className:"text-jaune text-xs",children:"⚠ historique limité — incertitude élevée"})]}),(0,d.jsxs)("section",{className:"rounded-2xl bg-surface border border-ligne p-4 space-y-3",children:[(0,d.jsxs)("div",{className:"grid grid-cols-3 text-center font-mono text-encre",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-2xl font-black",children:m(l.pHome)}),(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"domicile"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-2xl font-black",children:m(l.pDraw)}),(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"nul"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-2xl font-black",children:m(l.pAway)}),(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"extérieur"})]})]}),(0,d.jsxs)("div",{className:"flex h-2.5 rounded-full overflow-hidden bg-surface-2",children:[(0,d.jsx)("span",{className:"bg-vert",style:{width:`${100*l.pHome}%`}}),(0,d.jsx)("span",{className:"bg-jaune",style:{width:`${100*l.pDraw}%`}}),(0,d.jsx)("span",{className:"bg-bleu",style:{width:`${100*l.pAway}%`}})]}),(0,d.jsxs)("p",{className:"text-xs text-sourdine",children:["Quand on annonce ce niveau de chances, ça s'est vraiment produit"," ",Math.round(100*l.verifiedRate)," fois sur 100 par le passé.",l.weather?` M\xe9t\xe9o au stade : ${Math.round(l.weather.tempC)} \xb0C, ${l.weather.precipMm>=1?"pluie":l.weather.windKmh>=25?"venteux":"temps sec"}.`:""]}),l.goals?(0,d.jsxs)("div",{className:"flex flex-wrap gap-x-4 gap-y-1 text-xs text-sourdine-2 border-t border-ligne pt-2.5",children:[(0,d.jsxs)("span",{children:[l.goals.expected.toFixed(2)," buts attendus"]}),(0,d.jsxs)("span",{children:["+2,5 buts : ",m(l.goals.moreThan25)]}),(0,d.jsxs)("span",{children:["les deux marquent : ",m(l.goals.bothScore)]}),(0,d.jsxs)("span",{children:["scores probables"," ",l.goals.topScores.map(a=>`${a.score.replace("-","–")} (${m(a.p)})`).join(" · ")]})]}):null]}),(0,d.jsx)("section",{className:"grid grid-cols-2 gap-3",children:[{nom:l.home,forme:r,elo:t},{nom:l.away,forme:s,elo:u}].map(a=>(0,d.jsxs)("div",{className:"rounded-2xl bg-surface border border-ligne p-4 space-y-3",children:[(0,d.jsx)("p",{className:"text-encre text-sm font-bold leading-tight",children:a.nom}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2 mb-1.5",children:"5 derniers matchs"}),(0,d.jsx)(o,{forme:a.forme})]}),a.elo.length>=2?(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"flex items-baseline justify-between",children:[(0,d.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2",children:"force (Elo)"}),(0,d.jsx)("p",{className:"text-xs font-mono text-encre font-bold",children:Math.round(a.elo[a.elo.length-1].rating)})]}),(0,d.jsx)(n,{points:a.elo.map(a=>a.rating)})]}):null]},a.nom))}),(0,d.jsxs)("section",{className:"rounded-2xl bg-surface border border-ligne overflow-hidden",children:[(0,d.jsx)("p",{className:"px-4 py-2.5 border-b border-ligne text-[10px] uppercase tracking-wider text-sourdine-2 font-semibold",children:"Face-à-face — dernières confrontations"}),0===q.length?(0,d.jsx)("p",{className:"px-4 py-3 text-sm text-sourdine-2",children:"Aucune confrontation dans notre historique."}):(0,d.jsx)("div",{className:"divide-y divide-ligne",children:q.map(a=>(0,d.jsxs)("div",{className:"flex items-center gap-3 px-4 py-2.5 text-sm",children:[(0,d.jsx)("span",{className:"text-[10px] font-mono text-sourdine-2 shrink-0 w-16",children:a.kickoffUtc.toLocaleDateString("fr-BE",{timeZone:"UTC",month:"2-digit",year:"2-digit",day:"2-digit"})}),(0,d.jsxs)("span",{className:"flex-1 text-sourdine leading-tight",children:[(0,d.jsx)("span",{className:"text-encre",children:a.home})," — ",a.away]}),(0,d.jsxs)("span",{className:"font-mono font-black text-encre shrink-0",children:[a.homeGoals,"–",a.awayGoals]})]},+a.kickoffUtc))})]}),(0,d.jsx)(f.default,{href:`/pronos?match=${l.matchId}`,className:"btn-p text-center py-3.5",children:"Pronostiquer ce match"}),(0,d.jsx)("p",{className:"text-[10px] text-sourdine-2 text-center",children:"Analyse statistique — jamais une promesse. Seul le 1X2 est backtesté et calibré."})]})}[h,i,j,k]=l.then?(await l)():l,a.s(["default",0,p,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),65611,function(a){a.n(a.i(46887))},87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
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
  `)).rows.map(a=>({p:Number(a.p_at_pick),home:a.home,away:a.away,juge:!!a.juge})),g=c.filter(a=>!a.juge),h=g.reduce((a,b)=>null===a||b.p<a.p?b:a,null);return{total:c.length,enCours:g.length,oses:g.filter(a=>a.p<.45).length,prudents:g.filter(a=>a.p>=.45).length,meilleurCoup:h?{home:h.home,away:h.away,points:Math.round(100*(1-h.p))}:null}}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"myWeek",0,l,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1),71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let n=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)??`club ${a.homeClubId}`,away:b.get(a.awayClubId)??`club ${a.awayClubId}`}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,a.name]))}async function l(a=400){return(await g.db.execute(f.sql`
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

//# sourceMappingURL=apps_web_src_1g7l--d._.js.map