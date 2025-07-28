# ✅ Global Variables and Printing
name = "Fahad"
age = 27
print(name, age)  # Output: Fahad 27

# ✅ Block Scope in Python (Python has no block scope for 'if')
if True:
    a = 10
print(a)  # Output: 10 (accessible outside block)

# ✅ Global Modification with 'global' keyword
count = 0

def increment_global():
    global count  # Refers to global 'count'
    count += 1

increment_global()
print(count)  # Output: 1

# ✅ Local Variable Shadows Global
count = 0  # Resetting global count

def increment_local():
    count = 1  # This 'count' is local to the function
    print(count)  # Output: 1

increment_local()
print(count)  # Output: 0 (global count unchanged)
