package main

import "fmt"

func main() {
	x := rob([]int{1, 1, 3, 3})
	fmt.Println(x) // should print 2
}

func rob(nums []int) int {

	if len(nums) == 1 {
		return nums[0]
	}

	if len(nums) == 2 {
		return max(nums[0], nums[1])
	}

	prev := nums[0]
	next := nums[1]

	for i := range nums{
		prev := max(nums[])
	}

	return next
}
