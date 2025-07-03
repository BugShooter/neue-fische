// 3. Weather API Adapter

const log = console.log

// Task: 
// [x] Create a class OldWeatherService with a method fetch() 
// that returns weather info in a custom format.
// [x] Then write an adapter WeatherAdapter that adapts it to the new interface WeatherClient
// with a method getCurrentWeather().
// Bonus: 
// [ ] Return mock weather data, e.g., temperature and condition,
// and simulate API latency using setTimeout.

interface Weather {
    temperature_celcius: number;
    wind_speed: number;
}

class OldWeatherService {
    constructor() { }
    fetch(): Weather {
        return {
            temperature_celcius: 32,
            wind_speed: 2.5
        }
    }
}
interface WeatherClient {
    getCurrentWeather: () => Weather;
}
class WeatherAdapter implements WeatherClient {
    constructor(private oldWetherService: OldWeatherService){}
    getCurrentWeather ():Weather {
        const bericht = this.oldWetherService.fetch();
        return bericht;
    }
}

export function main(){
    log("3. Weather API Adapter");
    const oldWetherService = new OldWeatherService();
    log('Old Wether Service:', oldWetherService.fetch());
    const modernWetherClient = new WeatherAdapter(oldWetherService);
    log('Wether Adapter:', modernWetherClient.getCurrentWeather());
}