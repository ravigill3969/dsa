Perfect — here’s the **full list of all the stack + sliding window LeetCode medium problems**, each with direct links 🔗 and one-liner summaries to guide your practice.

---

## 🧱 **Stack-Based Medium Problems**

| #   | Problem                          | Link                                                                                                                         | Core Idea                                              |
| --- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 503 | Next Greater Element II          | [🔗 leetcode.com/problems/next-greater-element-ii](https://leetcode.com/problems/next-greater-element-ii/)                   | Circular array next greater using stack                |
| 394 | Decode String                    | [🔗 leetcode.com/problems/decode-string](https://leetcode.com/problems/decode-string/)                                       | Stack handles nested brackets + multipliers            |
| 856 | Score of Parentheses             | [🔗 leetcode.com/problems/score-of-parentheses](https://leetcode.com/problems/score-of-parentheses/)                         | Stack balance scoring based on depth                   |
| 901 | Online Stock Span                | [🔗 leetcode.com/problems/online-stock-span](https://leetcode.com/problems/online-stock-span/)                               | Monotonic decreasing stack of (price, span)            |
| 150 | Evaluate Reverse Polish Notation | [🔗 leetcode.com/problems/evaluate-reverse-polish-notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | Arithmetic via operand stack                           |
| 316 | Remove Duplicate Letters         | [🔗 leetcode.com/problems/remove-duplicate-letters](https://leetcode.com/problems/remove-duplicate-letters/)                 | Stack + last index tracking for lexicographic order    |
| 735 | Asteroid Collision               | [🔗 leetcode.com/problems/asteroid-collision](https://leetcode.com/problems/asteroid-collision/)                             | Resolve opposite directions via stack                  |
| 456 | 132 Pattern                      | [🔗 leetcode.com/problems/132-pattern](https://leetcode.com/problems/132-pattern/)                                           | Reverse traversal + stack for subsequence              |
| 394 | Decode String                    | [🔗 leetcode.com/problems/decode-string](https://leetcode.com/problems/decode-string/)                                       | Nested decoding via two stacks (repeat count + string) |

---

## 📏 **Sliding Window Medium Problems**

| #    | Problem                                        | Link                                                                                                                                                     | Core Idea                                  |
| ---- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 3    | Longest Substring Without Repeating Characters | [🔗 leetcode.com/problems/longest-substring-without-repeating-characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Classic expand-shrink window using set     |
| 438  | Find All Anagrams in a String                  | [🔗 leetcode.com/problems/find-all-anagrams-in-a-string](https://leetcode.com/problems/find-all-anagrams-in-a-string/)                                   | Frequency maps in sliding window           |
| 424  | Longest Repeating Character Replacement        | [🔗 leetcode.com/problems/longest-repeating-character-replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)               | Keep max count to control shrink           |
| 567  | Permutation in String                          | [🔗 leetcode.com/problems/permutation-in-string](https://leetcode.com/problems/permutation-in-string/)                                                   | Sliding window permutation match           |
| 713  | Subarray Product Less Than K                   | [🔗 leetcode.com/problems/subarray-product-less-than-k](https://leetcode.com/problems/subarray-product-less-than-k/)                                     | Multiply window elements, shrink when ≥ K  |
| 209  | Minimum Size Subarray Sum                      | [🔗 leetcode.com/problems/minimum-size-subarray-sum](https://leetcode.com/problems/minimum-size-subarray-sum/)                                           | Shrink window to reach target sum          |
| 1004 | Max Consecutive Ones III                       | [🔗 leetcode.com/problems/max-consecutive-ones-iii](https://leetcode.com/problems/max-consecutive-ones-iii/)                                             | Allow K zeros to flip inside window        |
| 904  | Fruit Into Baskets                             | [🔗 leetcode.com/problems/fruit-into-baskets](https://leetcode.com/problems/fruit-into-baskets/)                                                         | At most 2 distinct values in window        |
| 643  | Maximum Average Subarray I                     | [🔗 leetcode.com/problems/maximum-average-subarray-i](https://leetcode.com/problems/maximum-average-subarray-i/)                                         | Fixed window average calculation           |
| 239  | Sliding Window Maximum                         | [🔗 leetcode.com/problems/sliding-window-maximum](https://leetcode.com/problems/sliding-window-maximum/)                                                 | 🔥 Monotonic deque (stack-like window max) |

---

## ⚡ **Hybrid Stack × Sliding Window Problems**

| #    | Problem                        | Link                                                                                                                                   | Why It’s Hybrid                                      |
| ---- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 239  | Sliding Window Maximum         | [🔗 leetcode.com/problems/sliding-window-maximum](https://leetcode.com/problems/sliding-window-maximum/)                               | Deque behaves like monotonic stack                   |
| 907  | Sum of Subarray Minimums       | [🔗 leetcode.com/problems/sum-of-subarray-minimums](https://leetcode.com/problems/sum-of-subarray-minimums/)                           | Stack counts contribution of each min in all windows |
| 2104 | Sum of Subarray Ranges         | [🔗 leetcode.com/problems/sum-of-subarray-ranges](https://leetcode.com/problems/sum-of-subarray-ranges/)                               | Use two stacks to find min & max spans               |
| 862  | Shortest Subarray with Sum ≥ K | [🔗 leetcode.com/problems/shortest-subarray-with-sum-at-least-k](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | Prefix sum + monotonic deque window shrink           |

---

Would you like me to make a **7-day structured roadmap** (mixing stack + sliding window + hybrid problems with progression and hints)?
It’d include a practice order, time targets, and pattern links (e.g. “Day 3 → Monotonic Stack Mastery”).
