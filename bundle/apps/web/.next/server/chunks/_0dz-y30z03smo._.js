module.exports=[67726,e=>{"use strict";var t=e.i(852);let o=t.default.scoring.OUTCOME_SCALE,a=t.default.scoring.GOALS_BONUS,i=t.default.scoring.EXACT_BONUS;e.s(["V",0,i,"f",0,a,"U",0,o,"R",0,function(e,t){return e>t?"home":e===t?"draw":"away"},"T",0,function(e){return Math.floor(o*(1-e)+.5)}])},68781,e=>e.a(async(t,o)=>{try{var a=e.i(66680),i=e.i(81225),r=e.i(74535),n=e.i(77010),s=e.i(67726),u=e.i(12145),c=e.i(48670),l=e.i(76200),m=e.i(4933),d=e.i(42119),_=e.i(64472),f=e.i(35295),E=e.i(19439),p=e.i(66908),w=t([u]);function N(e=Date.now()){return{after:e+18e5,until:e+6048e5}}async function S(e,t,o,i){let n=(0,s.R)(o,i),c=(await u.f.execute(r.B`
    INSERT INTO picks (id, user_id, match_id, outcome, p_at_pick, score_home, score_away,
                       fox_score_home, fox_score_away)
    SELECT ${(0,a.randomUUID)()}::text, ${e}::text, m.id, ${n}::pick_outcome,
           CASE ${n}::text
             WHEN 'home' THEN fi.p_home
             WHEN 'draw' THEN fi.p_draw
             ELSE fi.p_away
           END,
           ${o}::int, ${i}::int,
           renard.home, renard.away
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    CROSS JOIN LATERAL (
      -- Le score du renard tel que publié (« 2-1 »), nul sous toute autre forme.
      SELECT CASE WHEN fi.score_1 ~ '^[0-9]{1,3}-[0-9]{1,3}$'
                  THEN split_part(fi.score_1, '-', 1)::int END AS home,
             CASE WHEN fi.score_1 ~ '^[0-9]{1,3}-[0-9]{1,3}$'
                  THEN split_part(fi.score_1, '-', 2)::int END AS away
    ) renard
    WHERE fi.match_id = ${t}
      AND m.status = 'scheduled'
      AND m.kickoff_utc > now() + make_interval(mins => ${30}::int)
    ON CONFLICT (user_id, match_id) DO UPDATE
      SET outcome = EXCLUDED.outcome,
          p_at_pick = CASE WHEN picks.outcome = EXCLUDED.outcome
                           THEN picks.p_at_pick
                           ELSE EXCLUDED.p_at_pick END,
          score_home = EXCLUDED.score_home,
          score_away = EXCLUDED.score_away,
          fox_score_home = EXCLUDED.fox_score_home,
          fox_score_away = EXCLUDED.fox_score_away,
          updated_at = now()
    RETURNING p_at_pick
  `)).rows[0];if(!c)return null;let l=Number(c.p_at_pick);return{matchId:t,scoreHome:o,scoreAway:i,outcome:n,pAtPick:l,potential:(0,s.T)(l)}}async function A(e){return new Map((await u.f.select({matchId:c.f.picks.matchId,outcome:c.f.picks.outcome,pAtPick:c.f.picks.pAtPick,scoreHome:c.f.picks.scoreHome,scoreAway:c.f.picks.scoreAway}).from(c.f.picks).where((0,i.u)(c.f.picks.userId,e))).map(e=>[e.matchId,{outcome:e.outcome,pAtPick:e.pAtPick,scoreHome:e.scoreHome,scoreAway:e.scoreAway}]))}[u]=w.then?(await w)():w;let v=r.B`s.points DESC, s.regles DESC, u.name, u.id`;function h(e){var t,o;let a,i,n,s;return t=e,a=(o=!1,r.B`user_id`),i=o?r.B`(grouping(competition_id) = 1) AS general, competition_id,`:r.B``,n=o?r.B`s.general, s.competition_id,`:r.B``,s=o?r.B`PARTITION BY s.general, s.competition_id`:r.B``,r.B`
    WITH juge AS (${(0,p.f)(t)}),
    solo AS (
      SELECT user_id, ${i}
             coalesce(sum(points), 0)::int AS points,
             count(*) FILTER (WHERE settled)::int AS regles,
             count(*)::int AS total
      FROM juge GROUP BY ${a}
    )
    SELECT ${n} u.id AS user_id, u.name, u.avatar,
           s.points, s.regles AS settled, s.total AS total_picks,
           row_number() OVER (${s} ORDER BY ${v})::int AS rank
    FROM auth_user u
    JOIN solo s ON s.user_id = u.id
    WHERE s.total > 0
  `}function g(e){return{rank:Number(e.rank),userId:e.user_id,name:e.name,avatar:e.avatar,points:Number(e.points),settled:Number(e.settled),totalPicks:Number(e.total_picks)}}async function R(e,t,o){let a,i=[];null!=e&&i.push(r.B`p.user_id IN (SELECT lm.user_id FROM league_members lm WHERE lm.league_id = ${e})`),null!=t&&i.push(r.B`m.competition_id = ${t}`);let n=i.length>0?r.B.join(i,r.B` AND `):void 0;return(await u.f.execute((a=void 0===o?r.B``:r.B`OR classement.user_id = ${o}`,r.B`
    SELECT * FROM (${h(n)}) classement
    WHERE classement.rank <= ${50} ${a}
    ORDER BY classement.rank
  `))).rows.map(g)}async function T(e,t){let o=null!=t?r.B`m.competition_id = ${t}`:void 0,a=(await u.f.execute(r.B`
    SELECT * FROM (${h(o)}) classement
    WHERE classement.user_id = ${e}
  `)).rows[0];return a?g(a):null}async function O(e){let t=(await u.f.execute(r.B`
    WITH juge AS (${(0,p.f)(r.B`p.user_id = ${e}`)})
    SELECT coalesce(sum(points), 0)::int AS points,
           count(*) FILTER (WHERE won_1x2)::int AS won,
           count(*) FILTER (WHERE settled)::int AS settled,
           count(*) FILTER (WHERE NOT settled)::int AS pending
    FROM juge
  `)).rows[0];return{points:Number(t?.points??0),won:Number(t?.won??0),settled:Number(t?.settled??0),pending:Number(t?.pending??0)}}let M=(0,n.cache)(async()=>(await u.f.execute(r.B`
      SELECT DISTINCT co.id, co.name, co.country, co.tier
      FROM fixture_insights fi
      JOIN matches m ON m.id = fi.match_id
      JOIN competitions co ON co.id = m.competition_id
      ORDER BY co.name
    `)).rows.map(e=>({id:Number(e.id),name:e.name,country:String(e.country).trim(),tier:String(e.tier)})));async function D(e){return new Set((await u.f.select({competitionId:l.f.userCompetitionFavorites.competitionId}).from(l.f.userCompetitionFavorites).where((0,i.u)(l.f.userCompetitionFavorites.userId,e))).map(e=>e.competitionId))}async function y(e){return(await u.f.select({name:m.f.clubs.canonicalName,colors:m.f.clubs.colors,country:m.f.clubs.country}).from(m.f.clubs).where((0,i.u)(m.f.clubs.id,e)))[0]??null}async function I(e){return(await u.f.select({onboardedAt:d.f.user.onboardedAt,favoriteClubId:d.f.user.favoriteClubId}).from(d.f.user).where((0,i.u)(d.f.user.id,e)))[0]??{onboardedAt:null,favoriteClubId:null}}async function C(){return(await u.f.execute(r.B`
    SELECT DISTINCT m.competition_id, cl.id AS club_id, cl.canonical_name, cl.colors
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN clubs cl ON cl.id IN (m.home_club_id, m.away_club_id)
    ORDER BY cl.canonical_name
  `)).rows.map(e=>({competitionId:Number(e.competition_id),clubId:Number(e.club_id),name:e.canonical_name,colors:e.colors??null}))}async function L(e,t,o){t.length>0&&await u.f.insert(l.f.userCompetitionFavorites).values(t.map(t=>({id:(0,a.randomUUID)(),userId:e,competitionId:t}))).onConflictDoNothing(),await u.f.update(d.f.user).set({favoriteClubId:o,onboardedAt:new Date}).where((0,i.u)(d.f.user.id,e))}async function x(e,t){0===(await u.f.delete(l.f.userCompetitionFavorites).where((0,i.b)((0,i.u)(l.f.userCompetitionFavorites.userId,e),(0,i.u)(l.f.userCompetitionFavorites.competitionId,t))).returning({id:l.f.userCompetitionFavorites.id})).length&&await u.f.insert(l.f.userCompetitionFavorites).values({id:(0,a.randomUUID)(),userId:e,competitionId:t}).onConflictDoNothing()}let j="ABCDEFGHJKMNPQRSTUVWXYZ23456789";class P extends Error{constructor(){super("Plafond atteint : 10 groupes créés."),this.name="LeagueLimitError"}}async function H(e,t){return u.f.transaction(async o=>{if(await o.execute(r.B`SELECT 1 FROM auth_user WHERE id = ${e} FOR NO KEY UPDATE`),Number((await o.execute(r.B`SELECT count(*)::int AS n FROM leagues WHERE owner_id = ${e}`)).rows[0].n)>=10)throw new P;let i=(0,a.randomUUID)();for(let r=0;r<5;r+=1){let r=function(){let e="";for(let t=0;t<8;t+=1)e+=j[(0,a.randomInt)(j.length)];return e}();if(0!==(await o.insert(_.f.leagues).values({id:i,name:t,code:r,ownerId:e}).onConflictDoNothing({target:_.f.leagues.code}).returning({id:_.f.leagues.id})).length)return await o.insert(f.f.leagueMembers).values({id:(0,a.randomUUID)(),leagueId:i,userId:e}),{id:i,name:t,code:r}}throw Error("createLeague : aucun code libre après 5 tirages.")})}async function b(e,t,o){if(0===o.length)return{transferred:[],deleted:[]};let a=r.B.join(o.map(e=>r.B`${e}`),r.B`, `),i=await e.execute(r.B`
    UPDATE leagues l
    SET owner_id = heritier.user_id
    FROM (
      SELECT DISTINCT ON (lm.league_id) lm.league_id, lm.user_id
      FROM league_members lm
      WHERE lm.league_id IN (${a}) AND lm.user_id <> ${t}
      ORDER BY lm.league_id, lm.joined_at, lm.id
    ) heritier
    WHERE l.id = heritier.league_id AND l.owner_id = ${t}
    RETURNING l.id
  `),n=await e.execute(r.B`
    DELETE FROM leagues
    WHERE id IN (${a}) AND owner_id = ${t}
    RETURNING id
  `),s=e=>e.rows.map(e=>e.id);return{transferred:s(i),deleted:s(n)}}async function B(e,t){let o=await e.execute(r.B`
    SELECT l.id FROM leagues l
    WHERE l.owner_id = ${t}
       OR l.id IN (SELECT lm.league_id FROM league_members lm WHERE lm.user_id = ${t})
    ORDER BY l.id
    FOR UPDATE OF l
  `);return b(e,t,o.rows.map(e=>e.id))}async function $(e,t){return u.f.transaction(async o=>{let a=(await o.execute(r.B`SELECT owner_id FROM leagues WHERE id = ${t} FOR UPDATE`)).rows[0];if(!a||0===(await o.execute(r.B`
      SELECT 1 FROM league_members WHERE league_id = ${t} AND user_id = ${e}
    `)).rows.length&&a.owner_id!==e)return null;let i=a.owner_id===e?await b(o,e,[t]):{transferred:[],deleted:[]};return(await o.execute(r.B`
      DELETE FROM league_members WHERE league_id = ${t} AND user_id = ${e}
    `),i.deleted.length>0)?"deleted":i.transferred.length>0?"transferred":"left"})}async function k(e,t){return u.f.transaction(async o=>{let a=(await o.execute(r.B`SELECT owner_id FROM leagues WHERE id = ${t} FOR UPDATE`)).rows[0];return a?a.owner_id!==e?"forbidden":(await o.delete(_.f.leagues).where((0,i.u)(_.f.leagues.id,t)),"deleted"):"not_found"})}async function F(e,t){let[o]=await u.f.select({id:_.f.leagues.id,name:_.f.leagues.name}).from(_.f.leagues).where((0,i.u)(_.f.leagues.code,t.toUpperCase().trim())).limit(1);return o?(await u.f.insert(f.f.leagueMembers).values({id:(0,a.randomUUID)(),leagueId:o.id,userId:e}).onConflictDoNothing(),o):null}async function U(e){return Promise.all((await u.f.select({id:_.f.leagues.id,name:_.f.leagues.name,code:_.f.leagues.code,ownerId:_.f.leagues.ownerId,memberCount:r.B`(
        SELECT count(*)::int FROM league_members compte
        WHERE compte.league_id = ${_.f.leagues.id}
      )`}).from(f.f.leagueMembers).innerJoin(_.f.leagues,(0,i.u)(_.f.leagues.id,f.f.leagueMembers.leagueId)).where((0,i.u)(f.f.leagueMembers.userId,e))).map(async t=>({...t,standings:await R(t.id,void 0,e)})))}async function W(e,t=60){return(await u.f.execute(r.B`
    WITH juge AS (${(0,p.f)(r.B`p.user_id = ${e}`)})
    SELECT j.match_id, j.outcome, j.p_at_pick, j.kickoff_utc,
           j.score_home AS sh, j.score_away AS sa,
           j.fox_score_home AS fsh, j.fox_score_away AS fsa,
           dom.canonical_name AS home, ext.canonical_name AS away,
           dom.colors AS home_colors, ext.colors AS away_colors,
           co.country AS country,
           j.home_goals AS hg, j.away_goals AS ag,
           j.settled, j.actual_outcome, j.potential,
           j.won_1x2, j.won_goals, j.won_exact, j.points,
           fox.p_home AS fox_p_home, fox.p_draw AS fox_p_draw, fox.p_away AS fox_p_away,
           fi.preferred_outcome::text AS fox_pref, fi.temperament::text AS fox_sentiment
    FROM juge j
    JOIN competitions co ON co.id = j.competition_id
    JOIN clubs dom ON dom.id = j.home_club_id
    JOIN clubs ext ON ext.id = j.away_club_id
    LEFT JOIN LATERAL (
        SELECT p2.p_home::float8 AS p_home, p2.p_draw::float8 AS p_draw,
               p2.p_away::float8 AS p_away
        FROM predictions p2
        WHERE p2.match_id = j.match_id AND p2.calibrated
        ORDER BY p2.model_version_id DESC LIMIT 1
    ) fox ON TRUE
    -- La lecture PUBLIÉE du renard (préférence + sentiment) : c est elle que
    -- montre la fiche, pas l argmax brut des probabilités.
    LEFT JOIN LATERAL (
        SELECT i.preferred_outcome, i.temperament
        FROM fixture_insights i
        WHERE i.match_id = j.match_id
        ORDER BY i.computed_at DESC LIMIT 1
    ) fi ON TRUE
    ORDER BY j.kickoff_utc DESC, j.match_id DESC
    LIMIT ${t}
  `)).rows.map(e=>{let t=e.hg,o=e.ag,a=e.sh,i=e.sa,r=e.outcome,n=Number(e.p_at_pick),s=!!e.settled,u=e.won_1x2,c=e.won_goals,l=e.won_exact,m=null===e.fox_p_home?null:[Number(e.fox_p_home),Number(e.fox_p_draw),Number(e.fox_p_away)],d=null===m?null:m.indexOf(Math.max(...m));return{matchId:Number(e.match_id),kickoffUtc:new Date(e.kickoff_utc).toISOString(),home:e.home,away:e.away,homeColors:e.home_colors??null,awayColors:e.away_colors??null,country:e.country,outcome:r,pAtPick:n,potential:Number(e.potential),myScore:null===a?null:`${a}-${i}`,foxScore:null===e.fsh?null:`${e.fsh}-${e.fsa}`,foxOutcome:null===d?null:["home","draw","away"][d],foxP:null===m?null:m[d]??null,foxPreferred:(0,E.L)(e.fox_pref)??(null===m?null:["home","draw","away"][(0,E.p)({pHome:m[0],pDraw:m[1],pAway:m[2]})]),foxSentiment:e.fox_sentiment??(null===m?null:(0,E.f)({pHome:m[0],pDraw:m[1],pAway:m[2]})),settled:s,realOutcome:e.actual_outcome??null,won:u,won1x2:u,wonGoals:c,wonExact:l,points:s?Number(e.points):null,score:null===t?null:`${t}–${o}`}})}e.s(["p",0,P,"m",0,10,"v",0,7,"C",0,30,"K",0,y,"X",0,C,"y",0,L,"M",0,H,"$",0,k,"b",0,M,"s",0,B,"B",0,function(e){return/^[A-Za-z0-9-]{1,64}$/.test(e)},"A",0,F,"H",0,$,"d",0,D,"g",0,U,"Q",0,I,"D",0,W,"i",0,A,"L",0,O,"h",0,T,"e",0,N,"c",0,function(e,t=Date.now()){let{after:o,until:a}=N(t);return e.filter(e=>{let t=new Date(e.kickoffUtc).getTime();return t>o&&t<=a})},"I",0,h,"E",0,R,"V",0,x,"j",0,S,"x",0,function(e,t,o){let a=e.filter(e=>e.userId!==o);return null===t?a:[...a,t].sort((e,t)=>e.rank-t.rank)}]),o()}catch(e){o(e)}},!1),19439,e=>{"use strict";let t=e.i(852).default.preference,o=[t.BASE_RATES.home,t.BASE_RATES.draw,t.BASE_RATES.away],a=t.DRAW_ELITE_FLOOR,i=t.CONFIDENT_FLOOR,r=t.FEARFUL_GAP;function n(e){let t=[e.pHome,e.pDraw,e.pAway],i=[e.pHome/o[0],e.pDraw/o[1],e.pAway/o[2]],r=0;return i[1]>i[0]&&(r=1),i[2]>i[r]&&(r=2),1===r&&e.pDraw<a&&(t[1]>t[r=0]&&(r=1),t[2]>t[r]&&(r=2)),r}e.s(["p",0,n,"L",0,function(e){return"H"===e?"home":"D"===e?"draw":"A"===e?"away":null},"f",0,function(e){let t=[e.pHome,e.pDraw,e.pAway],o=n(e),a=Math.max(...t.filter((e,t)=>t!==o));return t[o]>=i?"confident":t[o]-a<r?"fearful":"cautious"}])},66908,e=>{"use strict";var t=e.i(74535),o=e.i(67726);function a(e){if(!Number.isInteger(e))throw Error(`Constante de bar\xe8me non enti\xe8re : ${e}`);return t.B.raw(String(e))}e.s(["f",0,function(e=t.B`TRUE`){var i;return t.B`
    SELECT p.id AS pick_id, p.user_id, p.created_at, p.outcome::text AS outcome,
           p.p_at_pick, p.score_home, p.score_away, p.fox_score_home, p.fox_score_away,
           p.match_id, m.competition_id, m.kickoff_utc, m.home_club_id, m.away_club_id,
           r.home_goals, r.away_goals, e.actual_outcome,
           e.settled, e.potential,
           v.won_1x2, v.won_goals, v.won_exact,
           CASE WHEN e.settled THEN
             CASE WHEN v.won_1x2 THEN e.potential ELSE 0 END
             + CASE WHEN v.won_goals THEN ${a(o.f)} ELSE 0 END
             + CASE WHEN v.won_exact THEN ${a(o.V)} ELSE 0 END
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
             ${i=t.B`p.p_at_pick`,t.B`floor(${a(o.U)}::float8 * (1::float8 - (${i})::float8) + 0.5::float8)::int`} AS potential
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
    WHERE ${e}
  `}])},4933,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])},35295,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])},64472,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])},48670,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])},76200,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])}];

//# sourceMappingURL=_0dz-y30z03smo._.js.map