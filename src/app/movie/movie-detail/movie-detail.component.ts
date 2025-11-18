import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any;
  ngOnInit(): void {}
}
