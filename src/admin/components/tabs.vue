<template lang='pug'>
  .tabs
    ul.list
      li.item(v-for='tab in tabs')
        a.link(href='') {{tab}} 
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        'TAB1',
        'TAB2',
        'TAB3',
        'TAB4',
        ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    background: #f0efe9;
  }

  .item {
    border-right: 2px solid #fff;
  }

  .link {
    padding: 20px;
    display: block;
    font: 16px $rm;
    color: $gray;
    text-decoration: none;
    background: #f0efe9;
  }
</style>
