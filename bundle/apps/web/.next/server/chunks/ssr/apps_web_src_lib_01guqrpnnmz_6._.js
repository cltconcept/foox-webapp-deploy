module.exports=[21400,a=>{"use strict";a.s(["V",0,100,"f",0,25,"R",0,function(a,b){return a>b?"home":a===b?"draw":"away"},"T",0,function(a){return Math.floor(100*(1-a)+.5)}])},27952,a=>{"use strict";var b=a.i(21592),c=a.i(21400);function d(a){if(!Number.isInteger(a))throw Error(`Constante de bar\xe8me non enti\xe8re : ${a}`);return b.B.raw(String(a))}a.s(["f",0,function(a=b.B`TRUE`){var e;return b.B`
    SELECT p.id AS pick_id, p.user_id, p.created_at, p.outcome::text AS outcome,
           p.p_at_pick, p.score_home, p.score_away, p.fox_score_home, p.fox_score_away,
           p.match_id, m.competition_id, m.kickoff_utc, m.home_club_id, m.away_club_id,
           r.home_goals, r.away_goals, e.actual_outcome,
           e.settled, e.potential,
           v.won_1x2, v.won_goals, v.won_exact,
           CASE WHEN e.settled THEN
             CASE WHEN v.won_1x2 THEN e.potential ELSE 0 END
             + CASE WHEN v.won_goals THEN ${d(c.f)} ELSE 0 END
             + CASE WHEN v.won_exact THEN ${d(c.V)} ELSE 0 END
           END AS points
    FROM picks p
    JOIN matches m ON m.id = p.match_id
    LEFT JOIN LATERAL (
      SELECT (f.payload->>'full_time_home_goals')::int AS home_goals,
             (f.payload->>'full_time_away_goals')::int AS away_goals
      FROM match_facts f
      WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
      ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    CROSS JOIN LATERAL (
      SELECT (r.home_goals IS NOT NULL AND r.away_goals IS NOT NULL) AS settled,
             (p.score_home IS NOT NULL AND p.score_away IS NOT NULL) AS has_score,
             CASE WHEN r.home_goals > r.away_goals THEN 'home'
                  WHEN r.home_goals = r.away_goals THEN 'draw'
                  WHEN r.home_goals < r.away_goals THEN 'away' END AS actual_outcome,
             ${e=b.B`p.p_at_pick`,b.B`floor(100::float8 * (1::float8 - (${e})::float8) + 0.5::float8)::int`} AS potential
    ) e
    CROSS JOIN LATERAL (
      SELECT CASE WHEN e.settled THEN p.outcome::text = e.actual_outcome END AS won_1x2,
             CASE WHEN e.settled AND e.has_score
                  THEN (p.score_home + p.score_away >= 3) = (r.home_goals + r.away_goals >= 3)
             END AS won_goals,
             CASE WHEN e.settled AND e.has_score
                  THEN p.score_home = r.home_goals AND p.score_away = r.away_goals
             END AS won_exact
    ) v
    WHERE ${a}
  `}])}];

//# sourceMappingURL=apps_web_src_lib_01guqrpnnmz_6._.js.map