module.exports=[17755,a=>{"use strict";var b=a.i(59597);let c=new Set(["de","la","le","les","du","des","et","en","d","l"]);function d(a){let b=Number.parseInt(a.replace("#",""),16);return Number.isNaN(b)?.5:(.299*(b>>16&255)+.587*(b>>8&255)+.114*(255&b))/255}a.s(["Medaillon",0,function({name:a,colors:e,size:f=44}){let g,h=(g=a.replace(/\b([A-Z]\.)+/g,"").split(/[\s-]+/).filter(a=>a.length>0&&!c.has(a.toLowerCase()))).length>=2?g.slice(0,3).map(a=>a[0].toUpperCase()).join(""):(g[0]??a).slice(0,3).toUpperCase(),[i,j]=e?.length?[e[0],e[1]??e[0]]:[null,null],k=i&&j?(d(i)+d(j))/2:0,l=i?k>.62?"#101319":"#FFFFFF":"var(--color-encre, #E8EAF0)";return(0,b.jsxs)("svg",{width:f,height:f,viewBox:"0 0 44 44",role:"img","aria-label":a,className:"shrink-0",children:[i&&j?(0,b.jsxs)("g",{transform:"rotate(-18 22 22)",children:[(0,b.jsx)("path",{d:"M22 1 A21 21 0 0 0 22 43 Z",fill:i}),(0,b.jsx)("path",{d:"M22 1 A21 21 0 0 1 22 43 Z",fill:j})]}):(0,b.jsx)("circle",{cx:"22",cy:"22",r:"21",fill:"var(--color-surface-2, #1A1F2B)"}),(0,b.jsx)("circle",{cx:"22",cy:"22",r:"21",fill:"none",stroke:"var(--color-ligne, rgba(255,255,255,.12))",strokeWidth:"1.5"}),(0,b.jsx)("text",{x:"22",y:"22",textAnchor:"middle",dominantBaseline:"central",fontSize:h.length>=3?13:15,fontWeight:800,fill:l,stroke:i?k>.62?"rgba(255,255,255,.75)":"rgba(0,0,0,.45)":"none",strokeWidth:.6*!!i,paintOrder:"stroke",style:{fontFamily:"var(--font-mono, ui-monospace, monospace)",letterSpacing:"0.02em"},children:h})]})}])},48745,a=>{"use strict";let b=/\b(FC|SC|AC|AS|AJ|SK|KV|KVC|KAA|KRC|RSC|RWDM|OGC|RC|SV|VV|CF|KSV|RFC|LOSC|ASSE)\b/gi,c=/\b(clube? de futebol|futebol clube|club de f[uú]tbol|clube? desportivo|club deportivo|sociedad deportiva)\b/gi,d=new Set(["de","da","das","dos","do","d","e","y"]),e=new Set([...d,"a","o","os","la","le","los","las","el","l"]);function f(a){let e=a.replace(/\b([A-Z]\.){2,}/g,"").replace(c,"").replace(b,"").replace(/\s{2,}/g," ").trim().split(" ").filter(Boolean);for(;e.length>1&&d.has(e[0].toLowerCase());)e.shift();for(;e.length>1&&d.has(e[e.length-1].toLowerCase());)e.pop();let f=e.join(" ");return f.length>=3?f:a}a.s(["shortClubName",0,f,"tinyClubName",0,function(a){let b=f(a).split(" ").filter(Boolean),c=[],d=0;for(let a of b)if(c.push(a),!e.has(a.toLowerCase())&&2===(d+=1))break;return c.join(" ")||a}])},87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
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
    -- Même barème que le classement général. « En jeu » = ce qui n est pas
    -- encore joué. (Les combos ont été supprimés le 2026-08-19.)
    WITH juge AS (
      SELECT p.user_id, p.p_at_pick,
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
      FROM juge GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar, s.points, s.pending
    FROM auth_user u
    JOIN solo s ON s.user_id = u.id
    ORDER BY points DESC, pending DESC, u.name
    LIMIT 30
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),pending:Number(a.pending)}))}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1),51715,a=>{"use strict";a.s(["compteARebours",0,function(a){let b=Math.round((a.getTime()-Date.now())/36e5);if(b<1)return"imminent";if(b<24)return`${b} h`;let c=Math.round(b/24);return 1===c?"demain":`${c} j`},"dansCombien",0,function(a){let b=Math.round((a.getTime()-Date.now())/36e5);if(b<1)return"imminent";if(b<24)return`dans ${b} h`;let c=Math.round(b/24);return 1===c?"demain":`dans ${c} jours`},"pct",0,function(a){return`${Math.round(100*a)} %`},"pts",0,function(a){let b=Math.round(100*a);return 0===b?0===a?"0 pt":"moins d’1 pt":`${b>0?"+":"−"}${Math.abs(b)} pt${Math.abs(b)>1?"s":""}`},"surDix",0,function(a){let b=Math.round(10*a);return b<=0?"quasiment jamais":b>=10?"presque à tous les coups":`${b} fois sur 10`}])},74592,a=>{"use strict";let b=[.434,.251,.315];a.s(["BASE_RATES",0,b,"DRAW_ELITE_FLOOR",0,.3,"TEMPERAMENT_FR",0,{fearful:"Peureux",cautious:"Prudent",confident:"Confiant"},"issuePreferee",0,function(a){let c=[a.pHome,a.pDraw,a.pAway],d=[a.pHome/b[0],a.pDraw/b[1],a.pAway/b[2]],e=0;return d[1]>d[0]&&(e=1),d[2]>d[e]&&(e=2),1===e&&a.pDraw<.3&&(c[1]>c[e=0]&&(e=1),c[2]>c[e]&&(e=2)),e}])},71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=a.i(74592),j=b([g]);[g]=j.then?(await j)():j;let p=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function k(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,competitionId:h.schema.matches.competitionId,country:h.schema.competitions.country,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3,scoreBalanced:h.schema.fixtureInsights.scoreBalanced,pScoreBalanced:h.schema.fixtureInsights.pScoreBalanced,scoreBold:h.schema.fixtureInsights.scoreBold,pScoreBold:h.schema.fixtureInsights.pScoreBold,preferredOutcome:h.schema.fixtureInsights.preferredOutcome,temperament:h.schema.fixtureInsights.temperament,scoreTop1:h.schema.fixtureInsights.scoreTop1,pScoreTop1:h.schema.fixtureInsights.pScoreTop1,scoreTop2:h.schema.fixtureInsights.scoreTop2,pScoreTop2:h.schema.fixtureInsights.pScoreTop2,scoreTop3:h.schema.fixtureInsights.scoreTop3,pScoreTop3:h.schema.fixtureInsights.pScoreTop3,scoreTop4:h.schema.fixtureInsights.scoreTop4,pScoreTop4:h.schema.fixtureInsights.pScoreTop4,scoreTop5:h.schema.fixtureInsights.scoreTop5,pScoreTop5:h.schema.fixtureInsights.pScoreTop5,scoreTop6:h.schema.fixtureInsights.scoreTop6,pScoreTop6:h.schema.fixtureInsights.pScoreTop6,pModelHome:h.schema.fixtureInsights.pModelHome,pModelDraw:h.schema.fixtureInsights.pModelDraw,pModelAway:h.schema.fixtureInsights.pModelAway,factors:h.schema.fixtureInsights.factors,predictionHash:h.schema.fixtureInsights.predictionHash,predictedAt:h.schema.fixtureInsights.predictedAt}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).innerJoin(h.schema.competitions,(0,e.eq)(h.schema.competitions.id,h.schema.matches.competitionId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await l([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)?.name??`club ${a.homeClubId}`,away:b.get(a.awayClubId)?.name??`club ${a.awayClubId}`,homeColors:b.get(a.homeClubId)?.colors??null,awayColors:b.get(a.awayClubId)?.colors??null}))}async function l(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName,colors:h.schema.clubs.colors}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,{name:a.name,colors:a.colors}]))}async function m(a){if(0===a.length)return new Map;let b=await g.db.execute(f.sql`
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
  `);return new Map(b.rows.filter(a=>null!==a.home_goals&&null!==a.away_goals).map(a=>[Number(a.match_id),{homeGoals:a.home_goals,awayGoals:a.away_goals}]))}async function n(a=400){return(await g.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=[a.p_home,a.p_draw,a.p_away],c=a.home_goals,d=a.away_goals,e=c>d?0:c===d?1:2,f=[0,0,0].map((a,b)=>+(b===e)),g=0,h=0,j=0;for(let a=0;a<2;a+=1)g+=b[a],h+=f[a],j+=(g-h)**2;return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,pHome:b[0],pDraw:b[1],pAway:b[2],homeGoals:c,awayGoals:d,outcome:e,predictedOutcome:(0,i.issuePreferee)({pHome:b[0],pDraw:b[1],pAway:b[2]}),rps:j/2}})}async function o(){let[a]=await g.db.select({computedAt:h.schema.fixtureInsights.computedAt,modelVersionId:h.schema.fixtureInsights.modelVersionId}).from(h.schema.fixtureInsights).orderBy((0,d.desc)(h.schema.fixtureInsights.computedAt)).limit(1);return a??null}a.s(["MEASURED_RELIABILITY",0,p,"insightsFreshness",0,o,"observedReliability",0,function(a){return(p.find(b=>a>=b.lo&&a<b.hi)??p[p.length-1]).observed},"resultsForMatches",0,m,"trackRecord",0,n,"upcomingFixtures",0,k]),c()}catch(a){c(a)}},!1),4689,a=>a.a(async(b,c)=>{try{var d=a.i(71512),e=b([d]);[d]=e.then?(await e)():e;let f=["home","draw","away"];a.s(["toFixture",0,function(a){var b;let c="H"===a.preferredOutcome?"home":"D"===a.preferredOutcome?"draw":"A"===a.preferredOutcome?"away":null,e="fearful"===a.temperament||"cautious"===a.temperament||"confident"===a.temperament?a.temperament:null,f="home"===c?a.pHome:"draw"===c?a.pDraw:"away"===c?a.pAway:Math.max(a.pHome,a.pDraw,a.pAway),g=null!==a.weatherTempC&&null!==a.weatherPrecipMm&&null!==a.weatherWindKmh?{tempC:a.weatherTempC,precipMm:a.weatherPrecipMm,windKmh:a.weatherWindKmh}:null,h=null!==a.expGoals&&null!==a.over25&&null!==a.btts?{expected:a.expGoals,moreThan25:a.over25,bothScore:a.btts,topScores:[{score:a.score1,p:a.pScore1},{score:a.score2,p:a.pScore2},{score:a.score3,p:a.pScore3}].filter(a=>null!==a.score&&null!==a.p)}:null,i=[{score:a.scoreTop1,p:a.pScoreTop1},{score:a.scoreTop2,p:a.pScoreTop2},{score:a.scoreTop3,p:a.pScoreTop3},{score:a.scoreTop4,p:a.pScoreTop4},{score:a.scoreTop5,p:a.pScoreTop5},{score:a.scoreTop6,p:a.pScoreTop6}].filter(a=>null!==a.score&&null!==a.p),j=null!==a.scoreBalanced&&null!==a.pScoreBalanced?{balanced:{score:a.scoreBalanced,p:a.pScoreBalanced},bold:null!==a.scoreBold&&null!==a.pScoreBold?{score:a.scoreBold,p:a.pScoreBold}:null}:null;return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),competitionId:a.competitionId,country:a.country,home:a.home,away:a.away,homeColors:a.homeColors,awayColors:a.awayColors,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,confidence:f,verifiedRate:(0,d.observedReliability)(f),status:a.status,marketAnchorShare:a.blendBeta,identified:a.identified,formHome:a.formHome,formAway:a.formAway,weather:g,goals:h,temperaments:j,preferredOutcome:c,temperament:e,mostLikelyScores:i.length>0?i:null,pModel:null!==a.pModelHome&&null!==a.pModelDraw&&null!==a.pModelAway?{home:a.pModelHome,draw:a.pModelDraw,away:a.pModelAway}:null,factors:(b=a.factors,null===b||"object"!=typeof b?null:{form:b.form,weather:b.weather,house:b.house,market:b.market,formTerm:b.form_term,formTotalTerm:b.form_total_term,weatherTerm:b.weather_term,houseHome:b.house_home,houseAway:b.house_away,stadium:b.stadium??null}),seal:null!==a.predictionHash&&null!==a.predictedAt?{hash:a.predictionHash,archivedAt:a.predictedAt.toISOString()}:null}},"toTrackRecordEntry",0,function(a){return{matchId:a.matchId,kickoffUtc:a.kickoffUtc.toISOString(),home:a.home,away:a.away,pHome:a.pHome,pDraw:a.pDraw,pAway:a.pAway,score:`${a.homeGoals}–${a.awayGoals}`,outcome:f[a.outcome],predictedOutcome:f[a.predictedOutcome],hit:a.outcome===a.predictedOutcome,rps:a.rps}}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_1vr-6xt._.js.map