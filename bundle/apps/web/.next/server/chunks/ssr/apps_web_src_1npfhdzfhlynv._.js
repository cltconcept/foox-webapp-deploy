module.exports=[92006,a=>a.a(async(b,c)=>{try{var d=a.i(62566);a.i(50758);var e=a.i(46703),f=a.i(21964),g=a.i(19575),h=a.i(32096),i=a.i(45119),j=a.i(10961),k=a.i(61957),l=b([h,j]);function m(a){if(!a)return"jamais";let b=Math.max(0,Math.round((Date.now()-new Date(a).getTime())/1e3));return b<60?`il y a ${b} s`:b<3600?`il y a ${Math.round(b/60)} min`:b<86400?`il y a ${Math.round(b/3600)} h`:`il y a ${Math.round(b/86400)} j`}function n(a){return a?new Date(a).toLocaleString("fr-BE",{timeZone:"UTC",hour12:!1}):"—"}[h,j]=l.then?(await l)():l;let t={refresh:7200,nightly:93600,scellement:93600};function o({titre:a,children:b}){return(0,d.jsxs)(g.e,{balise:"section",className:"px-4 py-3 space-y-2",children:[(0,d.jsx)("h2",{className:"text-xs uppercase tracking-widest text-sourdine-2 font-black",children:a}),b]})}function p({label:a,valeur:b,alerte:c=!1}){return(0,d.jsxs)("div",{className:"rounded-xl bg-surface-2 border border-ligne px-2.5 py-2 text-center",children:[(0,d.jsx)("p",{className:`font-mono font-black text-lg leading-none ${c?"text-rouge":"text-encre"}`,children:b}),(0,d.jsx)("p",{className:"text-xs uppercase tracking-wider text-sourdine-2 font-bold mt-1",children:a})]})}function q({passage:a}){return(0,d.jsxs)("details",{className:`rounded-xl border px-3 py-2 ${a.ok?"border-ligne bg-surface-2":"border-rouge/45 bg-rouge/5"}`,children:[(0,d.jsxs)("summary",{className:"cursor-pointer text-xs flex items-center justify-between gap-3",children:[(0,d.jsxs)("span",{className:"font-mono font-bold text-encre",children:[a.ok?"✓":"✗"," ",a.job]}),(0,d.jsxs)("span",{className:"text-sourdine-2 text-right",children:[n(a.finishedAt)," · ",a.durationS,"s",a.failedSteps>0?` \xb7 ${a.failedSteps} \xe9chec(s)`:""]})]}),(0,d.jsx)("pre",{className:"mt-2 text-xs text-sourdine whitespace-pre-wrap break-words max-h-72 overflow-y-auto font-mono",children:a.output??"(pas de sortie)"})]})}function r(){return(0,d.jsxs)("div",{className:"max-w-3xl mx-auto space-y-4 pb-10",children:[(0,d.jsx)("h1",{className:"text-encre text-xl font-black",children:"Salle des machines"}),(0,d.jsxs)(o,{titre:"le double facteur",children:[(0,d.jsx)("p",{className:"text-sm text-sourdine leading-snug",children:"La salle des machines demande le code à usage unique. Active le double facteur dans « Mon compte », en bas du Vestiaire, puis reviens ici."}),(0,d.jsx)(f.g,{href:"/vestiaire#mon-compte",className:"text-center py-3 text-sm",children:"Aller à « Mon compte »"})]})]})}async function s(){let a=await (0,j.W)();a||(0,e.redirect)("/login");let b=(0,k.l)(a.user,i.f.FOUNDER_2FA_REQUIRED);if("hidden"===b&&(0,e.notFound)(),"two-factor-required"===b)return(0,d.jsx)(r,{});let[c,f,g,l,s,u,v,w]=await Promise.all([(0,h.A)(),(0,h.z)(12),(0,h.i)(),(0,h.V)(),(0,h.a)(),(0,h.$)(),(0,h.J)(10),(0,h.h)()]),x=c.filter(a=>a.depuisS>(t[a.job]??93600)||!a.dernierOk);return(0,d.jsxs)("div",{className:"max-w-3xl mx-auto space-y-4 pb-10",children:[(0,d.jsxs)("div",{className:"flex items-baseline justify-between gap-3",children:[(0,d.jsx)("h1",{className:"text-encre text-xl font-black",children:"Salle des machines"}),(0,d.jsxs)("span",{className:"text-xs text-sourdine-2 font-mono text-right",children:[new Date().toLocaleString("fr-BE",{timeZone:"UTC",hour12:!1})," UTC"]})]}),x.length>0||l.matchsSansResultat>0?(0,d.jsxs)("div",{className:"rounded-2xl bg-rouge/10 border border-rouge/45 px-4 py-3 space-y-1",children:[(0,d.jsx)("p",{className:"text-rouge text-sm font-black",children:"À regarder"}),(0,d.jsxs)("ul",{className:"text-[12px] text-encre space-y-0.5",children:[x.map(a=>(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{className:"font-mono font-bold",children:a.job})," —"," ",a.dernierOk?"silencieux":"dernier passage EN ÉCHEC"," (",m(a.dernier),")"]},a.job)),l.matchsSansResultat>0?(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{className:"font-mono font-bold",children:l.matchsSansResultat})," ","match(s) joué(s) sans résultat ingéré — reporté, ou source en retard"]}):null]})]}):(0,d.jsx)("div",{className:"rounded-2xl bg-vert/10 border border-vert/40 px-4 py-2.5",children:(0,d.jsx)("p",{className:"text-vert text-sm font-black",children:"Tout est vert — relays à l'heure, résultats à jour."})}),(0,d.jsx)(o,{titre:"les relays",children:(0,d.jsx)("div",{className:"space-y-1.5",children:0===c.length?(0,d.jsx)("p",{className:"text-[12px] text-sourdine",children:"Aucun passage consigné pour l'instant — la table vient d'être créée, les premières lignes arriveront au prochain cycle."}):c.map(a=>{let b=a.depuisS>(t[a.job]??93600);return(0,d.jsxs)("div",{className:`flex items-center justify-between gap-3 rounded-xl border px-3 py-2 ${!a.dernierOk||b?"border-rouge/45 bg-rouge/5":"border-ligne bg-surface-2"}`,children:[(0,d.jsx)("span",{className:"font-mono text-sm font-bold text-encre",children:a.job}),(0,d.jsxs)("span",{className:"text-xs text-sourdine text-right",children:[m(a.dernier)," · ",a.passages24h," passage(s)/24 h ·"," ",(0,d.jsxs)("span",{className:a.echecs24h>0?"text-rouge font-bold":"",children:[a.echecs24h," échec(s)"]})]})]},a.job)})})}),(0,d.jsxs)(o,{titre:"le socle data",children:[(0,d.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[(0,d.jsx)(p,{label:"matchs",valeur:l.matchs.toLocaleString("fr-BE")}),(0,d.jsx)(p,{label:"faits",valeur:l.faits.toLocaleString("fr-BE")}),(0,d.jsx)(p,{label:"prédictions",valeur:l.predictions.toLocaleString("fr-BE")}),(0,d.jsx)(p,{label:"fiches",valeur:l.fiches.toLocaleString("fr-BE")}),(0,d.jsx)(p,{label:"clubs",valeur:l.clubs}),(0,d.jsx)(p,{label:"championnats",valeur:l.championnats}),(0,d.jsx)(p,{label:"notes Elo",valeur:l.elo.toLocaleString("fr-BE")}),(0,d.jsx)(p,{label:"fiches à venir",valeur:`${l.fichesAncrees}/${l.fichesAVenir}`})]}),(0,d.jsxs)("dl",{className:"text-xs text-sourdine space-y-0.5 pt-1",children:[(0,d.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,d.jsx)("dt",{children:"dernier fait ingéré"}),(0,d.jsxs)("dd",{className:"text-encre font-mono tracking-tighter",children:[n(l.dernierFait)," (",m(l.dernierFait),")"]})]}),(0,d.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,d.jsx)("dt",{children:"dernier résultat de match"}),(0,d.jsxs)("dd",{className:"text-encre font-mono tracking-tighter",children:[n(l.dernierResultat)," (",m(l.dernierResultat),")"]})]}),(0,d.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,d.jsx)("dt",{children:"dernière publication de fiches"}),(0,d.jsxs)("dd",{className:"text-encre font-mono tracking-tighter",children:[n(l.derniereFiche)," (",m(l.derniereFiche),")"]})]})]})]}),(0,d.jsxs)(o,{titre:"les paris",children:[(0,d.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[(0,d.jsx)(p,{label:"total",valeur:u.total}),(0,d.jsx)(p,{label:"réglés",valeur:u.regles}),(0,d.jsx)(p,{label:"à venir",valeur:u.aVenir}),(0,d.jsx)(p,{label:"attente résultat",valeur:u.enAttenteResultat,alerte:u.enAttenteResultat>0}),(0,d.jsx)(p,{label:"posés / 24 h",valeur:u.poses24h}),(0,d.jsx)(p,{label:"sans score",valeur:u.sansScore}),(0,d.jsx)(p,{label:"groupes",valeur:u.groupes}),(0,d.jsx)(p,{label:"membres",valeur:u.membresGroupes})]}),(0,d.jsxs)("p",{className:"text-xs text-sourdine pt-1",children:["dernier prono posé :"," ",(0,d.jsx)("span",{className:"text-encre font-mono",children:m(u.dernierProno)})]})]}),(0,d.jsx)(o,{titre:"les joueurs",children:(0,d.jsx)("div",{className:"space-y-1",children:s.map(a=>(0,d.jsxs)("div",{className:"flex items-center justify-between gap-3 rounded-xl bg-surface-2 border border-ligne px-3 py-2",children:[(0,d.jsxs)("div",{className:"min-w-0",children:[(0,d.jsxs)("p",{className:"text-encre text-sm font-bold leading-tight truncate",children:[a.name,"founder"===a.role?(0,d.jsx)("span",{className:"text-renard font-normal",children:" · fondateur"}):null]}),(0,d.jsx)("p",{className:"text-xs text-sourdine-2 break-all",children:a.email})]}),(0,d.jsxs)("div",{className:"text-right shrink-0",children:[(0,d.jsxs)("p",{className:"text-xs text-encre font-mono tracking-tighter",children:[a.pronos," prono(s) · ",a.regles," réglé(s)"]}),(0,d.jsxs)("p",{className:"text-xs text-sourdine-2",children:["vu ",m(a.derniereVisite)]})]})]},a.id))})}),(0,d.jsx)(o,{titre:"les championnats publiés",children:(0,d.jsx)("div",{className:"space-y-1",children:w.filter(a=>a.fiches>0).map(a=>(0,d.jsxs)("div",{className:"flex items-center justify-between gap-3 text-xs",children:[(0,d.jsxs)("span",{className:"text-encre font-semibold min-w-0 break-words",children:[(0,d.jsx)("span",{className:"font-mono text-sourdine-2",children:a.code})," ",a.nom]}),(0,d.jsxs)("span",{className:"text-sourdine shrink-0 font-mono tracking-tighter",children:[a.fiches," fiches · ",a.aVenir," à venir ·"," ",(0,d.jsxs)("span",{className:a.aVenir>0&&0===a.ancrees?"text-rouge":"",children:[a.ancrees," ancrée(s)"]})]})]},a.code))})}),(0,d.jsx)(o,{titre:"les connexions récentes",children:(0,d.jsx)("div",{className:"space-y-1",children:v.map(a=>(0,d.jsxs)("div",{className:"flex items-center justify-between gap-3 text-xs",children:[(0,d.jsx)("span",{className:"text-encre font-semibold min-w-0 break-words",children:a.name}),(0,d.jsxs)("span",{className:"text-sourdine-2 shrink-0 font-mono tracking-tighter",children:[m(a.updatedAt),a.ip?` \xb7 ${a.ip}`:""]})]},a.id))})}),(0,d.jsx)(o,{titre:"le dernier nightly (sortie complète)",children:g?(0,d.jsxs)("div",{className:"space-y-1.5",children:[(0,d.jsx)(q,{passage:g}),(0,d.jsxs)("p",{className:"text-xs text-sourdine",children:["terminé ",m(g.finishedAt)]})]}):(0,d.jsx)("p",{className:"text-[12px] text-sourdine",children:"Aucun passage « nightly » consigné pour l'instant."})}),(0,d.jsx)(o,{titre:"les derniers passages (sortie complète)",children:(0,d.jsx)("div",{className:"space-y-2",children:0===f.length?(0,d.jsx)("p",{className:"text-[12px] text-sourdine",children:"Rien encore — le premier passage consigné apparaîtra ici avec sa sortie."}):f.map(a=>(0,d.jsx)(q,{passage:a},a.id))})})]})}a.s(["default",0,s,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),74751,function(a){a.n(a.i(92006))},32096,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(31415),f=a.i(27952),g=b([e]);function h(a){return{id:Number(a.id),job:a.job,startedAt:new Date(a.started_at).toISOString(),finishedAt:new Date(a.finished_at).toISOString(),ok:!!a.ok,failedSteps:Number(a.failed_steps),output:a.output??null,durationS:Number(a.duree??0)}}async function i(a=15){return(await e.f.execute(d.B`
    SELECT id, job, started_at, finished_at, ok, failed_steps, output,
           extract(epoch FROM (finished_at - started_at))::int AS duree
    FROM pipeline_runs
    ORDER BY finished_at DESC
    LIMIT ${a}
  `)).rows.map(h)}async function j(){let[a]=(await e.f.execute(d.B`
    SELECT id, job, started_at, finished_at, ok, failed_steps, output,
           extract(epoch FROM (finished_at - started_at))::int AS duree
    FROM pipeline_runs
    WHERE job = 'nightly'
    ORDER BY finished_at DESC
    LIMIT 1
  `)).rows;return a?h(a):null}[e]=g.then?(await g)():g;let q="masquée";async function k(){return(await e.f.execute(d.B`
    SELECT job,
           max(finished_at) AS dernier,
           extract(epoch FROM (now() - max(finished_at)))::int AS depuis_s,
           (SELECT ok FROM pipeline_runs p2
            WHERE p2.job = p.job ORDER BY finished_at DESC LIMIT 1) AS dernier_ok,
           count(*) FILTER (WHERE NOT ok AND finished_at > now() - interval '24 hours')::int
             AS echecs_24h,
           count(*) FILTER (WHERE finished_at > now() - interval '24 hours')::int
             AS passages_24h
    FROM pipeline_runs p
    GROUP BY job
    ORDER BY job
  `)).rows.map(a=>({job:a.job,dernier:new Date(a.dernier).toISOString(),depuisS:Number(a.depuis_s),dernierOk:!!a.dernier_ok,echecs24h:Number(a.echecs_24h),passages24h:Number(a.passages_24h)}))}async function l(){let a=(await e.f.execute(d.B`
    SELECT
      (SELECT count(*) FROM matches)::int AS matchs,
      (SELECT count(*) FROM match_facts)::int AS faits,
      (SELECT count(*) FROM predictions)::int AS predictions,
      (SELECT count(*) FROM fixture_insights)::int AS fiches,
      (SELECT count(*) FROM clubs)::int AS clubs,
      (SELECT count(*) FROM competitions)::int AS championnats,
      (SELECT count(*) FROM elo_ratings)::int AS elo,
      (SELECT max(recorded_at) FROM match_facts) AS dernier_fait,
      (SELECT max(recorded_at) FROM match_facts WHERE fact_type = 'result')
        AS dernier_resultat,
      (SELECT max(computed_at) FROM fixture_insights) AS derniere_fiche,
      (SELECT count(*) FROM matches m
       WHERE m.kickoff_utc < now() AND m.status <> 'played')::int AS matchs_sans_resultat,
      (SELECT count(*) FROM fixture_insights fi
       JOIN matches m ON m.id = fi.match_id
       WHERE m.kickoff_utc > now())::int AS fiches_a_venir,
      (SELECT count(*) FROM fixture_insights fi
       JOIN matches m ON m.id = fi.match_id
       WHERE m.kickoff_utc > now() AND fi.blend_beta > 0)::int AS fiches_ancrees
  `)).rows[0],b=a=>a?new Date(a).toISOString():null;return{matchs:Number(a.matchs),faits:Number(a.faits),predictions:Number(a.predictions),fiches:Number(a.fiches),clubs:Number(a.clubs),championnats:Number(a.championnats),elo:Number(a.elo),dernierFait:b(a.dernier_fait),dernierResultat:b(a.dernier_resultat),derniereFiche:b(a.derniere_fiche),matchsSansResultat:Number(a.matchs_sans_resultat),fichesAVenir:Number(a.fiches_a_venir),fichesAncrees:Number(a.fiches_ancrees)}}async function m(){return(await e.f.execute(d.B`
    WITH juge AS (${(0,f.f)()})
    SELECT u.id, u.name, u.email, u.role, u.created_at,
           (SELECT max(s.updated_at) FROM auth_session s WHERE s.user_id = u.id)
             AS derniere_visite,
           count(j.pick_id)::int AS pronos,
           count(j.pick_id) FILTER (WHERE j.settled)::int AS regles,
           coalesce(sum(j.points), 0)::int AS points
    FROM auth_user u
    LEFT JOIN juge j ON j.user_id = u.id
    GROUP BY u.id
    ORDER BY pronos DESC, u.created_at
  `)).rows.map(a=>({id:a.id,name:a.name,email:a.email,role:a.role,createdAt:new Date(a.created_at).toISOString(),derniereVisite:a.derniere_visite?new Date(a.derniere_visite).toISOString():null,pronos:Number(a.pronos),regles:Number(a.regles),points:Number(a.points)}))}async function n(){let a=(await e.f.execute(d.B`
    SELECT
      (SELECT count(*) FROM picks)::int AS total,
      (SELECT count(*) FROM picks p JOIN matches m ON m.id = p.match_id
       WHERE m.status = 'played')::int AS regles,
      (SELECT count(*) FROM picks p JOIN matches m ON m.id = p.match_id
       WHERE m.kickoff_utc > now())::int AS a_venir,
      (SELECT count(*) FROM picks p JOIN matches m ON m.id = p.match_id
       WHERE m.kickoff_utc <= now() AND m.status <> 'played')::int AS en_attente_resultat,
      (SELECT count(*) FROM picks WHERE score_home IS NULL)::int AS sans_score,
      (SELECT max(created_at) FROM picks) AS dernier_prono,
      (SELECT count(*) FROM picks WHERE created_at > now() - interval '24 hours')::int
        AS poses_24h,
      (SELECT count(*) FROM leagues)::int AS groupes,
      (SELECT count(*) FROM league_members)::int AS membres_groupes
  `)).rows[0];return{total:Number(a.total),regles:Number(a.regles),aVenir:Number(a.a_venir),enAttenteResultat:Number(a.en_attente_resultat),sansScore:Number(a.sans_score),dernierProno:a.dernier_prono?new Date(a.dernier_prono).toISOString():null,poses24h:Number(a.poses_24h),groupes:Number(a.groupes),membresGroupes:Number(a.membres_groupes)}}async function o(a=12){return(await e.f.execute(d.B`
    SELECT s.id, u.name, u.email, s.created_at, s.updated_at, s.expires_at,
           s.ip_address, s.user_agent
    FROM auth_session s
    JOIN auth_user u ON u.id = s.user_id
    ORDER BY s.updated_at DESC
    LIMIT ${a}
  `)).rows.map(a=>({id:a.id,name:a.name,email:a.email,createdAt:new Date(a.created_at).toISOString(),updatedAt:new Date(a.updated_at).toISOString(),expiresAt:a.expires_at?new Date(a.expires_at).toISOString():null,ip:function(a){if(!a)return null;let b=a.split(",")[0].trim().replace(/^\[|\]$/g,"").replace(/%.*$/,"");if(!b)return null;let c=/^(?:::ffff:)?(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.\d{1,3}$/i.exec(b);if(c)return`${c[1]}.${c[2]}.${c[3]}.xxx`;if(!b.includes(":"))return q;let d=b.split("::");if(d.length>2)return q;let e=d[0]?d[0].split(":"):[],f=2===d.length&&d[1]?d[1].split(":"):[],g=2===d.length?8-e.length-f.length:0;if(g<0||2===d.length&&g<1)return q;let h=[...e,...Array(g).fill("0"),...f];return 8===h.length&&h.every(a=>/^[0-9a-f]{1,4}$/i.test(a))?`${h.slice(0,3).join(":").toLowerCase()}::xxxx`:q}(a.ip_address),agent:a.user_agent??null}))}async function p(){return(await e.f.execute(d.B`
    SELECT c.fd_code, c.name, c.country,
           count(fi.match_id)::int AS fiches,
           count(fi.match_id) FILTER (WHERE fi.blend_beta > 0)::int AS ancrees,
           count(fi.match_id) FILTER (WHERE m.kickoff_utc > now())::int AS a_venir,
           max(fi.computed_at) AS derniere
    FROM competitions c
    LEFT JOIN matches m ON m.competition_id = c.id
    LEFT JOIN fixture_insights fi ON fi.match_id = m.id
    GROUP BY c.id
    ORDER BY fiches DESC, c.name
  `)).rows.map(a=>({code:a.fd_code,nom:a.name,pays:a.country,fiches:Number(a.fiches),ancrees:Number(a.ancrees),aVenir:Number(a.a_venir),derniere:a.derniere?new Date(a.derniere).toISOString():null}))}a.s(["J",0,o,"z",0,i,"h",0,p,"V",0,l,"a",0,m,"$",0,n,"i",0,j,"A",0,k]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_1npfhdzfhlynv._.js.map