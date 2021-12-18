<h3>Little explanation</h3>

1. First create the repo/.git file
2. Stage the files you want to commit/pre-commit
3. Commit the files in the stage area  -> your local machine

<h3>Getting some help</h3>

* `git <some command> -help` - See all the available options for the specific command
  (the methods of that class)
* `git help --all` - See all possible commands


<h2>CREATE REPO</h2>

```shell
#inside the dir you want to create the repo
git init
```

<h2>STAGE FILES/ADD TO INDEX</h2>

```shell
#Add files
git add <name of the file>

#For add everthing
git add --all
#or
git add -A
```

<h2>COMMIT TO LOCAL REPO</h2>

```shell
#Commit after stagging
git commit -m "some description"

#Commit direclty, without staging
git commit -a -m "some description"
```

<h2>COMMIT TO REMOTE REPO</h2>

```shell
#Upload to github
git push
```

