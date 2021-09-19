import {IMalt} from "./IMalt";
import {IHops} from "./IHops";

export interface IBeerIngredients {
  malt: IMalt[];
  hops: IHops[];
  yeast: string;
}
