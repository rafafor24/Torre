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

export default { similarOpportunities: getSimilarOpportunities };
