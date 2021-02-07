import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from './types'
import { actions } from './actions'
import { mutations } from './mutations'

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore<RootState>({
  state: {
    loaded: false,
    opportunities: []
  },
  actions,
  mutations
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}