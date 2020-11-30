let devideAndSort = (num) => {
    if(typeof num !== 'number') { return 'input harus berupa number' }
    
    let findZero = num.toString().split('0')
    console.log(findZero)
    let result = ''

    findZero.map((item) => {
        result += item.split('').sort((a, b) => a - b).join('')
    })

    console.log(Number(result))
}

// let result = 
devideAndSort(98703210654)
// console.log(result)