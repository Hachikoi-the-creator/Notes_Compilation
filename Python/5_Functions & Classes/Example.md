````python
class Doggo():
    #Classs Object attribute
    #NEVER changes !
    isMammal = True

    def __init__(self,myBreed,Age):  #Not necessary to use 'self' any word can be used
        self.weeth = myBreed    #OMG After self doesn't matter the name, just the ORDER
        self.whatefuck = Age
        #Attributes
        #Wa take in the argument
        #Assing it using self.<att_name> = <declared on (self,<Name>)>

    #OPERATIONS/ACTIONS ---> Methods = Functions inside a Class
    def bark(self,num):
        print(f'Nyaaa my age is {self.whatefuck} rand number {num}')  
        #Needs to be self, ´cause it´s attached like that
        #If it´s a parameter within the Method, don´t use self

myDog = Doggo(myBreed='Cat',Age='666')
print(myDog.weeth,'-',myDog.whatefuck)
print(myDog.isMammal)
````

---

````python
#Calculate the volume of a cylinder and it´s surface area
class Cylinder:
    def __init__(self,height,radius):
        self.hey = height
        self.radio = radius

    def volume(self):
        result = math.pi*self.hey*(self.radio**2)
        return f'{float(result):0.3f}'  #Changin to float instead of int
        #and weather the change is made here or in print, works just fine!!

    def surface_area(self):
        result = 2*(math.pi*self.radio*self.hey) + 2*(math.pi*self.radio**2)
        return f'{float(result):0.3f}'

myCilindro = Cylinder(2,3)
print('')
print(myCilindro.volume())
print(myCilindro.surface_area())  #Had some issues and needed to put '0' fr some reason
#print(type(myCilindro.surface_area()))
````

---

<h2>Bank account</h2>

````python
class BankAcc:
    def __init__(self,client,balance):
        self.client = client
        self.balance = balance

    def add_money(self,balance_plus):
        self.balance = self.balance + balance_plus
        print(balance_plus,' dollars have been successfully added to your account!')

    def retire_money(self,balance_less):    #Udemy used if-else instead, meh
        while balance_less > self.balance:
            balance_less = int(input('Enter a  valid amount to retire '))
        self.balance = self.balance - balance_less
        print(balance_less,' dollars have been successfully discounted from your account!')

    def balance_check(self):
        print(f'Now your actual balance is {self.balance} dollars  ')

    def __str__(self):  #And this is how is done whit just print the instance of the object
        return print(f'Now your actual balance is {self.balance} dollars  ')
#Starts whit 100
#Retires a given amount, and print saldo
#Adds a given amount, and print saldo
client1 = BankAcc('Paquito',100)
#print(client1.balance)
client1.retire_money(int(input('Enter the amount you want to retire: ')))
client1.balance_check()
client1.add_money(int(input('Enter the amount you want to add: ')))
client1.balance_check()

````

