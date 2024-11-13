import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Housinglocation} from '../housinglocation';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  
  @Input() housingLocationinput!: Housinglocation;

}
