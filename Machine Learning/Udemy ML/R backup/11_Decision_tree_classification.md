```R
#Less overfitting than in python!! thanks to that loved library
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

#FEATURE SCALING - MAY BREAK IF NOT USED HERE lol
training_set[,1:2] = scale(training_set[,1:2])
test_set[,1:2] = scale(test_set[,1:2])

# FIT THE REGRESSOR
library(rpart)
classifier = rpart(formula = Purchased ~ .,
                   data = training_set)


#PREDICT TEST SET RESULTS
prob_pred = predict(classifier, newdata = test_set[-3])
#, type = "class" extra argument worked before, were the result was a dataset whit the probabilities

#Change the prob_pred result to 1 or 0
y_pred = ifelse(prob_pred > 0.5, 1, 0)

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)

#VIZUALIZE TRAINING SET
library(ElemStatLearn)
set = training_set
X1 = seq(min(set[,1]) - 1, max(set[,1]) + 1, by = 0.1)
X2 = seq(min(set[,2]) - 1, max(set[,2]) + 1, by = 0.1)
grid_Set = expand.grid(X1, X2)
colnames(grid_Set) = c("Age", "EstimatedSalary")
prob_set = predict(classifier, newdata = grid_Set)#Prob different name here
y_grid = ifelse(prob_set > 0.5, 1, 0) 

plot(set[,-3],
     main = 'Training set SVM',
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
prob_set = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here
y_grid = ifelse(prob_set > 0.5, 1, 0) 

plot(set[,-3],
     main = 'Test set SVM',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2)))
points(grid_Set, pch = '.',col = ifelse(y_grid == 1, 'gray','black'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green', 'red'))
#Having problems whit default colors

#PLOTTING THE DECISION TREE, 2 SEE THE SPLITS
#run only until "fit the classifier" without the feature scasling part!
plot(classifier)
text(classifier)


```

