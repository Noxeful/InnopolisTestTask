import {ValueUnit} from "../valueUnit";
import {IMalt} from "../../../interfaces/beer-info/beer-ingredients/IMalt";

export class Malt {
  public name: string;
  public amount: ValueUnit;

  constructor() {

  }

  public static fromServer(data: IMalt): Malt {
    let instance: Malt = null;

    if (data) {
      instance = new Malt();
      instance.name = data.name;
      instance.amount = data.amount;
    }

    return instance;
  }
}
