import { Injectable } from '@angular/core';
import { ImageCode } from '../enum/ImageCode';

@Injectable({
  providedIn: 'root'
})
export class ImageCodeService {


  private imageMap = new Map<ImageCode, string>([
    [ImageCode.SunnyCode1, 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png'], 
    [ImageCode.cloudCode2, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png'], 
    [ImageCode.cloudCode3, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png'], 
    [ImageCode.cloudCode4, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png'], 
    [ImageCode.cloudCode45, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png'],
    [ImageCode.cloudCode48, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png'],
    [ImageCode.rainCode51, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode53, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode55, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode57, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode66, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode67, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode80, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode81, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.rainCode82, 'https://www.iconfinder.com/icons/2682845/cloud_cloudy_forecast_rain_sun_weather_icon'],
    [ImageCode.snowCode71, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png'],
    [ImageCode.snowCode73, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png'],
    [ImageCode.snowCode75, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png'],
    [ImageCode.snowCode77, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png'],
    [ImageCode.snowCode85, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png'],
    [ImageCode.snowCode86, 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-25-512.png'],
    [ImageCode.tunderCode95, 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Lightning_Cloudy-512.png'],
    [ImageCode.tunderCode96, 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Lightning_Cloudy-512.png'],
    [ImageCode.tunderCode99, 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Lightning_Cloudy-512.png'],
  ]);

  constructor() { }

  getImageSrc(code: ImageCode): string {
    return this.imageMap.get(code) || 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png';
  }
}
