package main

import (
	"fmt"
	"math"
)

func main() {
	nums := []int{5, 7, 7, 8, 8, 10}

	res := searchRange(nums, 8)

	fmt.Println(res)
}

func searchRange(nums []int, target int) []int {
	if len(nums) == 0 {
		return []int{-1, -1}
	}
	var res []int

	res = append(res, -1)
	res = append(res, -1)
	l := 0
	r := len(nums) - 1

	for l <= r {
		mid := int(math.Floor((float64(l) + float64(r)) / 2.0))

		if nums[mid] == target {
			l1 := mid
			r1 := mid
			for l1 > 0 && nums[l1-1] == nums[mid] {
				l1--
			}
			for r1 < len(nums)-1 && nums[r1+1] == target {
				r1++
			}

			res[1] = l1 + 1
			res[0] = r1 - 1
			break
		} else if nums[mid] > target {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	return res
}
