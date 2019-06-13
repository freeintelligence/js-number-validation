import { Validator } from './validator.class'

describe('Validators static methods', () => {

  const validator = new Validator(',')

  test('Min', () => {
    expect(validator.min(100, 20)).toBeTruthy()
    expect(validator.min(100, 110)).toBeFalsy()
  })

  test('Max', () => {
    expect(validator.max(100, 20)).toBeFalsy()
    expect(validator.max(100, 110)).toBeTruthy()
  })

})
