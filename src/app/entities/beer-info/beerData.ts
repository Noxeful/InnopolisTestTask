import {ValueUnit} from "./valueUnit";
import {BeerMethod} from "./beer-method/beerMethod";
import {BeerIngredients} from "./beer-ingredients/beerIngredients";
import {IBeerData} from "../../interfaces/IBeerData";
import * as moment from 'moment';

export class BeerData {
  public id: number;
  public name: string;
  public tagline: string;
  public first_brewed: Date;
  public description: string;
  public image_url: string;
  public abv: number;
  public ibu: number;
  public target_fg: number;
  public target_og: number;
  public ebc: number;
  public srm: number;
  public ph: number;
  public attenuation_level: number;
  public food_pairing: string[];
  public brewers_tips: string;
  public contributed_by: string;

  public isFavorite: boolean;

  public volume: ValueUnit;

  public boil_volume: ValueUnit;

  public method: BeerMethod;

  public ingredients: BeerIngredients;

  constructor() {

  }

  public static fromServer(data: IBeerData): BeerData {
    let instance: BeerData = null;

    if (data) {
      let arr = data.first_brewed.split('/');
      instance = new BeerData();
      instance.id = data.id;
      instance.name = data.name;
      instance.tagline = data.tagline;
      instance.first_brewed = moment(data.first_brewed, 'MMM Do YY').toDate();
      instance.description = data.description;
      instance.image_url = data.image_url;
      instance.abv = data.abv;
      instance.ibu = data.ibu;
      instance.target_fg = data.target_fg;
      instance.target_og = data.target_og;
      instance.ebc = data.ebc;
      instance.srm = data.srm;
      instance.ph = data.ph;
      instance.attenuation_level = data.attenuation_level;
      instance.food_pairing = data.food_pairing;
      instance.brewers_tips = data.brewers_tips;
      instance.contributed_by = data.contributed_by;
      instance.volume = data.volume;
      instance.boil_volume = data.boil_volume;
      instance.method = data.method;
      instance.ingredients = data.ingredients;
      instance.isFavorite = data.isFavorite;
    }

    return instance;
  }

}
