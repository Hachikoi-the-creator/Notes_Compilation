-Whit this tuff you can over-write default methods! 

````python
class Book:
    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return f'{self.title} written by {self.author} contains just {self.pages} pages'

    def __len__(self):
        return f'This book only has {self.pages} pages'

    def __del__(self):
        print('A book has been erased from existence! :c')  #Here must be print

myBook = Book('Python for noobs','Not you',7)
###print(myBook.title,myBook.author,myBook.pages)  #Not this

print(myBook)  #Ths is possible thanks to the str method!
#Because print ask for a str representation of what given to it

#Dunder len,str,init,format are kind defined in this ver!
print(myBook.__len__())
print('')
print(myBook.__str__())
del myBook  #O: erases a var from memory
#print(myBook)

````

