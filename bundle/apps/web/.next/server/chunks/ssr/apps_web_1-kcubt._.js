module.exports=[95321,a=>a.a(async(b,c)=>{try{var d=a.i(60734),e=b([d]);[d]=e.then?(await e)():e,a.s([]),c()}catch(a){c(a)}},!1),59161,a=>a.a(async(b,c)=>{try{var d=a.i(95321),e=a.i(60734),f=b([d,e]);[d,e]=f.then?(await f)():f,a.s(["405f47088144d68e1d5ef1bae48390c537b0001a2e",()=>e.basculerFavori]),c()}catch(a){c(a)}},!1),90157,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(31415),h=a.i(49232),i=b([g]);function j(a){return Math.round(100*(1-a))}async function k(a){let b=await g.db.select({matchId:h.schema.picks.matchId,outcome:h.schema.picks.outcome,pAtPick:h.schema.picks.pAtPick}).from(h.schema.picks).where((0,e.eq)(h.schema.picks.userId,a));return new Map(b.map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick}]))}async function l(a,b){return(await g.db.execute(f.sql`
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
                ELSE 'away' END) AS gagne
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
             sum(CASE WHEN gagne THEN round(100 * (1 - p_at_pick)) ELSE 0 END)::int AS points,
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
  `)).rows.map((a,b)=>({rank:b+1,userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function m(){return(await g.db.execute(f.sql`
    SELECT DISTINCT co.id, co.name, co.country
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN competitions co ON co.id = m.competition_id
    ORDER BY co.name
  `)).rows.map(a=>({id:Number(a.id),name:a.name,country:String(a.country).trim()}))}async function n(a){let b=await g.db.select({competitionId:h.schema.userCompetitionFavorites.competitionId}).from(h.schema.userCompetitionFavorites).where((0,e.eq)(h.schema.userCompetitionFavorites.userId,a));return new Set(b.map(a=>a.competitionId))}async function o(a,b){let c=await g.db.delete(h.schema.userCompetitionFavorites).where((0,e.and)((0,e.eq)(h.schema.userCompetitionFavorites.userId,a),(0,e.eq)(h.schema.userCompetitionFavorites.competitionId,b))).returning({id:h.schema.userCompetitionFavorites.id});0===c.length&&await g.db.insert(h.schema.userCompetitionFavorites).values({id:(0,d.randomUUID)(),userId:a,competitionId:b}).onConflictDoNothing()}async function p(a,b){let[c]=await g.db.select({id:h.schema.leagues.id,name:h.schema.leagues.name}).from(h.schema.leagues).where((0,e.eq)(h.schema.leagues.code,b.toUpperCase().trim())).limit(1);return c?(await g.db.insert(h.schema.leagueMembers).values({id:(0,d.randomUUID)(),leagueId:c.id,userId:a}).onConflictDoNothing(),c):null}async function q(a){let b=await g.db.select({id:h.schema.leagues.id,name:h.schema.leagues.name,code:h.schema.leagues.code,ownerId:h.schema.leagues.ownerId}).from(h.schema.leagueMembers).innerJoin(h.schema.leagues,(0,e.eq)(h.schema.leagues.id,h.schema.leagueMembers.leagueId)).where((0,e.eq)(h.schema.leagueMembers.userId,a));return Promise.all(b.map(async a=>({...a,standings:await l(a.id)})))}async function r(a,b=60){return(await g.db.execute(f.sql`
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
    WHERE p.user_id = ${a} AND p.combo_id IS NULL
    ORDER BY m.kickoff_utc DESC
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.outcome,e=Number(a.p_at_pick),f=null===b||null===c?null:b>c?"home":b===c?"draw":"away";return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,outcome:d,pAtPick:e,potential:j(e),settled:null!==f,won:null===f?null:f===d,points:null===f?null:f===d?j(e):0,score:null===b?null:`${b}–${c}`}})}[g]=i.then?(await i)():i,a.s(["PICK_LOCK_MINUTES",0,30,"gameCompetitions",0,m,"joinLeague",0,p,"myFavoriteCompetitionIds",0,n,"myLeagues",0,q,"myPickHistory",0,r,"myPicks",0,k,"pickableFixtures",0,function(a,b=Date.now()){let c=b+6048e5;return a.filter(a=>{let d=new Date(a.kickoffUtc).getTime();return d-18e5>b&&d<=c})},"standings",0,l,"toggleFavoriteCompetition",0,o]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_1-kcubt._.js.map