<h3>SMART DATA STORAGE</h3>

````python
def upper_count(str_):
    d = {'upper':0,'lower':0}
    for char in s:
        if char.isupper():
            d['upper'] += 1
        elif char.lower():
            d['lower'] += 1
	print('In the prease are {0} lower case\
          and {1} upper case letters'.format(d['lower'],d['upper']))

upper_count('Un Caballooun')
'''Output:
2 10
'''
````

---

<h2>Function w/arguments</h2>

````python
def forth(str_1,str_2,bool_0):
    if bool_0:
        print(f'Truly awesome {str_1}')
	else:
		print(f'Truly awesome {str_1}')
#Depending on bool value, prints a or b
forth('camello','aruran',True)
forth('Marco','Mal un numero 草',False)
````

<h2>Min & Max</h2>

````python
def shoot_range(num,miin,maax):
    if num in range(miin,maax+1):
        print(f'{num} is in range!')
	else:
        print(f'{num} is out of boundaries! O:')

shoot_range(7,0,7)	#in range
shoot_range(9,2,8)	#not in range unu
````



