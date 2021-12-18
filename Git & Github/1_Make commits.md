* Check branch status:
  On cmd:   git status

1. Add To Staging area:
   1. On cmd:   git add <name of the file>
   2. Add all:   git add --all FUCK THIS
   3. git add . //this nice
   
2. Remove from Staging area:
   1. git rm --cached <name of the file>
   
3. Commit files:
   1. On cmd:   git commit -m "some message"
      * The actual message must be a brief resume of the changes made!
   
4. Upload to GitHub

   1. After  Commit all the files or changes in the desired folder

   2. Run on cmd:   git remote add origin https://github.com/Hachikoi-the-creator/Hackerrank_0.git

   3. Then:   git branch -M main

   4. Then:   git push -u origin main

      OR everything at once

      ```
      git remote add origin https://github.com/Hachikoi-the-creator/flask-documentation.git
      git branch -M main
      git push -u origin main
      ```

      Whit that now you have your commits in your GitHub!



* To add changes to a file, just repeat the above
  Add to staging area
  Commit changes whit a message