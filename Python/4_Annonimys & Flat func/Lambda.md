<h2>Fill List whit normal & Flat function</h2>

````python
stringless = 'VentiTrap'
trading = []
for word in stringless:
   trading.append(word)
print(trading)
trading.clear
trading = [i for i in stringless]
print(stringless)

#Output
"""
['V', 'e', 'n', 't', 'i', 'T', 'r', 'a', 'p']
VentiTrap
````

---

<h2>True lambda function</h2>

1. Pretty easy: Multiplies 'n' **
2. returns 'n' + 7 
3. return just pair numbers (cooler1)
4. separates a word by letters (cooler2)
5. prints a list of words, whit reversed words (cooler3)

````python
#Use an one use-anonymous being
cube = lambda num:num**2
print(cube(9))  #Must use print, because is a function whit Return...
listWords = ["amor","avocado","martir"]
#########Cooler lambda 1
onion = [5,6,7,0]
print(list(map(lambda i:i+7,onion)))
#########Cooler lambda 2
print(list(filter(lambda i:i % 2 == 0,onion)))  #Filter iterates and filters!
#########Cooler lambda 3
print(listWords)
print(list(map(lambda w:w[0],listWords)))  #Need to use map, to iterate!
print(list(map(lambda w:w[::-1],listWords)))
````

