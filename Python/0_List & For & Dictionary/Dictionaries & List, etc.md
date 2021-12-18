<h2>Dictionaries</h2>

````python

#Kay cannot change later
my1 = {1:'eat',2:'sex',3:'rock',4:'drugs'}
my2 = {3:'rock',1:'eat',4:'drugs',2:'sex'}
my1 == my2 True
#The order doesn't matter to compare list, 'Cuz they can't be sliced in the first place

### DEFAULT VALUE ###
#In case the key is not in the dic, returns a default val asigned to it
#Does not change the dictionary
dic = {1:'kappu',2'mogu mogu',3:'nyaaan'}
dic.get(77,'Mio-ssha')

#This one actually changes the dic, just if the key was not there before
dic.setdefault(66,'Iron-Mouse')
````

---

<h2>List</h2>

````python 
List  = [1,2,3,'True','False','None']

List.add('bruh')#add at the end
List.add({1,6,'buruh'})#add 2+ values
List.extend([7,8,9])#concatenates at the end
List.short()#1-9 or a-z
List.clear()#erase all
List.reverse# == ::-1
List.pop(<index>)#Returns a value
````

<h2>Combines List</h2>

````python
mona = [99,77,66,101]
lisa = ['aver','sense','feel']
bruh = ['unite','solid','lolis','addition']
for mona_, lisa_, bruh_ in zip(mona,lisa,bruh):
    print(mona_, lisa_)
'''Output:
99 aver
77 sense
66 feel
'''
````

---

<h2>Tuple</h2>

````python
tuturu = (1,2,3,3,4,4,7)
# == (1,2,3,7) erase repeated
tuturu.count(<value>)#How many?
tuturu.index(<value>)#Where is it?
````

<h5>Unpacking</h5>

````python
employeeList = [("Martha", 123), ("Pancrasio", 222), ("Aruran", 777)]
def best_month_employee():
    maxHours = 0
    bestEmployee = "."
    for employee, hours in employeeList:
        if hours > maxHours:
            maxHours = hours
            bestEmployee = employee
        else:
            pass
    return f"The best worker is {bestEmployee} whit {maxHours} worked hours"
    #Wtf parenthesis aren't necessary!
print(best_month_employee())
````

<h2>Set ( )</h2>

````python
Sets = set() /// {1,2,3,4,'haaan'}

#Cant have repeated data either

#Speeds up item finding in comparative to List()

​````python
s1 = {1,2,3}
s2 = {4,2,3}
s3 = {4,5,3}
s4 = s1.intersection(s2,s3)     #Exist in everybody
s5 = s1.difference(s2,s3)   #Exist in s1 but not in s2 & s3
s6 = s1.symmetric_difference(s2)    #Just exist in one of them
print(s4)
print(s5)
print(s6)

lizt = [1,2,3,4,1,2,3,4,5,6,7]
l2 = list(set(lizt))    #OMG
print(l2)
employee = ['Juanito','Pancrasio','Franco','Pito','Arturo','Bet my ass']
member = ['Pito','Arturo','Bet my ass']
toFire = ['Juanito','Pancrasio','Franco']
memberEmployee = set(member).intersection(employee)
#Can compare set W/list, due to intersection being a set method!!!
print(memberEmployee)
````

