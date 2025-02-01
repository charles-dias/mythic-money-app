import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpenseService } from '@app/features/expenses/services/expense.service';
import { WidgetData } from '@app/shared/interfaces/widget.interface';
import { WidgetComponent } from '@shared/components/widget/components/widget.component';
import { Expense } from '@shared/interfaces/expense.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WidgetComponent, RouterModule, WidgetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  widgetData: WidgetData[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe({
      next: (expenses: Expense[]) => {
        this.widgetData = expenses.map((expense) => ({
          value: expense.cost,
          label: expense.name,
          type: 'expense',
        }));
      },
      error: (error) => console.error('Erro ao buscar despesas:', error),
    });
  }
}
