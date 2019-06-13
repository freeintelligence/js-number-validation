import { Validators } from './validators.class'

describe('Validators static methods', () => {

  test('Min', () => {
    expect(Validators.min(100, 20)).toBeTruthy()
    expect(Validators.min(100, 110)).toBeFalsy()
  })

  test('Max', () => {
    expect(Validators.max(100, 20)).toBeFalsy()
    expect(Validators.max(100, 110)).toBeTruthy()
  })

})
