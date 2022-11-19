import { createStore } from 'vuex'

export default createStore({
  state: {
    lists: [
      {
        title: 'List 1',
        checked: false,
        categories: [
          {
            title: 'Item 1.1',
            checked: false,
          },
          {
            title: 'Item 2.1',
            checked: false,
          },
          {
            title: 'Item 3.1',
            checked: false,
          },
          {
            title: 'Item 4.1',
            checked: false,
          },
        ],
      },
      {
        title: 'List 2',
        checked: false,
        categories: [
          {
            title: 'Item 2.1',
            checked: false,
          },
          {
            title: 'Item 2.2',
            checked: false,
          },
          {
            title: 'Item 2.3',
            checked: false,
          },
          {
            title: 'Item 2.4',
            checked: false,
          },
          {
            title: 'Item 2.5',
            checked: false,
          },
          {
            title: 'Item 2.6',

            checked: false,
          },
          {
            title: 'Item 2.7',
            checked: false,
          },
        ],
      },
      {
        title: 'List 3',
        checked: false,
        categories: [
          {
            title: 'Item 3.1',
            checked: false,
          },
          {
            title: 'Item 3.2',
            checked: false,
          },
          {
            title: 'Item 3.3',
            checked: false,
          },
          {
            title: 'Item 3.4',
            checked: false,
          },
          {
            title: 'Item 3.5',
            checked: false,
          },
          {
            title: 'Item 3.6',
            checked: false,
          },
          {
            title: 'Item 3.7',
            checked: false,
          },
          {
            title: 'Item 3.8',
            checked: false,
          },
          {
            title: 'Item 3.9',
            checked: false,
          },
          {
            title: 'Item 3.10',
            checked: false,
          },
        ],
      },
      {
        title: 'List 4',
        checked: false,
        categories: [
          {
            title: 'Item 4.1',
            checked: false,
          },
          {
            title: 'Item 4.2',
            checked: false,
          },
          {
            title: 'Item 4.3',
            checked: false,
          },
          {
            title: 'Item 4.4',
            checked: false,
          },
          {
            title: 'Item 4.5',
            checked: false,
          },
          {
            title: 'Item 4.6',
            checked: false,
          },
          {
            title: 'Item 4.7',
            checked: false,
          },
          {
            title: 'Item 4.8',
            checked: false,
          },
        ],
      },
      {
        title: 'List 5',
        checked: false,
        categories: [
          {
            title: 'Item 5.1',
            checked: false,
          },
          {
            title: 'Item 5.2',
            checked: false,
          },
          {
            title: 'Item 5.3',
            checked: false,
          },
          {
            title: 'Item 5.4',
            checked: false,
          },
          {
            title: 'Item 5.5',
            checked: false,
          },
          {
            title: 'Item 5.6',
            checked: false,
          },
        ],
      },
    ],
  },
  mutations: {
    toggleItemChecked(state, { path, checked }) {
      const item = path.reduce((item, idx) => {
        return item.categories ? item.categories[idx] : item[idx]
      }, state.lists)

      const parentList = path.slice(path.length - 1).reduce((item, idx) => {
        return item.categories ? item.categories[idx] : item[idx]
      }, state.lists)

      item.checked = checked

      parentList.checked = list.categories.every(({ checked }) => checked)
    },

    toggleListChecked(state, { checked, list }) {
      const listIdx = state.lists.indexOf(list)
      state.lists[listIdx].checked = checked
      state.lists[listIdx].categories.forEach(
        (item) => (item.checked = checked)
      )
    },
  },
})
