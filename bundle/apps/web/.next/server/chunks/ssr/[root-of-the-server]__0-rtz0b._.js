module.exports=[54799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},22734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},66680,(a,b,c)=>{b.exports=a.x("node:crypto",()=>require("node:crypto"))},50227,(a,b,c)=>{b.exports=a.x("node:path",()=>require("node:path"))},46786,(a,b,c)=>{b.exports=a.x("os",()=>require("os"))},37296,a=>a.a(async(b,c)=>{try{var d=await a.y("pg-71df57fbe79e18ab");a.n(d),c()}catch(a){c(a)}},!0),74645,a=>{"use strict";var b=a.i(59597);function c({couleurs:a,sens:d}){let e=("v"===d?30:20)/a.length;return(0,b.jsx)(b.Fragment,{children:a.map((a,c)=>(0,b.jsx)("rect",{x:"v"===d?c*e:0,y:"h"===d?c*e:0,width:"v"===d?e:30,height:"h"===d?e:20,fill:a},`${a}-${c}`))})}let d=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#003399"}),Array.from({length:12},(a,c)=>{var d,e;let f=c*Math.PI/6;return(0,b.jsx)("polygon",{points:(d=15+6*Math.sin(f),e=10-6*Math.cos(f),Array.from({length:10},(a,b)=>{let c=b%2==0?1.1:.4*1.1,f=-Math.PI/2+b*Math.PI/5;return`${(d+c*Math.cos(f)).toFixed(2)},${(e+c*Math.sin(f)).toFixed(2)}`}).join(" ")),fill:"#FFCC00"},c)})]}),e={BEL:(0,b.jsx)(c,{sens:"v",couleurs:["#000000","#FDDA24","#EF3340"]}),FRA:(0,b.jsx)(c,{sens:"v",couleurs:["#002395","#FFFFFF","#ED2939"]}),ITA:(0,b.jsx)(c,{sens:"v",couleurs:["#009246","#FFFFFF","#CE2B37"]}),DEU:(0,b.jsx)(c,{sens:"h",couleurs:["#000000","#DD0000","#FFCE00"]}),NLD:(0,b.jsx)(c,{sens:"h",couleurs:["#AE1C28","#FFFFFF","#21468B"]}),ENG:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#FFFFFF"}),(0,b.jsx)("rect",{x:"12.5",width:"5",height:"20",fill:"#CE1124"}),(0,b.jsx)("rect",{y:"7.5",width:"30",height:"5",fill:"#CE1124"})]}),SCO:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#005EB8"}),(0,b.jsx)("path",{d:"M0 0 L30 20 M30 0 L0 20",stroke:"#FFFFFF",strokeWidth:"4"})]}),ESP:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#AA151B"}),(0,b.jsx)("rect",{y:"5",width:"30",height:"10",fill:"#F1BF00"})]}),PRT:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"12",height:"20",fill:"#046A38"}),(0,b.jsx)("rect",{x:"12",width:"18",height:"20",fill:"#DA291C"})]}),TUR:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("rect",{width:"30",height:"20",fill:"#E30A17"}),(0,b.jsx)("circle",{cx:"11",cy:"10",r:"5",fill:"#FFFFFF"}),(0,b.jsx)("circle",{cx:"12.4",cy:"10",r:"4",fill:"#E30A17"}),(0,b.jsx)("path",{d:"M18.8 10 L15.6 8.9 L17.6 11.6 L17.6 8.4 L15.6 11.1 Z",fill:"#FFFFFF"})]}),EUR:d};a.s(["Drapeau",0,function({code:a,className:c="w-9 h-6"}){let d=e[a];return(0,b.jsx)("svg",{viewBox:"0 0 30 20",className:`${c} rounded-[3px] ring-1 ring-ligne shrink-0`,role:"img","aria-label":a,preserveAspectRatio:"xMidYMid slice",children:d??(0,b.jsx)("rect",{width:"30",height:"20",fill:"var(--color-surface-2, #1A1F2B)"})})}])},21400,a=>{"use strict";a.s(["EXACT_BONUS",0,100,"GOALS_BONUS",0,25,"outcomeFromScore",0,function(a,b){return a>b?"home":a===b?"draw":"away"},"potentialPoints",0,function(a){return Math.round(100*(1-a))}])},49567,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(21400),h=a.i(31415),i=a.i(49232),j=a.i(74592),k=b([h]);async function l(a){let b=await h.db.select({matchId:i.schema.picks.matchId,outcome:i.schema.picks.outcome,pAtPick:i.schema.picks.pAtPick,scoreHome:i.schema.picks.scoreHome,scoreAway:i.schema.picks.scoreAway}).from(i.schema.picks).where((0,e.eq)(i.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick,scoreHome:a.scoreHome,scoreAway:a.scoreAway}]))}async function m(a,b){return(await h.db.execute(f.sql`
    -- Le barème reste entièrement dérivé : rien n est stocké, rien ne peut se
    -- désynchroniser. (Les combos ont été SUPPRIMÉS le 2026-08-19, décision
    -- Christopher — les pronos qui en venaient comptent comme des simples.)
    WITH juge AS (
      SELECT p.user_id, p.p_at_pick,
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
      FROM juge GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar,
           s.points, s.regles AS settled, s.total AS total_picks
    FROM auth_user u
    JOIN solo s ON s.user_id = u.id
    WHERE s.total > 0
    ORDER BY points DESC, settled DESC, u.name
    LIMIT 50
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function n(){return(await h.db.execute(f.sql`
    SELECT DISTINCT co.id, co.name, co.country, co.tier
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN competitions co ON co.id = m.competition_id
    ORDER BY co.name
  `)).rows.map(a=>({id:Number(a.id),name:a.name,country:String(a.country).trim(),tier:String(a.tier)}))}async function o(a){let b=await h.db.select({competitionId:i.schema.userCompetitionFavorites.competitionId}).from(i.schema.userCompetitionFavorites).where((0,e.eq)(i.schema.userCompetitionFavorites.userId,a));return new Set(b.map(a=>a.competitionId))}async function p(a){return(await h.db.select({name:i.schema.clubs.canonicalName,colors:i.schema.clubs.colors,country:i.schema.clubs.country}).from(i.schema.clubs).where((0,e.eq)(i.schema.clubs.id,a)))[0]??null}async function q(a){return(await h.db.select({onboardedAt:i.schema.user.onboardedAt,favoriteClubId:i.schema.user.favoriteClubId}).from(i.schema.user).where((0,e.eq)(i.schema.user.id,a)))[0]??{onboardedAt:null,favoriteClubId:null}}async function r(){return(await h.db.execute(f.sql`
    SELECT DISTINCT m.competition_id, cl.id AS club_id, cl.canonical_name, cl.colors
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN clubs cl ON cl.id IN (m.home_club_id, m.away_club_id)
    ORDER BY cl.canonical_name
  `)).rows.map(a=>({competitionId:Number(a.competition_id),clubId:Number(a.club_id),name:a.canonical_name,colors:a.colors??null}))}async function s(a,b,c){b.length>0&&await h.db.insert(i.schema.userCompetitionFavorites).values(b.map(b=>({id:(0,d.randomUUID)(),userId:a,competitionId:b}))).onConflictDoNothing(),await h.db.update(i.schema.user).set({favoriteClubId:c,onboardedAt:new Date}).where((0,e.eq)(i.schema.user.id,a))}async function t(a,b){let c=await h.db.delete(i.schema.userCompetitionFavorites).where((0,e.and)((0,e.eq)(i.schema.userCompetitionFavorites.userId,a),(0,e.eq)(i.schema.userCompetitionFavorites.competitionId,b))).returning({id:i.schema.userCompetitionFavorites.id});0===c.length&&await h.db.insert(i.schema.userCompetitionFavorites).values({id:(0,d.randomUUID)(),userId:a,competitionId:b}).onConflictDoNothing()}async function u(a,b){let[c]=await h.db.select({id:i.schema.leagues.id,name:i.schema.leagues.name}).from(i.schema.leagues).where((0,e.eq)(i.schema.leagues.code,b.toUpperCase().trim())).limit(1);return c?(await h.db.insert(i.schema.leagueMembers).values({id:(0,d.randomUUID)(),leagueId:c.id,userId:a}).onConflictDoNothing(),c):null}async function v(a){let b=await h.db.select({id:i.schema.leagues.id,name:i.schema.leagues.name,code:i.schema.leagues.code,ownerId:i.schema.leagues.ownerId}).from(i.schema.leagueMembers).innerJoin(i.schema.leagues,(0,e.eq)(i.schema.leagues.id,i.schema.leagueMembers.leagueId)).where((0,e.eq)(i.schema.leagueMembers.userId,a));return Promise.all(b.map(async a=>({...a,standings:await m(a.id)})))}async function w(a,b=60){return(await h.db.execute(f.sql`
    SELECT p.match_id, p.outcome::text AS outcome, p.p_at_pick, m.kickoff_utc,
           p.score_home AS sh, p.score_away AS sa,
           p.fox_score_home AS fsh, p.fox_score_away AS fsa,
           dom.canonical_name AS home, ext.canonical_name AS away,
           dom.colors AS home_colors, ext.colors AS away_colors,
           co.country AS country,
           (r.payload->>'full_time_home_goals')::int AS hg,
           (r.payload->>'full_time_away_goals')::int AS ag,
           fox.p_home AS fox_p_home, fox.p_draw AS fox_p_draw, fox.p_away AS fox_p_away,
           fi.preferred_outcome::text AS fox_pref, fi.temperament::text AS fox_sentiment
    FROM picks p
    JOIN matches m ON m.id = p.match_id
    JOIN competitions co ON co.id = m.competition_id
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
    -- La lecture PUBLIÉE du renard (préférence + sentiment) : c est elle que
    -- montre la fiche, pas l argmax brut des probabilités.
    LEFT JOIN LATERAL (
        SELECT i.preferred_outcome, i.temperament
        FROM fixture_insights i
        WHERE i.match_id = p.match_id
        ORDER BY i.computed_at DESC LIMIT 1
    ) fi ON TRUE
    WHERE p.user_id = ${a}
    ORDER BY m.kickoff_utc DESC
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.sh,e=a.sa,f=a.outcome,h=Number(a.p_at_pick),i=null===b||null===c?null:b>c?"home":b===c?"draw":"away",k=null!==i,l=k?i===f:null,m=k&&null!==d&&null!==e?d+e>=3==b+c>=3:null,n=k&&null!==d?d===b&&e===c:null,o=null===a.fox_p_home?null:[Number(a.fox_p_home),Number(a.fox_p_draw),Number(a.fox_p_away)],p=null===o?null:o.indexOf(Math.max(...o));return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,homeColors:a.home_colors??null,awayColors:a.away_colors??null,country:a.country,outcome:f,pAtPick:h,potential:(0,g.potentialPoints)(h),myScore:null===d?null:`${d}-${e}`,foxScore:null===a.fsh?null:`${a.fsh}-${a.fsa}`,foxOutcome:null===p?null:["home","draw","away"][p],foxP:null===o?null:o[p]??null,foxPreferred:(0,j.outcomeFromLetter)(a.fox_pref)??(null===o?null:["home","draw","away"][(0,j.issuePreferee)({pHome:o[0],pDraw:o[1],pAway:o[2]})]),foxSentiment:a.fox_sentiment??(null===o?null:(0,j.sentimentRenard)({pHome:o[0],pDraw:o[1],pAway:o[2]})),settled:k,realOutcome:i,won:l,won1x2:l,wonGoals:m,wonExact:n,points:k?(l?(0,g.potentialPoints)(h):0)+(m?g.GOALS_BONUS:0)+(n?g.EXACT_BONUS:0):null,score:null===b?null:`${b}–${c}`}})}[h]=k.then?(await k)():k,a.s(["PICK_LOCK_MINUTES",0,30,"clubCard",0,p,"clubsByCompetition",0,r,"completeOnboarding",0,s,"gameCompetitions",0,n,"joinLeague",0,u,"myFavoriteCompetitionIds",0,o,"myLeagues",0,v,"myOnboarding",0,q,"myPickHistory",0,w,"myPicks",0,l,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,m,"toggleFavoriteCompetition",0,t]),c()}catch(a){c(a)}},!1),74592,a=>{"use strict";let b=[.434,.251,.315];function c(a){let c=[a.pHome,a.pDraw,a.pAway],d=[a.pHome/b[0],a.pDraw/b[1],a.pAway/b[2]],e=0;return d[1]>d[0]&&(e=1),d[2]>d[e]&&(e=2),1===e&&a.pDraw<.3&&(c[1]>c[e=0]&&(e=1),c[2]>c[e]&&(e=2)),e}a.s(["BASE_RATES",0,b,"DRAW_ELITE_FLOOR",0,.3,"TEMPERAMENT_FR",0,{fearful:"Peureux",cautious:"Prudent",confident:"Confiant"},"issuePreferee",0,c,"outcomeFromLetter",0,function(a){return"H"===a?"home":"D"===a?"draw":"A"===a?"away":null},"sentimentRenard",0,function(a){let b=[a.pHome,a.pDraw,a.pAway],d=c(a),e=Math.max(...b.filter((a,b)=>b!==d));return b[d]>=.55?"confident":b[d]-e<.08?"fearful":"cautious"}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-rtz0b._.js.map