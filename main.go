package main

import (
	"fmt"
	"math"
)

func main() {
	res := getAverages([]int{7, 4, 3, 9, 1, 8, 5, 2, 6}, 3)
	fmt.Println(res)
}

func getAverages(nums []int, k int) []int {
	res := []int{}

	for i := 0; i < len(nums); i++ {
		res = append(res, -1)
	}

	windowSize := 2*k + 1

	if windowSize > len(nums) {
		return res
	}

	sum := 0

	for i := 0; i < windowSize; i++ {
		sum = nums[i] + sum
	}

	res[k] = int(math.Floor(float64(sum) / float64(windowSize)))

	for r := windowSize; r < len(nums); r++ {
		sum += nums[r]
		sum -= nums[r-windowSize]

		center := r - k
		res[center] = int(math.Floor(float64(sum) / float64(windowSize)))
	}

	return res
}
