import{d as l,o as a,c as r,a as e,u as i,g as p,t as s,b as d,_ as v,e as _,f as $,s as w,h as x,F as f,i as C,j as P,k as I,r as V}from"./index.daebe9f5.js";import{_ as S}from"./MyPaginate.vue_vue_type_style_index_0_lang.b23706b2.js";const E={class:"mb-5 flex items-start"},N=["src"],j={class:"ml-3 w-full space-y-5"},D={class:"items-start justify-between sm:flex"},L={class:"mb-1 space-y-1.5"},R={class:"font-medium dark:text-night-50"},T={class:"flex space-x-5"},A={class:"flex items-start gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},F={class:"max-w-sm"},q={class:"items-start space-y-2"},O={class:"flex gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},z={key:0,class:"border-b border-dashed border-gray-200 dark:border-night-600"},G=l({__name:"EducationCardItem",props:{item:null,separator:{type:Boolean}},setup(t){return(n,o)=>(a(),r("div",E,[e("img",{src:i(p)(t.item.collegeLogo),alt:"Avatar",class:"h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"},null,8,N),e("div",j,[e("div",D,[e("div",L,[e("div",R,s(t.item.college),1),e("div",T,[e("div",A,[e("span",F,s(t.item.course),1)])])]),e("div",q,[e("div",O,[d(v,{icon:"CalendarIcon",class:"h-4 w-4 shrink-0"}),e("span",null,s(t.item.start)+" \u2013 "+s(t.item.end),1)])])]),t.separator?(a(),r("div",z)):_("",!0)])]))}}),H={class:"card"},J={class:"mb-5 text-lg font-semibold dark:text-night-50"},K=l({__name:"EducationCard",setup(t){const n=$(),{resume:o}=w(n),g=x(()=>o.value.education.length);return(m,b)=>(a(),r("div",H,[e("h2",J,s(m.$t("education")),1),(a(!0),r(f,null,C(i(o).education,(u,h)=>(a(),P(G,{key:h,item:u,separator:i(g)>h+1},null,8,["item","separator"]))),128))]))}}),M={class:"mb-5 flex items-start"},Q=["src"],U={class:"ml-3 w-full space-y-5"},W={class:"items-start justify-between sm:flex"},X={class:"mb-2 space-y-1.5 text-gray-400 dark:text-night-400"},Y={class:"font-medium text-gray-900 dark:text-night-50"},Z={class:"text-sm font-medium"},ee={class:"text-xs"},te={key:0,class:"text-xs"},se={class:"rounded-xl bg-primary-500/10 py-1 px-1 text-primary-500"},ae=["href"],re={key:0,class:"hidden border-b border-dashed border-gray-200 dark:border-night-600"},oe=l({__name:"CertificateCardItem",props:{item:null,separator:{type:Boolean}},setup(t){return(n,o)=>(a(),r("div",M,[e("img",{src:i(p)(t.item.schoolLogo),alt:"school logo",class:"h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"},null,8,Q),e("div",U,[e("div",W,[e("div",X,[e("div",Y,s(t.item.course),1),e("span",Z,s(t.item.course),1),e("div",ee,s(t.item.issueDate)+" \xB7 "+s(t.item.expirationDate),1),t.item.credentialCode?(a(),r("div",te,[I(s(n.$t("credential_code"))+" ",1),e("span",se,s(t.item.credentialCode),1)])):_("",!0)]),t.item.url?(a(),r("a",{key:0,href:t.item.url,target:"_blank",class:"inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-100 px-2 py-2 text-xs text-gray-400 hover:bg-gray-100 dark:border-night-700 dark:text-night-300 dark:hover:bg-night-700"},[e("span",null,s(n.$t("credential")),1),d(v,{icon:"ArrowTopRightOnSquareIcon",class:"h-4 w-4 stroke-2"})],8,ae)):_("",!0)]),t.separator?(a(),r("div",re)):_("",!0)])]))}}),ne={class:"card"},ie={class:"mb-5 text-lg font-semibold dark:text-night-50"},ce=l({__name:"CertificateCard",setup(t){const o=V(1),g=$(),{resume:m}=w(g),b=x(()=>m.value.certificate.length),u=x(()=>{const c=(o.value-1)*3,y=c+3;return m.value.certificate.slice(c,y)});function h(c){o.value=c}return(c,y)=>(a(),r("div",ne,[e("h2",ie,s(c.$t("license")),1),(a(!0),r(f,null,C(i(u),(B,k)=>(a(),P(oe,{key:k,item:B,separator:i(u).length>k+1},null,8,["item","separator"]))),128)),d(S,{totalItems:i(b),itemsPerPage:3,maxVisibleButtons:3,onPagechanged:h},null,8,["totalItems"])]))}}),me=l({__name:"EducationView",setup(t){return(n,o)=>(a(),r(f,null,[d(K),d(ce)],64))}});export{me as default};
