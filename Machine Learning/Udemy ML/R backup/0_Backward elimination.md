<h1>Manual backward</h1>

```R
########BACKWARD ELIMINATION########
#1- Select the significance level(Pr) example: 0.05
#2- Build the model whit all the variables
#3- Erase any that´s above the significance level(Pr), if nobody FIN
#4- Build the model again without that ugly variables - 1 by 1 tho...

#IMPORT THE DATASET
dataset = read.csv("50_Startups.csv")

#ENCODE CATEGORICAL DATA
dataset$State = factor(dataset$State,
                       levels = c("New York","California","Florida"),
                       labels = c(1,2,3))

#SPLIT THE DATASET IN TRAINING & TEST
library(caTools)#Run every time we want to use it
set.seed(777)
split = sample.split(dataset$Profit, 8/10)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

#FIT THE MODEL WHIT THE TRAINING SET
#Profit is a linear corelation of the independant variables, . as in regex
regressor = lm(formula = Profit ~ . ,data = training_set)

#BUILDING THE OPTIMAL MODEL USING BACKWARD ELIMINATION
regressor = lm(formula = Profit ~ R.D.Spend + Administration
               + Marketing.Spend + State
               ,data = dataset)
summary(regressor)
#Using the whole data set to get more accurate results

#FINAL MODEL
regressor = lm(formula = Profit ~ R.D.Spend, data = dataset)
summary(regressor)
#doing it 1 by 1 Administration went from 0.105 -> 0.06! 0: good idea to keep it since the limit we did set is arbitrary

```

<h1>Automatic!</h1>

```R
#AUTOMATIC PROCESS!!
backwardElimination <- function(x, sl) {
  numVars = length(x)
  for (i in c(1:numVars)){
    regressor = lm(formula = Profit ~ ., data = x)
    maxVar = max(coef(summary(regressor))[c(2:numVars), "Pr(>|t|)"])
    if (maxVar > sl){
      j = which(coef(summary(regressor))[c(2:numVars), "Pr(>|t|)"] == maxVar)
      x = x[, -j]
    }
    numVars = numVars - 1
  }
  return(summary(regressor))
}

SL = 0.05
dataset = dataset[, c(1,2,3,4,5)]
backwardElimination(training_set, SL)

```

