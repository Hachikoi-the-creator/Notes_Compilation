```R
#IMPORT THE DATA SET
dataset = read.csv("Data.csv")
# dataset = dataset[,0:3]
# in case we need to select subsets


#SPLIT INTO TRAINING AND TEST SET
library(caTools)

#Split
set.seed(777)#see to fixate the random factor
split = sample.split(dataset$Salary, SplitRatio = 8/10)#Training's size
train_set = subset(dataset, split=TRUE) 
test_set = subset(dataset, split=FALSE)
#rm(list=ls())#Remove all variables


# FEATURE SCALING
# train_set = scale(train_set) -X-wrong-X-
# if we do it just like that, shows an error because 2 columns are not
# numeric type, they are factor type... instead only scale Age & Salary
# train_set[,2:3] = scale(train_set[,2:3])
# test_set[,2:3] = scale(test_set[,2:3])
```

