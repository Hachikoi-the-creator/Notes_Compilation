<h1>For loop whit jumps!</h1>

````python
lisa_lisa = []
for num in range(3,13,2):
#Starts at 3 go until 13, 2 by 2
	print(num)
    lisa_lisa.append(num)
lisa_lisa.reverse
print(lisa_lisa)
````

---

<h1>Counter for very letter</h1>

````python
for items,combat in enumerate('muahaha'):
    print(items,combat)
    #items 0-99+	combat m-a
    print('\n')
    #Jumps 4 spaces
#Output
0m
1u
2a....
````

---

<h1>Combine or check 2 list of str</h1>

````python
"""
-Combine list
-For every Mona [ n ] prints  Lisa [ n ]  as well	"""
mona = [99, 77, 8967, 10]
lisa = ['avercrombie','enty','Laffie']
leo = ['Nagato','Belfast','Eugen','Z23']
for mona_, lisa_, leo_ in zip(mona, lisa, leo):
    print(mona_,lisa_)
#Output
99 avercrombie
77 enty
8967 Laffie
````

---

<h1>Hamming distance, string comparation</h1>

````python
def jamon(stronk1, stronk2):
    if stronk1 == stronk2:
        return 0
    counter = castle = abs(len(stronk1)-len(stronk2))
    for x,y in zip(stronk1,stronk2):
        if x != y:
            counter += 1
    return counter

print(jamon('camote','camote'))		
print(jamon('abc','abs'))			
print(jamon('caca','camomomo'))		 
#Output
0
1
6
````

---

<h1>Compare strings</h1>

````python
print('a' and 'n' and 'o' in 'amigdalando')  #Prints comparation
test_dicc = {27:'anos-sama',77:'half-dead'}
print(27 in test_dicc)	#By default checks keys
print('anos-sama' in test_dicc.values())	#check values!
````

---

<h1>Weird way of working whit strings</h1>

````python
cama = ['mmo','homo','jhonny','gyro']
for i in cama:
    print('-'.join(i))	#Puts - between every letter

#Output
m-m-o
h-o-m-o....
````

---

<h1>Flat for (list comprehension)</h1>

````python
stfu = "Create a list of the first letter of each word"
pros = [bruh[0] for bruh in stfu.split()]
print(pros)
#Output
['C', 'a', 'l', 'o', 't', 'f', 'l', 'o', 'e', 'w']
````

---

<h1>Job interview</h1>

````python
#if %3 print FIZZ, if %5 print Buzz, if both print FIZZBUZZ
for job in range(1, 101):
    if job % 3 == 0 and job % 5 == 0:
        print("FizzBuzz")
    elif job % 3 == 0:
        print("Fizz")
    elif job % 5 == 0:
        print("Buzz")
    else:
        print(job)
````

---

<h1>str to List & List to str</h1>

````python
word = 'Kingdom'
cast = [i for i in word] #List done
print(cast)

###
print(''.join(['K', 'i', 'n', 'g', 'd', 'o', 'm']))

#Output
['K', 'i', 'n', 'g', 'd', 'o', 'm']
'Kingdom'
````

<h1>Partition & Sangria</h1>

```python
print("hai desunye".partition('des'),'\n')

print('Bruh'.rjust(10))
print('Barbara-chan'.ljust(10,'+'))
print('Sayounara~'.center(7,'-'))#use pairs is recommended

#To erase sangria, or letters use:
> .strip()#Empty for blank spaces
> .lstrip('smp')#Erases any combination of those letters, mps, psm, etc.
> .rstrip()

#Output
('hai ', 'des', 'unye')

'      Bruh'
'Barbara-chan	   '
----Sayounara~---
```

