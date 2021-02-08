export interface Opportunity {
    objective: string;
    status: string;
    id: string;
    imageURL: string;
}

export interface RootState {
    loaded: boolean;
    opportunities: Opportunity[];
    opportunity: Opportunity;
    similarOpportunities: Opportunity[];
}