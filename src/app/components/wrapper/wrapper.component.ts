import { Component, OnInit } from '@angular/core';
import { WeatherComponent } from "../weather/weather.component";
import { FooterComponent } from "../footer/footer.component";
import { LocationService } from '../../services/location.service';
import { locationModel } from '../../model/locationModel';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [WeatherComponent, FooterComponent,ToastModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent implements OnInit{

  location: locationModel = {} as locationModel
  
  constructor(private locationService: LocationService, private messageService: MessageService){}

  ngOnInit(): void {

    this.locationService.getLocation().then(l => {this.location = l }).catch(error =>
      this.messageService.add({severity: 'error', summary: 'Error', detail: error})
      
    )
     
   
  
  }

  

}
