package main

import (
	"fmt"
)

func main() {
	res := scoreOfParentheses("()()")
	fmt.Println(res)
}

func scoreOfParentheses(s string) int {
	res := 0

	var stack []byte

	for i := 0; i < len(s); i++ {
		if s[i] == "" {

		}
	}

	return res
}
