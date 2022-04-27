export interface ID {
    readonly id: number;
}

export enum _Type {
  Income = 'Income',
  Expense = 'Expense',
}

export interface Category extends ID {
  readonly type: _Type | '';
  readonly name: string;
  readonly deleted: boolean;
}

export interface Balance extends ID {
  readonly category: Category;
  readonly applyDate: Date;
  readonly total: number;
  readonly employee: string;
}

export interface BalanceDetails extends ID {
  readonly balance: Balance;
  readonly item: string;
  readonly quantity: number;
  readonly price: number;
  readonly remark: string;
} 

export interface BalanceWithDetails {
  readonly balance: Balance;
  readonly balanceDetails: BalanceDetails[];
}

