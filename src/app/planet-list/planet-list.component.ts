import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Planet } from '../models/planet.model';
import { PlanetService } from '../services/planet-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planet-list',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.css'
})

export class PlanetListComponent implements OnInit{
  searchInput = signal<string>('');
  planets = signal<Planet[]>([]);

  constructor(private planetService: PlanetService) {}
  ngOnInit(): void {
  }




  onSearchChange(event: string) {
    this.searchInput.set(event);
  }
}
