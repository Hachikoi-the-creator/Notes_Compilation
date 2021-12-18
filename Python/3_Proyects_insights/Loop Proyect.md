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

Forgot how to do it and made this ...thing www

---

```python
def continue_ask(keep_ask):
    while keep_ask.lower() in ["y"]:
        keep_ask = input("Do you want to keep playing?(Y or N) ")
        if keep_ask.lower() != 'y':
            break
        practice()
    print("Thanks for playing!")
    print(lizt)
```

I made this the first time, fucking beauty

---

````python
response = True
while response:
    if not response:
        break
    response = play_again_ask()
    #Returns bool depending of the answer
    my_function()
    
#Same but different www
while True:
    asking = input('Do you want to keep playing?(Y/N): ')
    while asking[0].lower() not in ('y','n'):
        asking = input('Asking again..(Y/N): ')
    if 'n' in asking[0].lower():
        playing = False
        break
print(playing)
````

