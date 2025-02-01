// features/expenses/components/expense-form/expense-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

    // Converte para número e divide por 100 para ter os centavos
    const amount = Number(value) / 100;

    // Formata o valor com duas casas decimais
    input.value = amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    // Atualiza o valor no formulário (mantendo apenas números)
    this.expenseForm.patchValue({ amount: amount }, { emitEvent: false });
  }

  onSubmit(): void {
    // Se o formulário estiver inválido, marca todos os controles como touched para exibir os erros
    if (this.expenseForm.invalid) {
      this.expenseForm.markAllAsTouched();
      return;
    }

    const formValue = this.expenseForm.value;

    const expense = {
      name: formValue.name,
      date: new Date(formValue.date),
      amount: formValue.amount,
    };

    console.log('Despesa a ser salva:', expense);
    // Aqui você chamaria seu serviço para salvar a despesa
  }
}
