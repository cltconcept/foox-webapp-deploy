module.exports=[92006,a=>a.a(async(b,c)=>{try{var d=a.i(59597),e=a.i(56963);a.i(43668);var f=a.i(88156),g=a.i(32096),h=a.i(18145),i=b([g,h]);function j(a){if(!a)return"jamais";let b=Math.max(0,Math.round((Date.now()-new Date(a).getTime())/1e3));return b<60?`il y a ${b} s`:b<3600?`il y a ${Math.round(b/60)} min`:b<86400?`il y a ${Math.round(b/3600)} h`:`il y a ${Math.round(b/86400)} j`}function k(a){return a?new Date(a).toLocaleString("fr-BE",{timeZone:"UTC",hour12:!1}):"—"}[g,h]=i.then?(await i)():i;let o={refresh:7200,nightly:93600,scellement:93600};function l({titre:a,children:b}){return(0,d.jsxs)("section",{className:"rounded-2xl bg-surface border border-ligne px-4 py-3 space-y-2",children:[(0,d.jsx)("h2",{className:"text-[10px] uppercase tracking-widest text-sourdine-2 font-black",children:a}),b]})}function m({label:a,valeur:b,alerte:c=!1}){return(0,d.jsxs)("div",{className:"rounded-xl bg-surface-2 border border-ligne px-2.5 py-2 text-center",children:[(0,d.jsx)("p",{className:`font-mono font-black text-lg leading-none ${c?"text-rouge":"text-encre"}`,children:b}),(0,d.jsx)("p",{className:"text-[9px] uppercase tracking-wider text-sourdine-2 font-bold mt-1",children:a})]})}async function n(){let a=await h.auth.api.getSession({headers:await (0,e.headers)()});a||(0,f.redirect)("/login"),"founder"!==a.user.role&&(0,f.notFound)();let[b,c,i,n,p,q,r]=await Promise.all([(0,g.santeRelays)(),(0,g.derniersPassages)(12),(0,g.etatDonnees)(),(0,g.etatJoueurs)(),(0,g.etatParis)(),(0,g.connexionsRecentes)(10),(0,g.etatChampionnats)()]),s=b.filter(a=>a.depuisS>(o[a.job]??93600)||!a.dernierOk);return(0,d.jsxs)("div",{className:"max-w-3xl mx-auto space-y-4 pb-10",children:[(0,d.jsxs)("div",{className:"flex items-baseline justify-between gap-3",children:[(0,d.jsx)("h1",{className:"text-encre text-xl font-black",children:"Salle des machines"}),(0,d.jsxs)("span",{className:"text-[10px] text-sourdine-2 font-mono",children:[new Date().toLocaleString("fr-BE",{timeZone:"UTC",hour12:!1})," UTC"]})]}),s.length>0||i.matchsSansResultat>0?(0,d.jsxs)("div",{className:"rounded-2xl bg-rouge/10 border border-rouge/45 px-4 py-3 space-y-1",children:[(0,d.jsx)("p",{className:"text-rouge text-sm font-black",children:"À regarder"}),(0,d.jsxs)("ul",{className:"text-[12px] text-encre space-y-0.5",children:[s.map(a=>(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{className:"font-mono font-bold",children:a.job})," —"," ",a.dernierOk?"silencieux":"dernier passage EN ÉCHEC"," (",j(a.dernier),")"]},a.job)),i.matchsSansResultat>0?(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{className:"font-mono font-bold",children:i.matchsSansResultat})," ","match(s) joué(s) sans résultat ingéré — reporté, ou source en retard"]}):null]})]}):(0,d.jsx)("div",{className:"rounded-2xl bg-vert/10 border border-vert/40 px-4 py-2.5",children:(0,d.jsx)("p",{className:"text-vert text-sm font-black",children:"Tout est vert — relays à l'heure, résultats à jour."})}),(0,d.jsx)(l,{titre:"les relays",children:(0,d.jsx)("div",{className:"space-y-1.5",children:0===b.length?(0,d.jsx)("p",{className:"text-[12px] text-sourdine",children:"Aucun passage consigné pour l'instant — la table vient d'être créée, les premières lignes arriveront au prochain cycle."}):b.map(a=>{let b=a.depuisS>(o[a.job]??93600);return(0,d.jsxs)("div",{className:`flex items-center justify-between gap-3 rounded-xl border px-3 py-2 ${!a.dernierOk||b?"border-rouge/45 bg-rouge/5":"border-ligne bg-surface-2"}`,children:[(0,d.jsx)("span",{className:"font-mono text-sm font-bold text-encre",children:a.job}),(0,d.jsxs)("span",{className:"text-[11px] text-sourdine text-right",children:[j(a.dernier)," · ",a.passages24h," passage(s)/24 h ·"," ",(0,d.jsxs)("span",{className:a.echecs24h>0?"text-rouge font-bold":"",children:[a.echecs24h," échec(s)"]})]})]},a.job)})})}),(0,d.jsxs)(l,{titre:"le socle data",children:[(0,d.jsxs)("div",{className:"grid grid-cols-4 gap-1.5",children:[(0,d.jsx)(m,{label:"matchs",valeur:i.matchs.toLocaleString("fr-BE")}),(0,d.jsx)(m,{label:"faits",valeur:i.faits.toLocaleString("fr-BE")}),(0,d.jsx)(m,{label:"prédictions",valeur:i.predictions.toLocaleString("fr-BE")}),(0,d.jsx)(m,{label:"fiches",valeur:i.fiches.toLocaleString("fr-BE")}),(0,d.jsx)(m,{label:"clubs",valeur:i.clubs}),(0,d.jsx)(m,{label:"championnats",valeur:i.championnats}),(0,d.jsx)(m,{label:"notes Elo",valeur:i.elo.toLocaleString("fr-BE")}),(0,d.jsx)(m,{label:"fiches à venir",valeur:`${i.fichesAncrees}/${i.fichesAVenir}`})]}),(0,d.jsxs)("dl",{className:"text-[11px] text-sourdine space-y-0.5 pt-1",children:[(0,d.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,d.jsx)("dt",{children:"dernier fait ingéré"}),(0,d.jsxs)("dd",{className:"text-encre font-mono",children:[k(i.dernierFait)," (",j(i.dernierFait),")"]})]}),(0,d.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,d.jsx)("dt",{children:"dernier résultat de match"}),(0,d.jsxs)("dd",{className:"text-encre font-mono",children:[k(i.dernierResultat)," (",j(i.dernierResultat),")"]})]}),(0,d.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,d.jsx)("dt",{children:"dernière publication de fiches"}),(0,d.jsxs)("dd",{className:"text-encre font-mono",children:[k(i.derniereFiche)," (",j(i.derniereFiche),")"]})]})]})]}),(0,d.jsxs)(l,{titre:"les paris",children:[(0,d.jsxs)("div",{className:"grid grid-cols-4 gap-1.5",children:[(0,d.jsx)(m,{label:"total",valeur:p.total}),(0,d.jsx)(m,{label:"réglés",valeur:p.regles}),(0,d.jsx)(m,{label:"à venir",valeur:p.aVenir}),(0,d.jsx)(m,{label:"attente résultat",valeur:p.enAttenteResultat,alerte:p.enAttenteResultat>0}),(0,d.jsx)(m,{label:"posés / 24 h",valeur:p.poses24h}),(0,d.jsx)(m,{label:"sans score",valeur:p.sansScore}),(0,d.jsx)(m,{label:"groupes",valeur:p.groupes}),(0,d.jsx)(m,{label:"membres",valeur:p.membresGroupes})]}),(0,d.jsxs)("p",{className:"text-[11px] text-sourdine pt-1",children:["dernier prono posé :"," ",(0,d.jsx)("span",{className:"text-encre font-mono",children:j(p.dernierProno)})]})]}),(0,d.jsx)(l,{titre:"les joueurs",children:(0,d.jsx)("div",{className:"space-y-1",children:n.map(a=>(0,d.jsxs)("div",{className:"flex items-center justify-between gap-3 rounded-xl bg-surface-2 border border-ligne px-3 py-2",children:[(0,d.jsxs)("div",{className:"min-w-0",children:[(0,d.jsxs)("p",{className:"text-encre text-sm font-bold leading-tight truncate",children:[a.name,"founder"===a.role?(0,d.jsx)("span",{className:"text-renard font-normal",children:" · fondateur"}):null]}),(0,d.jsx)("p",{className:"text-[10px] text-sourdine-2 truncate",children:a.email})]}),(0,d.jsxs)("div",{className:"text-right shrink-0",children:[(0,d.jsxs)("p",{className:"text-[11px] text-encre font-mono",children:[a.pronos," prono(s) · ",a.regles," réglé(s)"]}),(0,d.jsxs)("p",{className:"text-[10px] text-sourdine-2",children:["vu ",j(a.derniereVisite)]})]})]},a.id))})}),(0,d.jsx)(l,{titre:"les championnats publiés",children:(0,d.jsx)("div",{className:"space-y-1",children:r.filter(a=>a.fiches>0).map(a=>(0,d.jsxs)("div",{className:"flex items-center justify-between gap-3 text-[11px]",children:[(0,d.jsxs)("span",{className:"text-encre font-semibold truncate",children:[(0,d.jsx)("span",{className:"font-mono text-sourdine-2",children:a.code})," ",a.nom]}),(0,d.jsxs)("span",{className:"text-sourdine shrink-0 font-mono",children:[a.fiches," fiches · ",a.aVenir," à venir ·"," ",(0,d.jsxs)("span",{className:a.aVenir>0&&0===a.ancrees?"text-rouge":"",children:[a.ancrees," ancrée(s)"]})]})]},a.code))})}),(0,d.jsx)(l,{titre:"les connexions récentes",children:(0,d.jsx)("div",{className:"space-y-1",children:q.map(a=>(0,d.jsxs)("div",{className:"flex items-center justify-between gap-3 text-[11px]",children:[(0,d.jsx)("span",{className:"text-encre font-semibold truncate",children:a.name}),(0,d.jsxs)("span",{className:"text-sourdine-2 shrink-0 font-mono",children:[j(a.updatedAt),a.ip?` \xb7 ${a.ip}`:""]})]},a.id))})}),(0,d.jsx)(l,{titre:"les derniers passages (sortie complète)",children:(0,d.jsx)("div",{className:"space-y-2",children:0===c.length?(0,d.jsx)("p",{className:"text-[12px] text-sourdine",children:"Rien encore — le premier passage consigné apparaîtra ici avec sa sortie."}):c.map(a=>(0,d.jsxs)("details",{className:`rounded-xl border px-3 py-2 ${a.ok?"border-ligne bg-surface-2":"border-rouge/45 bg-rouge/5"}`,children:[(0,d.jsxs)("summary",{className:"cursor-pointer text-[11px] flex items-center justify-between gap-3",children:[(0,d.jsxs)("span",{className:"font-mono font-bold text-encre",children:[a.ok?"✓":"✗"," ",a.job]}),(0,d.jsxs)("span",{className:"text-sourdine-2",children:[k(a.finishedAt)," · ",a.durationS,"s",a.failedSteps>0?` \xb7 ${a.failedSteps} \xe9chec(s)`:""]})]}),(0,d.jsx)("pre",{className:"mt-2 text-[10px] text-sourdine whitespace-pre-wrap break-words max-h-72 overflow-y-auto font-mono",children:a.output??"(pas de sortie)"})]},a.id))})})]})}a.s(["default",0,n,"dynamic",0,"force-dynamic"]),c()}catch(a){c(a)}},!1),74751,function(a){a.n(a.i(92006))},32096,a=>a.a(async(b,c)=>{try{var d=a.i(21592),e=a.i(31415),f=b([e]);async function g(a=15){return(await e.db.execute(d.sql`
    SELECT id, job, started_at, finished_at, ok, failed_steps, output,
           extract(epoch FROM (finished_at - started_at))::int AS duree
    FROM pipeline_runs
    ORDER BY finished_at DESC
    LIMIT ${a}
  `)).rows.map(a=>({id:Number(a.id),job:a.job,startedAt:new Date(a.started_at).toISOString(),finishedAt:new Date(a.finished_at).toISOString(),ok:!!a.ok,failedSteps:Number(a.failed_steps),output:a.output??null,durationS:Number(a.duree??0)}))}async function h(){return(await e.db.execute(d.sql`
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
  `)).rows.map(a=>({job:a.job,dernier:new Date(a.dernier).toISOString(),depuisS:Number(a.depuis_s),dernierOk:!!a.dernier_ok,echecs24h:Number(a.echecs_24h),passages24h:Number(a.passages_24h)}))}async function i(){let a=(await e.db.execute(d.sql`
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
  `)).rows[0],b=a=>a?new Date(a).toISOString():null;return{matchs:Number(a.matchs),faits:Number(a.faits),predictions:Number(a.predictions),fiches:Number(a.fiches),clubs:Number(a.clubs),championnats:Number(a.championnats),elo:Number(a.elo),dernierFait:b(a.dernier_fait),dernierResultat:b(a.dernier_resultat),derniereFiche:b(a.derniere_fiche),matchsSansResultat:Number(a.matchs_sans_resultat),fichesAVenir:Number(a.fiches_a_venir),fichesAncrees:Number(a.fiches_ancrees)}}async function j(){return(await e.db.execute(d.sql`
    SELECT u.id, u.name, u.email, u.role, u.created_at,
           (SELECT max(s.updated_at) FROM auth_session s WHERE s.user_id = u.id)
             AS derniere_visite,
           count(p.id)::int AS pronos,
           count(p.id) FILTER (WHERE m.status = 'played')::int AS regles,
           coalesce(sum(CASE WHEN m.status = 'played' AND r.payload IS NOT NULL
                              AND p.outcome::text = CASE
                    WHEN (r.payload->>'full_time_home_goals')::int > (r.payload->>'full_time_away_goals')::int THEN 'home'
                    WHEN (r.payload->>'full_time_home_goals')::int = (r.payload->>'full_time_away_goals')::int THEN 'draw'
                    ELSE 'away' END
                  THEN round(100 * (1 - p.p_at_pick)) ELSE 0 END), 0)::int AS points_1x2
    FROM auth_user u
    LEFT JOIN picks p ON p.user_id = u.id
    LEFT JOIN matches m ON m.id = p.match_id
    LEFT JOIN LATERAL (
      SELECT f.payload FROM match_facts f
      WHERE f.match_id = m.id AND f.fact_type = 'result' AND m.status = 'played'
      ORDER BY f.id DESC LIMIT 1
    ) r ON TRUE
    GROUP BY u.id
    ORDER BY pronos DESC, u.created_at
  `)).rows.map(a=>({id:a.id,name:a.name,email:a.email,role:a.role,createdAt:new Date(a.created_at).toISOString(),derniereVisite:a.derniere_visite?new Date(a.derniere_visite).toISOString():null,pronos:Number(a.pronos),regles:Number(a.regles),points1x2:Number(a.points_1x2)}))}async function k(){let a=(await e.db.execute(d.sql`
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
  `)).rows[0];return{total:Number(a.total),regles:Number(a.regles),aVenir:Number(a.a_venir),enAttenteResultat:Number(a.en_attente_resultat),sansScore:Number(a.sans_score),dernierProno:a.dernier_prono?new Date(a.dernier_prono).toISOString():null,poses24h:Number(a.poses_24h),groupes:Number(a.groupes),membresGroupes:Number(a.membres_groupes)}}async function l(a=12){return(await e.db.execute(d.sql`
    SELECT s.id, u.name, u.email, s.created_at, s.updated_at, s.expires_at,
           s.ip_address, s.user_agent
    FROM auth_session s
    JOIN auth_user u ON u.id = s.user_id
    ORDER BY s.updated_at DESC
    LIMIT ${a}
  `)).rows.map(a=>({id:a.id,name:a.name,email:a.email,createdAt:new Date(a.created_at).toISOString(),updatedAt:new Date(a.updated_at).toISOString(),expiresAt:a.expires_at?new Date(a.expires_at).toISOString():null,ip:a.ip_address??null,agent:a.user_agent??null}))}async function m(){return(await e.db.execute(d.sql`
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
  `)).rows.map(a=>({code:a.fd_code,nom:a.name,pays:a.country,fiches:Number(a.fiches),ancrees:Number(a.ancrees),aVenir:Number(a.a_venir),derniere:a.derniere?new Date(a.derniere).toISOString():null}))}[e]=f.then?(await f)():f,a.s(["connexionsRecentes",0,l,"derniersPassages",0,g,"etatChampionnats",0,m,"etatDonnees",0,i,"etatJoueurs",0,j,"etatParis",0,k,"santeRelays",0,h]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=apps_web_src_1npfhdz._.js.map