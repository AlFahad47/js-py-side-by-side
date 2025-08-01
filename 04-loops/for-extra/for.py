# 1. for (Python’s equivalent to for...of)

# Purpose: Iterates over the elements of any iterable (e.g., lists, tuples, strings, dictionaries).
# Use case: General-purpose iteration over sequences.


fruits = ['apple','banana','orange']
for fruit in fruits:
    print(fruit)

# With indices: Use enumerate() for index-value pairs (like for...of with .entries()).

for index,fruit in enumerate(fruits):
    print(index,fruit)

# Output:
# 0 apple
# 1 banana
# 2 orange