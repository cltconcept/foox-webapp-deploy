module.exports=[4579,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963),f=a.i(38045);a.i(43668);var g=a.i(88156),h=a.i(18145),i=a.i(49567),j=b([h,i]);async function k({params:a}){let b=await h.auth.api.getSession({headers:await (0,e.headers)()});b||(0,g.redirect)("/login");let{code:c}=await a,j=await (0,i.joinLeague)(b.user.id,c);return(0,d.jsxs)("div",{className:"max-w-md mx-auto text-center py-10 space-y-5 anim-rise",children:[(0,d.jsx)("img",{src:j?"/assets/mascotte/confiance.webp":"/assets/mascotte/surprise.webp",alt:"La mascotte Foox",className:"w-36 mx-auto"}),j?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{className:"text-encre text-2xl font-black",children:["Bienvenue dans « ",j.name," » !"]}),(0,d.jsx)("p",{className:"text-sm text-sourdine",children:"Tu es dans le groupe. Chaque prono compte pour ton classement entre amis — et la course de la semaine repart à zéro chaque lundi."}),(0,d.jsxs)("div",{className:"space-y-3 pt-2 max-w-xs mx-auto",children:[(0,d.jsx)(f.default,{href:"/pronos",className:"btn-p text-center py-3.5",children:"Faire mes pronos"}),(0,d.jsx)(f.default,{href:"/ligues",className:"btn-s text-center py-3.5",children:"Voir le classement"})]})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"text-encre text-2xl font-black",children:"Lien d'invitation invalide"}),(0,d.jsx)("p",{className:"text-sm text-sourdine",children:"Ce code ne correspond à aucun groupe. Demande à ton ami de te renvoyer son lien d'invitation depuis sa page Ligues."}),(0,d.jsx)(f.default,{href:"/ligues",className:"btn-s inline-block text-center py-3.5 px-8",children:"Voir le classement"})]})]})}[h,i]=j.then?(await j)():j,a.s(["default",0,k,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),17481,function(a){a.n(a.i(4579))},21400,a=>{"use strict";a.s(["EXACT_BONUS",0,100,"GOALS_BONUS",0,25,"outcomeFromScore",0,function(a,b){return a>b?"home":a===b?"draw":"away"},"potentialPoints",0,function(a){return Math.round(100*(1-a))}])},49567,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(21400),h=a.i(31415),i=a.i(49232),j=b([h]);async function k(a){let b=await h.db.select({matchId:i.schema.picks.matchId,outcome:i.schema.picks.outcome,pAtPick:i.schema.picks.pAtPick,scoreHome:i.schema.picks.scoreHome,scoreAway:i.schema.picks.scoreAway}).from(i.schema.picks).where((0,e.eq)(i.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick,scoreHome:a.scoreHome,scoreAway:a.scoreAway}]))}async function l(a,b){return(await h.db.execute(f.sql`
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
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.sh,e=a.sa,f=a.outcome,h=Number(a.p_at_pick),i=null===b||null===c?null:b>c?"home":b===c?"draw":"away",j=null!==i,k=j?i===f:null,l=j&&null!==d&&null!==e?d+e>=3==b+c>=3:null,m=j&&null!==d?d===b&&e===c:null,n=null===a.fox_p_home?null:[Number(a.fox_p_home),Number(a.fox_p_draw),Number(a.fox_p_away)],o=null===n?null:n.indexOf(Math.max(...n));return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:f,pAtPick:h,potential:(0,g.potentialPoints)(h),myScore:null===d?null:`${d}-${e}`,foxScore:null===a.fsh?null:`${a.fsh}-${a.fsa}`,foxOutcome:null===o?null:["home","draw","away"][o],foxP:null===n?null:n[o]??null,settled:j,won:k,won1x2:k,wonGoals:l,wonExact:m,points:j?(k?(0,g.potentialPoints)(h):0)+(l?g.GOALS_BONUS:0)+(m?g.EXACT_BONUS:0):null,score:null===b?null:`${b}–${c}`}})}[h]=j.then?(await j)():j,a.s(["PICK_LOCK_MINUTES",0,30,"gameCompetitions",0,m,"joinLeague",0,p,"myFavoriteCompetitionIds",0,n,"myLeagues",0,q,"myPickHistory",0,r,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l,"toggleFavoriteCompetition",0,o]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_1johvki._.js.map