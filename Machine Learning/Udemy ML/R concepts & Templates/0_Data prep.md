<h2>Deal whit missing data by mean</h2>



```R
#Dealing whit missing data w/mean
#Ejecute -> select the code, control + enter

#This if else, tells R to check is the cell is NA, pretty much a for w/if else
#if true, uses some kind of lambda to change it to the mean 
# of all the values, and ignore/remove the NA values
#if false, leaves the value it has
dataset$Age = ifelse(is.na(dataset$Age),
	ave(dataset$Age,FUN=function(x)mean(x,na.rm = TRUE)),
    dataset$Age)
```

<h2>Transform categorical data intro numbers</h2>

```R
#This uses the factor function, which ask for a column, 
#What are we going to get from that column
#and for what it'll be changed for
dataset$Country = factor(dataset$Country,
                         levels =c("France","Spain","Germany"),
                         labels =c(10,11,12))

```



