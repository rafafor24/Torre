export interface Opportunity {
    objective: string;
    status: string;
    id: string;
}

export interface RootState {
    loaded: boolean;
    opportunities: Opportunity[];
}