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
    const original = this.toInt(text)
    const minimum = this.toInt(min)

    return (minimum > original) ? minimum : original
  }

  /**
   * Transform string to integer
   * @param text string to transform to integer
   */
  public static toInt(text: string | number): number {
    if (typeof text == 'string') {
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
