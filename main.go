package main

import "fmt"

func main() {
	x := climbStairs(2)
	fmt.Println(x) // should print 2
}

func climbStairs(n int) int {
	if n == 1 {
		return 1
	}
	if n == 2 {
		return 2
	}

	one := 1
	two := 2
	var result int

	for i := 3; i <= n; i++ {
		result = one + two
		one = two
		two = result
	}

	return two
}

