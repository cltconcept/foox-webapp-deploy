module.exports=[87217,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(31415),f=a.i(49567),g=a.i(27952),h=a.i(60914),i=b([e,f]);async function j(a,b){return(await e.f.execute(d.B`
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
  `)).rows.map(a=>({kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,homeGoals:Number(a.hg),awayGoals:Number(a.ag)}))}async function k(a){return(await e.f.execute(d.B`
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
  `)).rows.map(b=>{let c=Number(b.home_club_id)===a,d=Number(c?b.hg:b.ag),e=Number(c?b.ag:b.hg);return{kickoffUtc:new Date(b.kickoff_utc),opponent:c?b.away:b.home,score:`${b.hg}–${b.ag}`,result:d>e?"V":d===e?"N":"D",home:c}})}async function l(a){return(await e.f.execute(d.B`
    SELECT rating::float8 AS rating, valid_from
    FROM elo_ratings
    WHERE club_id = ${a} AND method_version = 'elo-ha-v1'
    ORDER BY valid_from DESC
    LIMIT 12
  `)).rows.map(a=>({rating:Number(a.rating),from:new Date(a.valid_from)})).reverse()}async function m(a=new Date){return(await e.f.execute(n((0,h.h)(a)))).rows.map(a=>({rank:Number(a.rank),userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),pending:Number(a.pending)}))}function n(a){let b=d.B`${(0,h.u)(d.B`m.kickoff_utc`)} = ${a}`;return d.B`
    WITH juge AS (${(0,g.f)(b)}),
    solo AS (
      SELECT user_id,
             coalesce(sum(points), 0)::int AS points,
             coalesce(sum(potential) FILTER (WHERE NOT settled), 0)::int AS pending
      FROM juge GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar, s.points, s.pending,
           row_number() OVER (ORDER BY s.points DESC, s.pending DESC, u.name)::int AS rank
    FROM auth_user u
    JOIN solo s ON s.user_id = u.id
    ORDER BY rank
    LIMIT 30
  `}async function o(a,b=new Date){let c=(await e.f.execute(d.B`
    SELECT general.rank AS general_rank,
           course.rank AS week_rank, course.points AS week_points, course.pending AS week_pending
    FROM (SELECT 1) AS une_ligne
    LEFT JOIN (${(0,f.f)()}) general ON general.user_id = ${a}
    LEFT JOIN (${n((0,h.h)(b))}) course ON course.user_id = ${a}
  `)).rows[0];return{generalRank:c?.general_rank==null?null:Number(c.general_rank),week:c?.week_rank==null?null:{rank:Number(c.week_rank),points:Number(c.week_points),pending:Number(c.week_pending)}}}[e,f]=i.then?(await i)():i,a.s(["W",0,l,"I",0,j,"j",0,o,"c",0,k,"i",0,m]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_lib_matchsheet_ts_1hxyhr_28h8q-._.js.map