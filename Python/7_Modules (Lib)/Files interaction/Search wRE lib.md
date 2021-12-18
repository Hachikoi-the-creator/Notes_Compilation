<h1>Simple search</h1>

````python
"""This helps to find a patter whitin a database, string, etc"""
import re
text = "The person's phone number is 408-555-1234. Call soon!"
print(re.search('phone',text))
print('\n',re.search('existance',text))     #if not, returns None
'''Actually is a class and creates objects, instead of printing
could just create n instance of the object and acess it's var, like
.span()		= (13,18)
.start()	= 13
.end()		= 18
.group()	= phone'''

#Output
"""
<re.Match object; span=(13, 18), match='phone'>
None
````

---

<h1>Search multiple instances</h1>

````python
'''This only returns a List whit all the instances'''
new_txtx = 'a ball in my ball s'
more = re.findall('ball',new_txtx)
print(more)     #Just returns a list of all the appearances

#Output
['ball','ball']

#---------------------------------------------------------
'''This creates and object for every instance!'''
for appear in re.finditer('ball',new_txtx):
    print(appear.span())
    
#Output
(2, 6)
(13, 17)	#Position of type(List), since 17 it's not shown
````

---

<h1>Standardized search</h1>

````python
#From using this..
u_phony = 'my phone number may be something like 777-888-6789'
print(re.search('777-888-6789',u_phony),'bruh')

#To this!!
patas = r'\d{3}-\d{3}-\d{4}'
print(re.search(patas,u_phony))     #HELL YEAH!

#And finally this!!!
phone_patt = re.compile(r'(\d{3})-(\d{3})-(\d{4})')
result = re.search(phone_patt,u_phony)
print(result.group())
print(result.group(1))      #INDEXING STARTS AT 1

#Output
'''
<re.Match object; span=(38, 50), match='777-888-6789'> bruh
<re.Match object; span=(38, 50), match='777-888-6789'>
777-888-6789
777
````

