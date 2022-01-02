<style>
    body{
    background-color:rgb(0, 37, 46);
    color: black; 
  }
  p, ul, li{
    color:#cd82ff;
  }
  h1,h2,h3,h4,h5,h6{
    color:#5afff7;
  }
</style>

# Clone/Download a repo
- get the HTTPS url of the repo (looks like this: https://github.com/Hachikoi-the-creator/CS50_tutorial.git)
- get where you want to get it, open git bash
- write: git clone [ link of the repo ]

# Push/upload changes 

- **Localy/own pc**
  - **Stage changes**
    - **git add** [ name of the files 1 by 1 or . to add everything]
  - **Remove from stage area**
    - **git rm --cached** [ name of the files 1 by 1 or . to add everything]
  - **Commit**
    - **git commit** [ name of the files 1 by 1 or . to add everything]


- **Externaly/GitHub**
  - **git push**, since I cloned the repo to begin whit I can just do this instead!


- **Shorthand for add & commit**
  - **git commit -am** "some_message", commits everythign tho!
  
## Get the lates version of the repo from GitHub
**git pull**

## Remove all the changes made since last commit/big control + z
**git restore** [ name of the file or . ]

# Merge Conflicts
Happens when 2 persons have made changes to the same line of code in a project

<!-- <img href="C:\Users\User\Desktop\Web Dev\CS50_src0\2_Git\merge_explanation.png"> -->
**This is how the error looks**
![img]("merge_explanation.png")
since img is not working, here goes nothing

a = 99

b = 100

<<<<<<HEAD

if a  == b:

  a += 9

"=========="

if a == b:

  a = b**2

">>>>>>12312414325121 [commit's hash]

#### Solution
**By hand**
- After **git pull**
- Erase the version we dont want.
- Erase the extra highlight 
- Then just **git commit -am "text"** & **git push**


**Whit some VSCode features**
- After the **gti pull** command
- Modify any of the two versions 
- Select the one you want whit the options on top
- Then just **git commit -am "text"** & **git push**


## Show all the commits made, latest -> oldest
 
**git log**

Shows hash, email, date, etc

## Reset code to older state
<ul>
<li>Reset to an especific commit by hash</li>
<b>git reset --hard [ commit hash ]</b>

<li>Reset to the version that's in GitHub</li>
<b>git reset --hard origin/master </b>
</ul>
  - 


### get into a folder
**cd** [ name of the folder ] 

### create something
**touch** [ name.extension ]

### Directory list
**ls**

## GitHub hacks

1. **Open any repo + press "."**
-  open that repo whit VSCode online!
2. **Visual representation of the code, just copy the repo link in...**
- https://next.github.com/projects/repo-visualization#explore-for-yourself
3. **Open repo + "t"**
- Find files

## + Hacks
- press **Shift + ins**, to copy all that's inside a selected tag, below