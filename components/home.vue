<template>
<div>
    <about></about>
</div>
</template>

<script type="text/javascript">
const About = require('./about.vue');

module.exports = {
  data: () => ({
    colour: 'Red'
  }),
  components: {
    About
  }
};
</script>