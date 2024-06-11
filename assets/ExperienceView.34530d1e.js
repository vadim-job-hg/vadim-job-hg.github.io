import{d as m,o as n,c,a as e,u as i,g as v,t as s,b as o,_ as l,e as P,r as w,f as I,s as B,h as x,F as $,i as C,j as p}from"./index.03fe2153.js";import{_ as V}from"./MyPaginate.vue_vue_type_style_index_0_lang.6cdb1388.js";const j={class:"mb-5 flex items-start"},E=["src"],L={class:"ml-3 w-full space-y-5"},T={class:"justify-between sm:flex"},M={class:"space-y-2"},N={class:"font-medium dark:text-night-50"},S={class:"space-y-1 sm:flex sm:space-x-5"},F={class:"flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},H={class:"flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},R={class:"flex items-start justify-between space-y-1 sm:block sm:text-right"},A={class:"order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500"},D={class:"flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400"},q=["innerHTML"],z={key:0,class:"border-b border-dashed border-gray-200 dark:border-night-600"},G=m({__name:"ExperienceCardItem",props:{item:null,separator:{type:Boolean}},setup(t){return(d,r)=>(n(),c("div",j,[e("img",{src:i(v)(t.item.companyLogo),alt:"Avatar",class:"h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700"},null,8,E),e("div",L,[e("div",T,[e("div",M,[e("div",N,s(t.item.job),1),e("div",S,[e("div",F,[o(l,{icon:"BriefcaseIcon",class:"h-4 w-4 shrink-0"}),e("span",null,s(t.item.company),1)]),e("div",H,[o(l,{icon:"MapPinIcon",class:"h-4 w-4 shrink-0"}),e("span",null,s(t.item.location),1)])])]),e("div",R,[e("div",A,s(t.item.workType),1),e("div",D,[o(l,{icon:"CalendarIcon",class:"h-4 w-4 shrink-0"}),e("span",null,s(t.item.start)+" - "+s(t.item.end),1)])])]),e("p",{class:"description text-sm text-gray-600 dark:text-night-300",innerHTML:t.item.description},null,8,q),t.separator?(n(),c("div",z)):P("",!0)])]))}}),J={class:"card"},K={class:"mb-4 text-lg font-semibold dark:text-night-50"},O=m({__name:"ExperienceCard",setup(t){const r=w(1),f=I(),{resume:u}=B(f),y=x(()=>u.value.experience.length),h=x(()=>{const a=(r.value-1)*4,_=a+4;return u.value.experience.slice(a,_)});function k(a){r.value=a}return(a,_)=>(n(),c("div",J,[e("h2",K,s(a.$t("experience")),1),(n(!0),c($,null,C(i(h),(b,g)=>(n(),p(G,{key:g,item:b,separator:i(h).length>g+1},null,8,["item","separator"]))),128)),o(V,{totalItems:i(y),itemsPerPage:4,maxVisibleButtons:3,onPagechanged:k},null,8,["totalItems"])]))}}),W=m({__name:"ExperienceView",setup(t){return(d,r)=>(n(),p(O))}});export{W as default};