module.exports=[11620,e=>e.a(async(t,i)=>{try{var a=e.i(81225),o=e.i(97460),r=e.i(74535),c=e.i(68195),s=e.i(12145),n=e.i(89136),f=e.i(75099),m=e.i(46431),d=e.i(4933),u=e.i(42119),l=e.i(68781),p=e.i(19439),h=t([s,l]);[s,l]=h.then?(await h)():h;let N=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}],v={matchId:n.f.fixtureInsights.matchId,kickoffUtc:f.f.matches.kickoffUtc,competitionId:f.f.matches.competitionId,country:m.f.competitions.country,tier:m.f.competitions.tier,homeClubId:f.f.matches.homeClubId,awayClubId:f.f.matches.awayClubId,pHome:n.f.fixtureInsights.pHome,pDraw:n.f.fixtureInsights.pDraw,pAway:n.f.fixtureInsights.pAway,status:n.f.fixtureInsights.status,blendBeta:n.f.fixtureInsights.blendBeta,identified:n.f.fixtureInsights.identified,formHome:n.f.fixtureInsights.formHome,formAway:n.f.fixtureInsights.formAway,weatherTempC:n.f.fixtureInsights.weatherTempC,weatherPrecipMm:n.f.fixtureInsights.weatherPrecipMm,weatherWindKmh:n.f.fixtureInsights.weatherWindKmh,expGoals:n.f.fixtureInsights.expGoals,over25:n.f.fixtureInsights.over25,btts:n.f.fixtureInsights.btts,score1:n.f.fixtureInsights.score1,pScore1:n.f.fixtureInsights.pScore1,score2:n.f.fixtureInsights.score2,pScore2:n.f.fixtureInsights.pScore2,score3:n.f.fixtureInsights.score3,pScore3:n.f.fixtureInsights.pScore3,preferredOutcome:n.f.fixtureInsights.preferredOutcome,temperament:n.f.fixtureInsights.temperament,scoreTop1:n.f.fixtureInsights.scoreTop1,pScoreTop1:n.f.fixtureInsights.pScoreTop1,scoreTop2:n.f.fixtureInsights.scoreTop2,pScoreTop2:n.f.fixtureInsights.pScoreTop2,scoreTop3:n.f.fixtureInsights.scoreTop3,pScoreTop3:n.f.fixtureInsights.pScoreTop3,scoreTop4:n.f.fixtureInsights.scoreTop4,pScoreTop4:n.f.fixtureInsights.pScoreTop4,scoreTop5:n.f.fixtureInsights.scoreTop5,pScoreTop5:n.f.fixtureInsights.pScoreTop5,scoreTop6:n.f.fixtureInsights.scoreTop6,pScoreTop6:n.f.fixtureInsights.pScoreTop6,pModelHome:n.f.fixtureInsights.pModelHome,pModelDraw:n.f.fixtureInsights.pModelDraw,pModelAway:n.f.fixtureInsights.pModelAway,factors:n.f.fixtureInsights.factors,predictionHash:n.f.fixtureInsights.predictionHash,predictedAt:n.f.fixtureInsights.predictedAt};function _(e={}){let t=[];return void 0!==e.competitionId&&t.push((0,a.u)(f.f.matches.competitionId,e.competitionId)),void 0!==e.from&&t.push((0,a.B)(f.f.matches.kickoffUtc,e.from)),void 0!==e.to&&t.push((0,a.S)(f.f.matches.kickoffUtc,e.to)),t.length>0?(0,a.b)(...t):void 0}let B=(0,c.f)(d.f.clubs,"home_club"),C=(0,c.f)(d.f.clubs,"away_club"),D={homeName:B.canonicalName,homeBadge:B.colors,awayName:C.canonicalName,awayBadge:C.colors},M=[(0,o.M)(f.f.matches.kickoffUtc),(0,o.M)(f.f.matches.id)];function I(e){return s.f.select({...v,...D,...e}).from(n.f.fixtureInsights).innerJoin(f.f.matches,(0,a.u)(f.f.matches.id,n.f.fixtureInsights.matchId)).innerJoin(m.f.competitions,(0,a.u)(m.f.competitions.id,f.f.matches.competitionId)).leftJoin(B,(0,a.u)(B.id,f.f.matches.homeClubId)).leftJoin(C,(0,a.u)(C.id,f.f.matches.awayClubId))}function w(e){let{homeName:t,homeBadge:i,awayName:a,awayBadge:o,...r}=e;return{...r,home:t??`club ${r.homeClubId}`,away:a??`club ${r.awayClubId}`,homeColors:i??null,awayColors:o??null}}async function g(e){return(await I({}).where(e).orderBy(...M)).map(w)}async function E(e={}){return g(_(e))}async function x(e){let[t]=await g((0,a.u)(n.f.fixtureInsights.matchId,e));return t??null}async function y(e,t){let i=t.after?r.B`(${f.f.matches.kickoffUtc}, ${f.f.matches.id}) > (${t.after.kickoffUtc.toISOString()}::timestamptz, ${t.after.matchId}::bigint)`:void 0,o=await I({}).where((0,a.b)(_(e),i)).orderBy(...M).limit(t.limit+1),c=o.slice(0,t.limit).map(w),s=c[c.length-1];return{rows:c,next:o.length>t.limit&&s?{kickoffUtc:s.kickoffUtc,matchId:s.matchId}:null}}async function S(e,t=new Date){let i=e=>r.B`${new Date(e).toISOString()}::timestamptz`,a=(0,l.e)(t.getTime()),o=e=>r.B`${e}.kickoff_utc > ${i(a.after)} AND ${e}.kickoff_utc <= ${i(a.until)}`,c=r.B`(
    SELECT
      (SELECT v.match_id
         FROM fixture_insights v
         JOIN matches vm ON vm.id = v.match_id
        WHERE vm.kickoff_utc > ${i(t.getTime())}
        ORDER BY CASE
                   WHEN (SELECT u.favorite_club_id FROM auth_user u WHERE u.id = ${e})
                        IN (vm.home_club_id, vm.away_club_id) THEN 0
                   WHEN vm.competition_id IN (
                          SELECT f.competition_id FROM user_competition_favorites f
                          WHERE f.user_id = ${e}
                        ) THEN 1
                   ELSE 2
                 END,
                 vm.kickoff_utc, vm.id
        LIMIT 1) AS vedette,
      (SELECT n.match_id
         FROM fixture_insights n
         JOIN matches nm ON nm.id = n.match_id
        WHERE ${o(r.B`nm`)}
        ORDER BY nm.kickoff_utc, nm.id
        LIMIT 1) AS prochain,
      (SELECT count(*)::int
         FROM fixture_insights r
         JOIN matches rm ON rm.id = r.match_id
        WHERE ${o(r.B`rm`)}
          AND NOT EXISTS (
                SELECT 1 FROM picks p
                WHERE p.user_id = ${e} AND p.match_id = r.match_id
              )) AS restants
  ) AS choix`,s=await I({featured:r.B`${n.f.fixtureInsights.matchId} = choix.vedette`,nextPickable:r.B`${n.f.fixtureInsights.matchId} = choix.prochain`,remainingPicks:r.B`choix.restants`}).innerJoin(c,r.B`${n.f.fixtureInsights.matchId} IN (choix.vedette, choix.prochain)`).orderBy(...M),f=e=>{if(!e)return null;let{featured:t,nextPickable:i,remainingPicks:a,...o}=e;return w(o)};return{featured:f(s.find(e=>!0===e.featured)),nextPickable:f(s.find(e=>!0===e.nextPickable)),remainingPicks:s[0]?.remainingPicks??0}}async function k(e){return 0===e.length?new Map:new Map((await s.f.execute(r.B`
    SELECT m.id AS match_id,
           (r.payload->>'full_time_home_goals')::int AS home_goals,
           (r.payload->>'full_time_away_goals')::int AS away_goals
    FROM matches m
    JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE m.id IN (${r.B.join(e.map(e=>r.B`${e}`),r.B`, `)})
  `)).rows.filter(e=>null!==e.home_goals&&null!==e.away_goals).map(e=>[Number(e.match_id),{homeGoals:e.home_goals,awayGoals:e.away_goals}]))}async function O(e=400,t="leagues"){return(await s.f.execute(r.B`
    SELECT m.id AS match_id, m.kickoff_utc,
           dom.canonical_name AS home, ext.canonical_name AS away,
           p.p_home::float8 AS p_home, p.p_draw::float8 AS p_draw,
           p.p_away::float8 AS p_away,
           (r.payload->>'full_time_home_goals')::int AS home_goals,
           (r.payload->>'full_time_away_goals')::int AS away_goals
    FROM matches m
    JOIN clubs dom ON dom.id = m.home_club_id
    JOIN clubs ext ON ext.id = m.away_club_id
    JOIN competitions co ON co.id = m.competition_id
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
      AND ${"cups"===t?r.B`co.tier = 'C'`:r.B`co.tier <> 'C'`}
    ORDER BY m.kickoff_utc DESC, m.id
    LIMIT ${e}
  `)).rows.map(e=>{let t=[e.p_home,e.p_draw,e.p_away],i=e.home_goals,a=e.away_goals,o=i>a?0:i===a?1:2,r=[0,0,0].map((e,t)=>+(t===o)),c=0,s=0,n=0;for(let e=0;e<2;e+=1)c+=t[e],s+=r[e],n+=(c-s)**2;return{matchId:Number(e.match_id),kickoffUtc:new Date(e.kickoff_utc),home:e.home,away:e.away,pHome:t[0],pDraw:t[1],pAway:t[2],homeGoals:i,awayGoals:a,outcome:o,predictedOutcome:(0,p.p)({pHome:t[0],pDraw:t[1],pAway:t[2]}),rps:n/2}})}async function b(){return(await s.f.execute(r.B`
    SELECT v.name, max(p.predicted_at) AS predicted_at
    FROM model_versions v JOIN predictions p ON p.model_version_id = v.id
    WHERE v.hyperparams -> 'run' ->> 'kind' = 'forecast'
      -- Les versions marché (coupes) ne sont pas « le dernier engagement » du modèle.
      AND v.name NOT LIKE 'market-%'
    GROUP BY v.name ORDER BY max(p.predicted_at) DESC LIMIT 1
  `)).rows[0]??null}async function A(){let[e]=await s.f.select({computedAt:n.f.fixtureInsights.computedAt,modelVersionId:n.f.fixtureInsights.modelVersionId}).from(n.f.fixtureInsights).orderBy((0,o.A)(n.f.fixtureInsights.computedAt)).limit(1);return e??null}async function T(){let e=await s.f.execute(r.B`SELECT max(computed_at) AS derniere FROM fixture_insights`),t=e.rows[0]?.derniere;return t?new Date(t):null}let L=["id","name","email","emailVerified","image","role","avatar","favoriteClubId","onboardedAt","ageAttestedAt","createdAt","updatedAt"],H=Object.fromEntries(L.map(e=>[e,u.f.user[e]]));async function R(e,t=new Date){let i=e=>e?new Date(e).toISOString():null,[o,c,n,f,m]=await Promise.all([s.f.select(H).from(u.f.user).where((0,a.u)(u.f.user.id,e)).limit(1),s.f.execute(r.B`
      SELECT p.match_id, m.kickoff_utc,
             dom.canonical_name AS home, ext.canonical_name AS away,
             p.outcome::text AS outcome, p.p_at_pick,
             p.score_home, p.score_away, p.fox_score_home, p.fox_score_away,
             p.created_at, p.updated_at
      FROM picks p
      JOIN matches m ON m.id = p.match_id
      JOIN clubs dom ON dom.id = m.home_club_id
      JOIN clubs ext ON ext.id = m.away_club_id
      WHERE p.user_id = ${e}
      ORDER BY m.kickoff_utc, p.match_id
    `),s.f.execute(r.B`
      SELECT l.id, l.name, l.code, (l.owner_id = ${e}) AS owner, lm.joined_at
      FROM league_members lm
      JOIN leagues l ON l.id = lm.league_id
      WHERE lm.user_id = ${e}
      ORDER BY lm.joined_at, l.id
    `),s.f.execute(r.B`
      SELECT f.competition_id, c.name, f.added_at
      FROM user_competition_favorites f
      JOIN competitions c ON c.id = f.competition_id
      WHERE f.user_id = ${e}
      ORDER BY f.added_at, f.competition_id
    `),s.f.execute(r.B`
      SELECT kind, day::text AS day, created_at
      FROM user_daily_events
      WHERE user_id = ${e}
      ORDER BY day, kind
    `)]),l=o[0];if(!l)return null;let p=null===l.favoriteClubId?null:(await s.f.select({id:d.f.clubs.id,name:d.f.clubs.canonicalName}).from(d.f.clubs).where((0,a.u)(d.f.clubs.id,l.favoriteClubId)).limit(1))[0]??null;return{format:"foox-export-v1",exportedAt:t.toISOString(),profile:function(e){let t={};for(let i of L){let a=e[i];t[i]=a instanceof Date?a.toISOString():a??null}return t}(l),picks:c.rows.map(e=>({matchId:Number(e.match_id),kickoffUtc:i(e.kickoff_utc),home:e.home,away:e.away,outcome:e.outcome,pAtPick:Number(e.p_at_pick),scoreHome:e.score_home??null,scoreAway:e.score_away??null,foxScoreHome:e.fox_score_home??null,foxScoreAway:e.fox_score_away??null,createdAt:i(e.created_at),updatedAt:i(e.updated_at)})),leagues:n.rows.map(e=>({id:e.id,name:e.name,code:e.code,owner:!!e.owner,joinedAt:i(e.joined_at)})),favorites:{club:p,competitions:f.rows.map(e=>({competitionId:Number(e.competition_id),name:e.name,addedAt:i(e.added_at)}))},dailyEvents:m.rows.map(e=>({kind:e.kind,day:e.day,createdAt:i(e.created_at)}))}}e.s(["O",0,function(e=new Date){return`foox-mes-donnees-${e.toISOString().slice(0,10)}.json`},"C",0,y,"q",0,x,"w",0,function(e,t=new Date){return e.databaseOk?(null===e.lastPublishedAt?1/0:t.getTime()-e.lastPublishedAt.getTime())<936e5?{ok:!0,status:200,checks:{database:"ok",publication:"ok"}}:{ok:!1,status:503,failing:"publication",checks:{database:"ok",publication:"stale"}}:{ok:!1,status:503,failing:"database",checks:{database:"down",publication:"unknown"}}},"T",0,S,"s",0,A,"j",0,T,"g",0,b,"z",0,function(e){return(N.find(t=>e>=t.lo&&e<t.hi)??N[N.length-1]).observed},"P",0,k,"X",0,O,"A",0,E,"Q",0,R]),i()}catch(e){i(e)}},!1),68195,e=>{"use strict";var t=e.i(97044);e.s(["f",0,function(e,i){return new Proxy(e,new t.e(i,!1))}])},46431,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])},89136,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])},75099,e=>{"use strict";var t=e.i(5604);e.s(["f",0,t])}];

//# sourceMappingURL=_1u0c_9r3phw5e._.js.map