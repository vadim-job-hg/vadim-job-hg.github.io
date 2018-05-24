const HomeComponent = require('../components/home.vue');
const VueAbout = { template: '<div id="colorlib-main"><app-about></app-about></div>'};
const VueServices = { template: '<div id="colorlib-main"><app-services></app-services></div>'};
const VueBlog = { template: '<div id="colorlib-main"><app-blog></app-blog></div>'};
const VueWork = { template: '<div id="colorlib-main"><app-work></app-work></div>'};
const VueContact = { template: '<div id="colorlib-main"><app-contact-page></app-contact-page></div>'};
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: VueAbout },
    { path: '/services', component: VueServices },
    { path: '/blog', component: VueBlog },
    { path: '/work', component: VueWork },
    { path: '/contact', component: VueContact }
];
const router = new VueRouter({
    routes:routes // сокращение от `routes: routes`
});
const app = new Vue({
    router
}).$mount('#colorlib-page')