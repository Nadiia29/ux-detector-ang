import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-card.html',
  styleUrls: ['./result-card.css'],
})
export class ResultCardComponent {
  @Input() data: any;
}
