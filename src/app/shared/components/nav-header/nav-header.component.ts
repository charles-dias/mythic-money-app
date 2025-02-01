import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuService } from '@app/core/services/menu-service';
import { MenuItem } from '@app/shared/interfaces/menu-interface';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {
  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }

  @Input() title = 'Mythic Money';

  isMenuOpen = false;
  menuItems: MenuItem[];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
