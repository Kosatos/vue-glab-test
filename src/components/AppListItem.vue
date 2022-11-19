<template>
  <li class="item">
    <label class="item__checkbox"
      ><input type="checkbox" v-model="isChecked" /> {{ item.title }}</label
    >
  </li>
</template>

<script>
export default {
  props: {
    items: Array,
    item: Object,
    path: Array,
  },
  data() {
    return {
      newChecked: this.item.checked,
    }
  },
  mounted() {},
  computed: {
    isChecked: {
      get() {
        return this.item.checked
      },
      set(value) {
        this.newChecked = value
        this.onChange()
      },
    },
    itemIdx() {
      return this.items.findIndex((item) => item.title === this.item.title)
    },
    newPath() {
      return [...this.path, this.itemIdx]
    },
  },
  methods: {
    onChange() {
      this.$store.commit('toggleItemChecked', {
        path: this.newPath,
        checked: this.newChecked,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  margin-left: 100px;

  &__checkbox {
    line-height: 20px;

    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
