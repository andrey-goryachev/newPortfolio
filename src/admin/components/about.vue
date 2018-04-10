<template lang="pug">
  .about-section
    h1 Страница "Обо мне"
    skillsList(v-for="skillsType in skillsTypes"
      :key="skillsType"
      :skillsType="skillsType"
    )

</template>

<script>
import skillsList from './skillsList.vue'

export default {
  components: {
    skillsList
  },
  data () {
    return {
      skills: [],
      skillsTypes: ['Frontend', 'Workflow', 'Backend']
    };
  },
  mounted() {
    fetch('./data.json').then(data => {
      return data.json()
    }).then(responce => {
      console.log(responce)
    })
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font: 21px $rm;
    color: $gray;
  }
</style>

