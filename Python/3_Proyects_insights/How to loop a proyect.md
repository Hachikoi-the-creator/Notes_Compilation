<h2>Choice 1; 2nd try</h2>

```python
ask = input('Wanna continue? (yes or no)')
while ask.lower() not in ['yes','no']:
    ask = input('Wanna continue? (yes or 	 no)')

if ask == ['yes']:
	choice = True
choice = False

while choice:
	myfunction()
	ask = input('Wanna continue? (yes or 	 no)')
	while ask.lower() not in ['yes','no']:
		ask = input('Wanna continue? (yes or no)')
	if ask == ['no']:
        break

                
```

<h2>Choice 2; BETTER</h2>

````python
def continue_ask(keep_ask):
    while keep_ask.lower() in ["y"]:
        keep_ask = input("Do you want to keep playing?(Y or N) ")
        if keep_ask.lower() != 'y':
            break
        practice()
    print("Thanks for playing!")
    print(lizt)

````

