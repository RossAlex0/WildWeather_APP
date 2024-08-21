  interface ForecastInterfaces {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
  };
  
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  
  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  
  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  };
  
  interface Clouds {
    all: number;
  };
  
  interface Sys {
    pod: string;
  };

  export { ForecastInterfaces, Weather, Main, Wind, Clouds, Sys}
  
  
  
  