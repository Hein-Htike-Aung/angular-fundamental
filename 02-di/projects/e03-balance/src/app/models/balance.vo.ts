import { Category, ID } from "./balance.model";

export interface BalanceVO extends ID{

    readonly applyDate: Date;
    readonly category: Category;
    readonly employee: string;
    readonly total: number;
}

export interface BalanceSearch {
    type: string;
    category: Category;
    dateFrom: string;
    dateTo: string;
}

export interface BalanceDetailsSearch {
    category: Category;
    dateFrom: string;
    dateTo: string;
}