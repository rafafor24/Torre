import { MutationTree } from 'vuex';
import { Opportunity, RootState } from './types';

export const mutations: MutationTree<RootState> = {
    profileLoaded(state, payload: Opportunity[]) {
        state.loaded = true;
        state.opportunities = payload;
    },
    profileError(state) {
        state.loaded = false;
        state.opportunities = [];
    },
    opportunityLoaded(state, payload: Opportunity) {
        console.log(payload);
        console.log("payload");
        state.opportunity = payload;
    }
};