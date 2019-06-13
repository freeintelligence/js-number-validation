import { Transform } from './transform.class'

describe('Transform static methods', () => {

  test('To int', () => {
    expect(Transform.toInt('100')).toEqual(100)
    expect(Transform.toInt(100)).toEqual(100)
    expect(Transform.toInt('-100')).toEqual(-100)
    expect(Transform.toInt('--')).toBeUndefined()
  })

  test('To min', () => {
    expect(Transform.min('-100', -20)).toEqual(-20)
    expect(Transform.min(500, -20)).toEqual(500)
  })

  test('To max', () => {
    expect(Transform.max('100', 20)).toEqual(20)
    expect(Transform.max(-100, '20')).toEqual(-100)
    expect(Transform.max('-100', 20)).toEqual(-100)
    expect(Transform.max(100, 20)).toEqual(20)
  })

})
