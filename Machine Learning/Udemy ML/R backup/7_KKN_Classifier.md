```R
#KNN CLASSIFIER

#IMPORT THE DATASET
dataset = read.csv("Social_Network_Ads.csv")
dataset = dataset[3:5]#we only want age and Salary

#ENCODE TARGET FEATURE AS FACTOR
dataset&Purchased = factor(dataset&Purchased, levels = c(0,1))

#SPLIT THE DATASET IN TRAINING & TEST
library(caTools)
set.seed(777)
split = sample.split(dataset$Purchased, 0.75)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

#FEATURE SCALING STRONGLY RECOMENDED HERE
training_set[,1:2] = scale(training_set[,1:2])
test_set[,1:2] = scale(test_set[,1:2])

# FIT THE REGRESSOR & PREDICT TEST SET RESULTS
library(class)
y_pred = knn(train = training_set[,-3],
             test = test_set[,-3],
             cl = training_set[,3],#the dependant variable
             k = 5)#k was how many data points it will use to measure the closest
#training & test set without dependant var

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)

#VIZUALIZE TRAINING SET RESULTS
library(ElemStatLearn)
set = training_set
X1 = seq(min(set[,1]), max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]), max(set[,2]) + 1, by = 0.01)
grid_set = expand.grid(X1, X2)
colnames(grid_set) = c("Age", "EstimatedSalary")
# prob_set , don't need this either, since already gives 1 & 0's
y_grid = knn(train = training_set[,-3],
             test = grid_set,
             cl = training_set[,3],
             k = 5)
#Up and working!
plot(set[,-3],
     main = 'KNN training ',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2), add = TRUE))
points(grid_set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))

###

#VIZUALIZE TEST SET RESULTS
library(ElemStatLearn)
set = test_set#only change needed!
X1 = seq(min(set[,1]), max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]), max(set[,2]) + 1, by = 0.01)
grid_set = expand.grid(X1, X2)
colnames(grid_set) = c("Age", "EstimatedSalary")
# prob_set , don't need this either, since already gives 1 & 0's
y_grid = knn(train = training_set[,-3],
             test = grid_set,
             cl = training_set[,3],
             k = 5)
plot(set[,-3],
     main = 'KNN Test set',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2), add = TRUE))
points(grid_set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))


```

<h2>Expected plots</h2>

<h3>Training set</h3>

![expected knn training](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\expected knn training.png)

<h3>Test set</h3>

![KNN_test_set](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\KNN_test_set.png)