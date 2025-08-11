def add(num1,num2):
    return num1+num2
def sub(num1,num2):
    return num1-num2
def multi(num1,num2):
    return num1*num2
def div(num1,num2):
    return num1/num2

def calculator(a,b,operation):
    if operation=="add":
        return add(a,b)
    elif operation=='sub':
        return sub(a,b)
    elif operation=='multi':
        return multi(a,b)
    elif operation =='div':
        return div(a,b)
    else:
        print("wrong operation")
    
result= calculator(3,2,"sub")
print(result)