import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expense } from '@shared/interfaces/expense.interface';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];

  addExpense(expense: Expense): Observable<Expense> {
    const newExpense = {
      id: crypto.randomUUID(),
      ...expense,
    };
    this.expenses.push(newExpense);

    console.log('New expense added:', newExpense);

    return of(newExpense);
  }

  getExpenses(): Observable<Expense[]> {
    const data = [
      {
        id: '1',
        name: 'Aluguel',
        date: new Date(),
        cost: 1000,
      },
      {
        id: '2',
        name: 'Mercado',
        date: new Date(),
        cost: 500,
      },
      {
        id: '3',
        name: 'Combustível',
        date: new Date(),
        cost: 200,
      },
      {
        id: '4',
        name: 'Lazer',
        date: new Date(),
        cost: 300,
      },
    ];

    this.expenses = data;

    console.log('Expenses:', this.expenses);

    return of(this.expenses);
  }
}
