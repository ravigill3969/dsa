package main

import (
	"container/list"
	"fmt"
)

func main() {
	l := list.New()
	l.PushFront(1)
	l.PushBack(2)
	l.PushBack(3)

	fmt.Println("All elements:")
	for e := l.Front(); e != nil; e = e.Next() {
		fmt.Println(e.Value)
	}

	fmt.Println("Last element:", l.Back().Value)
}
