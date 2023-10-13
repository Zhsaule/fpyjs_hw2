let count = process.argv[2];

function check_prime(num) {
    // Проверка, что число простое)
    for (let j = 2; j < num; j++) {
        if (num % j === 0 ) { 
            return false
        } 
    } 
    return true
}

function search_prime_numbers(n) {
    // Поиск первых простых чисел.
    let prime_array = []
    let i_array = 0
    n++

    for (let i = 2; i <= n; i++) { 
        if (check_prime(i) === true)  {
            prime_array[i_array] = i
            i_array++
        } else n++
    }
    return prime_array
}

console.log("Количество первых простых чисел: " + count);

if (isNaN(count) || count.trim() === "" || !(+count > 0 && +count <= 100)) {
    console.log('Введите число от 1 до 100.');
} else console.log(search_prime_numbers(+count));
