export interface Opportunity {
    objective: string;
    status: string;
}

export interface RootState {
    loaded: boolean;
    opportunities: Opportunity[];
}