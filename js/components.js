Vue.component('app-nav', {
    template: `<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
        <h1 id="colorlib-logo"><a href="index.html"><span>Wo</span><span>rk</span></a></h1>
        <nav id="colorlib-main-menu" role="navigation">
            <ul>
               <!-- class="colorlib-active"-->
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/work">Work</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>

        <div class="colorlib-footer">
            <p><small>Copyright &copy;{{year}} All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</span> <span>Demo Images: <a href="http://nothingtochance.co/" target="_blank">nothingtochance.co</a></span></small></p>
<ul>
    <li><a href="#"><i class="icon-facebook2"></i></a></li>
    <li><a href="#"><i class="icon-twitter2"></i></a></li>
    <li><a href="#"><i class="icon-instagram"></i></a></li>
    <li><a href="#"><i class="icon-linkedin2"></i></a></li>
</ul>
</div>
</aside>`,
    data: function () {
        return {
            year: new Date().getFullYear()
        }
    }
});

Vue.component('app-side', {
    template: '<div><a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a><app-nav></app-nav></div>'
});

Vue.component('app-contact', {
    template: '<div id="get-in-touch" class="colorlib-bg-color"><div class="colorlib-narrow-content"><div class="row"><div data-animate-effect="fadeInLeft" class="col-md-6 animate-box fadeInLeft animated"><h2>Get in Touch!</h2></div></div> <div class="row"><div data-animate-effect="fadeInLeft" class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"><p class="colorlib-lead">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> <p><router-link to="/contact">Contact me!</router-link></p></div></div></div></div>'
});