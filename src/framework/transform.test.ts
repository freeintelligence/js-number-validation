import { Transform } from './transform.class'

describe('Transform instance methods', () => {

  const transform = new Transform()

  test('To int', () => {
    expect(transform.toInt('100')).toEqual(100)
    expect(transform.toInt(100)).toEqual(100)
    expect(transform.toInt('-100')).toEqual(-100)
    expect(transform.toInt('--')).toBeUndefined()
  })

  test('To min', () => {
    expect(transform.min('-100', -20)).toEqual(-20)
    expect(transform.min(500, -20)).toEqual(500)
  })

  test('To max', () => {
    expect(transform.max('100', 20)).toEqual(20)
    expect(transform.max(-100, '20')).toEqual(-100)
    expect(transform.max('-100', 20)).toEqual(-100)
    expect(transform.max(100, 20)).toEqual(20)
  })

})
