import { ActionTree } from 'vuex';
import axios from 'axios';
import { RootState, Opportunity } from './types';
import { parseQuery } from 'vue-router';


export const actions: ActionTree<RootState, RootState> = {
    fetchData({ commit }, term?: string): any {
        axios({
            method: 'post',
            url: 'https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=en&size=5&aggregate=false&offset=0',
            //data: "{ \"and\": [{ \"bestfor\": { \"username\": \"raforero11\" } }",
            data: term ? { "and": [{ "organization": term }, { "status": { "code": "open" } },] } : { "status": { "code": "open" } },
        }).then((response: any) => {
            const payload: Opportunity[] = response.data.results.map((o: any) => {
                const op: Opportunity = {
                    id: o.id,
                    objective: o.objective,
                    status: o.status,
                    imageURL: o.organizations[0].picture
                };
                return op
            });
            commit('profileLoaded', payload);
        }, (error: any) => {
            commit('profileError');
        });
    },
    fetchOpportunity({ commit }, id: string): any {
        axios({
            url: `https://torre.co/api/opportunities/${id}`,
        }).then((response: any) => {
            const payload: Opportunity = {
                id: response.data.id,
                objective: response.data.objective,
                status: response.data.status,
                imageURL: response.data.organizations[0].picture
            };
            commit('opportunityLoaded', payload);
        }, (error: any) => {
            commit('profileError');
        });
    },
    fetchSimilarOpportunities({ commit }, id: string): any {
        axios({
            url: `https://torre-backed.herokuapp.com/api/opportunity/similar/${id}`,
        }).then((response: any) => {
            commit('similarOpportunitiesLoaded', response.data);
        }, (error: any) => {
            commit('profileError');
        });
    }
};