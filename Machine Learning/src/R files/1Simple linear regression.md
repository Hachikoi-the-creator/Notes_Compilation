```R
#IMPORT THE DATA SET
dataset = read.csv("Salary_Data.csv")
# dataset = dataset[,0:3]
# in case we need to select subsets


#SPLIT INTO TRAINING AND TEST SET
library(caTools)
#Split
set.seed(777)
split = sample.split(dataset$Salary, SplitRatio = 0.66)
train_set = subset(dataset, split=TRUE) 
test_set = subset(dataset, split=FALSE) 
rm(test_set)
rm(train_set)
#rm(list=ls())#Remove all variables

#Fitting Simple linear regression model
regressor = lm(formula = Salary ~ YearsExperience, 
               data = train_set)
#Means, the Salary is proportional to YearsExperience, & we will get the data from train_set

# Predict
y_predict = predict(regressor,new_data = test_set)
#y_predict on console to see the results

#Visualize the results
install.packages("ggplot2")
library(ggplot2)#To select the lib

```

<h2>Notes</h2>

- write summary(regressor) on console
  You get all the details about your model, also in "Coefficients" it's detailed how important every variable is from - to + (<no start> to ***)
  Also, the Pr column shows something similar, the lower the value, the more important that var is, <5 important >5 irrelevant

  +At the end there's the mae and some more detail to evaluate how good is the model