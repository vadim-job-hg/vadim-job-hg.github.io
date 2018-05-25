<template>
<div>
    <about-component></about-component>
    <services-component></services-component>
    <work-component></work-component>
    <blog-component></blog-component>
    <contact></contact>
</div>
</template>

<script type="text/javascript">
const AboutComponent = require('../components/about.vue');
const ServicesComponent = require('../components/services.vue');
const BlogComponent = require('../components/blog.vue');
const WorkComponent = require('../components/work.vue');
const ContactComponent = require('../components/contact.vue');
const ThanksComponent = require('../components/thanks.vue');
const Contact = require('../components/contact-link.vue');
module.exports = {
  components: {
    AboutComponent,
    ServicesComponent,
    WorkComponent,
    BlogComponent,
    Contact
  }
};
</script>