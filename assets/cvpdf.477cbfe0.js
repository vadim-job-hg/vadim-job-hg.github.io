import{r as p,i as f,b as I,g as $,a as y,f as E,c as k,h as b,d as h,j as L,e as B,k as C}from"./zh-CH.26d05869.js";const P={EnvelopeIcon:"\u2709",CakeIcon:"\u{1F382}",DevicePhoneMobileIcon:"\u{1F4F1}",ComputerDesktopIcon:"\u{1F4BB}",MapPinIcon:"\u{1F4CD}"},T={"en-US":{resume:p,i18n:f},"ru-RU":{resume:I,i18n:$},"bg-BG":{resume:y,i18n:E},"fi-FI":{resume:k,i18n:b},"ja-JA":{resume:h,i18n:L},"zh-CH":{resume:B,i18n:C}};let n=null,t=null;function x(){if(!n||!t)return;const a=n.profile.name||"",i=a.split(" "),s=document.getElementById("bookmark");s.innerHTML=i.map(e=>`<span>${(e[0]||"").toUpperCase()}</span>`).join(""),document.getElementById("profileName").textContent=a.toUpperCase();const o=document.getElementById("infoList");o.innerHTML=n.information.map(e=>{const l=e.icon==="svg"?e.svg:P[e.icon]||"";let c=e.value;return e.icon==="EnvelopeIcon"?c=`<a href="mailto:${e.value}" class="email-link">${e.value}</a>`:e.icon==="DevicePhoneMobileIcon"&&(c=`<a href="tel:${e.value.replace(/[^\d+]/g,"")}" class="phone-link">${e.value}</a>`),`
          <div class="info-item">
            <span class="info-icon">${l}</span>
            <div class="info-text text-justify">
              <div class="info-main">${c}</div>
              <div class="info-label">${e.name}</div>
            </div>
          </div>
        `}).join(""),document.getElementById("languageTitle").textContent=t.language||"Language";const m=document.getElementById("langList");m.innerHTML=n.language.map(e=>`
        <div class="lang-item">
          <span class="lang-avatar">${e.prefix}</span>
          <div class="lang-info">
            <div class="lang-name">${e.name}</div>
            <div class="lang-level text-justify">${e.level}</div>
          </div>
        </div>
      `).join(""),document.getElementById("skillsTitle").textContent=t.skills||"Skills";const u=document.getElementById("skillsList");u.innerHTML=n.skill.map(e=>`
        <div class="skill-badge">
          <span class="skill-text">${e}</span>
        </div>
      `).join(""),document.getElementById("summaryTitle").textContent=n.profile.professionalSummaryTitle||"Professional Summary",document.getElementById("aboutMe").textContent=n.profile.aboutMe||"",document.getElementById("experienceTitle").textContent=t.experience||"Experience";const v=document.getElementById("experienceList");v.innerHTML=n.experience.map((e,l)=>`
        <div class="card${l===4?" page-break":""}">
          <div class="card-header">
            <div class="card-title">${e.job}</div>
            <div class="card-period">${e.start} \u2010 ${e.end}</div>
          </div>
          <div class="card-subtitle">${e.company}</div>
          <div class="card-description">${e.description}</div>
        </div>
      `).join(""),document.getElementById("educationTitle").textContent=t.education||"Education";const g=document.getElementById("educationList");g.innerHTML=n.education.map(e=>`
        <div class="card">
          <div class="card-header">
            <div class="card-title">${e.college}</div>
            <div class="card-period">${e.start} - ${e.end}</div>
          </div>
          <div class="card-subtitle mb-24">${e.institution||e.college}</div>
          ${e.course?`<div class="card-footer">${e.course}</div>`:""}
        </div>
      `).join("")}async function j(a){const i=document.getElementById("pdfContent"),s=`VadymKuznetsov_${a}.pdf`;window.scrollTo(0,0),console.log("Generating PDF with 2 pages...");const o={margin:0,filename:s,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,logging:!1,scrollY:0,scrollX:0,windowHeight:i.offsetHeight},jsPDF:{unit:"mm",format:"a4",orientation:"portrait",compress:!0},pagebreak:{mode:"css",before:".page-break"}};await html2pdf().set(o).from(i).save(),window.close()}const w=new URLSearchParams(window.location.search),d=w.get("lang")||"en-US",r=T[d];r&&(n=r.resume,t=r.i18n,x(),console.log("Resume rendered, waiting before PDF generation..."),setTimeout(()=>{console.log("Starting PDF generation..."),j(d)},1500));
