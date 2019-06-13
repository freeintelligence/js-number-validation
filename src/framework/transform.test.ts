import { Transform } from './transform.class'

describe('Transform instance methods', () => {

  const transform = new Transform('.', ',')

  test('To min', () => {
    expect(transform.min('-100', -20)).toEqual('-20')
    expect(transform.min(500, -20)).toEqual('500')
  })

  test('To max', () => {
    expect(transform.max('100', 20)).toEqual('20')
    expect(transform.max(-100, '20')).toEqual('-100')
    expect(transform.max('-100', 20)).toEqual('-100')
    expect(transform.max(100, 20)).toEqual('20')
  })

  test('Only valid characters', () => {
    expect(transform.onlyValid('+12')).toEqual('12')
    expect(transform.onlyValid('abc14')).toEqual('14')
    expect(transform.onlyValid('12a')).toEqual('12')
    expect(transform.onlyValid('12,4')).toEqual('12,4')
  })

  test('Eliminate thousand separators', () => {
    expect(transform.eliminateThousands('20,000')).toEqual('20000')
  })

  test('Format number', () => {
    expect(transform.format('200000.4')).toEqual('200,000.4')
    expect(transform.format('200000,4')).toEqual('2,000,004')
    expect(transform.format('200.000,4')).toEqual('200.0004')
    expect(transform.format('2,00.000,4')).toEqual('200.0004')
  })

})
