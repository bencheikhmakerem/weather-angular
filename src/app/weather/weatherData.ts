export class WeatherData{
  constructor( 
    public name : string,
    public description: string,
    public currentTemperature: number,
    public minTemperature : number,
    public maxTemperature : number,
    public icon: string,

  ){}
  }