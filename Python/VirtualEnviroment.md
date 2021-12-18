OwO What's this?
	A virtual environment is a place where you can have different versions of the addons for your programming language, helps to avoid fucking up a webpage due to change in versions of Django, etc.
*Never put project's inside the environment directory, since the folder is usually erased or moved frequently*

How to create?

1. On cmd

   1. Inside the correct directory
      1. Be sure that you are in the correct folder where you want to create the venv
      2. type: python -m venv <name of the venv folder>
   2. Outside
      1. write.	python -m venv \<my_project>\ <name of the venv folder>

2. Activate & Deactivate:

   1. <name of the venv folder>\Scripts\activate.bat
   2. deactivate

3. UPDATE How to activate in VSCode

   1. ​	.\venvi\Scripts\activate
   2. If still not changes, click on left corner to change interpreter, select the desired folder to change to and select the venv folder
   3. If the venv folder is not visible walk through it in the "Enter interpreter path" > "Find..  " option

4. Check what's inside a venv:

   1. pip list

5. Create a copy of the addons inside that venv.

   1. write.	pip freeze
   2. Copy that to a .txt file

6. Erase a venv.

   1. write: rmdir\ <name of the directory>  \s

      The 's' means that erases the whole tree

7. Install addons from back-up

   1. Be sure to be on the desired and activated venv
   2. pip install -r <directory>\ <name of the back up.txt>
   3. Example:    pip install \desktop\python_VENV\web_dev.txt

8. List of addons only installed in the venv.

   1. whit the venv active.	pip list --local

      







