<template>
  <div class="container">
    <ul class="app-list">
      <li v-for="list in $store.state.lists" :key="list.title">
        <app-list :list="list"></app-list>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppList from './components/AppList.vue'

export default {
  components: {
    AppList,
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 50px 15px;
}
.app-list {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

  li:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
