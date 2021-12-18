<h1>
    <p>
        OS & send2trash (could'n use the latter tho)
    </p>
</h1>
<h2>Delete all .txt in a dir</h2>

````python
import os
import send2trash
  
# walking through the directory
for folder, subfolders, files in os.walk('/Users/tithighosh/Documents'):
      
    for file in files:
        
        # checking if file is
        # of .txt type
        if file.endswith('.txt'):
            path = os.path.join(folder, file)
              
            # printing the path of the file
            # to be deleted
            print('deleted : ', path )
              
            # deleting the file
            send2trash.send2trash(path)
````

---

<h1><p>
    OS & shutil.
    </p></h1>
<h2><i>Create .txt & show dir</i></h2>


````python
import os
print(os)   #Shows the module dir whit //!
print('\n',os.getcwd())      #cwd = Current working dir whit \ !
print('\n',os.getcwdb())	#whit \\ !

"""
1.Creates a new .txt file, whit the write attribute attached to it
2.Write a str inside the .txt file
3.Close the file (Save & stop working on it)"""
f = open('Clean Weeb.txt','w+')
f.write('I will no longer watch anime...tan tan tan')
f.close()

"""This thing can print all the elements in the current directory or
in a given dir!, Must use // tho"""
print(os.listdir())
print(os.listdir('C:\\Users'))

"""Once you give the origin dir (whit the ame of the archive to move)
then specify the destination
AND THE ARCHIVE GETS MOVED!
Shows error if I try to do it again www"""
````

---

<h1><p>Shutil</p></h1><h2>Move .txt</h2>

````python
import shutil as shit   #Lmao!
try:
    shit.move('C:\\Users\\User\\PycharmProjects\\Udemy_9\\Clean Weeb.txt',
              'C:\\Users\\User\\PycharmProjects\\Udemy_9\\move_here')
    #Can also change the name in the destination folder!! \\move_here\\weeby.txt
    
    print('.txt done')
except:
    print('Not defined error at txt creation')

"""os.unlink(path) to erasing files...forever!
os.rmdir(path) which deletes a folder (folder must be empty) 
shutil.rmtree(path) removes all files and folders contained in the path
"""
````

---

<h1><p><i>OS & Shutil</i></p></h1>
<h2>
    <p>Create .txt, folder(dir) & folder whit .txt</p>
    Erase .txt, folder(dir) & folder whit .txt
</h2>    

````python

print('------------------erasing/creating--------------')
f = open('Clean Weeb.txt','w+')
f.write('I will no longer watch anime...tan tan tan')
f.close()
print(os.listdir())
os.unlink('C:\\Users\\User\\PycharmProjects\\Udemy_9\\move_here\\Clean Weeb.txt')
print(os.listdir(),'TXT ERASED')
print('\n')
#-------------------------------
try:
    os.mkdir('new_folder')
    print('Folder created!')
    os.rmdir('C:\\Users\\User\\PycharmProjects\\Udemy_9\\move_here\\new_folder')
except FileExistsError:
    print('Folder already created')
except:
    print('I don´t feel like dealing whit his error rn www')
print(os.listdir(),'FOLDER ERASED')
print('\n')
#-------------------------------
try:
    os.mkdir('to_erase')
    print('Folder 2, created')
    #txt created inside to_erase folder
    sol = open('texty.txt','w+')
    #Had problems creating .txt in a given folder, I create it, then moved instead
    shit.move('C:\\Users\\User\\PycharmProjects\\Udemy_9',
              'C:\\Users\\User\\PycharmProjects\\Udemy_9\\to_erase')
    sol.write('This is nothing important Im just annoyed because\n'
              'I Couldn\'t use the send3trash shit :c')
    sol.close()
except FileExistsError:
    print('Folder2 already exist in this universe')
except:
    print('Another error, prob file2 creation')

# Quick reminder shutil imported as shit www
shit.rmtree('C:\\Users\\User\\PycharmProjects\\Udemy_9\\to_erase')
````

---

<h1>OS.walk</h1>

````python
import os
#If printed returns the location in memory of an object
jhonny_walker = os.walk('C:\\Users\\User\\PycharmProjects')
""" HOLY C#! PRINTED LIKE EVERYTHING! LIKE 99+ THINGS! 
for main_,second,_3rd in jhonny_walker:
    print(main_,_3rd)
"""
print(next(jhonny_walker),'\n')
print(next(jhonny_walker),'\n')
print(next(jhonny_walker),'\n')
#Output
('C:\\Users\\User\\PycharmProjects', ['.idea', 'Ale_Course', 'Ale_Course(7.0)', 'Ale_course(7.1)', 'Ale_Course(7.2)', 'Ale_Course(7.3)', 'Code_Wars', 'Corey-sama_YT', 'Extra_Practice', 'GrassHopper', 'PildorasI_1', 'RandomYT stuff', 'UdemyC_1', 'Udemy_1', 'Udemy_2', 'Udemy_3', 'Udemy_4p', 'Udemy_5', 'Udemy_6', 'Udemy_6.1', 'Udemy_7', 'Udemy_8', 'Udemy_9', 'Udemy_pract_1', 'VisualSC', 'Warm_up_2'], ['Test.py']) 

('C:\\Users\\User\\PycharmProjects\\.idea', ['inspectionProfiles'], ['.gitignore', 'misc.xml', 'modules.xml', 'PycharmProjects.iml', 'workspace.xml']) 

('C:\\Users\\User\\PycharmProjects\\.idea\\inspectionProfiles', [], ['profiles_settings.xml']) 
````

<h1>OS.walk_easier</h1>

`````python
import os

print(os.getcwd())  #whit /
print(os.getcwdb())  #whit //
file_path = 'C:\\Users\\User\\Pierian-Data-Courses\\Complete-Python-3Bootcamp\\Example_Top_Level\n'

for folder, sub_fold, files in os.walk(file_path):
    print(f'Currently lookin\' at: {folder}\n')
    print('The sub-folders are: ')
    for sub_fold_ in sub_fold:
        print(f'\tSub-folder {sub_fold_}')
    print('\nThe files are: ')
    for files_ in files:
        print(f'\tFiles..{files_}')

#Output
'''
Currently lookin' at:  C:\\Users\\User\\Pierian-Data-Courses\\Complete-Python-3Bootcamp\\Example_Top_Level

The sub-folders are:
    Sub-folder: Mid Example-One
    Sub-folder: Mid-Example-Two
The files are:
    File: Mid-Example
-----
Basically the same x2 but now inside those 2 sub-folders 
'''
`````

