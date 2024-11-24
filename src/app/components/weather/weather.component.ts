import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherWeekResponse } from '../../model/WeatherWeekResponse';
import { locationModel } from '../../model/locationModel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ImageCode } from '../../enum/ImageCode';
import { ImageCodeService } from '../../services/image-code.service';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [TableModule,CommonModule,ImageModule ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnChanges {
  @Input() location: locationModel = {} as locationModel
  weatherWeek: WeatherWeekResponse = {} as WeatherWeekResponse
  constructor(private weatherService: WeatherService, private imageCode: ImageCodeService){

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['location'] && this.location.latitude && this.location.longitude) {
      this.weatherService.getWeatherWeek(this.location.latitude,this.location.longitude).subscribe(response => this.weatherWeek = response)
    }
  }
  getImageSrc(code: ImageCode): string {
    return this.imageCode.getImageSrc(code);
  }

}
