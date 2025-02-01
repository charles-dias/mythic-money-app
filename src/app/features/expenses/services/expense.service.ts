// features/expenses/services/expense.service.ts
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
      ...expense,
      id: crypto.randomUUID(),
    };
    this.expenses.push(newExpense);
    return of(newExpense);
  }

  getExpenses(): Observable<Expense[]> {
    return of(this.expenses);
  }
}
