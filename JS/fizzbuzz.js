const main = () => {
    for(let i = 0; i <= 100; i++) {
        let counter = i

        if(i > 0 && i % 3 == 0) {
            counter = 'Fizz'
        }
        
        if (i > 0 && i % 5 == 0) {
            counter = 'Buzz'
        }

        if (i > 0 && i % 5 == 0 && i % 3 == 0) {
            counter = 'FizzBuzz'
        }

        console.log(counter)
    }
}

main()