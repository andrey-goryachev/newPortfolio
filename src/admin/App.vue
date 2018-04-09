<template lang="pug">
  .admin
    app-header
    tabs
    .content
  
</template>

<script>
import header from "./components/header.vue" 
import tabs from "./components/tabs.vue"

export default {
  components: {
    appHeader: header,
    tabs: tabs
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
  }
</style>
