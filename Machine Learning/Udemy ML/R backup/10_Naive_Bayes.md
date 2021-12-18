```R
#IMPORT THE DATASET
dataset = read.csv("Social_Network_Ads.csv")
dataset = dataset[3:5]#we only want age and Salary

# #SOLVE OLD ERROR WHIT THE CONFUSION MATRIX BY ENCODING AS FACTORS
# dataset$Purchased = factor(dataset$Purchased, levels = c(0,1))

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
classifier = naiveBayes(x = training_set[-3],
                        y = training_set$Purchased)# = [3]

#PREDICT TEST SET RESULTS
y_pred = predict(classifier, newdata = test_set[-3])
#There's no longer a problem here, where wasn't able to continue 
# whit the confusion matrix

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)

#VIZUALIZE TRAINING SET : Good enough I may say
library(ElemStatLearn)
set = training_set
X1 = seq(min(set[,1]) - 1, max(set[,1]) + 1, by = 0.1)#0.1 instead pf 0.01, faster
X2 = seq(min(set[,2]) - 1, max(set[,2]) + 1, by = 0.1)
grid_Set = expand.grid(X1, X2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
y_grid = predict(classifier, newdata = grid_Set)#Prob different name here

plot(set[,-3],
     main = 'Training set Naive Bayes',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2)), add = TRUE)
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
y_grid = predict(classifier, newdata = grid_Set)#Prob different name here

plot(set[,-3],
     main = 'Training set Naive Bayes',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2)), add = TRUE)
points(grid_Set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))
#Having problems whit default colors







```

