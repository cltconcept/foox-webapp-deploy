module.exports=[17755,a=>{"use strict";var b=a.i(59597);let c=new Set(["de","la","le","les","du","des","et","en","d","l"]);function d(a){let b=Number.parseInt(a.replace("#",""),16);return Number.isNaN(b)?.5:(.299*(b>>16&255)+.587*(b>>8&255)+.114*(255&b))/255}a.s(["Medaillon",0,function({name:a,colors:e,size:f=44}){let g,h=(g=a.replace(/\b([A-Z]\.)+/g,"").split(/[\s-]+/).filter(a=>a.length>0&&!c.has(a.toLowerCase()))).length>=2?g.slice(0,3).map(a=>a[0].toUpperCase()).join(""):(g[0]??a).slice(0,3).toUpperCase(),[i,j]=e?.length?[e[0],e[1]??e[0]]:[null,null],k=i&&j?(d(i)+d(j))/2:0,l=i?k>.62?"#101319":"#FFFFFF":"var(--color-encre, #E8EAF0)";return(0,b.jsxs)("svg",{width:f,height:f,viewBox:"0 0 44 44",role:"img","aria-label":a,className:"shrink-0",children:[i&&j?(0,b.jsxs)("g",{transform:"rotate(-18 22 22)",children:[(0,b.jsx)("path",{d:"M22 1 A21 21 0 0 0 22 43 Z",fill:i}),(0,b.jsx)("path",{d:"M22 1 A21 21 0 0 1 22 43 Z",fill:j})]}):(0,b.jsx)("circle",{cx:"22",cy:"22",r:"21",fill:"var(--color-surface-2, #1A1F2B)"}),(0,b.jsx)("circle",{cx:"22",cy:"22",r:"21",fill:"none",stroke:"var(--color-ligne, rgba(255,255,255,.12))",strokeWidth:"1.5"}),(0,b.jsx)("text",{x:"22",y:"22",textAnchor:"middle",dominantBaseline:"central",fontSize:h.length>=3?13:15,fontWeight:800,fill:l,stroke:i?k>.62?"rgba(255,255,255,.75)":"rgba(0,0,0,.45)":"none",strokeWidth:.6*!!i,paintOrder:"stroke",style:{fontFamily:"var(--font-mono, ui-monospace, monospace)",letterSpacing:"0.02em"},children:h})]})}])},37919,a=>{"use strict";a.s(["DefisFete",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call DefisFete() from the server but DefisFete is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/aujourdhui/defis-fete.tsx","DefisFete")},35987,a=>{"use strict";var b=a.i(37919);a.n(b)},16270,a=>{"use strict";a.s(["Mascotte",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call Mascotte() from the server but Mascotte is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/aujourdhui/mascotte.tsx","Mascotte")},22889,a=>{"use strict";var b=a.i(16270);a.n(b)},49133,a=>{"use strict";var b=a.i(59597),c=a.i(38045),d=a.i(48745),e=a.i(51715),f=a.i(74645),g=a.i(17755),h=a.i(35987),i=a.i(77195),j=a.i(22889);function k({f:a,competition:h}){let j=a.confidence===a.pHome?`${(0,d.tinyClubName)(a.home)} gagne`:a.confidence===a.pDraw?"match nul":`${(0,d.tinyClubName)(a.away)} gagne`;return(0,b.jsxs)(c.default,{href:`/analyses/${a.matchId}`,className:"carte-tap block rounded-2xl bg-surface border border-ligne p-4 space-y-3 anim-rise",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,b.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2 font-black flex items-center gap-1.5 min-w-0",children:[h?(0,b.jsx)(f.Drapeau,{code:h.country,className:"w-5 h-3.5"}):null,(0,b.jsxs)("span",{className:"truncate",children:["à l'affiche",h?` \xb7 ${h.name}`:""]})]}),(0,b.jsxs)("span",{className:"flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 shrink-0",children:[(0,b.jsx)(i.IconeFoox,{nom:"sablier",className:"w-3 h-3"}),(0,b.jsx)("span",{className:"text-[10px] font-mono font-bold text-sourdine",children:function(a){let b=Math.round((a.getTime()-Date.now())/36e5);if(b<1)return"imminent";if(b<24)return`${b} h`;let c=Math.round(b/24);return 1===c?"demain":`${c} j`}(new Date(a.kickoffUtc))})]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-1.5 min-w-0",children:[(0,b.jsx)(g.Medaillon,{name:a.home,colors:a.homeColors,size:52}),(0,b.jsx)("p",{className:"text-xs text-encre font-semibold text-center leading-tight truncate w-full",children:(0,d.tinyClubName)(a.home)})]}),(0,b.jsxs)("div",{className:"shrink-0 text-center px-1 space-y-0.5",children:[(0,b.jsx)("p",{className:"text-3xl font-black font-mono text-encre leading-none",children:(0,e.pct)(a.confidence)}),(0,b.jsx)("p",{className:"text-[10px] text-sourdine leading-tight max-w-[96px]",children:j})]}),(0,b.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-1.5 min-w-0",children:[(0,b.jsx)(g.Medaillon,{name:a.away,colors:a.awayColors,size:52}),(0,b.jsx)("p",{className:"text-xs text-encre font-semibold text-center leading-tight truncate w-full",children:(0,d.tinyClubName)(a.away)})]})]}),(0,b.jsxs)("div",{className:"flex h-2 rounded-full overflow-hidden bg-surface-2",children:[(0,b.jsx)("span",{className:"bg-vert",style:{width:`${100*a.pHome}%`}}),(0,b.jsx)("span",{className:"bg-jaune",style:{width:`${100*a.pDraw}%`}}),(0,b.jsx)("span",{className:"bg-bleu",style:{width:`${100*a.pAway}%`}})]}),(0,b.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,b.jsxs)("p",{className:"text-[11px] text-sourdine-2 leading-snug flex-1 min-w-0",children:["Ça arrive ",(0,e.surDix)(a.confidence)," — rien n'est joué."]}),(0,b.jsx)("span",{className:"rounded-full bg-renard/15 text-renard text-[11px] font-black px-3 py-1 shrink-0",children:"Analyse →"})]})]})}a.s(["VueAccueil",0,function({vedette:a,competitionVedette:d,restants:e,defisDuJour:f,maCourse:g,repliques:l}){let m=f.every(a=>a.done);return(0,b.jsxs)("div",{className:"max-w-md mx-auto space-y-4 pt-1",children:[a?(0,b.jsx)(k,{f:a,competition:d}):null,(0,b.jsx)(c.default,{href:"/pronos",className:"btn-p text-center text-base py-4 anim-rise anim-rise-1",children:e>0?`Faire mes pronos (${e})`:"Revoir mes pronos"}),(0,b.jsx)("section",{className:"rounded-2xl bg-surface border border-ligne px-3.5 py-2.5 anim-rise anim-rise-2",children:(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2 font-black shrink-0",children:"Défis du jour"}),(0,b.jsx)(h.DefisFete,{complete:m}),(0,b.jsx)("div",{className:"flex items-center gap-1.5",children:f.map(d=>{let e="checkin"===d.id?"drapeau":"analysis"===d.id?"cible":"eclair",f="analysis"===d.id?a?`/analyses/${a.matchId}`:"/analyses":"/pronos",g=(0,b.jsx)("span",{className:`w-8 h-8 rounded-full flex items-center justify-center ${d.done?"bg-vert/15":"bg-surface-2"}`,children:d.done?(0,b.jsx)("span",{className:"text-vert font-black text-sm",children:"✓"}):(0,b.jsx)(i.IconeFoox,{nom:e,className:"w-4 h-4"})});return d.done||"checkin"===d.id?(0,b.jsx)("span",{title:d.label,children:g},d.id):(0,b.jsx)(c.default,{href:f,title:`${d.label} \xb7 +${d.xp} XP`,className:"active:scale-90 transition-transform",children:g},d.id)})}),m?(0,b.jsx)("p",{className:"ml-auto text-[10px] text-vert font-bold anim-pop shrink-0",children:"journée pleine ✓"}):(0,b.jsxs)("p",{className:"ml-auto text-[10px] text-sourdine-2 font-mono shrink-0",children:["+",f.filter(a=>!a.done).reduce((a,b)=>a+b.xp,0)," XP"]})]})}),(0,b.jsxs)(c.default,{href:"/ligues",className:"carte-tap flex items-center gap-2 rounded-2xl border-2 border-renard/40 bg-renard/8 px-3.5 py-3 anim-rise anim-rise-2",children:[(0,b.jsx)(i.IconeFoox,{nom:"drapeau",className:"w-4 h-4 shrink-0"}),(0,b.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-renard font-black shrink-0",children:"course de la semaine"}),g?(0,b.jsxs)("p",{className:"ml-auto text-encre font-black text-sm text-right min-w-0 truncate",children:[g.rank,"ᵉ · ",g.points," pts",g.pending>0?(0,b.jsxs)("span",{className:"text-renard font-mono",children:[" +",g.pending]}):null]}):(0,b.jsx)("p",{className:"ml-auto text-[11px] text-sourdine text-right min-w-0 truncate",children:"1 prono pour entrer"}),(0,b.jsx)("span",{className:"text-renard font-black shrink-0",children:"→"})]}),(0,b.jsx)("section",{className:"anim-rise anim-rise-3",children:(0,b.jsx)(j.Mascotte,{lignes:l})})]})},"dansCombien",0,function(a){let b=Math.round((a.getTime()-Date.now())/36e5);if(b<1)return"imminent";if(b<24)return`dans ${b} h`;let c=Math.round(b/24);return 1===c?"demain":`dans ${c} jours`}])},91723,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963);a.i(43668);var f=a.i(88156),g=a.i(18145),h=a.i(34464),i=a.i(49567),j=a.i(81436),k=a.i(87217),l=a.i(93221),m=a.i(71512),n=a.i(4689),o=a.i(49133),p=b([g,h,i,k,l,m,n]);async function q(){let a=await g.auth.api.getSession({headers:await (0,e.headers)()});a||(0,f.redirect)("/login");let b=a.user.id;await (0,h.recordDailyEvent)(b,"checkin");let[c,p,q,r,s,t,u,v]=await Promise.all([(0,m.upcomingFixtures)(),(0,i.myPicks)(b),(0,l.progression)(b),(0,i.standings)(),(0,i.myPickHistory)(b,40),(0,k.weeklyRace)(),(0,i.myFavoriteCompetitionIds)(b),(0,i.gameCompetitions)()]),w=t.find(a=>a.userId===b),x=c.map(n.toFixture).filter(a=>new Date(a.kickoffUtc).getTime()>Date.now()),y=(0,i.pickableFixtures)(x),z=y.filter(a=>!p.has(a.matchId)).length,A=a.user.name.split(" ")[0]??a.user.name,B=x.find(a=>u.has(a.competitionId))??x[0]??null,C=B?v.find(a=>a.id===B.competitionId)??null:null,D=r.find(a=>a.userId===b),E=s.filter(a=>!a.settled),F=E.reduce((a,b)=>a+b.potential,0),G=s.filter(a=>a.settled).slice(0,3),H=y[0]??null,I=q.level.next,J=(0,j.mascotLines)({firstName:A,remainingPicks:z,nextMatch:H?{home:H.home,away:H.away,when:(0,o.dansCombien)(new Date(H.kickoffUtc))}:null,challenges:q.weekChallenges.map(a=>({label:a.label,current:a.current,target:a.target,done:a.done,xp:a.xp})),weeklyStreak:q.weeklyStreak,weekRank:w?.rank??null,weekPending:w?.pending??0,generalRank:D?.rank??null,pendingPoints:F,pendingCount:E.length,lastVerdict:G[0]?{home:G[0].home,away:G[0].away,won:(G[0].points??0)>0,points:G[0].points??0}:null,levelName:q.level.name,nextLevel:I?{name:I.name,missingXp:I.minXp-q.xp}:null});return(0,d.jsx)(o.VueAccueil,{vedette:B,competitionVedette:C,restants:z,defisDuJour:q.dayChallenges,maCourse:w??null,repliques:J})}[g,h,i,k,l,m,n]=p.then?(await p)():p,a.s(["default",0,q,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),21518,function(a){a.n(a.i(91723))},21400,a=>{"use strict";a.s(["EXACT_BONUS",0,100,"GOALS_BONUS",0,25,"outcomeFromScore",0,function(a,b){return a>b?"home":a===b?"draw":"away"},"potentialPoints",0,function(a){return Math.round(100*(1-a))}])},48745,a=>{"use strict";let b=/\b(FC|SC|AC|AS|AJ|SK|KV|KVC|KAA|KRC|RSC|RWDM|OGC|RC|SV|VV|CF|KSV|RFC|LOSC|ASSE)\b/gi;function c(a){let c=a.replace(/\b([A-Z]\.){2,}/g,"").replace(b,"").replace(/\s{2,}/g," ").trim();return c.length>=3?c:a}a.s(["shortClubName",0,c,"tinyClubName",0,function(a){return c(a).split(" ").filter(Boolean).slice(0,2).join(" ")||a}])},49567,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(21400),h=a.i(31415),i=a.i(49232),j=b([h]);async function k(a){let b=await h.db.select({matchId:i.schema.picks.matchId,outcome:i.schema.picks.outcome,pAtPick:i.schema.picks.pAtPick,scoreHome:i.schema.picks.scoreHome,scoreAway:i.schema.picks.scoreAway}).from(i.schema.picks).where((0,e.eq)(i.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick,scoreHome:a.scoreHome,scoreAway:a.scoreAway}]))}async function l(a,b){return(await h.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.sh,e=a.sa,f=a.outcome,h=Number(a.p_at_pick),i=null===b||null===c?null:b>c?"home":b===c?"draw":"away",j=null!==i,k=j?i===f:null,l=j&&null!==d&&null!==e?d+e>=3==b+c>=3:null,m=j&&null!==d?d===b&&e===c:null,n=null===a.fox_p_home?null:[Number(a.fox_p_home),Number(a.fox_p_draw),Number(a.fox_p_away)],o=null===n?null:n.indexOf(Math.max(...n));return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:f,pAtPick:h,potential:(0,g.potentialPoints)(h),myScore:null===d?null:`${d}-${e}`,foxScore:null===a.fsh?null:`${a.fsh}-${a.fsa}`,foxOutcome:null===o?null:["home","draw","away"][o],foxP:null===n?null:n[o]??null,settled:j,won:k,won1x2:k,wonGoals:l,wonExact:m,points:j?(k?(0,g.potentialPoints)(h):0)+(l?g.GOALS_BONUS:0)+(m?g.EXACT_BONUS:0):null,score:null===b?null:`${b}–${c}`}})}[h]=j.then?(await j)():j,a.s(["PICK_LOCK_MINUTES",0,30,"gameCompetitions",0,m,"joinLeague",0,p,"myFavoriteCompetitionIds",0,n,"myLeagues",0,q,"myPickHistory",0,r,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l,"toggleFavoriteCompetition",0,o]),c()}catch(a){c(a)}},!1),81436,a=>{"use strict";let b=[{text:"60 %, ça veut dire que ça *rate 4 fois sur 10*. C'est normal, pas un bug.",pose:"analyse"},{text:"Moins une équipe a de chances, *plus elle te rapporte de points* si elle gagne.",pose:"clin_doeil"},{text:"Un pronostiqueur qui ne se trompe jamais, *ça n'existe pas*. Moi je rate, et je te le montre.",pose:"confiance"},{text:"Ici tu ne mises *pas un euro*. On compte des points, c'est tout.",pose:"clin_doeil"},{text:"Les pronos ferment *30 min avant le match* : comme ça, personne n'est avantagé.",pose:"analyse"}];a.s(["mascotLines",0,function(a){let c=[],d=a=>a>1?"s":"";a.remainingPicks>0?c.push({text:`${a.firstName}, *${a.remainingPicks} match${d(a.remainingPicks)}* de la semaine attend${a.remainingPicks>1?"ent":""} ton prono !`,pose:"analyse"}):c.push({text:`*La semaine est pronostiqu\xe9e*, ${a.firstName}. Je surveille les r\xe9sultats pour toi.`,pose:"clin_doeil"}),a.nextMatch&&c.push({text:`Prochain coup d'envoi *${a.nextMatch.when}* : ${a.nextMatch.home} — ${a.nextMatch.away}.`,pose:"analyse"});let e=a.challenges.filter(a=>!a.done),f=a.challenges.filter(a=>a.done);for(let b of(0===e.length&&a.challenges.length>0&&c.push({text:"Tes 3 défis de la semaine sont *finis*. Bravo.",pose:"confiance"}),e)){let a=b.target-b.current;c.push({text:b.current>0?`D\xe9fi \xab ${b.label} \xbb : ${b.current}/${b.target}. *Plus que ${a}* pour +${b.xp} XP.`:`Tu n'as pas encore commenc\xe9 le d\xe9fi \xab ${b.label} \xbb : *+${b.xp} XP \xe0 prendre*.`,pose:"analyse"})}for(let a of f)c.push({text:`D\xe9fi \xab ${a.label} \xbb r\xe9ussi : *+${a.xp} XP* dans la poche.`,pose:"confiance"});if(a.weeklyStreak>0?c.push({text:`*${a.weeklyStreak} semaine${d(a.weeklyStreak)} de s\xe9rie*. On ne l\xe2che rien.`,pose:"confiance"}):c.push({text:"Fais *1 prono* cette semaine et ta série repart.",pose:"clin_doeil"}),1===a.weekRank?c.push({text:"*Tu mènes la course* de la semaine. 👑",pose:"confiance"}):null!==a.weekRank?c.push({text:`Tu es *${a.weekRank}ᵉ cette semaine*${a.weekPending>0?`, et +${a.weekPending} pts arrivent`:""}.`,pose:"analyse"}):c.push({text:"Tu n'es pas encore dans la course. Fais *1 prono* et tu y es.",pose:"surprise"}),null!==a.generalRank&&c.push({text:`Tu es *${a.generalRank}ᵉ* au classement de la saison.`,pose:"analyse"}),a.pendingPoints>0&&c.push({text:`Tu as *+${a.pendingPoints} pts qui arrivent* : ${a.pendingCount} de tes matchs ne sont pas finis.`,pose:"analyse"}),a.lastVerdict){let b=a.lastVerdict;b.won&&b.points>=70?c.push({text:`*+${b.points} pts* sur ${b.home} — ${b.away} ! Voil\xe0 pourquoi on ose l'outsider.`,pose:"surprise"}):b.won?c.push({text:`Bien vu sur ${b.home} — ${b.away} : *+${b.points} pts*.`,pose:"confiance"}):c.push({text:`Rat\xe9 sur ${b.home} — ${b.away}. Des chances, *ce ne sont pas des certitudes*.`,pose:"analyse"})}return a.nextLevel?c.push({text:`Encore *${a.nextLevel.missingXp} XP* et tu passes ${a.nextLevel.name}.`,pose:"analyse"}):c.push({text:`Niveau ${a.levelName} : *il n'y a plus rien au-dessus*.`,pose:"confiance"}),[...c,...b]}])},87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(81981),f=a.i(31415),g=b([e,f]);async function h(a,b){return(await f.db.execute(d.sql`
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
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),pending:Number(a.pending)}))}[e,f]=g.then?(await g)():g,a.s(["eloTrend",0,j,"headToHead",0,h,"recentForm",0,i,"weeklyRace",0,k]),c()}catch(a){c(a)}},!1),51715,a=>{"use strict";a.s(["pct",0,function(a){return`${Math.round(100*a)} %`},"pts",0,function(a){let b=Math.round(100*a);return 0===b?0===a?"0 pt":"moins d’1 pt":`${b>0?"+":"−"}${Math.abs(b)} pt${Math.abs(b)>1?"s":""}`},"surDix",0,function(a){let b=Math.round(10*a);return b<=0?"quasiment jamais":b>=10?"presque à tous les coups":`${b} fois sur 10`}])},71512,a=>a.a(async(b,c)=>{try{var d=a.i(54156),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);[g]=i.then?(await i)():i;let o=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}];async function j(){let a=await g.db.select({matchId:h.schema.fixtureInsights.matchId,kickoffUtc:h.schema.matches.kickoffUtc,competitionId:h.schema.matches.competitionId,homeClubId:h.schema.matches.homeClubId,awayClubId:h.schema.matches.awayClubId,pHome:h.schema.fixtureInsights.pHome,pDraw:h.schema.fixtureInsights.pDraw,pAway:h.schema.fixtureInsights.pAway,status:h.schema.fixtureInsights.status,blendBeta:h.schema.fixtureInsights.blendBeta,identified:h.schema.fixtureInsights.identified,formHome:h.schema.fixtureInsights.formHome,formAway:h.schema.fixtureInsights.formAway,weatherTempC:h.schema.fixtureInsights.weatherTempC,weatherPrecipMm:h.schema.fixtureInsights.weatherPrecipMm,weatherWindKmh:h.schema.fixtureInsights.weatherWindKmh,expGoals:h.schema.fixtureInsights.expGoals,over25:h.schema.fixtureInsights.over25,btts:h.schema.fixtureInsights.btts,score1:h.schema.fixtureInsights.score1,pScore1:h.schema.fixtureInsights.pScore1,score2:h.schema.fixtureInsights.score2,pScore2:h.schema.fixtureInsights.pScore2,score3:h.schema.fixtureInsights.score3,pScore3:h.schema.fixtureInsights.pScore3,pModelHome:h.schema.fixtureInsights.pModelHome,pModelDraw:h.schema.fixtureInsights.pModelDraw,pModelAway:h.schema.fixtureInsights.pModelAway,factors:h.schema.fixtureInsights.factors,predictionHash:h.schema.fixtureInsights.predictionHash,predictedAt:h.schema.fixtureInsights.predictedAt}).from(h.schema.fixtureInsights).innerJoin(h.schema.matches,(0,e.eq)(h.schema.matches.id,h.schema.fixtureInsights.matchId)).orderBy((0,d.asc)(h.schema.matches.kickoffUtc),(0,d.asc)(h.schema.matches.id)),b=await k([...new Set(a.flatMap(a=>[a.homeClubId,a.awayClubId]))]);return a.map(a=>({...a,home:b.get(a.homeClubId)?.name??`club ${a.homeClubId}`,away:b.get(a.awayClubId)?.name??`club ${a.awayClubId}`,homeColors:b.get(a.homeClubId)?.colors??null,awayColors:b.get(a.awayClubId)?.colors??null}))}async function k(a){if(0===a.length)return new Map;let b=await g.db.select({id:h.schema.clubs.id,name:h.schema.clubs.canonicalName,colors:h.schema.clubs.colors}).from(h.schema.clubs).where((0,e.inArray)(h.schema.clubs.id,a));return new Map(b.map(a=>[a.id,{name:a.name,colors:a.colors}]))}async function l(a){if(0===a.length)return new Map;let b=await g.db.execute(f.sql`
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

//# sourceMappingURL=apps_web_src_1n_7ew7._.js.map