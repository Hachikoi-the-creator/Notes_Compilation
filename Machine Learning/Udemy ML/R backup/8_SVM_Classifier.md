```R
#SUPPORT VECTOR MACHINE (SVR)
#IMPORT THE DATASET
dataset = read.csv("Social_Network_Ads.csv")
dataset = dataset[3:5]#we only want age and Salary

#SPLIT THE DATASET IN TRAINING & TEST
library(caTools)
set.seed(777)
split = sample.split(dataset$Purchased, 0.75)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

#FEATURE SCALING STRONGLY RECOMENDED HERE
training_set[,1:2] = scale(training_set[,1:2])
test_set[,1:2] = scale(test_set[,1:2])

# FIT THE REGRESSOR
library(e1071)
classifier = svm(formula = Purchased ~ .,
                 data = training_set,
                 type = "C-classification",
                 kernel = "linear")
#try out different kernels!
#linear - 16 errors
#poly - 17 errors
#radial - 17 errors
#sigmoid - 26 errors wtf lmao

#PREDICT TEST SET RESULTS
y_pred = predict(classifier, newdata = test_set)

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)

#VIZUALIZE TRAINING SET, shit not working again UnU!!
library(ElemStatLearn)
set = training_set
X1 = seq(min(set[,1]) - 1, max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]) - 1, max(set[,2]) + 1, by = 0.01)
grid_Set = expand.grid(X1, X2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
# prob_set = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here
y_grid = predict(classifier, newdata = set)

plot(set[,-3],
     main = 'Training set SVM',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2)))
points(grid_Set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))
## ## ##
#VIZUALIZE TEST SET
## ## ## 
library(ElemStatLearn)
set = test_set
X1 = seq(min(set[,1]) - 1, max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]) - 1, max(set[,2]) + 1, by = 0.01)
grid_Set = expand.grid(X1, X2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
# prob_set = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here
y_grid = predict(classifier, newdata = set)

plot(set[,-3],
     main = 'Training set SVM',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2)))
points(grid_Set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))
```

<h2>Expected graphs</h2>

<h3>Training set</h3>

<img src="C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\SVM training set.png" alt="SVM training set" style="zoom:150%;" />

<h3>Test set</h3>

<img src="C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\SVM test set.png" alt="SVM test set" style="zoom:150%;" />