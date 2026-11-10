module.exports=[40675,e=>e.a(async(i,t)=>{try{var n=e.i(74535),a=e.i(77010),u=e.i(12145),r=e.i(66908),s=e.i(30899),c=i([u]);[u]=c.then?(await c)():c;let m=[{id:"regular",label:"Le régulier",description:"Poser 5 pronostics dans la semaine",target:5,xp:30},{id:"daring",label:"L'audacieux",description:"Oser un pronostic à 30 % ou moins",target:1,xp:20},{id:"scout",label:"L'éclaireur",description:"Couvrir 3 journées de matchs différentes",target:3,xp:25},{id:"recruiter",label:"Le recruteur",description:"Partager une invitation de groupe",target:1,xp:25}],p=[{id:"checkin",label:"Passer au club",description:"Ouvrir l'appli — coché dès que tu es là",xp:5},{id:"analysis",label:"Lire une analyse",description:"Ouvrir la fiche d'un match",xp:5},{id:"pick",label:"Poser un prono",description:"Un score sur un match à venir",xp:5}],k=(0,a.cache)(async(e,i)=>{let t=(0,s.g)(n.B`j.created_at`);return(await u.f.execute(n.B`
    WITH juge AS (${(0,r.f)(n.B`p.user_id = ${e}`)})
    SELECT ${(0,s.u)(n.B`j.created_at`)} AS week,
           count(*)::int AS picks,
           min(j.p_at_pick)::float8 AS min_p,
           count(DISTINCT ${(0,s.g)(n.B`j.kickoff_utc`)})::int AS match_days,
           count(DISTINCT ${t})::int AS pick_days,
           count(*) FILTER (WHERE ${t} = ${i}::date)::int AS picks_today,
           coalesce(sum(j.points), 0)::int AS points,
           count(*) FILTER (WHERE j.settled)::int AS settled
    FROM juge j
    GROUP BY 1
  `)).rows.map(e=>({week:e.week,picks:Number(e.picks),minP:null===e.min_p?null:Number(e.min_p),matchDays:Number(e.match_days),pickDays:Number(e.pick_days),picksToday:Number(e.picks_today),points:Number(e.points),settled:Number(e.settled)}))}),y=(0,a.cache)(async(e,i,t)=>new Map((await u.f.execute(n.B`
      SELECT kind,
             count(*)::int AS jours,
             count(*) FILTER (WHERE day = ${i}::date)::int AS aujourd_hui,
             count(DISTINCT ${(0,s.R)(n.B`day`)})
               FILTER (WHERE kind = 'invite')::int AS semaines_invite,
             count(*) FILTER (
               WHERE kind = 'invite'
                 AND ${(0,s.R)(n.B`day`)} = ${t}
             )::int AS invite_cette_semaine
      FROM user_daily_events
      WHERE user_id = ${e}
      GROUP BY kind
    `)).rows.map(e=>[String(e.kind),{jours:Number(e.jours),aujourdHui:Number(e.aujourd_hui)>0,semainesInvite:Number(e.semaines_invite),inviteCetteSemaine:Number(e.invite_cette_semaine)>0}])));async function o(e,i=new Date){let t=(0,s.I)(i),[n,a]=await Promise.all([k(e,t),y(e,t,(0,s.h)(i))]);return{weeks:n,events:a}}async function d(e,i=new Date){return l(await o(e,i),i)}function l(e,i){let t=e.weeks,n=e.events,a={jours:t.reduce((e,i)=>e+i.pickDays,0),aujourdHui:t.some(e=>e.picksToday>0)},u=n.get("invite"),r=(u?.semainesInvite??0)*25,c=n.get("checkin"),o=n.get("analysis"),d=((c?.jours??0)+(o?.jours??0)+a.jours)*5,l=t.reduce((e,i)=>{let t;return e+(t=0,i.picks>=5&&(t+=30),null!==i.minP&&i.minP<=.3&&(t+=20),i.matchDays>=3&&(t+=25),t)},0)+r,k=(0,s.h)(i),y=t.find(e=>e.week===k)??{week:k,picks:0,minP:null,matchDays:0};return{totalXp:l,dailyXp:d,week:[{...m[0],current:Math.min(y.picks,5),done:y.picks>=5},{...m[1],current:+(null!==y.minP&&y.minP<=.3),done:null!==y.minP&&y.minP<=.3},{...m[2],current:Math.min(y.matchDays,3),done:y.matchDays>=3},{...m[3],current:+!!u?.inviteCetteSemaine,done:u?.inviteCetteSemaine??!1}],day:[{...p[0],done:c?.aujourdHui??!1},{...p[1],done:o?.aujourdHui??!1},{...p[2],done:a.aujourdHui}]}}e.s(["f",0,d,"k",0,l,"K",0,o]),t()}catch(e){t(e)}},!1)];

//# sourceMappingURL=apps_web_src_lib_challenges_ts_1ixaqbtgfzuau._.js.map