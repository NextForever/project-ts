// const currRate: string = '1.05'

// const fetchCurr = (response: string): number => {
//     const data = JSON.parse(response)
//     return data
// }

// function transferEurToUsd(
//     available: boolean,
//     amount: number,
//     commission: number,
// ) {
//     if (available) {
//         let res = fetchCurr(currRate) * amount * commission
//         console.log(res)
//         // Или запись в элемент на странице вместо консоли
//     } else {
//         console.log('Сейчас обмен недоступен')
//     }
// }

// transferEurToUsd(true, 500, 1.1)

const departmens: string[] = ['dev', 'disign', 'marketing']

const departmen = departmens[0]
console.log(departmen)

const report = departmens.filter(d => d !== 'dev').map(d => `${d} - done`)

const [one, two] = report

console.log(two)
