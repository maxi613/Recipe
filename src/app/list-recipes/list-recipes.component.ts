import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.scss'
})
export class ListRecipesComponent {

  recipes:string[] = ['Station 220','Station 320','Station 230']
}
