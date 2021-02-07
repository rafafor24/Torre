import { GetterTree } from 'vuex';
import { Opportunity } from './types';
import { RootState } from './types';

export const getters: GetterTree<RootState, RootState> = {
    size(state): number {
        const { opportunities } = state;
        return opportunities.length;
    }
};