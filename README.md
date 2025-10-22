Perfect ⚔️ — here’s a **focused list of medium-level Sliding Window problems** from LeetCode.
These are the core “real interview” challenges that test your reasoning, not just pattern recognition.

I’ve grouped them by **concept type** so you can master them strategically.

---

## 🧩 **LeetCode Medium — Sliding Window Problems**

### 🔠 **Strings & Character Frequency**

| #       | Problem                                                                                                                         | Core Idea                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **3**   | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Move left pointer when duplicate appears (map of last index).   |
| **567** | [Permutation in String](https://leetcode.com/problems/permutation-in-string/)                                                   | Compare frequency of chars in current window to target.         |
| **438** | [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)                                   | Sliding character count with window size = pattern length.      |
| **424** | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)               | Track most frequent char to decide when to shrink.              |
| **76**  | [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)                                             | Classic — dynamic window shrinking, character deficit tracking. |

---

### 🔢 **Arrays & Numeric Windows**

| #        | Problem                                                                                                                                | Core Idea                                                       |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **209**  | [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)                                                  | Shrink window when sum ≥ target, track min length.              |
| **713**  | [Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)                                            | Multiply and divide window product; count valid subarrays.      |
| **1004** | [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)                                                    | At most `k` flips → window with constraint.                     |
| **1208** | [Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/)                                | Maintain running cost (sum of differences), shrink if > budget. |
| **1493** | [Longest Subarray of 1’s After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) | Window with 1 allowed zero.                                     |

---

### 🧠 **Advanced & Trickier Logic**

| #        | Problem                                                                                                                                   | Core Idea                                                            |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **930**  | [Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum/)                                                     | Count subarrays with exactly `goal` using prefix-sum + window trick. |
| **992**  | [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)                                 | “Exactly K” = atMost(K) – atMost(K-1). Two-pointer mastery.          |
| **2958** | [Length of Longest Subarray With at Most K Frequency](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/) | Map counting frequency, shrink when count exceeds K.                 |
| **1658** | [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)                           | Transform into longest subarray with sum = total − x.                |
| **1838** | [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)                           | Sort + sliding window sum to maximize equal numbers via increments.  |

---

### ⚙️ **Bonus Challenge Tier**

Once comfortable with the above, try these hybrid/edge ones:

| #        | Problem                                                                                                             | Core Idea                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **1052** | [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)                                     | Fixed window overlayed with base sum.             |
| **1423** | [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/) | Convert to “minimum subarray to remove” problem.  |
| **2090** | [K Radius Subarray Averages](https://leetcode.com/problems/k-radius-subarray-averages/)                             | Running sum + sliding window average computation. |

---

### 🧭 Recommended Study Path (for Medium level)

| Day | Focus                  | Problems   |
| --- | ---------------------- | ---------- |
| 1️⃣  | Basic window motion    | 3, 209     |
| 2️⃣  | Character frequency    | 424, 438   |
| 3️⃣  | Window shrinking logic | 76, 567    |
| 4️⃣  | Numeric windows        | 713, 1004  |
| 5️⃣  | Constraint windows     | 1208, 1493 |
| 6️⃣  | Advanced counting      | 992, 930   |
| 7️⃣  | Challenge day          | 1658, 1838 |

---

Would you like me to create a **visual cheat sheet** (with window type, when to move left/right, and common patterns like “expand–shrink” and “count map”)? It’s an awesome 1-page summary for window problems.
