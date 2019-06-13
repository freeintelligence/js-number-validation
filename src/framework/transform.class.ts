import { Validators } from './validators.class'

/**
 * Transform number
 */
export class Transform {

  /**
   * Limit a number to a minimum
   * @param text number to transform
   * @param min min number allowed
   */
  public static min(text: string | number, min: string | number) {
    return this.toInt(Validators.min(text, min) ? text : min)
  }

  /**
   * Limit a number to a maximum
   * @param text number to transform
   * @param max max number allowed
   */
  public static max(text: string | number, max: string | number) {
    return this.toInt(Validators.max(text, max) ? text : max)
  }

  /**
   * Transform string to integer
   * @param text string to transform to integer
   */
  public static toInt(text: string | number): number {
    if (typeof text === 'string') {
      const num = Number(text)

      if (!isNaN(num)) {
        return num
      }
    } else if(typeof text === 'number') {
      return text
    }

    return undefined
  }

}
