import {ValueUnit} from "../valueUnit";
import {IMashTemp} from "../../../interfaces/beer-info/beer-method/IMashTemp";

export class MashTemp {
  public temp: ValueUnit;
  public duration: number;


  constructor() {

  }

  public static fromServer(data: IMashTemp): MashTemp {
    let instance: MashTemp = null;

    if (data) {
      instance = new MashTemp();
      instance.temp = data.temp;
      instance.duration = data.duration;
    }

    return instance;
  }
}
