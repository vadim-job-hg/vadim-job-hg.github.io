import{r as u,i as w,b,g as k,a as y,f as $,c as j,h as z,d as I,j as A,e as C,k as P}from"./zh-CH.26d05869.js";const M={EnvelopeIcon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>',CakeIcon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" /></svg>',DevicePhoneMobileIcon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>',ComputerDesktopIcon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>',MapPinIcon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>'},U={"en-US":{resume:u,i18n:w},"ru-RU":{resume:b,i18n:k},"bg-BG":{resume:y,i18n:$},"fi-FI":{resume:j,i18n:z},"ja-JA":{resume:I,i18n:A},"zh-CH":{resume:C,i18n:P}};let s="en-US",r=null,c=null;function H(e,t){const n=e.profile.name||"",p=n.split(" ").map(i=>`<span>${(i[0]||"").toUpperCase()}</span>`).join(""),g=e.information.map(i=>{const v=i.icon==="svg"?i.svg:M[i.icon]||"";let o=i.value;return i.icon==="EnvelopeIcon"?o=`<a href="mailto:${i.value}" class="email-link">${i.value}</a>`:i.icon==="DevicePhoneMobileIcon"&&(o=`<a href="tel:${i.value.replace(/[^\d+]/g,"")}" class="phone-link">${i.value}</a>`),`
          <div class="info-item">
            <span class="info-icon">${v}</span>
            <div class="info-text text-justify">
              <div class="info-main">${o}</div>
              <div class="info-label">${i.name}</div>
            </div>
          </div>
        `}).join(""),f=e.language.map(i=>`
        <div class="lang-item">
          <span class="lang-avatar">${i.prefix}</span>
          <div class="lang-info">
            <div class="lang-name">${i.name}</div>
            <div class="lang-level text-justify">${i.level}</div>
          </div>
        </div>
      `).join(""),x=e.skill.map(i=>`
        <div class="skill-badge">
          <span class="skill-text">${i}</span>
        </div>
      `).join(""),m=e.experience.map(i=>`
        <div class="card">
          <div class="card-header">
            <div class="card-title">${i.job}</div>
            <div class="card-period">${i.start} \u2010 ${i.end}</div>
          </div>
          <div class="card-subtitle">${i.company}</div>
          <div class="card-description">${i.description}</div>
        </div>
      `).join(""),h=e.education.map(i=>`
        <div class="card">
          <div class="card-header">
            <div class="card-title">${i.college}</div>
            <div class="card-period">${i.start} - ${i.end}</div>
          </div>
          <div class="card-subtitle mb-24">${i.institution||i.college}</div>
          ${i.course?`<div class="card-footer">${i.course}</div>`:""}
        </div>
      `).join("");return`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 20px; }
    .container { width: 794px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 0; position: relative; }
    .header { position: relative; display: flex; align-items: center; border-bottom: 1px solid #ccc; height: 122px; width: 100%; margin: 0; padding: 0; }
    .bookmark { position: absolute; width: 73px; height: 156px; background-image: url('./src/assets/pdf/bookmark.png'); background-repeat: no-repeat; background-size: 100% 100%; background-position: bottom center; display: flex; flex-direction: column; justify-content: center; align-items: center; left: 33px; top: 0; z-index: 10000; }
    .bookmark span { color: #fff; font-size: 33px; font-weight: 700; line-height: 1; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); width: 100%; text-align: center; letter-spacing: 2px; }
    .title { font-size: 40px; font-weight: 700; padding: 0; margin: 0 0 0 130px; text-align: left; line-height: 1; height: 32px; display: flex; align-items: center; }
    .content-split { display: flex; width: 100%; min-height: 400px; }
    .left-panel, .right-panel { display: flex; flex-direction: column; height: 100%; }
    .section { flex: 1 1 0; display: flex; align-items: flex-start; justify-content: flex-start; font-size: 12px; background: #fff; box-sizing: border-box; min-height: 27px; border-bottom: 1px solid #ccc; padding-top: 33px; padding-bottom: 40px; }
    .section:last-child { border-bottom: none; }
    .left-section { padding-left: 56px; padding-right: 27px; }
    .right-section { flex: 0 1 auto; padding-left: 27px !important; padding-right: 60px !important; }
    .section-1.left-section { padding-top: 73px; height: 370px; min-height: 370px; max-height: 370px; overflow: hidden; }
    .section-2.left-section { height: 232px; min-height: 232px; max-height: 232px; overflow: hidden; }
    .section-3.left-section { display: flex; flex-direction: column; height: 270px; min-height: 270px; max-height: 270px; overflow: hidden; border-bottom: 1px solid #ccc; }
    .left-panel { width: 275px; min-height: 270px; border-right: 1px solid #ccc; box-sizing: border-box; display: flex; flex-direction: column; height: 100%; }
    .left-section-bottom { flex: 1 1 auto; display: flex; flex-direction: column; min-height: 0; padding-top: 33px; }
    .right-panel { flex: 1; min-height: 270px; }
    .info-list { width: 100%; display: flex; flex-direction: column; gap: 12px; }
    .info-item { display: flex; align-items: center; gap: 9px; }
    .info-icon { font-size: 15px; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: transparent; color: inherit; filter: none; font-weight: 700; }
    .info-icon svg { width: 20px; height: 20px; stroke-width: 1.5; }
    .info-item:nth-child(2) .info-icon { filter: grayscale(1) brightness(0.7); opacity: 0.7; }
    .info-item:last-child .info-icon { background: transparent; color: #1976d2; filter: none; opacity: 1; }
    .info-text { text-align: justify; }
    .info-main { font-size: 10px; color: #000; font-weight: 500; }
    .info-label { font-size: 8px; color: #888; }
    .email-link, .phone-link { color: #000; text-decoration: none; }
    .section-title { font-size: 13px; font-weight: 400; margin-bottom: 16px; color: #000; letter-spacing: 1px; text-transform: uppercase; }
    .lang-list-block { width: 100%; }
    .lang-list { display: flex; flex-direction: column; gap: 12px; }
    .lang-item { display: flex; align-items: center; gap: 11px; }
    .lang-avatar { width: 24px; height: 24px; font-size: 17px; display: flex; align-items: center; justify-content: center; background: transparent; font-weight: 700; }
    .lang-info { display: flex; flex-direction: column; }
    .lang-name { font-size: 10px; color: #000; font-weight: 500; }
    .lang-level { font-size: 8px; color: #888; text-align: justify; }
    .skills-block { display: flex; flex-direction: column; flex: 1; }
    .skills-list { display: flex; flex-wrap: wrap; gap: 5px; align-content: flex-start; justify-content: flex-start; flex: 1;
    }
    .skill-badge {
      background: transparent;
      color: #222;
      font-size: 9px;
      font-weight: 700;
      padding: 0;
      margin: 2px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      min-width: 40px;
    }
    .skill-text {
      display: block;
      line-height: 1;
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .heading {
      margin-bottom: 16px;
      letter-spacing: 2px;
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      padding: 0;
      margin-left: 0;
      color: #222;
    }
    .card {
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
      margin-bottom: 21px;
      margin-left: 0;
      width: 100%;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 4px;
    }
    .card-title {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 0;
      color: #222;
      border: none;
      padding: 0;
      letter-spacing: 0;
      text-transform: none;
      flex: 1;
    }
    .card-period {
      font-style: italic;
      font-size: 11px;
      color: #666;
      text-align: right;
      flex-shrink: 0;
      min-width: 93px;
    }
    .card-subtitle {
      font-style: italic;
      font-size: 12px;
      color: #666;
      margin-bottom: 7px;
    }
    .card-description {
      font-size: 14px;
      color: #444;
      margin-bottom: 8px;
      text-align: justify;
    }
    .card-description a {
      color: #1976d2;
      text-decoration: none;
    }
    .card-footer {
      font-size: 10px;
      color: #444;
      margin-bottom: 5px;
      text-align: justify;
    }
    .mb-24 {
      margin-bottom: 16px;
    }
    .text-justify {
      text-align: justify !important;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="bookmark">${p}</div>
    <div class="header">
      <h1 class="title">${n.toUpperCase()}</h1>
    </div>
    <div class="content-split">
      <div class="left-panel">
        <div class="section left-section section-1">
          <div class="info-list">${g}</div>
        </div>
        <div class="section left-section section-2">
          <div class="lang-list-block">
            <div class="section-title">${t.language||"Language"}</div>
            <div class="lang-list">${f}</div>
          </div>
        </div>
        <div class="section left-section section-3 left-section-bottom">
          <div class="skills-block">
            <div class="section-title">${t.skills||"Skills"}</div>
            <div class="skills-list">${x}</div>
          </div>
        </div>
      </div>
      <div class="right-panel">
        <div class="section right-section section-1">
          <div class="content-wrapper">
            <div class="heading">${e.profile.professionalSummaryTitle||"Professional Summary"}</div>
            <div class="card">
              <div class="card-description">${e.profile.aboutMe||""}</div>
            </div>
          </div>
        </div>
        <div class="section right-section section-2">
          <div class="content-wrapper">
            <div class="heading">${t.experience||"Experience"}</div>
            ${m}
          </div>
        </div>
        <div class="section right-section section-3">
          <div class="content-wrapper">
            <div class="heading">${t.education||"Education"}</div>
            ${h}
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
      `}function d(e){const t=U[e];if(!t)return;r=t.resume,c=t.i18n;const n=document.getElementById("previewFrame"),a=H(r,c);n.srcdoc=a}window.changeLanguage=function(e){s=e,d(e)};window.downloadPDF=function(){const e=`cvpdf.html?lang=${s}`;window.open(e,"_blank","width=900,height=1200")};const L=new URLSearchParams(window.location.search),l=L.get("lang")||"en-US";document.getElementById("langSelect").value=l;s=l;d(l);
