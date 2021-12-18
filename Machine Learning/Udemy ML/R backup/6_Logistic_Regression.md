```R
#Buy an SV dataset
#IMPORT THE DATASET
dataset = read.csv("Social_Network_Ads.csv")
dataset = dataset[3:5]#we only want age and Salary

#SPLIT THE DATASET IN TRAINING & TEST
library(caTools)#Run every time we want to use it
set.seed(777)
split = sample.split(dataset$Purchased, 0.75)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

#FEATURE SCALING STRONGLY RECOMENDED HERE
#Be careful of not what you want to change & not erase data in the process!
training_set[,1:2] = scale(training_set[,1:2])
test_set[,1:2] = scale(test_set[,1:2])

# FIT THE REGRESSOR
#generalized linear models
classifier = glm(formula = Purchased ~ ., family = "binomial",
               data = training_set)
#Family var, dunno a shit about it

#PREDICT TEST SET RESULTS
#data != newdata
prob_pred = predict(classifier, type = "response",
                      newdata = test_set[-3])
#This type, will give us % of how likely is that to- 
  # happen in form of round() -> 1 | result*100
# test_set[-3] = [0,-3]is a way to erase the Purchased column!

#Change the prob_pred result to 1 or 0
y_pred = ifelse(prob_pred > 0.5, 1, 0)

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)
#2D indexing as in python

#cum results
#0,0 = 61 + 1,1 = 23 / (0,1 = 13 + 1,0 = 3) = 84/100 = 84% accurancy!

#VIZUALIZE SHIT
# install.packages("ElemStatLearn")#Not avalible for 3.6.1...
set = training_set
x1 = seq(min(set[,1]), max(set[,1]) + 1, by = 0.01)
x2 = seq(min(set[,2]), max(set[,2]) + 1, by = 0.01)
grid_Set = expand.grid(x1, x2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
prob_set = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here
y_grid = ifelse(prob_set > 0.5, 1, 0) 
plot(set[,-3],
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(x1), ylim = (x2))
contour(x1, x2, matrix(as.numeric(y_grid),length(x1), length(x2), add = TRUE))
        points(grid_Set, pch - '.',col - ifelse(y_grid --1, 'springgreen3','tomato'))
        points(set, pch - 21, bg - ifelse(set[,3] -- 1, 'green4', 'red3'))#was 'green4', 'red3'
```

<h2>Expected plots</h2>

<h4>Training set</h4>

![expected plot unu](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\expected plot unu.png)

<h4>Test set</h4>

![logistic_test](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\logistic_test.png)