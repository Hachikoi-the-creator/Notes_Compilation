-Use the data of a previous class in another class

`````python
class Animal:
    def __init__(self,name):
        self.name = name

    def speak(self):
        raise NotImplementedError('Sub class must implement this abstract Method')

print('+++')
#myAnimal = Animal
#print(myAnimal.speak(Animal))   #Not expected, raise

#What is done is...Overwrite it like this:
class Dog2(Animal):
    def speak(self):
        print(self.name,' Says Woooof')

Dog2('Juan').speak()
#ONE RL example can be for opening different types of files,
#You may want to share the same Open method

`````

