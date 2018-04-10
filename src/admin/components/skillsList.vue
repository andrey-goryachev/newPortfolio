<template lang='pug'>
  .skills-list
    .skill-title {{skillsType}}
    table
</template>

<script>
  export default {
    props: {
      skillsType: String
    }
  }
</script>

<style lang='scss' scoped>
  .skill-title {
    font: 13px $rm;
    color: $gray;
  }
</style>
