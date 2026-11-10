module.exports=[10547,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(41030),f=a.i(31415),g=a.i(27952),h=a.i(60914),i=b([f]);[f]=i.then?(await i)():i;let k=[{id:"regular",label:"Le régulier",description:"Poser 5 pronostics dans la semaine",target:5,xp:30},{id:"daring",label:"L'audacieux",description:"Oser un pronostic à 30 % ou moins",target:1,xp:20},{id:"scout",label:"L'éclaireur",description:"Couvrir 3 journées de matchs différentes",target:3,xp:25},{id:"recruiter",label:"Le recruteur",description:"Partager une invitation de groupe",target:1,xp:25}],l=[{id:"checkin",label:"Passer au club",description:"Ouvrir l'appli — coché dès que tu es là",xp:5},{id:"analysis",label:"Lire une analyse",description:"Ouvrir la fiche d'un match",xp:5},{id:"pick",label:"Poser un prono",description:"Un score sur un match à venir",xp:5}],m=(0,e.cache)(async(a,b)=>{let c=(0,h.g)(d.B`j.created_at`);return(await f.f.execute(d.B`
    WITH juge AS (${(0,g.f)(d.B`p.user_id = ${a}`)})
    SELECT ${(0,h.u)(d.B`j.created_at`)} AS week,
           count(*)::int AS picks,
           min(j.p_at_pick)::float8 AS min_p,
           count(DISTINCT ${(0,h.g)(d.B`j.kickoff_utc`)})::int AS match_days,
           count(DISTINCT ${c})::int AS pick_days,
           count(*) FILTER (WHERE ${c} = ${b}::date)::int AS picks_today,
           coalesce(sum(j.points), 0)::int AS points,
           count(*) FILTER (WHERE j.settled)::int AS settled
    FROM juge j
    GROUP BY 1
  `)).rows.map(a=>({week:a.week,picks:Number(a.picks),minP:null===a.min_p?null:Number(a.min_p),matchDays:Number(a.match_days),pickDays:Number(a.pick_days),picksToday:Number(a.picks_today),points:Number(a.points),settled:Number(a.settled)}))}),n=(0,e.cache)(async(a,b,c)=>new Map((await f.f.execute(d.B`
      SELECT kind,
             count(*)::int AS jours,
             count(*) FILTER (WHERE day = ${b}::date)::int AS aujourd_hui,
             count(DISTINCT ${(0,h.R)(d.B`day`)})
               FILTER (WHERE kind = 'invite')::int AS semaines_invite,
             count(*) FILTER (
               WHERE kind = 'invite'
                 AND ${(0,h.R)(d.B`day`)} = ${c}
             )::int AS invite_cette_semaine
      FROM user_daily_events
      WHERE user_id = ${a}
      GROUP BY kind
    `)).rows.map(a=>[String(a.kind),{jours:Number(a.jours),aujourdHui:Number(a.aujourd_hui)>0,semainesInvite:Number(a.semaines_invite),inviteCetteSemaine:Number(a.invite_cette_semaine)>0}])));async function j(a,b=new Date){let c=(0,h.I)(b),[d,e]=await Promise.all([m(a,c),n(a,c,(0,h.h)(b))]);return{weeks:d,events:e}}a.s(["k",0,function(a,b){let c=a.weeks,d=a.events,e={jours:c.reduce((a,b)=>a+b.pickDays,0),aujourdHui:c.some(a=>a.picksToday>0)},f=d.get("invite"),g=(f?.semainesInvite??0)*25,i=d.get("checkin"),j=d.get("analysis"),m=((i?.jours??0)+(j?.jours??0)+e.jours)*5,n=c.reduce((a,b)=>{let c;return a+(c=0,b.picks>=5&&(c+=30),null!==b.minP&&b.minP<=.3&&(c+=20),b.matchDays>=3&&(c+=25),c)},0)+g,o=(0,h.h)(b),p=c.find(a=>a.week===o)??{week:o,picks:0,minP:null,matchDays:0};return{totalXp:n,dailyXp:m,week:[{...k[0],current:Math.min(p.picks,5),done:p.picks>=5},{...k[1],current:+(null!==p.minP&&p.minP<=.3),done:null!==p.minP&&p.minP<=.3},{...k[2],current:Math.min(p.matchDays,3),done:p.matchDays>=3},{...k[3],current:+!!f?.inviteCetteSemaine,done:f?.inviteCetteSemaine??!1}],day:[{...l[0],done:i?.aujourdHui??!1},{...l[1],done:j?.aujourdHui??!1},{...l[2],done:e.aujourdHui}]}},"K",0,j,"G",0,function(a){let b=a.events.get("checkin");if(b?.aujourdHui)return a;let c=new Map(a.events);return c.set("checkin",{jours:(b?.jours??0)+1,aujourdHui:!0,semainesInvite:b?.semainesInvite??0,inviteCetteSemaine:b?.inviteCetteSemaine??!1}),{weeks:a.weeks,events:c}}]),c()}catch(a){c(a)}},!1),93221,a=>a.a(async(b,c)=>{try{var d=a.i(10547),e=a.i(34464),f=a.i(60914),g=b([d,e]);[d,e]=g.then?(await g)():g;let k=[{rank:0,name:"District",slug:"district",minXp:0},{rank:1,name:"Provincial",slug:"provincial",minXp:100},{rank:2,name:"National",slug:"national",minXp:300},{rank:3,name:"Élite",slug:"elite",minXp:700},{rank:4,name:"International",slug:"international",minXp:1400},{rank:5,name:"Légende",slug:"legende",minXp:2500}];async function h(a,b=new Date){return j(await (0,d.K)(a,b),b)}async function i(a,b=new Date){return await (0,e.f)(a,"checkin",b),j((0,d.G)(await (0,d.K)(a,b)),b)}function j(a,b){let c,e,g=a.weeks.reduce((a,b)=>a+b.points,0),h=a.weeks.reduce((a,b)=>a+b.settled,0),i=function(a,b){let c=+!a.has((0,f.$)(b,0)),d=0;for(;a.has((0,f.$)(b,-c));)d+=1,c+=1;return d}(new Set(a.weeks.map(a=>a.week)),b),j=(0,d.k)(a,b),l=g+5*h+j.totalXp+j.dailyXp,m=(c=[...k].reverse().find(a=>l>=a.minXp)??k[0],e=k.find(a=>a.minXp>l)??null,{...c,next:e});return{xp:l,points:g,settled:h,weeklyStreak:i,level:m,challengesXp:j.totalXp,weekChallenges:j.week,dayChallenges:j.day}}a.s(["g",0,k,"A",0,h,"X",0,i]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_lib_1h5pp9iyx--jx._.js.map