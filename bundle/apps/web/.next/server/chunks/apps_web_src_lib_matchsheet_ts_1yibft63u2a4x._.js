module.exports=[54136,e=>e.a(async(a,n)=>{try{var t=e.i(74535),u=e.i(12145),r=e.i(68781),i=e.i(66908),o=e.i(30899),c=a([u,r]);async function m(e,a){return(await u.f.execute(t.B`
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
      AND ((m.home_club_id = ${e} AND m.away_club_id = ${a})
        OR (m.home_club_id = ${a} AND m.away_club_id = ${e}))
    ORDER BY m.kickoff_utc DESC
    LIMIT 5
  `)).rows.map(e=>({kickoffUtc:new Date(e.kickoff_utc),home:e.home,away:e.away,homeGoals:Number(e.hg),awayGoals:Number(e.ag)}))}async function s(e){return(await u.f.execute(t.B`
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
      AND (m.home_club_id = ${e} OR m.away_club_id = ${e})
    ORDER BY m.kickoff_utc DESC
    LIMIT 5
  `)).rows.map(a=>{let n=Number(a.home_club_id)===e,t=Number(n?a.hg:a.ag),u=Number(n?a.ag:a.hg);return{kickoffUtc:new Date(a.kickoff_utc),opponent:n?a.away:a.home,score:`${a.hg}–${a.ag}`,result:t>u?"V":t===u?"N":"D",home:n}})}async function l(e){return(await u.f.execute(t.B`
    SELECT rating::float8 AS rating, valid_from
    FROM elo_ratings
    WHERE club_id = ${e} AND method_version = 'elo-ha-v1'
    ORDER BY valid_from DESC
    LIMIT 12
  `)).rows.map(e=>({rating:Number(e.rating),from:new Date(e.valid_from)})).reverse()}async function _(e){var a;return(await u.f.execute((a=e,t.B`
    SELECT * FROM (${d(a)}) course
    WHERE course.rank <= ${30}
    ORDER BY course.rank
  `))).rows.map(E)}function d(e){let a=t.B`${(0,o.u)(t.B`m.kickoff_utc`)} = ${e}`;return t.B`
    WITH juge AS (${(0,i.f)(a)}),
    solo AS (
      SELECT user_id,
             coalesce(sum(points), 0)::int AS points,
             coalesce(sum(potential) FILTER (WHERE NOT settled), 0)::int AS pending
      FROM juge GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar, s.points, s.pending,
           row_number() OVER (ORDER BY s.points DESC, s.pending DESC, u.name, u.id)::int AS rank
    FROM auth_user u
    JOIN solo s ON s.user_id = u.id
  `}function E(e){return{rank:Number(e.rank),userId:e.user_id,name:e.name,avatar:e.avatar,points:Number(e.points),pending:Number(e.pending)}}async function f(e,a=new Date){let n=(await u.f.execute(t.B`
    SELECT general.rank AS general_rank,
           course.rank AS week_rank, course.points AS week_points, course.pending AS week_pending
    FROM (SELECT 1) AS une_ligne
    LEFT JOIN (${(0,r.I)()}) general ON general.user_id = ${e}
    LEFT JOIN (${d((0,o.h)(a))}) course
      ON course.user_id = ${e}
  `)).rows[0];return{generalRank:n?.general_rank==null?null:Number(n.general_rank),week:n?.week_rank==null?null:{rank:Number(n.week_rank),points:Number(n.week_points),pending:Number(n.week_pending)}}}async function k(e,a){let n=(await u.f.execute(t.B`
    SELECT * FROM (${d(a)}) course
    WHERE course.user_id = ${e}
  `)).rows[0];return n?E(n):null}[u,r]=c.then?(await c)():c,e.s(["W",0,l,"I",0,m,"j",0,f,"E",0,k,"c",0,s,"k",0,_]),n()}catch(e){n(e)}},!1)];

//# sourceMappingURL=apps_web_src_lib_matchsheet_ts_1yibft63u2a4x._.js.map