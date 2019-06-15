
# number-validation

Project created with Nalv CLI.

```sh
$ npm install @nalv/cli -g
$ nalv new name-your-app
```

Install with:

```sh
$ npm install number-validation
```

## Transform class (instance methods)
```js
constructor(private decimalSeparator: string = '.', private thousandSeparator: string = ',')

const transform = new Transform('.', ',') // to 9,999.9 format
const transform2 = new Transform(',', '.') // to 9.999,9 format
```
### min
```js
min(text: string | number, min: string | number)

transform.min('9,000', 12000) // "12,000" (12000 > 9000)
transform.min('19,000', 12000) // "19,000" (12000 < 19000)
transform.min('19,000', '55,000') // "55,000" (55000 > 19000)

transform2.min('9.000', 12000) // "12.000" (12000 > 9000)
transform2.min('19.000', 12000) // "19.000" (12000 < 19000)
transform2.min('19.000', '55.000') // "55.000" (55000 > 19000)
```
### max
```js
max(text: string | number, max: string | number)

transform.max('9,000', 12000) // "9,000" (12000 > 9000)
transform.max('19,000', 12000) // "12,000" (12000 < 19000)
transform.max('19,000', '55,000') // "19,000" (55000 > 19000)

transform2.max('9.000', 12000) // "9.000" (12000 > 9000)
transform2.max('19.000', 12000) // "12.000" (12000 < 19000)
transform2.max('19.000', '55.000') // "19.000" (55000 > 19000)
```
### onlyValid
```js
onlyValid(text: string | number)

transform.onlyValid('-9,000abc') // "-9,000"
transform.onlyValid('19,000.2c') // "19,000.2"
```
### eliminateThousands
```js
eliminateThousands(text: string | number)

transform.eliminateThousands('9,000.2') // "9000.2"
transform.eliminateThousands('19.000,2') // "19000,2"
```
### toInt
```js
toInt(text: string | number)

transform.toInt(9000.2) // 9000.2
transform.toInt('19000,2') // 19000.2
```
### format
```js
format(text: string | number)

transform.format(9000.2) // "9,000.2"
transform.format('19000,2') // "19.000,2"
```

## Utils class (static methods)
```js
toInt(text, decimalSeparator)

Utils.toInt('100,92', ',') // 100.92
Utils.toInt('100.92', '.') // 100.92
```
```js
toTextInt(text, decimalSeparator)

Utils.toTextInt('-100,92', ',') // "-100.92"
Utils.toTextInt('-100.92', '.') // "-100.92"
```
