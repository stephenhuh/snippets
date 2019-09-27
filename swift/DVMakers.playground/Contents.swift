import UIKit

var str = "Hello, playground"

print("Hello World")
print(str)

var myVariable = "A string that can be changed"
myVariable += " is here"

let constant = "A string that cannot be changed"
// constant += " doesnt work"

let double = 15.0
let explicitDouble : Double = 15

let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) summary"
print(appleSummary)

let multiline = """
\(appleSummary)
multiple lines
"""

let list = [1,2,3,4]

for number in list {
    if number % 2 == 0 {
        print("Your number is \(number)")
    }
}

func sayHello(inputCount count: Int) -> Bool? {
    if count > 3 {
        return false
    }
    print ("Hello")
    sayHello(inputCount: count + 1)
    return nil
}
sayHello(inputCount: 0)


// 1,2,3,4,5,6,7,8,9....
// positiveInteger = succ positiveInteger | nil


func fib(N: Int) -> Int {
    if N <= 0 {
        return 0
    }
    if N == 1 {
        return 1
    }
    return fib(N: N-1) + fib(N: N-2)
}

fib(N: -1)













