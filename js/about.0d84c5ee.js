"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[443],{4186:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var i=n(6252);const a={class:"container mx-auto"},s={class:"container mx-auto"};function r(t,e,n,r,l,o){const c=(0,i.up)("AboutMe"),d=(0,i.up)("AboutClients");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,[(0,i.Wm)(c)]),(0,i._)("div",s,[(0,i.Wm)(d)])])}var l=n(3577),o=n.p+"img/AliYassine_Standard.ceb79c54.png";const c={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},d=(0,i._)("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[(0,i._)("img",{src:o,class:"rounded-xl w-96",alt:""})],-1),u={class:"w-full sm:w-3/4 text-left"};function g(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",c,[d,(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.bios,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},(0,l.zw)(t.bio),1)))),128))])])}var m={setup(){return{bios:[{id:1,bio:"PhD student at Politecnico di Torino in the Department of Computer and Control Engineering, focusing on Artificial Intelligence. My research delves into time series analysis and Deep Natural Language Processing (DNLP) as key areas within AI. I have obtained my Master of Science in Data Science and Engineering with a grade of 105/110, and I aim to bridge academic research and industry applications to develop advanced AI solutions."}]}}},p=n(3744);const w=(0,p.Z)(m,[["render",g]]);var f=w;const b={class:"mt-10 sm:mt-20"},h={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},v={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function k(t,e,n,a,s,r){const o=(0,i.up)("AboutClientSingle");return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("p",h,(0,l.zw)(s.clientsHeading),1),(0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.clients,(t=>((0,i.wg)(),(0,i.j4)(o,{key:t.id,client:t},null,8,["client"])))),128))])])}var y=n(7066);const x=["src","alt"];function _(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("img",{src:n.client.img,alt:n.client.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,x)])}var D={props:["client"]};const A=(0,p.Z)(D,[["render",_]]);var C=A,S={components:{AboutClientSingle:C},data(){return{clientsHeading:"Some of my skills",clients:[]}},async created(){await this.fetchSkills()},methods:{async fetchSkills(){try{const t="https://api.github.com/gists/11f38768062e6e8ce83aea4581916355",e=await y.Z.get(t),n=e.data.files["website.json"].raw_url,i=await y.Z.get(n);this.clients=i.data.skills}catch(t){console.error("Error fetching skills:",t)}}}};const Z=(0,p.Z)(S,[["render",k]]);var I=Z,j=n(8508),H=n.n(j),M={name:"About",created(){this.$gtag.pageview(this.$route)},components:{AboutMe:f,AboutClients:I},data:()=>({}),mounted(){H().replace()},updated(){H().replace()},methods:{}};const P=(0,p.Z)(M,[["render",r]]);var E=P}}]);
//# sourceMappingURL=about.0d84c5ee.js.map