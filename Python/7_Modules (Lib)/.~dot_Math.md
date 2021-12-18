<h1>Pi, e, infinite, not a number </h1>

````python
from math import pi
def sphere_vol(rad):
    step_sis = 4/3*pi
    return step_sis*(rad**3)
print(sphere_vol(7))
print('\n')

#Extra attributes
print(math.pi)
print(math.e)
print(math.inf)   #infinity
print(math.nan)     #not a number
#Output
1436.7550402417319

3.141592653589793
2.718281828459045
inf
nan

````

<h1>Round a number</h1>

````python
a = 7.77
print(math.floor(a))    #bottom
print(math.ceil(a))     #Top
print(int(a//1))        #Bottom
print(round(a))     #Closest

#Weird thing whit round()
print('\n')
print(round(4.5))   #4
print(round(5.5))   #6
#Output
7
8
7
8

4
6
````

---

<h1>Complicated functions</h1>

````python

#For more detailed work whit numbers use lib Numpy!
print('\n',math.log(math.e))
print(math.log(100,10))     #log is still a weird thingy
print(math.sin(10))
print(math.degrees(math.pi/2))
print(math.radians(180))
#Output
 1.0
2.0
-0.5440211108893698
90.0
3.141592653589793
````

