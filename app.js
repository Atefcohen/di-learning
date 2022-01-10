// Exercise 1
    let favoriteFood = "chicken"
    let favoriteMeal = "lunch"

    console.log ("I eat " + favoriteFood + " at every " + favoriteMeal)

//exercise 2
//part 1
    let WatchedSeries = ["Vikings", "the 100" , "Black mirror", "Prison break"] 
    let watchedSeriesLength = 4
    let myWatchedSeries = "vikings, the100, Black mirror and Prison break"

    console.log("I watched " + watchedSeriesLength + " series :" + myWatchedSeries)

//part 2
WatchedSeries[2] = "Friends"
WatchedSeries.push("The flash")
WatchedSeries.splice(0,0,"Arrow")
WatchedSeries.splice(1,1)

console.log(WatchedSeries[1][2])
console.log(WatchedSeries)
// Exercise 3
    let celsius = 100;

    let fahrenheit = celsius * 9 / 5 + 32

    console.log(celsius + "°C is " + fahrenheit + "°F.")

// Exercise 4
    let c;
        let a = 10
        let b = 21

        console.log(a+b)
        // Prediction:It will output 31, because a and b are numbers "10" and "21" 
        // Actual: 31

        console.log(b-a)
        //prediction: It will output 11, because a and b are numbers "10" and "21"
        //actual: 11


        //value of c is undefined
    
        console.log(3 + 4 + '5')
        //prediction: it will output 75, because 3 + 4 = 7 and 5 is a string so 7+5 = 75
        //actual: 75

//Exercise 5

    console.log(typeof(15))
    // Prediction: It will output number, because 15 is a number.
    // Actual: number

    console.log(typeof(5.5))
    // Prediction:It will output number, because 5.5 is a number.
    // Actual: number

    console.log(typeof(NaN))
    // Prediction: it will output number, because NaN is a number that is not a legal number
    // Actual: number

    console.log(typeof("hello"))
    // Prediction: it will output a string, because hello is a string
    // Actual:string

    console.log(typeof(true))
    // Prediction: it will output boolean, because true is a boolean
    // Actual:boolean

    console.log(typeof(1 != 2))
    // Prediction: it will output boolean, because ! is a boolean
    // Actual:boolean

    console.log("hamburger" + "s")
    // Prediction:It will output "hamburgers", because "hamburger" and "s" are strings.
    // Actual: hamburgers

    console.log("hamburgers" - "s")
    // Prediction: it will output NaN, because "hamburgers" and "s" are strings you cant subtract them
    // Actual: NaN

    console.log("1" + "3")
    // Prediction: it will output a 13, because 1 and 3 are strings
    // Actual: 13

    console.log("1" - "3")
    // Prediction: it will output a NaN, because you cant subtract strings 
    // Actual: -2

    console.log("johnny" + 5)
    // Prediction: it will output johnny5, because jhonny is a string and you can attach strings with numbers
    // Actual: johnny5

    console.log("johnny" - 5)
    // Prediction: it will output NaN, because you cant subtract strings with numbers
    // Actual: NaN

    console.log(99 * "hello")
    // Prediction: it will output NaN, because 99 is a number and "hello" is a string and you cant multiply a string with a number
    // Actual: NaN

    console.log(1 != 1)
    // Prediction: it will output false, because 1 is equal to 1
    // Actual:

    console.log(1 == "1")
    // Prediction: it will output true, because 1 is equal to 1
    // Actual: true

    console.log(1 === "1")
    // Prediction: it will output false, because one is a string and the other is a string
    // Actual: false

    //Exercise 6

    console.log(5 + "34")
    // Prediction: it will output 534, because 5 is a number and "34" is a string and you can attach them together
    // Actual: 534

    console.log(5 - "4")
    // Prediction:It will output 1 because it is impossible to make subtraction with string, and it changes the type to number 4
    // Actual:1 

    console.log(10 % 5)
    // Prediction:It will output 2 because 10 / 5 = 2 
    // Actual: 0

    console.log(5 % 10)
    // Prediction:it will output
    // Actual:

    console.log("Java" + "Script")
    // Prediction:it will output "javascript" because both are strings
    // Actual:javascript

    console.log(" " + " ")
    // Prediction:it will output " " because there is nothing in the quotes
    // Actual: " "

    console.log(" " + 0)
    // Prediction:it will output " 0" because its possible to attach strings to numbers
    // Actual: " 0"

    console.log(true + true)
    // Prediction:It will output true because true and true is true
    // Actual:2

    console.log(true + false)
    // Prediction:It will output false because true and false is false
    // Actual:1

    console.log(false + true)
    // Prediction:It will output false because false and true is false
    // Actual:1

    console.log(false - true)
    // Prediction:it will output NaN because you cant subtract booleans 
    // Actual:-1

    console.log(!true)
    // Prediction:it will output false because opposite of true is false
    // Actual:false

    console.log(3 - 4)
    // Prediction:it will output -1 because 3-4 is -1
    // Actual: -1

    console.log("Bob" - "bill")
    // Prediction:it will output NaN because you cant subtract strings
    // Actual: NaN

















