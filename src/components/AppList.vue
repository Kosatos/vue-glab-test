<template>
  <div class="list">
    <div class="list__actions">
      <div
        class="list__open"
        :class="{ _checked: visible }"
        @click="openList"
      ></div>
      <label class="list__checkbox">
        <input type="checkbox" v-model="isChecked" />
        {{ list.title }}
      </label>
    </div>

    <ul class="item-list" :class="{ _hidden: !visible }">
      <app-list-item
        v-for="item in list.categories"
        :key="item.title"
        :items="list.categories"
        :listIdx="listIdx"
        :item="item"
      ></app-list-item>
    </ul>
  </div>
</template>

<script>
import AppListItem from './AppListItem.vue'
export default {
  props: {
    list: Object,
  },
  data() {
    return {
      visible: false,
      newChecked: this.list.checked,
    }
  },
  computed: {
    isChecked: {
      get() {
        return this.list.checked
      },
      set(value) {
        this.newChecked = value
        this.onChange()
      },
    },
    listIdx() {
      return this.$store.state.lists.findIndex(
        (list) => list.title === this.list.title
      )
    },
  },
  methods: {
    openList() {
      this.visible = !this.visible
    },
    onChange() {
      this.visible = this.newChecked
      this.$store.commit('toggleListChecked', {
        checked: this.newChecked,
        list: this.list,
      })
    },
  },
  components: {
    AppListItem,
  },
}
</script>

<style lang="scss" scoped>
.list {
  position: relative;
  &__actions {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  &__open {
    margin-right: 5px;
    width: 25px;
    height: 25px;
    background-image: url(../assets/icons/chevron.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(0);
    transition: transform 0.3s ease;

    &._checked {
      transform: rotate(0.25turn);
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ul {
    padding: 10px 10px 20px;
  }
}

.item-list {
  &._hidden {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
