module.exports=[74645,a=>{"use strict";var b=a.i(59597);function c({couleurs:a,sens:d}){let e=("v"===d?30:20)/a.length;return(0,b.jsx)(b.Fragment,{children:a.map((a,c)=>(0,b.jsx)("rect",{x:"v"===d?c*e:0,y:"h"===d?c*e:0,width:"v"===d?e:30,height:"h"===d?e:20,fill:a},`${a}-${c}`))})}let d={BEL:(0,b.jsx)(c,{sens:"v",couleurs:["#000000","#FDDA24","#EF3340"]}),FRA:(0,b.jsx)(c,{sens:"v",couleurs:["#002395","#FFFFFF","#ED2939"]}),ITA:(0,b.jsx)(c,{sens:"v",couleurs:["#009246","#FFFFFF","#CE2B37"]}),DEU:(0,b.jsx)(c,{sens:"h",couleurs:["#000000","#DD0000","#FFCE00"]}),NLD:(0,b.jsx)(c,{sens:"h",couleurs:["#AE1C28","#FFFFFF","#21468B"]}),ENG:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#FFFFFF"}),(0,b.jsx)("rect",{x:"12.5",width:"5",height:"20",fill:"#CE1124"}),(0,b.jsx)("rect",{y:"7.5",width:"30",height:"5",fill:"#CE1124"})]}),SCO:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#005EB8"}),(0,b.jsx)("path",{d:"M0 0 L30 20 M30 0 L0 20",stroke:"#FFFFFF",strokeWidth:"4"})]}),ESP:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#AA151B"}),(0,b.jsx)("rect",{y:"5",width:"30",height:"10",fill:"#F1BF00"})]}),PRT:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"12",height:"20",fill:"#046A38"}),(0,b.jsx)("rect",{x:"12",width:"18",height:"20",fill:"#DA291C"})]}),TUR:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#E30A17"}),(0,b.jsx)("circle",{cx:"11",cy:"10",r:"5",fill:"#FFFFFF"}),(0,b.jsx)("circle",{cx:"12.4",cy:"10",r:"4",fill:"#E30A17"}),(0,b.jsx)("path",{d:"M18.8 10 L15.6 8.9 L17.6 11.6 L17.6 8.4 L15.6 11.1 Z",fill:"#FFFFFF"})]})};a.s(["Drapeau",0,function({code:a,className:c="w-9 h-6"}){let e=d[a];return(0,b.jsx)("svg",{viewBox:"0 0 30 20",className:`${c} rounded-[3px] ring-1 ring-ligne shrink-0`,role:"img","aria-label":a,preserveAspectRatio:"xMidYMid slice",children:e??(0,b.jsx)("rect",{width:"30",height:"20",fill:"var(--color-surface-2, #1A1F2B)"})})}])},17755,a=>{"use strict";var b=a.i(59597);let c=new Set(["de","la","le","les","du","des","et","en","d","l"]);function d(a){let b=Number.parseInt(a.replace("#",""),16);return Number.isNaN(b)?.5:(.299*(b>>16&255)+.587*(b>>8&255)+.114*(255&b))/255}a.s(["Medaillon",0,function({name:a,colors:e,size:f=44}){let g,h=(g=a.replace(/\b([A-Z]\.)+/g,"").split(/[\s-]+/).filter(a=>a.length>0&&!c.has(a.toLowerCase()))).length>=2?g.slice(0,3).map(a=>a[0].toUpperCase()).join(""):(g[0]??a).slice(0,3).toUpperCase(),[i,j]=e?.length?[e[0],e[1]??e[0]]:[null,null],k=i&&j?(d(i)+d(j))/2:0,l=i?k>.62?"#101319":"#FFFFFF":"var(--color-encre, #E8EAF0)";return(0,b.jsxs)("svg",{width:f,height:f,viewBox:"0 0 44 44",role:"img","aria-label":a,className:"shrink-0",children:[i&&j?(0,b.jsxs)("g",{transform:"rotate(-18 22 22)",children:[(0,b.jsx)("path",{d:"M22 1 A21 21 0 0 0 22 43 Z",fill:i}),(0,b.jsx)("path",{d:"M22 1 A21 21 0 0 1 22 43 Z",fill:j})]}):(0,b.jsx)("circle",{cx:"22",cy:"22",r:"21",fill:"var(--color-surface-2, #1A1F2B)"}),(0,b.jsx)("circle",{cx:"22",cy:"22",r:"21",fill:"none",stroke:"var(--color-ligne, rgba(255,255,255,.12))",strokeWidth:"1.5"}),(0,b.jsx)("text",{x:"22",y:"22",textAnchor:"middle",dominantBaseline:"central",fontSize:h.length>=3?13:15,fontWeight:800,fill:l,stroke:i?k>.62?"rgba(255,255,255,.75)":"rgba(0,0,0,.45)":"none",strokeWidth:.6*!!i,paintOrder:"stroke",style:{fontFamily:"var(--font-mono, ui-monospace, monospace)",letterSpacing:"0.02em"},children:h})]})}])},21400,a=>{"use strict";a.s(["EXACT_BONUS",0,100,"GOALS_BONUS",0,25,"outcomeFromScore",0,function(a,b){return a>b?"home":a===b?"draw":"away"},"potentialPoints",0,function(a){return Math.round(100*(1-a))}])},48745,a=>{"use strict";let b=/\b(FC|SC|AC|AS|AJ|SK|KV|KVC|KAA|KRC|RSC|RWDM|OGC|RC|SV|VV|CF|KSV|RFC|LOSC|ASSE)\b/gi;function c(a){let c=a.replace(/\b([A-Z]\.){2,}/g,"").replace(b,"").replace(/\s{2,}/g," ").trim();return c.length>=3?c:a}a.s(["shortClubName",0,c,"tinyClubName",0,function(a){return c(a).split(" ").filter(Boolean).slice(0,2).join(" ")||a}])},49567,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(21400),h=a.i(31415),i=a.i(49232),j=b([h]);async function k(a){let b=await h.db.select({matchId:i.schema.picks.matchId,outcome:i.schema.picks.outcome,pAtPick:i.schema.picks.pAtPick,scoreHome:i.schema.picks.scoreHome,scoreAway:i.schema.picks.scoreAway}).from(i.schema.picks).where((0,e.eq)(i.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick,scoreHome:a.scoreHome,scoreAway:a.scoreAway}]))}async function l(a,b){return(await h.db.execute(f.sql`
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
                ELSE 'away' END) AS gagne,
             -- Étages du score exact (pronos post-pivot seulement, score null
             -- = prono historique jugé au 1X2 seul). Le côté des 2,5 buts se
             -- juge en entiers : plus de 2,5 ⇔ au moins 3 buts.
             (r.payload IS NOT NULL AND p.score_home IS NOT NULL AND
              ((p.score_home + p.score_away >= 3) =
               ((r.payload->>'full_time_home_goals')::int + (r.payload->>'full_time_away_goals')::int >= 3))) AS buts_bon,
             (r.payload IS NOT NULL AND
              p.score_home = (r.payload->>'full_time_home_goals')::int AND
              p.score_away = (r.payload->>'full_time_away_goals')::int) AS exact_bon
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
             sum(CASE WHEN gagne THEN round(100 * (1 - p_at_pick)) ELSE 0 END
               + CASE WHEN buts_bon THEN ${g.GOALS_BONUS} ELSE 0 END
               + CASE WHEN exact_bon THEN ${g.EXACT_BONUS} ELSE 0 END)::int AS points,
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
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function m(){return(await h.db.execute(f.sql`
    SELECT DISTINCT co.id, co.name, co.country
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN competitions co ON co.id = m.competition_id
    ORDER BY co.name
  `)).rows.map(a=>({id:Number(a.id),name:a.name,country:String(a.country).trim()}))}async function n(a){let b=await h.db.select({competitionId:i.schema.userCompetitionFavorites.competitionId}).from(i.schema.userCompetitionFavorites).where((0,e.eq)(i.schema.userCompetitionFavorites.userId,a));return new Set(b.map(a=>a.competitionId))}async function o(a,b){let c=await h.db.delete(i.schema.userCompetitionFavorites).where((0,e.and)((0,e.eq)(i.schema.userCompetitionFavorites.userId,a),(0,e.eq)(i.schema.userCompetitionFavorites.competitionId,b))).returning({id:i.schema.userCompetitionFavorites.id});0===c.length&&await h.db.insert(i.schema.userCompetitionFavorites).values({id:(0,d.randomUUID)(),userId:a,competitionId:b}).onConflictDoNothing()}async function p(a,b){let[c]=await h.db.select({id:i.schema.leagues.id,name:i.schema.leagues.name}).from(i.schema.leagues).where((0,e.eq)(i.schema.leagues.code,b.toUpperCase().trim())).limit(1);return c?(await h.db.insert(i.schema.leagueMembers).values({id:(0,d.randomUUID)(),leagueId:c.id,userId:a}).onConflictDoNothing(),c):null}async function q(a){let b=await h.db.select({id:i.schema.leagues.id,name:i.schema.leagues.name,code:i.schema.leagues.code,ownerId:i.schema.leagues.ownerId}).from(i.schema.leagueMembers).innerJoin(i.schema.leagues,(0,e.eq)(i.schema.leagues.id,i.schema.leagueMembers.leagueId)).where((0,e.eq)(i.schema.leagueMembers.userId,a));return Promise.all(b.map(async a=>({...a,standings:await l(a.id)})))}async function r(a,b=60){return(await h.db.execute(f.sql`
    SELECT p.match_id, p.outcome::text AS outcome, p.p_at_pick, m.kickoff_utc,
           p.score_home AS sh, p.score_away AS sa,
           p.fox_score_home AS fsh, p.fox_score_away AS fsa,
           dom.canonical_name AS home, ext.canonical_name AS away,
           (r.payload->>'full_time_home_goals')::int AS hg,
           (r.payload->>'full_time_away_goals')::int AS ag,
           fox.p_home AS fox_p_home, fox.p_draw AS fox_p_draw, fox.p_away AS fox_p_away
    FROM picks p
    JOIN matches m ON m.id = p.match_id
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    LEFT JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    LEFT JOIN LATERAL (
        SELECT p2.p_home::float8 AS p_home, p2.p_draw::float8 AS p_draw,
               p2.p_away::float8 AS p_away
        FROM predictions p2
        WHERE p2.match_id = p.match_id AND p2.calibrated
        ORDER BY p2.model_version_id DESC LIMIT 1
    ) fox ON TRUE
    WHERE p.user_id = ${a} AND p.combo_id IS NULL
    ORDER BY m.kickoff_utc DESC
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.sh,e=a.sa,f=a.outcome,h=Number(a.p_at_pick),i=null===b||null===c?null:b>c?"home":b===c?"draw":"away",j=null!==i,k=j?i===f:null,l=j&&null!==d&&null!==e?d+e>=3==b+c>=3:null,m=j&&null!==d?d===b&&e===c:null,n=null===a.fox_p_home?null:[Number(a.fox_p_home),Number(a.fox_p_draw),Number(a.fox_p_away)],o=null===n?null:n.indexOf(Math.max(...n));return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:f,pAtPick:h,potential:(0,g.potentialPoints)(h),myScore:null===d?null:`${d}-${e}`,foxScore:null===a.fsh?null:`${a.fsh}-${a.fsa}`,foxOutcome:null===o?null:["home","draw","away"][o],foxP:null===n?null:n[o]??null,settled:j,won:k,won1x2:k,wonGoals:l,wonExact:m,points:j?(k?(0,g.potentialPoints)(h):0)+(l?g.GOALS_BONUS:0)+(m?g.EXACT_BONUS:0):null,score:null===b?null:`${b}–${c}`}})}[h]=j.then?(await j)():j,a.s(["PICK_LOCK_MINUTES",0,30,"gameCompetitions",0,m,"joinLeague",0,p,"myFavoriteCompetitionIds",0,n,"myLeagues",0,q,"myPickHistory",0,r,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l,"toggleFavoriteCompetition",0,o]),c()}catch(a){c(a)}},!1),51715,a=>{"use strict";a.s(["pct",0,function(a){return`${Math.round(100*a)} %`},"pts",0,function(a){let b=Math.round(100*a);return 0===b?0===a?"0 pt":"moins d’1 pt":`${b>0?"+":"−"}${Math.abs(b)} pt${Math.abs(b)>1?"s":""}`},"surDix",0,function(a){let b=Math.round(10*a);return b<=0?"quasiment jamais":b>=10?"presque à tous les coups":`${b} fois sur 10`}])},71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let o=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,competitionId:h.schema.matches.competitionId,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3,pModelHome:h.schema.fixtureInsights.pModelHome,pModelDraw:h.schema.fixtureInsights.pModelDraw,pModelAway:h.schema.fixtureInsights.pModelAway,factors:h.schema.fixtureInsights.factors,predictionHash:h.schema.fixtureInsights.predictionHash,predictedAt:h.schema.fixtureInsights.predictedAt}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)?.name??`club ${a.homeClubId}`,away:b.get(a.awayClubId)?.name??`club ${a.awayClubId}`,homeColors:b.get(a.homeClubId)?.colors??null,awayColors:b.get(a.awayClubId)?.colors??null}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName,colors:h.schema.clubs.colors}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,{name:a.name,colors:a.colors}]))}async function l(a){if(0===a.length)return new Map;let b=await g.db.execute(f.sql`
    SELECT m.id AS match_id,
           (r.payload->>'full_time_home_goals')::int AS home_goals,
           (r.payload->>'full_time_away_goals')::int AS away_goals
    FROM matches m
    JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE m.id IN (${f.sql.join(a.map(a=>f.sql`${a}`),f.sql`, `)})
  `);return new Map(b.rows.filter(a=>null!==a.home_goals&&null!==a.away_goals).map(a=>[Number(a.match_id),{homeGoals:a.home_goals,awayGoals:a.away_goals}]))}async function m(a=400){return(await g.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=[a.p_home,a.p_draw,a.p_away],c=a.home_goals,d=a.away_goals,e=c>d?0:c===d?1:2,f=[0,0,0].map((a,b)=>+(b===e)),g=0,h=0,i=0;for(let a=0;a<2;a+=1)g+=b[a],h+=f[a],i+=(g-h)**2;return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,pHome:b[0],pDraw:b[1],pAway:b[2],homeGoals:c,awayGoals:d,outcome:e,predictedOutcome:b.indexOf(Math.max(...b)),rps:i/2}})}async function n(){let[a]=await g.db.select({computedAt:h.schema.fixtureInsights.computedAt,modelVersionId:h.schema.fixtureInsights.modelVersionId}).from(h.schema.fixtureInsights).orderBy((0,d.desc)(h.schema.fixtureInsights.computedAt)).limit(1);return a??null}a.s(["MEASURED_RELIABILITY",0,o,"insightsFreshness",0,n,"observedReliability",0,function(a){return(o.find(b=>a>=b.lo&&a<b.hi)??o[o.length-1]).observed},"resultsForMatches",0,l,"trackRecord",0,m,"upcomingFixtures",0,j]),c()}catch(a){c(a)}},!1),4689,a=>a.a(async(b,c)=>{try{var d=a.i(71512),e=b([d]);[d]=e.then?(await e)():e;let f=["home","draw","away"];a.s(["toFixture",0,function(a){var b;let c=Math.max(a.pHome,a.pDraw,a.pAway),e=null!==a.weatherTempC&&null!==a.weatherPrecipMm&&null!==a.weatherWindKmh?{tempC:a.weatherTempC,precipMm:a.weatherPrecipMm,windKmh:a.weatherWindKmh}:null,f=null!==a.expGoals&&null!==a.over25&&null!==a.btts?{expected:a.expGoals,moreThan25:a.over25,bothScore:a.btts,topScores:[{score:a.score1,p:a.pScore1},{score:a.score2,p:a.pScore2},{score:a.score3,p:a.pScore3}].filter(a=>null!==a.score&&null!==a.p)}:null;return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),competitionId:a.competitionId,home:a.home,away:a.away,homeColors:a.homeColors,awayColors:a.awayColors,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,confidence:c,verifiedRate:(0,d.observedReliability)(c),status:a.status,marketAnchorShare:a.blendBeta,identified:a.identified,formHome:a.formHome,formAway:a.formAway,weather:e,goals:f,pModel:null!==a.pModelHome&&null!==a.pModelDraw&&null!==a.pModelAway?{home:a.pModelHome,draw:a.pModelDraw,away:a.pModelAway}:null,factors:(b=a.factors,null===b||"object"!=typeof b?null:{form:b.form,weather:b.weather,house:b.house,market:b.market,formTerm:b.form_term,formTotalTerm:b.form_total_term,weatherTerm:b.weather_term,houseHome:b.house_home,houseAway:b.house_away,stadium:b.stadium??null}),seal:null!==a.predictionHash&&null!==a.predictedAt?{hash:a.predictionHash,archivedAt:a.predictedAt.toISOString()}:null}},"toTrackRecordEntry",0,function(a){return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,score:`${a.homeGoals}–${a.awayGoals}`,outcome:f[a.outcome],predictedOutcome:f[a.predictedOutcome],hit:a.outcome===a.predictedOutcome,rps:a.rps}}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_1y7op4t._.js.map