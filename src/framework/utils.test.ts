import { Utils } from './utils.class'

describe('Utils static methods', () => {

  test('To native int', () => {
    expect(Utils.toTextInt('100,2', ',')).toEqual('100.2')
    expect(Utils.toTextInt('100.2', '.')).toEqual('100.2')
    expect(Utils.toTextInt('-100,2', ',')).toEqual('-100.2')
    expect(Utils.toTextInt('-100,2', '.')).toEqual('-1002')
  })

  test('To integer', () => {
    expect(Utils.toInt('100', ',')).toEqual(100)
    expect(Utils.toInt('100,92', ',')).toEqual(100.92)
    expect(Utils.toInt('100.42', ',')).toEqual(10042)
  })

})
