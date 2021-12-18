<h1>Basic search RE</h1>

````python
import re
#(<str to search for>, <phrase where to search>)
print(re.search('cat','The cats is dead by now'))

#Search for 'cat' or 'dog' 
print(re.search('cat|dog','The btw is dead by now, but i love dog'))

#Search for <and> no matter if it's within another word '''
print(re.findall(r'and','my andmin level is not amd and nvidia'))	

#some kind of stuff that also grabs what's before or after
print(re.findall(r'..do.','I have dogs in my jardo '))

#Output
'''
<re.Match object; span=(4, 7), match='cat'>
<re.Match object; span=(35, 38), match='dog'>
['and', 'and']
['e dog', 'ardo ']
````

---

<h1>BASICN'T</h1>

````python

#Only search in the beginning ^
print(re.findall(r'^\d','1 is the number of times I 5 6 7have ever gave a fuck'))
#Only at the end $
print(re.findall(r'\d$','is the number 1 of 2times 7im horny 7'))

print(re.findall(r'\d','is the number 1 of 2times 7im horny ~'))
#-------------
phrase = "there are 3 numbers 34 inside 5 this sentence."
print('\n',re.findall(r'[^\d]+',phrase))    #OMG
sprut = re.findall(r'\D',phrase)
cast = ''
#coast = [lambda:cast+=i for i in sprut]
for i in sprut:
    cast += i
print(cast)
print('\n')
#Quick way to erase given spaces, letters, etc
testy = 'I want!! to marry your wife!!..'
print(re.findall(r'[^!.+? ]',testy))
cleany = re.findall(r'[^!.+?]',testy)   #Note here spaces were not erased
print(''.join(cleany))

print('\n')
tasty = 'Find all the-slavish kind of looking words-so to speak that you could find-see'
print(re.findall(r'\w+-\w+',tasty))
print(re.findall(r'[\w+]-[\w+]',tasty))     #A little easier to red

print('\n')
# Find words that start with cat and end with one of these options: 'fish','nap', or 'claw'
text_one = 'Hello, would you like some catfish?'
text_two = "Hello, would you like to take a catnap?"
text_three = "Hello, have you seen this caterpillar?"
print(re.search(r'cat(fish|nap|lar)',text_one))
print(re.search(r'cat(fish|nap|lar)',text_two))
print(re.search(r'cat(fish|nap|cow)',text_three))

````

