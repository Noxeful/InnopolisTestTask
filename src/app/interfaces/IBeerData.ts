import {IBeerIngredients} from "./beer-info/beer-ingredients/IBeerIngredients";
import {IBeerMethod} from "./beer-info/beer-method/IBeerMethod";
import {IValueUnit} from "./IValueUnit";

export interface IBeerData {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
  isFavorite: boolean;

  volume: IValueUnit;
  boil_volume: IValueUnit;
  method: IBeerMethod;
  ingredients: IBeerIngredients;
}
