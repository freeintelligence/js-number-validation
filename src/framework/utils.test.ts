import { Utils } from './utils.class'

describe('Utils static methods', () => {

  test('To native int', () => {
    expect(Utils.toTextInt('100,2', ',')).toEqual('100.2')
    expect(Utils.toTextInt('100.2', '.')).toEqual('100.2')
    expect(Utils.toTextInt('-100,2', ',')).toEqual('-100.2')
    expect(Utils.toTextInt('-100,2', '.')).toEqual('-1002')
  })
})
