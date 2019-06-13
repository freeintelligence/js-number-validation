import { Transform } from './transform.class'

/**
 * Validator class
 */
export class Validator {

  /**
   * Instance data
   */
  parentTransform: Transform

  /**
   * Constructor
   * @param parentTransform Parent transform class instanced
   */
  constructor(parentTransform: Transform) {
    this.parentTransform = parentTransform
  }

  /**
   * Is valid to minimum number
   * @param text original number
   * @param min min number allowed
   */
  public min(text: string | number, min: string | number) {
    return (this.parentTransform.toInt(text) >= this.parentTransform.toInt(min))
  }

  /**
   * Is valid to maximum number
   * @param text original number
   * @param max max number allowed
   */
  public max(text: string | number, max: string | number) {
    return (this.parentTransform.toInt(text) <= this.parentTransform.toInt(max))
  }

  /**
   * Is valid numeric string (to transform)
   */
  public isNumeric(text: string | number) {
    if (typeof text === 'number') {
      return true
    } else if (typeof text === 'string') {
      return /^([0-9\.\,])*$/gi.test(text)
    }

    return false
  }

}
