import {ValueUnit} from "../valueUnit";
import {IHops} from "../../../interfaces/beer-info/beer-ingredients/IHops";

export class Hops {
  public name: string;
  public amount: ValueUnit;
  public add: string;
  public attribute: string;

  constructor() {

  }

  public static fromServer(data: IHops): Hops {
    let instance: Hops = null;

    if (data) {
      instance = new Hops();
      instance.name = data.name;
      instance.amount = data.amount;
      instance.add = data.add;
      instance.attribute = data.attribute;
    }

    return instance;
  }
}
