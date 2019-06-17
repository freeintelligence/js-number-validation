import { Transform } from './transform.class'
import { Utils } from './utils.class'

/**
 * Validator class
 */
export class Validator {

  /**
   * Constructor
   * @param decimalSeparator decimal separator
   */
  constructor(private decimalSeparator: string) {
  }

  /**
   * Is valid to minimum number
   * @param text original number
   * @param min min number allowed
   */
  public min(text: string | number, min: string | number) {
    return (Utils.toInt(text, this.decimalSeparator) >= Utils.toInt(min, this.decimalSeparator))
  }

  /**
   * Is valid to maximum number
   * @param text original number
   * @param max max number allowed
   */
  public max(text: string | number, max: string | number) {
    return (Utils.toInt(text, this.decimalSeparator) <= Utils.toInt(max, this.decimalSeparator))
  }

}
