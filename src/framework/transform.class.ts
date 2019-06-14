import { Validator } from './validator.class'
import { Utils } from './utils.class'

/**
 * Transform number
 */
export class Transform {

  /**
   * Instance data
   */
  validator: Validator

  /**
   * New transform instance
   * @param decimalSeparator decimal separador
   * @param thousandSeparator thousands separador
   */
  constructor(private decimalSeparator: string = '.', private thousandSeparator: string = ',', private decimalCount: number = 16) {
    if (decimalSeparator !== '.' && decimalSeparator !== ',') {
      throw new Error('Decimal separator must be dot (".") or comma (",").')
    }
    if (thousandSeparator !== '.' && thousandSeparator !== ',') {
      throw new Error('Thousand separator must be dot (".") or comma (",").')
    }
    if (decimalSeparator === thousandSeparator) {
      throw new Error('Decimal separador must be different to thousand separator.')
    }

    this.validator = new Validator(this.decimalSeparator)
  }

  /**
   * Limit a number to a minimum
   * @param text number to transform
   * @param min min number allowed
   */
  public min(text: string | number, min: string | number) {
    return this.format(Utils.toInt(this.validator.min(text, min) ? text : min, this.decimalSeparator))
  }

  /**
   * Limit a number to a maximum
   * @param text number to transform
   * @param max max number allowed
   */
  public max(text: string | number, max: string | number) {
    return this.format(Utils.toInt(this.validator.max(text, max) ? text : max, this.decimalSeparator))
  }

  /**
   * Transform to valid characters
   * @param text Text (or number) to transform only valid characters
   */
  public onlyValid(text: string | number) {
    if (typeof text === 'number') {
      text = text.toString()
    }

    const isNegative = text[0] === '-'

    return (isNegative ? '-' : '') + text.replace(new RegExp(`([^0-9\\${this.decimalSeparator}\\${this.thousandSeparator}])`, 'g'), '')
  }

  /**
   * Eliminate thousands separator
   * @param text Text (or number) to eliminate thousands separator
   */
  public eliminateThousands(text: string | number) {
    if (typeof text === 'number') {
      text = text.toString()
    }

    return text.replace(new RegExp(`\\${this.thousandSeparator}`, 'g'), '')
  }

  /**
   * Format number
   * @param text Text (or number) to transform
   */
  public format(text: string | number) {
    if (typeof text === 'number') {
      text = text.toString().replace(/\./g, this.decimalSeparator)
    }

    text = this.onlyValid(this.eliminateThousands(text))

    let final = ''
    let [ whole, decimal ] = text.split(this.decimalSeparator)
    let isNegative = false

    if (whole && whole.length && whole[0] === '-') {
      isNegative = true
      whole = whole.slice(1)
    }

    while (whole.length > 3) {
      const thousand = whole.substring(whole.length - 3)

      final = this.thousandSeparator + thousand + final
      whole = whole.slice(0, -3)
    }

    if (whole.length) {
      final = whole + final
    }

    if(decimal && this.decimalCount > 0) {
      final += this.decimalSeparator + decimal.slice(0, this.decimalCount)
    }

    return this.removeLastZeros(isNegative ? '-' + final : final)
  }

  private removeLastZeros(text: string) {
    let [ whole, decimal ] = text.split(this.decimalSeparator)

    if(!decimal) {
      return whole
    } else {
      let realDecimals = ''
      let already = false

      for(let i = decimal.length-1; i > -1; i--) {
        if(decimal[i] !== '0' || already) {
          realDecimals = decimal[i] + realDecimals
          already = true
        }
      }

      if(realDecimals.length) {
        return `${whole}${this.decimalSeparator}${realDecimals}`
      }
    }

    return `${whole}${this.decimalSeparator}${decimal}`
  }

}
