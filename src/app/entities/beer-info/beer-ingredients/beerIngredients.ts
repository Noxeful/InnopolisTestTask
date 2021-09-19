import {Malt} from "./malt";
import {Hops} from "./hops";
import {IBeerIngredients} from "../../../interfaces/beer-info/beer-ingredients/IBeerIngredients";

export class BeerIngredients {
  public malt: Malt[];
  public hops: Hops[];
  public yeast: string;

  constructor() {

  }

  public static fromServer(data: IBeerIngredients): BeerIngredients {
    let instance: BeerIngredients = null;

    if (data) {
      instance = new BeerIngredients();
      instance.malt = data.malt;
      instance.hops = data.hops;
      instance.yeast = data.yeast;
    }

    return instance;
  }
}
