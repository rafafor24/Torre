import { MutationTree } from 'vuex';
import { Opportunity, RootState } from './types';

export const mutations: MutationTree<RootState> = {
    profileLoaded(state, payload: Opportunity[]) {
        state.loaded = true;
        console.log(payload);
        state.opportunities = payload;
    },
    profileError(state) {
        state.loaded = false;
        state.opportunities = [];
    }
};