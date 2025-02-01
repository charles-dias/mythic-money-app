export interface Expense {
  id?: string;
  name: string;
  date: Date;
  cost: number;
}

export interface Limit {
  id?: string;
  value: number;
  name: string;
  type: string;
}
