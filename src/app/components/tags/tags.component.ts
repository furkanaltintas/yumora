import { Component, Input } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent {
  @Input() foodPageTags?: string[];
  @Input() justifyContent: string = 'center';

  tags?: Tag[] = [];
  tagClick: boolean = false;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this.foodService.getAllTags();

    this.route.params.subscribe((params) => {
      if (params['tag']) {
        this.tagClick = true;
      }
    });
  }

  tagSearchClear() {
    this.router.navigate(['/']);
  }
}
