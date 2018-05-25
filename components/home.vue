<template>
<div>
    <about-component></about-component>
    <services-component></services-component>
</div>
</template>

<script type="text/javascript">
const AboutComponent = require('../components/about.vue');
const ServicesComponent = require('../components/services.vue');
const BlogComponent = require('../components/blog.vue');
const WorkComponent = require('../components/work.vue');
const ContactComponent = require('../components/contact.vue');
const ThanksComponent = require('../components/thanks.vue');

//const VueHome = { template: '<div id="colorlib-main"><app-about></app-about><app-services></app-services><app-work></app-work><app-blog></app-blog><app-contact></app-contact></div>' }
module.exports = {
  data: () => ({
    colour: 'Red'
  }),
  components: {
    AboutComponent,
    ServicesComponent
  }
};
</script>