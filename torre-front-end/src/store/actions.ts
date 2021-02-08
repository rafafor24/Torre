import { ActionTree } from 'vuex';
import axios from 'axios';
import { RootState, Opportunity } from './types';


export const actions: ActionTree<RootState, RootState> = {
    fetchData({ commit }, term?: string): any {
        axios({
            method: 'post',
            url: 'https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=en&size=5&aggregate=false&offset=0',
            //data: "{ \"and\": [{ \"bestfor\": { \"username\": \"raforero11\" } }",
            data: term ? { "and": [{ "organization": term }, { "status": { "code": "open" } },] } : { "status": { "code": "open" } },
        }).then((response: any) => {
            console.log(response);
            const payload: Opportunity[] = response.data.results;
            commit('profileLoaded', payload);
        }, (error: any) => {
            console.log(error);
            commit('profileError');
        });
    },
    fetchOpportunity({ commit }, id: string): any {
        console.log(id);
        axios({
            url: `https://torre.co/api/opportunities/${id}`,
        }).then((response: any) => {
            console.log(response);
            //const payload: Opportunity[] = response.data.results;
            //commit('profileLoaded', payload);
        }, (error: any) => {
            console.log(error);
            //commit('profileError');
        });
    }
};