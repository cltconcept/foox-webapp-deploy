module.exports=[49567,a=>a.a(async(b,c)=>{try{var d=a.i(66680),e=a.i(62332),f=a.i(21592),g=a.i(41030);a.i(21400);var h=a.i(31415),i=a.i(26850),j=a.i(33505),k=a.i(77329),l=a.i(98615),m=a.i(62994),n=a.i(68456),o=a.i(74592),p=a.i(27952),q=b([h]);function r(a=Date.now()){return{after:a+18e5,until:a+6048e5}}async function s(a){return new Map((await h.f.select({matchId:i.f.picks.matchId,outcome:i.f.picks.outcome,pAtPick:i.f.picks.pAtPick,scoreHome:i.f.picks.scoreHome,scoreAway:i.f.picks.scoreAway}).from(i.f.picks).where((0,e.u)(i.f.picks.userId,a))).map(a=>[a.matchId,{outcome:a.outcome,pAtPick:a.pAtPick,scoreHome:a.scoreHome,scoreAway:a.scoreAway}]))}function t(a){return f.B`
    WITH juge AS (${(0,p.f)(a)}),
    solo AS (
      SELECT user_id,
             coalesce(sum(points), 0)::int AS points,
             count(*) FILTER (WHERE settled)::int AS regles,
             count(*)::int AS total
      FROM juge GROUP BY user_id
    )
    SELECT u.id AS user_id, u.name, u.avatar,
           s.points, s.regles AS settled, s.total AS total_picks,
           row_number() OVER (ORDER BY s.points DESC, s.regles DESC, u.name)::int AS rank
    FROM auth_user u
    JOIN solo s ON s.user_id = u.id
    WHERE s.total > 0
    ORDER BY rank
    LIMIT 50
  `}async function u(a,b){let c=[];null!=a&&c.push(f.B`p.user_id IN (SELECT lm.user_id FROM league_members lm WHERE lm.league_id = ${a})`),null!=b&&c.push(f.B`m.competition_id = ${b}`);let d=c.length>0?f.B.join(c,f.B` AND `):void 0;return(await h.f.execute(t(d))).rows.map(a=>({rank:Number(a.rank),userId:a.user_id,name:a.name,avatar:a.avatar,points:Number(a.points),settled:Number(a.settled),totalPicks:Number(a.total_picks)}))}async function v(a){let b=(await h.f.execute(f.B`
    WITH juge AS (${(0,p.f)(f.B`p.user_id = ${a}`)})
    SELECT coalesce(sum(points), 0)::int AS points,
           count(*) FILTER (WHERE won_1x2)::int AS won,
           count(*) FILTER (WHERE settled)::int AS settled,
           count(*) FILTER (WHERE NOT settled)::int AS pending
    FROM juge
  `)).rows[0];return{points:Number(b?.points??0),won:Number(b?.won??0),settled:Number(b?.settled??0),pending:Number(b?.pending??0)}}[h]=q.then?(await q)():q;let F=(0,g.cache)(async()=>(await h.f.execute(f.B`
      SELECT DISTINCT co.id, co.name, co.country, co.tier
      FROM fixture_insights fi
      JOIN matches m ON m.id = fi.match_id
      JOIN competitions co ON co.id = m.competition_id
      ORDER BY co.name
    `)).rows.map(a=>({id:Number(a.id),name:a.name,country:String(a.country).trim(),tier:String(a.tier)})));async function w(a){return new Set((await h.f.select({competitionId:j.f.userCompetitionFavorites.competitionId}).from(j.f.userCompetitionFavorites).where((0,e.u)(j.f.userCompetitionFavorites.userId,a))).map(a=>a.competitionId))}async function x(a){return(await h.f.select({name:k.f.clubs.canonicalName,colors:k.f.clubs.colors,country:k.f.clubs.country}).from(k.f.clubs).where((0,e.u)(k.f.clubs.id,a)))[0]??null}async function y(a){return(await h.f.select({onboardedAt:l.f.user.onboardedAt,favoriteClubId:l.f.user.favoriteClubId}).from(l.f.user).where((0,e.u)(l.f.user.id,a)))[0]??{onboardedAt:null,favoriteClubId:null}}async function z(){return(await h.f.execute(f.B`
    SELECT DISTINCT m.competition_id, cl.id AS club_id, cl.canonical_name, cl.colors
    FROM fixture_insights fi
    JOIN matches m ON m.id = fi.match_id
    JOIN clubs cl ON cl.id IN (m.home_club_id, m.away_club_id)
    ORDER BY cl.canonical_name
  `)).rows.map(a=>({competitionId:Number(a.competition_id),clubId:Number(a.club_id),name:a.canonical_name,colors:a.colors??null}))}async function A(a,b,c){b.length>0&&await h.f.insert(j.f.userCompetitionFavorites).values(b.map(b=>({id:(0,d.randomUUID)(),userId:a,competitionId:b}))).onConflictDoNothing(),await h.f.update(l.f.user).set({favoriteClubId:c,onboardedAt:new Date}).where((0,e.u)(l.f.user.id,a))}async function B(a,b){0===(await h.f.delete(j.f.userCompetitionFavorites).where((0,e.b)((0,e.u)(j.f.userCompetitionFavorites.userId,a),(0,e.u)(j.f.userCompetitionFavorites.competitionId,b))).returning({id:j.f.userCompetitionFavorites.id})).length&&await h.f.insert(j.f.userCompetitionFavorites).values({id:(0,d.randomUUID)(),userId:a,competitionId:b}).onConflictDoNothing()}async function C(a,b){let[c]=await h.f.select({id:m.f.leagues.id,name:m.f.leagues.name}).from(m.f.leagues).where((0,e.u)(m.f.leagues.code,b.toUpperCase().trim())).limit(1);return c?(await h.f.insert(n.f.leagueMembers).values({id:(0,d.randomUUID)(),leagueId:c.id,userId:a}).onConflictDoNothing(),c):null}async function D(a){return Promise.all((await h.f.select({id:m.f.leagues.id,name:m.f.leagues.name,code:m.f.leagues.code,ownerId:m.f.leagues.ownerId,memberCount:f.B`(
        SELECT count(*)::int FROM league_members compte
        WHERE compte.league_id = ${m.f.leagues.id}
      )`}).from(n.f.leagueMembers).innerJoin(m.f.leagues,(0,e.u)(m.f.leagues.id,n.f.leagueMembers.leagueId)).where((0,e.u)(n.f.leagueMembers.userId,a))).map(async a=>({...a,standings:await u(a.id)})))}async function E(a,b=60){return(await h.f.execute(f.B`
    WITH juge AS (${(0,p.f)(f.B`p.user_id = ${a}`)})
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
    LIMIT ${b}
  `)).rows.map(a=>{let b=a.hg,c=a.ag,d=a.sh,e=a.sa,f=a.outcome,g=Number(a.p_at_pick),h=!!a.settled,i=a.won_1x2,j=a.won_goals,k=a.won_exact,l=null===a.fox_p_home?null:[Number(a.fox_p_home),Number(a.fox_p_draw),Number(a.fox_p_away)],m=null===l?null:l.indexOf(Math.max(...l));return{matchId:Number(a.match_id),kickoffUtc:new Date(a.kickoff_utc).toISOString(),home:a.home,away:a.away,homeColors:a.home_colors??null,awayColors:a.away_colors??null,country:a.country,outcome:f,pAtPick:g,potential:Number(a.potential),myScore:null===d?null:`${d}-${e}`,foxScore:null===a.fsh?null:`${a.fsh}-${a.fsa}`,foxOutcome:null===m?null:["home","draw","away"][m],foxP:null===l?null:l[m]??null,foxPreferred:(0,o.L)(a.fox_pref)??(null===l?null:["home","draw","away"][(0,o.p)({pHome:l[0],pDraw:l[1],pAway:l[2]})]),foxSentiment:a.fox_sentiment??(null===l?null:(0,o.f)({pHome:l[0],pDraw:l[1],pAway:l[2]})),settled:h,realOutcome:a.actual_outcome??null,won:i,won1x2:i,wonGoals:j,wonExact:k,points:h?Number(a.points):null,score:null===b?null:`${b}–${c}`}})}a.s(["v",0,7,"C",0,30,"K",0,x,"X",0,z,"y",0,A,"b",0,F,"A",0,C,"d",0,w,"g",0,D,"Q",0,y,"B",0,E,"i",0,s,"L",0,v,"P",0,function(a){return new Date(a.getTime()-18e5)},"e",0,r,"c",0,function(a,b=Date.now()){let{after:c,until:d}=r(b);return a.filter(a=>{let b=new Date(a.kickoffUtc).getTime();return b>c&&b<=d})},"D",0,u,"f",0,t,"V",0,B]),c()}catch(a){c(a)}},!1),77329,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])},68456,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])},62994,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])},26850,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])},33505,a=>{"use strict";var b=a.i(74141);a.s(["f",0,b])}];

//# sourceMappingURL=_1-upk7fqiogtr._.js.map