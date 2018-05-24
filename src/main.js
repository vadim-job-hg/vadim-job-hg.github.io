

const AboutComponent = require('../components/about.vue');
const ServicesComponent = require('../components/services.vue');
const BlogComponent = require('../components/blog.vue');
const WorkComponent = require('../components/work.vue');
const VueContact = { template: '<div id="colorlib-main"><app-contact-page></app-contact-page></div>'};
const routes = [
    { path: '/', component: AboutComponent },
    { path: '/about', component: AboutComponent },
    { path: '/services', component: ServicesComponent },
    { path: '/blog', component: BlogComponent },
    { path: '/work', component: WorkComponent },
    { path: '/contact', component: VueContact }
];
const router = new VueRouter({
    routes:routes // сокращение от `routes: routes`
});
const app = new Vue({
    router
}).$mount('#colorlib-page');