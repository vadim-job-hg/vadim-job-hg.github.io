<template>
<div>
<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
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
    <li><a href="https://www.facebook.com/vadim.kuznetsov.86" target="_blank"><i class="icon-facebook2"></i></a></li>
    <li><a href="https://www.instagram.com/vadimus_hg/" target="_blank"><i class="icon-instagram"></i></a></li>
    <li><a href="https://www.linkedin.com/in/vadim-kuznetsov-60605193/" target="_blank"><i class="icon-linkedin2"></i></a></li>
    <li><a href="https://github.com/vadim-job-hg/" target="_blank"><i class="icon-github"></i></a></li>
</ul>
</div>
</aside>
</div>
</template>
<script type="text/javascript">
module.exports = {
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>
<script src="../js/main.js"></script>