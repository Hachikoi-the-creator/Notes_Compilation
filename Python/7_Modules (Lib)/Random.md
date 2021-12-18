<h1>Random int</h1>

````python
import random
print(random.randint(6,9))

random.seed(101)
print(random.randint(0,100))    #WTF always 74 due to seed
print(random.randint(0,100))
print(random.randint(0,100))
print(random.randint(0,100))

#Output
9
74
24
69
45
````

---

<h1>Stadistics stuff</h1>

````python
my_list = list(range(17))
print('\n',my_list)

#Multiple Unique choices!
print(random.choices(population=my_list,k=10))#from where?, how many?

#Stores in a list 1 data from jinkou, can be repeated
print(random.sample(population=my_list,k=10))

#Same as above but CANT repeat
random.shuffle(my_list)     #Changes the list
print(my_list)

#Output
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
[7, 11, 3, 3, 4, 11, 3, 16, 1, 3]
[2, 14, 12, 8, 5, 3, 7, 15, 11, 6]
[2, 12, 0, 8, 9, 16, 10, 11, 5, 14, 3, 4, 7, 15, 1, 6, 13]
````

---

<h1>Math related : Extra stuff </h1>

````python
#USE NUMPY INSTEAD OF NEXT THO
print(random.uniform(1,5))  #random decimal
print(random.gauss(0,1))

#Output
3.977876057295059
-1.7665992795896235
````

