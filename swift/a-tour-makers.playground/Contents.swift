import UIKit

var str = "Hello, playground"
print("Hello World")
print("Hello World")
print(str)

/**
 * variables vs constants
 **/
var myVariable = "A string that can be changed"
myVariable += " is here"
print(myVariable)

let constant = "A string that cannot be changed"
// constant += " doesnt work"
print(constant)

let double = 15.0
let explicitDouble : Double = 15

/**
 * string interpolation
 **/
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples"
print(appleSummary)

let multiline = """
\(appleSummary)
multiple lines
"""

print(multiline)

/**
 * Arrays and dictionaries
 **/
let list = [1, 2, 3, 4]
for number in list {
    if number % 2 == 0 {
        print("Your number is \(number)")
    }
}

let dict = [
    "First" : 1,
    "Second" : 2,
    "Third" : 3
]
for (key, val) in dict {
    print("Your key is \(key) whose value is \(val)")
}

let dict2 = [
    "first" : 2,
    "second" : 3,
    "third": 4
]

for (key, val) in dict2 {
    print("Second \(key) \(val)")
}

func sayHello(_ count: Int) -> Bool? {
    if count > 3 {
        return false
    }
    print("Hello")
    sayHello(count + 1)
    return true
}
sayHello(0)


func fib(N: Int) -> Int {
    if N == 0 {
        return 0
    }
    if N == 1 {
        return 1
    }
    return fib(N: N-1) + fib(N: N-2)
}

fib(N:10)
