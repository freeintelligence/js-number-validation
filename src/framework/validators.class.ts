import { Transform } from './transform.class'

/**
 * Validators class
 */
export class Validators {

  /**
   * Is valid to minimum number
   * @param text original number
   * @param min min number allowed
   */
  public static min(text: string | number, min: string | number) {
    return (Transform.toInt(text) >= Transform.toInt(min))
  }

  /**
   * Is valid to maximum number
   * @param text original number
   * @param max max number allowed
   */
  public static max(text: string | number, max: string | number) {
    return (Transform.toInt(text) <= Transform.toInt(max))
  }

}