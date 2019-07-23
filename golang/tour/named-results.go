package main

import "fmt"

func split (sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	// without specified return arg, defaults to named return values
	fmt.Println('x', x) // returns ascii code
	fmt.Println('y', y)
	return
}

//difference between println from main and fmt.println

func main() {
	fmt.Println(split(17))
}

