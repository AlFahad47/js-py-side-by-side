# No const equivalent; all variables can be reassigned. Objects (e.g., lists) are mutable. 

arr = [1,2]

arr.append(3) # Allowed
arr[2] = 4 # Allowed
arr[4] = 5 #  IndexError (Assigning to an index beyond the list's length)
print(arr)


arr = [4,5] # Allowed
print(arr)