-Tuple un-packing: Using X, Y logic

-Whit dictionary must specify values or keys 

````python
tuplePacking = [(1, 2), (3, 4), (5, 6), (7, 8), (9, 10)]
for numbNumb,momonechi in tuplePacking:  #X,Y logic!!!
    print(numbNumb,momonechi)
    print(momonechi)
#---------------------------------------------------------------------------------------
doc = {44: "ushi suki", 88: "momochichi", 77: "Mori_Calliope", 69.96:"Watson_Amelia"}
for menancing in doc.values():
    print(f"\n{menancing}")

for moribundo in doc.keys():    #items or erase, show all!
    print(f"this shitty {moribundo}")
````

---

-Example of from 'x' import 'y'

if instead of elif, makes it run regardless of the result whit the first if

````python
from random import choice
korone_chan = choice([True,False])
if korone_chan:  #works whit bool
    print("Yubi Yubi!~")
if not korone_chan:  #If still runs even tho another if was True
    print("YES,YES,YES!!!")
else:
    print("No,no,no,no,no!")
````