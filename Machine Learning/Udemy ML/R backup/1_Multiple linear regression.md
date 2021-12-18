```R
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
test_regressor = lm(formula = Profit ~ R.D.Spend, data = training_set)
#summary(regressor) show that we will get the same result whit only whit RD Spend column!

#PREDICT THE TEST RESULT
y_pred = predict(regressor, newdata = test_set)
test_pred = predict(test_regressor, test_set)#The model whit only RD Spend performed slighty better!






```

