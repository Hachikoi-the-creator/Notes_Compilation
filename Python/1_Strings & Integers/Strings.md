This girls are untouchable, its a pain to change a given letter but...

-can easily be concatenated 

-Most of the functions don´t return data, just change the given string

````python
name = "Nanimo"
LastLetters = name[3:]
potato = "naga"+LastLetters
print(potato)   #O: string + string

x = "happy mokeys"
y = " eating bananas"
z = x+y
print(z)
print(x.upper())    #Doesn´t change the variable, just how its printed
# the parenthesis works to activate the fuction itself!
print(x.split())    #spaces become a ,
print(x.split('y'))    #Y´s become a ,
````

<h2>Format/Print</h2>

-Lotta of different ways to print Variables:

````python
print("String chilling{}".format(" BOOMB"))
print("{}Fishing in the river".format("bored of "))

print("The{2}{1}{0}{0}".format(" fox"," brown"," quick"))
print("The{q}{b}{f}{b}{f}".format(f=" fox",b=" brown",q=" quick"))  #Kinda way BETTER

result = 111/778
print(result)
print("The result is {r:0.4f}".format(r=result))
#{<INDEX>:<WIDTH(space between)>.<PRECISION>f}
#Widht being spaces before (0.1427), also f is not nessesary
print(type(result))

conti = "I´ve come to talk whit you again"
print(f"Hello darkness my old friend {conti}")
print(f'{conti} es puto')

'''
.format
-allows to even use some kind of dictionary to interact whit

-Also helps to adjust precision whit floats  (10/3 = 0.33)

f ' ' = Faster and easier way to do it
'''
````

<h2><b>INDEXING</b></h2>

-You can pick a certain part of the string, print every 'n' letters, until 'n' or just pick it from the end to the beginning.

Same whit List, Dictionaries, Etc.

 ````python
 print("print中")
 string = "boing boings"
 print(string[0])
 print(string[:4])   #From start to 4 without the 4th!!
 print(string[3:])
 print(string[-1])
 print(string[::2])  #Jumping every 2!
 print("\n")
 print(string[2:9:2])    #from 2 Jumping 2 until index 9
 print(string[::-1])  #Print it inversely
 exam = "tinker"
 ````

---

<h2>ASK()</h2>

```python
'camping'.islower() = True
'COME'.isupper() = True

#If consist only of letters, no blank space
'momotaro'.isalpha() = True
'moo13'.isalpha() = False

#If consist only of letters and numbers, no blank space
'123pormi'.isalmun() = True
'comida_rapida'.isalnum() = False

#If consist only numbers, no blank space
'1234'.isdecimal() = True
'uno23'.isspace() = False

#Title format, uppercase followed by lowercase
"Once_Upon".istitle() = True
"1nce My Sun".istitle() = False

#Ends & Starts whit
#Don't really like the bool operatos, kind of ignores them T.T
'manuel'.startswhit('manuel'and'ma') = True
'my_town'.endswhit('unko' or 'wn') = True
'my_town'.endswhit('wn') = True

```

---

<h1>HACKS & MODIFY</h1>

Use of:

- .replace
- And some weird stuff  \

````python
print('\n')	#Skips 4 renglons
brazil = [1,2,3,3,3,4,5,6,6,6]
new_brazil = set(brazil)
print(list(new_brazil))

s = ' Hello from pachinko \t\n\r\t Hi there'
s.replace(' ','') #Changes spaces to ''
print(s)
'''Output:
[1,2,3,4,5,6]
Hellofrompachinko
	Hithere
'''
````

