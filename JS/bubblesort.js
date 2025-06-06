function bubblesortOnce(a) {
    let swapped
    let higherNumber
    const sortedList = []
    
    do {
        swapped = false
        for (let i = 0; i < a.length - 1; i++)
        {
            if (a.length == 1){
                sortedList.push(a[i])
                swapped
            }
          
            if (a[i] > a[i + 1]) {
                let temp = a[i]
                higherNumber = temp
                a[i] =  a[i + 1]
                a[i + 1] = temp
                sortedList.push(a[i])
                swapped
            }
        }
    } while (swapped)
      sortedList[sortedList.length] = higherNumber
      return(sortedList)
  
}

const list = [9, 7, 5, 3, 1, 2, 4, 6, 8]
const list2 = [1,2]
const list3 = [42]
console.log(bubblesortOnce(list3))
