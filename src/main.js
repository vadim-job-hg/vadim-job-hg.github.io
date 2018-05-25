const HomeComponent = require('../components/home.vue');
const AboutComponent = require('../components/about.vue');
const ServicesComponent = require('../components/services.vue');
const BlogComponent = require('../components/blog.vue');
const WorkComponent = require('../components/work.vue');
const ContactComponent = require('../components/contact.vue');
const ThanksComponent = require('../components/thanks.vue');
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/services', component: ServicesComponent },
    { path: '/blog', component: BlogComponent },
    { path: '/work', component: WorkComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/thanks', component: ThanksComponent }
];
const router = new VueRouter({
    routes:routes // сокращение от `routes: routes`
});
const app = new Vue({
    router
}).$mount('#colorlib-page');