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
        state.opportunity = payload;
    },
    similarOpportunitiesLoaded(state, payload: Opportunity[]) {
        state.similarOpportunitiesLoaded = true;
        state.similarOpportunities = payload;
    },
    shibeLoaded(state, payload: string) {
        state.shibeImage = payload;
    },
    clearSimilarOpportunities(state) {
        state.similarOpportunitiesLoaded = false;
        state.similarOpportunities = [];
    },
    clearOpportunities(state) {
        state.loaded = false;
        state.opportunities = [];
    },
};