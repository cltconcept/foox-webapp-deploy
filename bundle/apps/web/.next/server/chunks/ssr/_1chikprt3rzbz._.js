module.exports=[71512,a=>a.a(async(b,c)=>{try{var d=a.i(62332),e=a.i(54156),f=a.i(21592),g=a.i(65694),h=a.i(31415),i=a.i(80872),j=a.i(94916),k=a.i(22493),l=a.i(77329),m=a.i(98615),n=a.i(49567),o=a.i(74592),p=b([h,n]);[h,n]=p.then?(await p)():p;let z=[{lo:0,hi:.4,n:189,observed:.365},{lo:.4,hi:.5,n:354,observed:.427},{lo:.5,hi:.6,n:220,observed:.577},{lo:.6,hi:1.01,n:182,observed:.709}],A={matchId:i.f.fixtureInsights.matchId,kickoffUtc:j.f.matches.kickoffUtc,competitionId:j.f.matches.competitionId,country:k.f.competitions.country,tier:k.f.competitions.tier,homeClubId:j.f.matches.homeClubId,awayClubId:j.f.matches.awayClubId,pHome:i.f.fixtureInsights.pHome,pDraw:i.f.fixtureInsights.pDraw,pAway:i.f.fixtureInsights.pAway,status:i.f.fixtureInsights.status,blendBeta:i.f.fixtureInsights.blendBeta,identified:i.f.fixtureInsights.identified,formHome:i.f.fixtureInsights.formHome,formAway:i.f.fixtureInsights.formAway,weatherTempC:i.f.fixtureInsights.weatherTempC,weatherPrecipMm:i.f.fixtureInsights.weatherPrecipMm,weatherWindKmh:i.f.fixtureInsights.weatherWindKmh,expGoals:i.f.fixtureInsights.expGoals,over25:i.f.fixtureInsights.over25,btts:i.f.fixtureInsights.btts,score1:i.f.fixtureInsights.score1,pScore1:i.f.fixtureInsights.pScore1,score2:i.f.fixtureInsights.score2,pScore2:i.f.fixtureInsights.pScore2,score3:i.f.fixtureInsights.score3,pScore3:i.f.fixtureInsights.pScore3,preferredOutcome:i.f.fixtureInsights.preferredOutcome,temperament:i.f.fixtureInsights.temperament,scoreTop1:i.f.fixtureInsights.scoreTop1,pScoreTop1:i.f.fixtureInsights.pScoreTop1,scoreTop2:i.f.fixtureInsights.scoreTop2,pScoreTop2:i.f.fixtureInsights.pScoreTop2,scoreTop3:i.f.fixtureInsights.scoreTop3,pScoreTop3:i.f.fixtureInsights.pScoreTop3,scoreTop4:i.f.fixtureInsights.scoreTop4,pScoreTop4:i.f.fixtureInsights.pScoreTop4,scoreTop5:i.f.fixtureInsights.scoreTop5,pScoreTop5:i.f.fixtureInsights.pScoreTop5,scoreTop6:i.f.fixtureInsights.scoreTop6,pScoreTop6:i.f.fixtureInsights.pScoreTop6,pModelHome:i.f.fixtureInsights.pModelHome,pModelDraw:i.f.fixtureInsights.pModelDraw,pModelAway:i.f.fixtureInsights.pModelAway,factors:i.f.fixtureInsights.factors,predictionHash:i.f.fixtureInsights.predictionHash,predictedAt:i.f.fixtureInsights.predictedAt},B=(0,g.f)(l.f.clubs,"home_club"),C=(0,g.f)(l.f.clubs,"away_club"),D={homeName:B.canonicalName,homeBadge:B.colors,awayName:C.canonicalName,awayBadge:C.colors},E=[(0,e.M)(j.f.matches.kickoffUtc),(0,e.M)(j.f.matches.id)];function q(a){return h.f.select({...A,...D,...a}).from(i.f.fixtureInsights).innerJoin(j.f.matches,(0,d.u)(j.f.matches.id,i.f.fixtureInsights.matchId)).innerJoin(k.f.competitions,(0,d.u)(k.f.competitions.id,j.f.matches.competitionId)).leftJoin(B,(0,d.u)(B.id,j.f.matches.homeClubId)).leftJoin(C,(0,d.u)(C.id,j.f.matches.awayClubId))}function r(a){let{homeName:b,homeBadge:c,awayName:d,awayBadge:e,...f}=a;return{...f,home:b??`club ${f.homeClubId}`,away:d??`club ${f.awayClubId}`,homeColors:c??null,awayColors:e??null}}async function s(a){return(await q({}).where(a).orderBy(...E)).map(r)}async function t(a={}){return s(function(a={}){let b=[];return void 0!==a.competitionId&&b.push((0,d.u)(j.f.matches.competitionId,a.competitionId)),void 0!==a.from&&b.push((0,d.B)(j.f.matches.kickoffUtc,a.from)),void 0!==a.to&&b.push((0,d.S)(j.f.matches.kickoffUtc,a.to)),b.length>0?(0,d.b)(...b):void 0}(a))}async function u(a){let[b]=await s((0,d.u)(i.f.fixtureInsights.matchId,a));return b??null}async function v(a,b=new Date){let c=a=>f.B`${new Date(a).toISOString()}::timestamptz`,d=(0,n.e)(b.getTime()),e=a=>f.B`${a}.kickoff_utc > ${c(d.after)} AND ${a}.kickoff_utc <= ${c(d.until)}`,g=f.B`(
    SELECT
      (SELECT v.match_id
         FROM fixture_insights v
         JOIN matches vm ON vm.id = v.match_id
        WHERE vm.kickoff_utc > ${c(b.getTime())}
        ORDER BY CASE
                   WHEN (SELECT u.favorite_club_id FROM auth_user u WHERE u.id = ${a})
                        IN (vm.home_club_id, vm.away_club_id) THEN 0
                   WHEN vm.competition_id IN (
                          SELECT f.competition_id FROM user_competition_favorites f
                          WHERE f.user_id = ${a}
                        ) THEN 1
                   ELSE 2
                 END,
                 vm.kickoff_utc, vm.id
        LIMIT 1) AS vedette,
      (SELECT n.match_id
         FROM fixture_insights n
         JOIN matches nm ON nm.id = n.match_id
        WHERE ${e(f.B`nm`)}
        ORDER BY nm.kickoff_utc, nm.id
        LIMIT 1) AS prochain,
      (SELECT count(*)::int
         FROM fixture_insights r
         JOIN matches rm ON rm.id = r.match_id
        WHERE ${e(f.B`rm`)}
          AND NOT EXISTS (
                SELECT 1 FROM picks p
                WHERE p.user_id = ${a} AND p.match_id = r.match_id
              )) AS restants
  ) AS choix`,h=await q({featured:f.B`${i.f.fixtureInsights.matchId} = choix.vedette`,nextPickable:f.B`${i.f.fixtureInsights.matchId} = choix.prochain`,remainingPicks:f.B`choix.restants`}).innerJoin(g,f.B`${i.f.fixtureInsights.matchId} IN (choix.vedette, choix.prochain)`).orderBy(...E),j=a=>{if(!a)return null;let{featured:b,nextPickable:c,remainingPicks:d,...e}=a;return r(e)};return{featured:j(h.find(a=>!0===a.featured)),nextPickable:j(h.find(a=>!0===a.nextPickable)),remainingPicks:h[0]?.remainingPicks??0}}async function w(a){return 0===a.length?new Map:new Map((await h.f.execute(f.B`
    SELECT m.id AS match_id,
           (r.payload->>'full_time_home_goals')::int AS home_goals,
           (r.payload->>'full_time_away_goals')::int AS away_goals
    FROM matches m
    JOIN LATERAL (
        SELECT f.payload FROM match_facts f
        WHERE f.match_id = m.id AND f.fact_type = 'result'
        ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    WHERE m.id IN (${f.B.join(a.map(a=>f.B`${a}`),f.B`, `)})
  `)).rows.filter(a=>null!==a.home_goals&&null!==a.away_goals).map(a=>[Number(a.match_id),{homeGoals:a.home_goals,awayGoals:a.away_goals}]))}async function x(a=400,b="leagues"){return(await h.f.execute(f.B`
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
      AND ${"cups"===b?f.B`co.tier = 'C'`:f.B`co.tier <> 'C'`}
    ORDER BY m.kickoff_utc DESC, m.id
    LIMIT ${a}
  `)).rows.map(a=>{let b=[a.p_home,a.p_draw,a.p_away],c=a.home_goals,d=a.away_goals,e=c>d?0:c===d?1:2,f=[0,0,0].map((a,b)=>+(b===e)),g=0,h=0,i=0;for(let a=0;a<2;a+=1)g+=b[a],h+=f[a],i+=(g-h)**2;return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc),home:a.home,away:a.away,pHome:b[0],pDraw:b[1],pAway:b[2],homeGoals:c,awayGoals:d,outcome:e,predictedOutcome:(0,o.p)({pHome:b[0],pDraw:b[1],pAway:b[2]}),rps:i/2}})}async function y(){let[a]=await h.f.select({computedAt:i.f.fixtureInsights.computedAt,modelVersionId:i.f.fixtureInsights.modelVersionId}).from(i.f.fixtureInsights).orderBy((0,e.A)(i.f.fixtureInsights.computedAt)).limit(1);return a??null}Object.fromEntries(["id","name","email","emailVerified","image","role","avatar","favoriteClubId","onboardedAt","ageAttestedAt","createdAt","updatedAt"].map(a=>[a,m.f.user[a]])),a.s(["y",0,z,"q",0,u,"T",0,v,"s",0,y,"z",0,function(a){return(z.find(b=>a>=b.lo&&a<b.hi)??z[z.length-1]).observed},"O",0,w,"X",0,x,"A",0,t]),c()}catch(a){c(a)}},!1),65694,a=>{"use strict";var b=a.i(46263);a.s(["f",0,function(a,c){return new Proxy(a,new b.e(c,!1))}])},22493,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])},80872,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])},94916,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])}];

//# sourceMappingURL=_1chikprt3rzbz._.js.map