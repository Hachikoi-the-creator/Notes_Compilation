<h2>Using int as bool</h2>

````python
#Using int as bool, worked as expected lol
zero = 0
one = 1
two = 2
#Any N != 0 is == True
if not zero:
    print('bruh')
else:
    print('chale')
if two:
    print('meat')
#Output
bruh
meat
````

---

<h2>Another way of valitating int inputs</h2>

````python
def take_bet(money):    #==chips
    while True:
        try:
            money.bet = int(input('How much wanna bet? '))
        except ValueError:
            print('Enter a number... ')
        else:
            if money.bet > money:
                print('The bet exceeds the money available \n'
                      'current available is {}'.format(money.total))
                #SINCE WE EXPECT MONEY TO BE AND OBJECT FROM CHIPS() CLASS
            else:
                break
````

