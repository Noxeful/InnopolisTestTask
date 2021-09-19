import {IMashTemp} from "./IMashTemp";
import {IFermentation} from "./IFermentation";

export interface IBeerMethod {
  mash_temp: IMashTemp[];
  fermentation: IFermentation;
  twist: string;
}
