import { Validators } from './validators.class'

/**
 * Transform number
 */
export class Transform {

  /**
   * New transform instance
   * @param decimal decimal separador
   * @param thousands thousands separador
   */
  constructor(private decimal: string = '.', private thousands: string = ',') {

  }

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

  /**
   * Transform to valid characters
   * @param text Text (or number) to transform only valid characters
   */
  public onlyValid(text: string | number) {
    if (typeof text === 'number') {
      text = text.toString()
    }

    return text.replace(new RegExp(`([^0-9\\${this.decimal}\\${this.thousands}])`, 'g'), '')
  }

  public eliminateThousands(text: string | number) {
    if (typeof text === 'number') {
      text = text.toString()
    }

    return text.replace(new RegExp(`\\${this.thousands}`, 'g'), '')
  }

  /**
   * Format number
   */
  public format(text: string | number) {
    if (typeof text === 'number') {
      text = text.toString().replace(/\./g, this.decimal)
    }

    text = this.onlyValid(this.eliminateThousands(text))

    let final = ''
    let [ whole, decimal ] = text.split(this.decimal)

    while (whole.length> 3){
      const thousand = whole.substring(whole.length - 3)

      final = this.thousands + thousand + final
      whole = whole.slice(0, -3)
    }

    if (whole.length) {
      final = whole + final
    }
    if(decimal.length) {
      final += this.decimal + decimal
    }

    return final
  }

}
