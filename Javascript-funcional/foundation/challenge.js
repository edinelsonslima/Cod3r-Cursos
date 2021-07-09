// Create a range function
function range(valueA, valueB, valueS = 1) {
    const n1 = (valueB === undefined) ? 1 : valueA
    const n2 = (valueB === undefined) ? valueA : valueB
    const step = (n1 <= n2) ? Math.abs(valueS) : -Math.abs(valueS)

    const array = []

    for (let i = n1; (n1 <= n2) ? i <= n2 : i >= n2; i += step) {
        array.push(i)
    }

    return array
}

//range(5) Output: [1,2,3,4,5]
console.log(range(5))

//range(6, 11) Output: [6,7,8,9,10,11]
console.log(range(6, 11))

//range(10, 19, 2) Output: [10,12,14,16,18]
console.log(range(10, 19, 2))

//range(6, 2) Output: [6,5,4,3,2,]
console.log(range(6, 2))

//range(8, -3, 4) Output: [8, 4, 0]
console.log(range(8, -3, 4))