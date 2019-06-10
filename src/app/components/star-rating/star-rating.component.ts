import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() value: number = 0;
  percentage: number = 0;

  ngOnInit() {
    this.percentage = this.value / 5 * 100;
    console.log('percentage', this.percentage);
  }
}
