<h3>I don't think I'll ever use this shit</h3>

`````python
try:
    for i in ['a','b','c']:
        print(i**2)
except TypeError:
    print('Baaaka')
else:
    print('Naisu!')
print('-')
#-----------------------------------------
try:
    x = 5
    y = 0

    z = x/y
except SyntaxError:
    print('Bu bu desu wa!')
except ZeroDivisionError:
    print('ZERO DIV no!')
finally:
    print('IM SPEED IM ALWAYS RUN!!!')
    print('-')
#-----------------------------------------
def integer():
    while True:
        try:
            myHoney = int(input('Enter a number: '))
            myHoney += 777
            print(myHoney)
        except TypeError:   #str + int
            print('ERROR')
        except ValueError:  #int expected got str
            print('ano error')
        else:
            print(f'THANK YOU FOR YOUR COOPERATION IN {myHoney} HUMAN EXPERIMENTS')
            break
        finally:
            print('IM HAVE ALWAYS BEEN SPEED!!')

integer()

`````

