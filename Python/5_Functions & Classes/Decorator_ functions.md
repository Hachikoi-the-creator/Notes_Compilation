<h2>Store a function  as  variable?</h2>

````python
def hello():
    return 'こんにちは'

greet = hello()
print(greet)

#Output
こんにちは
````

---

<h1>Decorator Explanation</h1>

````python
def uppercase_decorator(function):
    def wrapper():
        func = function()
        make_uppercase = func.upper()
        return make_uppercase

    return wrapper

def split_string(function):
    def wrapper():
        func = function()
        splitted_string = func.split()
        return splitted_string

    return wrapper
"""GET IT
What does is: Runs the func given at @<func>
whit the func below as parameter!!!thus is equal to
decorate = uppercase_decorator(say_hi)
decorate()"""
@split_string   #CAN USE MULTIPLE DECORATORS!
@uppercase_decorator
def say_hi():
    my = 'ohayou sekai good morning world!'
    return my

print(say_hi())

#---Output---
['OHAYOU', 'SEKAI', 'GOOD', 'MORNING', 'WORLD!']

````

---

<h2>Decorators whit variables (Final form boss)</h2>

````python
def decorator_maker_with_arguments(decorator_arg1, decorator_arg2, decorator_arg3):
    def decorator(func):
        def wrapper(function_arg1, function_arg2, function_arg3):
            """This is the wrapper function"""
            print("The wrapper can access all the variables\n"
                  "\t- from the decorator maker:\n\t>>>{dea1} {dea2} {dea3}\n"
                  "\t- from the function call:\n\t>>>{fa1} {fa2} {fa3}\n"
                  "and pass them to the decorated function"
                  .format(dea1=decorator_arg1,dea2=decorator_arg2,dea3=decorator_arg3,
                          fa1=function_arg1, fa2=function_arg2,fa3=function_arg3))
            return func(function_arg1, function_arg2,function_arg3)

        return wrapper

    return decorator

pandas = "Pandas"
@decorator_maker_with_arguments(pandas, "Numpy","Scikit-learn")
def decorated_function_with_arguments(function_arg1, function_arg2,function_arg3):
    print(f"This is the decorated function and it only knows about its arguments: \n>>>{function_arg1}"
          f" {function_arg2} {function_arg3}")

decorated_function_with_arguments(pandas, "Science", "Tools")

#---Output---
'''
The wrapper can access all the variables
	- from the decorator maker:
	>>>Pandas Numpy Scikit-learn
	- from the function call:
	>>>Pandas Science Tools
and pass them to the decorated function
This is the decorated function and it only knows about its arguments: 
>>>Pandas Science Tools
````

