import {IValueUnit} from "../../interfaces/IValueUnit";

export class ValueUnit {
  public value: number;
  public unit: string;

  constructor() {

  }

  public static fromServer(data: IValueUnit): ValueUnit {
    let instance: ValueUnit = null;

    if (data) {
      instance = new ValueUnit();
      instance.value = data.value;
      instance.unit = data.unit;
    }

    return instance;
  }
}
