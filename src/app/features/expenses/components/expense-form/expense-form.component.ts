import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExpenseService } from '@features/expenses/services/expense.service';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ExpenseService: ExpenseService
  ) {
    this.expenseForm = this.fb.group({
      name: ['', [Validators.required]],
      date: [new Date().toISOString().split('T')[0], [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.expenseForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  onAmountInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');

    const amount = Number(value) / 100;

    input.value = amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    this.expenseForm.patchValue({ amount: amount }, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched();
      return;
    }

    const formValue = this.expenseForm.value;

    const expense = {
      name: formValue.name,
      date: new Date(formValue.date),
      cost: formValue.amount,
    };

    this.ExpenseService.addExpense(expense).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
