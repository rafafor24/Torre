import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

const getSimilarOpportunities = (req: Request, res: Response, next: NextFunction) => {
    axios({
        url: `https://torre.co/api/opportunities/${req.params.id}`
    }).then(
        (response: any) => {
            const skills: any = response.data.strengths.map((s: any) => {
                return { skill: { term: s.name, experience: 'potential-to-develop' } };
            });
            const queryParams: any = { and: [...skills, { status: { code: 'open' } }] };
            axios({
                method: 'post',
                url: 'https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=en&size=25&aggregate=false&offset=0',
                data: queryParams
            }).then(
                (response2: any) => {
                    return res.status(200).json(
                        response2.data.results.map((o: any) => {
                            return { id: o.id, objective: o.objective, status: o.status, imageURL: o.organizations[0].picture };
                        })
                    );
                },
                (error: any) => {
                    return res.status(500).json(error);
                }
            );
        },
        (error: any) => {
            return res.status(500).json(error);
        }
    );
};

const searchPlainTextAndRank = (plaintext: string, search: string, caseSensitive: boolean) => {
    var plaintextLen = search.length;
    if (plaintextLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        plaintext = plaintext.toLowerCase();
        search = search.toLowerCase();
    }
    while ((index = plaintext.indexOf(search, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + plaintextLen;
    }
    return indices;
}

const getOpportunities = (req: Request, res: Response, next: NextFunction) => {
    axios({
        method: 'post',
        url: 'https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=en&size=1000&aggregate=false&offset=0',
        data: { status: { code: 'open' } }
    }).then((response: any) => {
        //const payload: any = response.data.results.map((o: any) => { return { id: o.id, plaintext: JSON.stringify(o) } });
        const payload: any = response.data.results.map((o: any) => {
            return { id: o.id, objective: o.objective, status: o.status, imageURL: o.organizations[0].picture, order: searchPlainTextAndRank(JSON.stringify(o), req.params.text, false).length };
        }).filter((o: any) => o.order > 0).sort((a: any, b: any) => b.order - a.order);
        return res.status(200).json(payload);
    }, (error: any) => {
    });
};



export default {
    similarOpportunities: getSimilarOpportunities,
    searchOpportunities: getOpportunities
};
