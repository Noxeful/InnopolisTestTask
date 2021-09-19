import {MashTemp} from "./mashTemp";
import {Fermentation} from "./fermentation";
import {IBeerMethod} from "../../../interfaces/beer-info/beer-method/IBeerMethod";

export class BeerMethod {
  public mash_temp: MashTemp[];
  public fermentation: Fermentation;
  public twist: string;


  constructor() {

  }

  public static fromServer(data: IBeerMethod): BeerMethod {
    let instance: BeerMethod = null;

    if (data) {
      instance = new BeerMethod();
      instance.mash_temp = data.mash_temp;
      instance.fermentation = data.fermentation;
      instance.twist = data.twist;
    }

    return instance;
  }
}
