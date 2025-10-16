dfs(0, 0)
 ├─ dfs(0, 1)
 │   ├─ dfs(0, 2)
 │   │   ├─ dfs(0, 3)
 │   │   │   ├─ dfs(0, 4)
 │   │   │   │   ├─ dfs(0, 5) → ✅ return 1 (base case hit)
 │   │   │   │   └─ dfs(1, 4) → return 0
 │   │   │   │   💾 map["0-4"] = 1
 │   │   │   │   🟢 executes `return ways;` → returning 1
 │   │   │   ├─ dfs(1, 3)
 │   │   │   │   ├─ dfs(1, 5) → ✅ return 1
 │   │   │   │   └─ dfs(2, 3) → return 0
 │   │   │   │   💾 map["1-3"] = 1
 │   │   │   │   🟢 executes `return ways;` → returning 1
 │   │   │   💾 map["0-3"] = 1 + 1 = 2
 │   │   │   🟢 executes `return ways;` → returning 2
 │   │   ├─ dfs(1, 2)
 │   │   │   ├─ dfs(1, 4)
 │   │   │   │   ├─ dfs(1, 6) → return 0 (>5)
 │   │   │   │   └─ dfs(2, 4) → return 0
 │   │   │   │   💾 map["1-4"] = 0
 │   │   │   │   🟢 executes `return ways;` → returning 0
 │   │   │   ├─ dfs(2, 2)
 │   │   │   │   ├─ dfs(2, 7) → 0
 │   │   │   │   └─ dfs(3, 2) → 0
 │   │   │   │   💾 map["2-2"] = 0
 │   │   │   │   🟢 executes `return ways;` → returning 0
 │   │   │   💾 map["1-2"] = 0 + 0 = 0
 │   │   │   🟢 executes `return ways;` → returning 0
 │   │   💾 map["0-2"] = 2 + 0 = 2
 │   │   🟢 executes `return ways;` → returning 2
 │   ├─ dfs(1, 1)
 │   │   ├─ dfs(1, 3) → reuse 💾 map["1-3"] = 1 → ✅ return 1
 │   │   ├─ dfs(2, 1)
 │   │   │   ├─ dfs(2, 6) → 0
 │   │   │   └─ dfs(3, 1) → 0
 │   │   │   💾 map["2-1"] = 0
 │   │   │   🟢 executes `return ways;` → returning 0
 │   │   💾 map["1-1"] = 1 + 0 = 1
 │   │   🟢 executes `return ways;` → returning 1
 │   💾 map["0-1"] = 2 + 1 = 3
 │   🟢 executes `return ways;` → returning 3
 ├─ dfs(1, 0)
 │   ├─ dfs(1, 2) → reuse 💾 map["1-2"] = 0 → ✅ return 0
 │   ├─ dfs(2, 0)
 │   │   ├─ dfs(2, 5) → ✅ return 1 (base hit, coin 5)
 │   │   └─ dfs(3, 0) → return 0
 │   │   💾 map["2-0"] = 1
 │   │   🟢 executes `return ways;` → returning 1
 │   💾 map["1-0"] = 0 + 1 = 1
 │   🟢 executes `return ways;` → returning 1
💾 map["0-0"] = 3 + 1 = 4
🟢 executes `return ways;` → returning 4 (final answer)
