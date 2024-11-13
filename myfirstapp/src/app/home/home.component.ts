import { Component, inject} from '@angular/core';
import { HousingService } from '../housing.service';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filteredLocationList: Housinglocation[] = [];
  housingLocationList: Housinglocation[] = [];

  housingService: HousingService = inject(HousingService);
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  
  constructor(){
    
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
      
    });
    
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
