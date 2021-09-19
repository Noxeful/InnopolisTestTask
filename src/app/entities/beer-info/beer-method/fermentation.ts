import {ValueUnit} from "../valueUnit";
import {IFermentation} from "../../../interfaces/beer-info/beer-method/IFermentation";

export class Fermentation {
  public temp: ValueUnit;

  constructor() {

  }

  public static fromServer(data: IFermentation): Fermentation {
    let instance: Fermentation = null;

    if (data) {
      instance = new Fermentation();
      instance.temp = data.temp;
    }

    return instance;
  }
}
