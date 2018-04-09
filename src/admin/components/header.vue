<template lang="pug">
  .header
    h1 Панель администрирования
    a.back-site(href='') Вернуться на сайт
</template>


<script>


</script>


<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    height: 80px;
    background: $blueLight;
    align-items: center;
    color: #fff;
    h1 {
      font: 28px $rm;
    }
    a {
      color: inherit;
      font: 16px $rm;
    }
  }
</style>


