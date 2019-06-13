export class Utils {

  /**
   * Transform string to integer
   * @param text string to transform to integer
   */
  public static toInt(text: string | number, decimalSeparator: string): number {
    if (typeof text === 'string') {
      const num = Number(this.toTextInt(text, decimalSeparator))

      if (!isNaN(num)) {
        return num
      }
    } else if(typeof text === 'number') {
      return text
    }

    return undefined
  }

  /**
   * Transform text to native integer text
   * @param text text or number to transform to native integer text
   * @param decimalSeparator char decimal separador
   */
  public static toTextInt(text: string | number, decimalSeparator: string) {
    if (typeof text === 'number') {
      return text
    } else if (typeof text === 'string') {
      let final = ''
      let decimal = false

      for(let i = 0; i < text.length; i++) {
        if ((text[i] === '-' && i === 0) || /[0-9]/g.test(text[i])) {
          final += text[i]
        } else if (text[i] === decimalSeparator && !decimal) {
          final += '.'
          decimal = true
        }
      }

      return final
    }
    
    return undefined
  }

}