module.exports=[37919,a=>{"use strict";a.s(["DefisFete",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call DefisFete() from the server but DefisFete is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/aujourdhui/defis-fete.tsx","DefisFete")},35987,a=>{"use strict";var b=a.i(37919);a.n(b)},16270,a=>{"use strict";a.s(["Mascotte",()=>b]);let b=(0,a.i(32558).registerClientReference)(function(){throw Error("Attempted to call Mascotte() from the server but Mascotte is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/apps/web/src/app/(app)/aujourdhui/mascotte.tsx","Mascotte")},22889,a=>{"use strict";var b=a.i(16270);a.n(b)},49133,a=>{"use strict";var b=a.i(59597),c=a.i(38045),d=a.i(48745),e=a.i(51715),f=a.i(74645),g=a.i(17755),h=a.i(35987),i=a.i(77195),j=a.i(22889);function k({f:a,competition:h}){let j=a.confidence===a.pHome?`${(0,d.tinyClubName)(a.home)} gagne`:a.confidence===a.pDraw?"match nul":`${(0,d.tinyClubName)(a.away)} gagne`;return(0,b.jsxs)(c.default,{href:`/analyses/${a.matchId}`,className:"carte-tap block rounded-2xl bg-surface border border-ligne p-4 space-y-3 anim-rise",children:[(0,b.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,b.jsxs)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2 font-black flex items-center gap-1.5 min-w-0",children:[h?(0,b.jsx)(f.Drapeau,{code:h.country,className:"w-5 h-3.5"}):null,(0,b.jsxs)("span",{className:"truncate",children:["à l'affiche",h?` \xb7 ${h.name}`:""]})]}),(0,b.jsxs)("span",{className:"flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 shrink-0",children:[(0,b.jsx)(i.IconeFoox,{nom:"sablier",className:"w-3 h-3"}),(0,b.jsx)("span",{className:"text-[10px] font-mono font-bold text-sourdine",children:(0,e.compteARebours)(new Date(a.kickoffUtc))})]})]}),(0,b.jsxs)("div",{className:"flex items-center gap-2",children:[(0,b.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-1.5 min-w-0",children:[(0,b.jsx)(g.Medaillon,{name:a.home,colors:a.homeColors,size:52}),(0,b.jsx)("p",{className:"text-xs text-encre font-semibold text-center leading-tight truncate w-full",children:(0,d.tinyClubName)(a.home)})]}),(0,b.jsxs)("div",{className:"shrink-0 text-center px-1 space-y-0.5",children:[(0,b.jsx)("p",{className:"text-3xl font-black font-mono text-encre leading-none",children:(0,e.pct)(a.confidence)}),(0,b.jsx)("p",{className:"text-[10px] text-sourdine leading-tight max-w-[96px]",children:j})]}),(0,b.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-1.5 min-w-0",children:[(0,b.jsx)(g.Medaillon,{name:a.away,colors:a.awayColors,size:52}),(0,b.jsx)("p",{className:"text-xs text-encre font-semibold text-center leading-tight truncate w-full",children:(0,d.tinyClubName)(a.away)})]})]}),(0,b.jsxs)("div",{className:"flex h-2 rounded-full overflow-hidden bg-surface-2",children:[(0,b.jsx)("span",{className:"bg-vert",style:{width:`${100*a.pHome}%`}}),(0,b.jsx)("span",{className:"bg-jaune",style:{width:`${100*a.pDraw}%`}}),(0,b.jsx)("span",{className:"bg-bleu",style:{width:`${100*a.pAway}%`}})]}),(0,b.jsxs)("div",{className:"flex items-center justify-between gap-3",children:[(0,b.jsxs)("p",{className:"text-[11px] text-sourdine-2 leading-snug flex-1 min-w-0",children:["Ça arrive ",(0,e.surDix)(a.confidence)," — rien n'est joué."]}),(0,b.jsx)("span",{className:"rounded-full bg-renard/15 text-renard text-[11px] font-black px-3 py-1 shrink-0",children:"Analyse →"})]})]})}a.s(["VueAccueil",0,function({vedette:a,competitionVedette:d,restants:e,defisDuJour:f,maCourse:g,repliques:l}){let m=f.every(a=>a.done);return(0,b.jsxs)("div",{className:"max-w-md mx-auto space-y-4 pt-1",children:[a?(0,b.jsx)(k,{f:a,competition:d}):null,(0,b.jsx)(c.default,{href:"/pronos",className:"btn-p text-center text-base py-4 anim-rise anim-rise-1",children:e>0?`Faire mes pronos (${e})`:"Revoir mes pronos"}),(0,b.jsx)("section",{className:"rounded-2xl bg-surface border border-ligne px-3.5 py-2.5 anim-rise anim-rise-2",children:(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-sourdine-2 font-black shrink-0",children:"Défis du jour"}),(0,b.jsx)(h.DefisFete,{complete:m}),(0,b.jsx)("div",{className:"flex items-center gap-1.5",children:f.map(d=>{let e="checkin"===d.id?"drapeau":"analysis"===d.id?"cible":"eclair",f="analysis"===d.id?a?`/analyses/${a.matchId}`:"/analyses":"/pronos",g=(0,b.jsx)("span",{className:`w-8 h-8 rounded-full flex items-center justify-center ${d.done?"bg-vert/15":"bg-surface-2"}`,children:d.done?(0,b.jsx)("span",{className:"text-vert font-black text-sm",children:"✓"}):(0,b.jsx)(i.IconeFoox,{nom:e,className:"w-4 h-4"})});return d.done||"checkin"===d.id?(0,b.jsx)("span",{title:d.label,children:g},d.id):(0,b.jsx)(c.default,{href:f,title:`${d.label} \xb7 +${d.xp} XP`,className:"active:scale-90 transition-transform",children:g},d.id)})}),m?(0,b.jsx)("p",{className:"ml-auto text-[10px] text-vert font-bold anim-pop shrink-0",children:"journée pleine ✓"}):(0,b.jsxs)("p",{className:"ml-auto text-[10px] text-sourdine-2 font-mono shrink-0",children:["+",f.filter(a=>!a.done).reduce((a,b)=>a+b.xp,0)," XP"]})]})}),(0,b.jsxs)(c.default,{href:"/ligues",className:"carte-tap flex items-center gap-2 rounded-2xl border-2 border-renard/40 bg-renard/8 px-3.5 py-3 anim-rise anim-rise-2",children:[(0,b.jsx)(i.IconeFoox,{nom:"drapeau",className:"w-4 h-4 shrink-0"}),(0,b.jsx)("p",{className:"text-[10px] uppercase tracking-wider text-renard font-black shrink-0",children:"course de la semaine"}),g?(0,b.jsxs)("p",{className:"ml-auto text-encre font-black text-sm text-right min-w-0 truncate",children:[g.rank,"ᵉ · ",g.points," pts",g.pending>0?(0,b.jsxs)("span",{className:"text-renard font-mono",children:[" +",g.pending]}):null]}):(0,b.jsx)("p",{className:"ml-auto text-[11px] text-sourdine text-right min-w-0 truncate",children:"1 prono pour entrer"}),(0,b.jsx)("span",{className:"text-renard font-black shrink-0",children:"→"})]}),(0,b.jsx)("section",{className:"anim-rise anim-rise-3",children:(0,b.jsx)(j.Mascotte,{lignes:l})})]})}])},91723,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963);a.i(43668);var f=a.i(88156),g=a.i(18145),h=a.i(34464),i=a.i(49567),j=a.i(81436),k=a.i(87217),l=a.i(51715),m=a.i(93221),n=a.i(71512),o=a.i(4689),p=a.i(49133),q=b([g,h,i,k,m,n,o]);async function r(){let a=await g.auth.api.getSession({headers:await (0,e.headers)()});a||(0,f.redirect)("/login");let b=a.user.id;await (0,h.recordDailyEvent)(b,"checkin");let[c,q,r,s,t,u,v,w]=await Promise.all([(0,n.upcomingFixtures)(),(0,i.myPicks)(b),(0,m.progression)(b),(0,i.standings)(),(0,i.myPickHistory)(b,40),(0,k.weeklyRace)(),(0,i.myFavoriteCompetitionIds)(b),(0,i.gameCompetitions)()]),x=u.find(a=>a.userId===b),y=c.map(o.toFixture).filter(a=>new Date(a.kickoffUtc).getTime()>Date.now()),z=(0,i.pickableFixtures)(y),A=z.filter(a=>!q.has(a.matchId)).length,B=a.user.name.split(" ")[0]??a.user.name,C=y.find(a=>v.has(a.competitionId))??y[0]??null,D=C?w.find(a=>a.id===C.competitionId)??null:null,E=s.find(a=>a.userId===b),F=t.filter(a=>!a.settled),G=F.reduce((a,b)=>a+b.potential,0),H=t.filter(a=>a.settled).slice(0,3),I=z[0]??null,J=r.level.next,K=(0,j.mascotLines)({firstName:B,remainingPicks:A,nextMatch:I?{home:I.home,away:I.away,when:(0,l.dansCombien)(new Date(I.kickoffUtc))}:null,challenges:r.weekChallenges.map(a=>({label:a.label,current:a.current,target:a.target,done:a.done,xp:a.xp})),weeklyStreak:r.weeklyStreak,weekRank:x?.rank??null,weekPending:x?.pending??0,generalRank:E?.rank??null,pendingPoints:G,pendingCount:F.length,lastVerdict:H[0]?{home:H[0].home,away:H[0].away,won:(H[0].points??0)>0,points:H[0].points??0}:null,levelName:r.level.name,nextLevel:J?{name:J.name,missingXp:J.minXp-r.xp}:null});return(0,d.jsx)(p.VueAccueil,{vedette:C,competitionVedette:D,restants:A,defisDuJour:r.dayChallenges,maCourse:x??null,repliques:K})}[g,h,i,k,m,n,o]=q.then?(await q)():q,a.s(["default",0,r,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),21518,function(a){a.n(a.i(91723))},21400,a=>{"use strict";a.s(["EXACT_BONUS",0,100,"GOALS_BONUS",0,25,"outcomeFromScore",0,function(a,b){return a>b?"home":a===b?"draw":"away"},"potentialPoints",0,function(a){return Math.round(100*(1-a))}])},49567,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(21400),h=a.i(31415),i=a.i(49232),j=b([h]);async function k(a){let b=await h.db.select({matchId:i.schema.picks.matchId,outcome:i.schema.picks.outcome,pAtPick:i.schema.picks.pAtPick,scoreHome:i.schema.picks.scoreHome,scoreAway:i.schema.picks.scoreAway}).from(i.schema.picks).where((0,e.eq)(i.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick,scoreHome:a.scoreHome,scoreAway:a.scoreAway}]))}async function l(a,b){return(await h.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.sh,e=a.sa,f=a.outcome,h=Number(a.p_at_pick),i=null===b||null===c?null:b>c?"home":b===c?"draw":"away",j=null!==i,k=j?i===f:null,l=j&&null!==d&&null!==e?d+e>=3==b+c>=3:null,m=j&&null!==d?d===b&&e===c:null,n=null===a.fox_p_home?null:[Number(a.fox_p_home),Number(a.fox_p_draw),Number(a.fox_p_away)],o=null===n?null:n.indexOf(Math.max(...n));return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:f,pAtPick:h,potential:(0,g.potentialPoints)(h),myScore:null===d?null:`${d}-${e}`,foxScore:null===a.fsh?null:`${a.fsh}-${a.fsa}`,foxOutcome:null===o?null:["home","draw","away"][o],foxP:null===n?null:n[o]??null,settled:j,won:k,won1x2:k,wonGoals:l,wonExact:m,points:j?(k?(0,g.potentialPoints)(h):0)+(l?g.GOALS_BONUS:0)+(m?g.EXACT_BONUS:0):null,score:null===b?null:`${b}–${c}`}})}[h]=j.then?(await j)():j,a.s(["PICK_LOCK_MINUTES",0,30,"gameCompetitions",0,m,"joinLeague",0,p,"myFavoriteCompetitionIds",0,n,"myLeagues",0,q,"myPickHistory",0,r,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l,"toggleFavoriteCompetition",0,o]),c()}catch(a){c(a)}},!1),81436,a=>{"use strict";let b=[{text:"60 %, ça veut dire que ça *rate 4 fois sur 10*. C'est normal, pas un bug.",pose:"analyse"},{text:"Moins une équipe a de chances, *plus elle te rapporte de points* si elle gagne.",pose:"clin_doeil"},{text:"Un pronostiqueur qui ne se trompe jamais, *ça n'existe pas*. Moi je rate, et je te le montre.",pose:"confiance"},{text:"Ici tu ne mises *pas un euro*. On compte des points, c'est tout.",pose:"clin_doeil"},{text:"Les pronos ferment *30 min avant le match* : comme ça, personne n'est avantagé.",pose:"analyse"}];a.s(["mascotLines",0,function(a){let c=[],d=a=>a>1?"s":"";a.remainingPicks>0?c.push({text:`${a.firstName}, *${a.remainingPicks} match${d(a.remainingPicks)}* de la semaine attend${a.remainingPicks>1?"ent":""} ton prono !`,pose:"analyse"}):c.push({text:`*La semaine est pronostiqu\xe9e*, ${a.firstName}. Je surveille les r\xe9sultats pour toi.`,pose:"clin_doeil"}),a.nextMatch&&c.push({text:`Prochain coup d'envoi *${a.nextMatch.when}* : ${a.nextMatch.home} — ${a.nextMatch.away}.`,pose:"analyse"});let e=a.challenges.filter(a=>!a.done),f=a.challenges.filter(a=>a.done);for(let b of(0===e.length&&a.challenges.length>0&&c.push({text:"Tes 3 défis de la semaine sont *finis*. Bravo.",pose:"confiance"}),e)){let a=b.target-b.current;c.push({text:b.current>0?`D\xe9fi \xab ${b.label} \xbb : ${b.current}/${b.target}. *Plus que ${a}* pour +${b.xp} XP.`:`Tu n'as pas encore commenc\xe9 le d\xe9fi \xab ${b.label} \xbb : *+${b.xp} XP \xe0 prendre*.`,pose:"analyse"})}for(let a of f)c.push({text:`D\xe9fi \xab ${a.label} \xbb r\xe9ussi : *+${a.xp} XP* dans la poche.`,pose:"confiance"});if(a.weeklyStreak>0?c.push({text:`*${a.weeklyStreak} semaine${d(a.weeklyStreak)} de s\xe9rie*. On ne l\xe2che rien.`,pose:"confiance"}):c.push({text:"Fais *1 prono* cette semaine et ta série repart.",pose:"clin_doeil"}),1===a.weekRank?c.push({text:"*Tu mènes la course* de la semaine. 👑",pose:"confiance"}):null!==a.weekRank?c.push({text:`Tu es *${a.weekRank}ᵉ cette semaine*${a.weekPending>0?`, et +${a.weekPending} pts arrivent`:""}.`,pose:"analyse"}):c.push({text:"Tu n'es pas encore dans la course. Fais *1 prono* et tu y es.",pose:"surprise"}),null!==a.generalRank&&c.push({text:`Tu es *${a.generalRank}ᵉ* au classement de la saison.`,pose:"analyse"}),a.pendingPoints>0&&c.push({text:`Tu as *+${a.pendingPoints} pts qui arrivent* : ${a.pendingCount} de tes matchs ne sont pas finis.`,pose:"analyse"}),a.lastVerdict){let b=a.lastVerdict;b.won&&b.points>=70?c.push({text:`*+${b.points} pts* sur ${b.home} — ${b.away} ! Voil\xe0 pourquoi on ose l'outsider.`,pose:"surprise"}):b.won?c.push({text:`Bien vu sur ${b.home} — ${b.away} : *+${b.points} pts*.`,pose:"confiance"}):c.push({text:`Rat\xe9 sur ${b.home} — ${b.away}. Des chances, *ce ne sont pas des certitudes*.`,pose:"analyse"})}return a.nextLevel?c.push({text:`Encore *${a.nextLevel.missingXp} XP* et tu passes ${a.nextLevel.name}.`,pose:"analyse"}):c.push({text:`Niveau ${a.levelName} : *il n'y a plus rien au-dessus*.`,pose:"confiance"}),[...c,...b]}])}];

//# sourceMappingURL=apps_web_src_1no5etx._.js.map