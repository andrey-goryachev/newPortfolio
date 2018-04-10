<template lang="pug">
  .admin
    app-header
    tabs
    .content
      about
  
</template>

<script>
import header from "./components/header.vue" 
import tabs from "./components/tabs.vue"
import about from "./components/about.vue"

export default {
  components: {
    appHeader: header,
    tabs,
    about
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/components/fonts.scss';
  @import '../styles/common/normalize.scss';

  .admin {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }

  .content {
    flex: 1;
    background: url(~img/admin-bg.png) center center no-repeat / cover;
  }
</style>
