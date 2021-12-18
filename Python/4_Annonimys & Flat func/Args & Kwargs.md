*args :

-Infinite tuple, works in a function to make it easier

````python
def unlimited_sum(*args):
    return sum(args)  #Args by itself is a tuplet!!

print(unlimited_sum(1, 3, 4, 6, 3, 6, 3, 4, 6, 3, 6, 3, 4, 6, 3, 6, 3))
#--------------------------------------------------------------------------------------
testingu = input("enter your category fo choice ")
def op_service(**kwargs):
    print(kwargs)
    if "fruit" in kwargs:
        print("Monopolize te market of {}".format(kwargs["fruit"]))
        #Must be whit .format, due to the ''
    else:
        print("There´s no future for the market of {}".format(kwargs["Marihuana"]))

op_service(fruit="appol", monos=878, Marihuana=testingu, testingu='camotes')
op_service(hayyy_cono="appol", monos=878, Marihuana=testingu, testingu='camotes')
#is not big fan of user input at KEYS, you can try but wont work wwww
#Only likes user input at VALUES
````

---

*Kwargs : 

````python
def magic_enlightenment(*args, **kwargs):
    print("I order you to give me {} {}".format(args[1], kwargs["homosexual"]))
    print(kwargs.keys())


magic_enlightenment(1, 7, 13, 96, homosexual="Horses", ofThe="mountain")
###Must be in the order given in the function!!!
````

-Infinite dictionary, works weird tbh  

In this example we give a tuple, then declare a dictionary whit  <a> = 'b'



