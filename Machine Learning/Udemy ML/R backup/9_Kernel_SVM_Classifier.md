```R
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
                 kernel = "radial")#gaussian


#PREDICT TEST SET RESULTS
y_pred = predict(classifier, type = "response", newdata = test_set[-3])

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)

#VIZUALIZE TRAINING SET
library(ElemStatLearn)
set = training_set
X1 = seq(min(set[,1]), max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]), max(set[,2]) + 1, by = 0.01)
grid_Set = expand.grid(X1, X2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
y_grid = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here
# y_grid = ifelse(prob_set > 0.5, 1, 0) 

plot(set[,-3],
     main = 'Training set Kernel SVM',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2), add = TRUE))
points(grid_Set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))
## ## ##
#VIZUALIZE TEST SET
## ## ## 
library(ElemStatLearn)
set = test_set
X1 = seq(min(set[,1]), max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]), max(set[,2]) + 1, by = 0.01)
grid_Set = expand.grid(X1, X2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
y_grid = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here

plot(set[,-3],
     main = 'Test set Kernel SVM',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2), add = TRUE))
points(grid_Set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))
#Having problems whit default colors
```

<h2>Expected Graphs</h2>

<h3>Training set</h3>

![trainingset kernel svm](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\trainingset kernel svm.png)

<h3>Test set</h3>

![testset_kernelSVM](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\testset_kernelSVM.png)