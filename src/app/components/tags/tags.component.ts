import { Component } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  tags: Tag[] = [];

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
