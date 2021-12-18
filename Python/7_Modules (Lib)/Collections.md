<h2>.Counter </h2>

````python
from collections import Counter
my_list = [1,2,1,2,3,4,2,3,2,1,2]
print(Counter(my_list))
print(dict(Counter(my_list)))	#Must be converted to dict in order to slice trough [<index>]
#Output
Counter({2: 5, 1: 3, 3: 2, 4: 1})
{1: 3, 2: 5, 3: 2, 4: 1}

````

`````python
test = 'aaaddbbhsujdikoooooosjuiwkppppppncuaaa'
print(help(Counter.most_common))    #The 'None comes from here' www
print(Counter(test).most_common(),'\n')  #Orders from the most -> less common
bby = Counter(test)
print(bby.most_common(3))   #Show the top 3 more common!!
`````

---

<h2>.Defaultdic</h2>

````python
from collections import defaultdict
"""This thingy add a default value (declared within the default_dict declaration)
add if you ask for an invalid key, creates that key and assigns the default value to it!"""
d = {'a':77}
try:
    print(d['invalid'])
except KeyError:
    print('key does not exist')

#DEFAULT DICT!!!
d = defaultdict(lambda:777)
try:
    print(d['invalid'])
except KeyError:
    print('key does not exist')

#---Output---
'''
key does not exist
777
````

---

<h2>Stantard tuple</h2>

````python
````

