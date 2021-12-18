<h2>ElemStatLearn Successful Installation!</h2>

```R
url <- "http://cran.r-project.org/src/contrib/Archive/ElemStatLearn/ElemStatLearn_2015.6.26.2.tar.gz"
pkgFile <- "ElemStatLearn_2015.6.26.2.tar.gz"
download.file(url = url, destfile = pkgFile)
# Expand the zip file using whatever system functions are preferred

# look at the DESCRIPTION file in the expanded package directory

# Install dependencies list in the DESCRIPTION file

install.packages(c("gam", "splines", "MASS", "class", "leaps", "mda",
                   "lasso2", "lars", "boot","prim", "earth"))
# install.packages("stats") done already c:

# Install package
install.packages(pkgs=pkgFile, type="source", repos=NULL)

# Delete package tarball
unlink(pkgFile)

```

