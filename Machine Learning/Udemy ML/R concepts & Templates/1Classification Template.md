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

### FIT THE REGRESSOR ###


#PREDICT TEST SET RESULTS
prob_pred = predict(classifier, type = "response",
                    newdata = test_set[-3])

#Change the prob_pred result to 1 or 0
y_pred = ifelse(prob_pred > 0.5, 1, 0)

#MAKING THE CONFUCION MATRIX
cum = table(test_set[,3], y_pred)

#VIZUALIZE SHIT
library(ElemStatLearn)
set = training_set
X1 = seq(min(set[,1]), max(set[,1]) + 1, by = 0.01)
X2 = seq(min(set[,2]), max(set[,2]) + 1, by = 0.01)
grid_set = expand.grid(X1, X2)
colnames(grid_set) = c("Age", "EstimatedSalary")
prob_set = predict(classifier, type = 'response', newdata = grid_Set)#Prob different name here
y_grid = ifelse(prob_set > 0.5, 1, 0) 

plot(set[,-3],
     main = 'ANOTHER ONE BITES THE DUST',
     xlab = 'Age', ylab = 'EstimatedSalary',
     xlim = range(X1), ylim = range(X2))
contour(X1, X2, matrix(as.numeric(y_grid),length(X1), length(X2), add = TRUE))
points(grid_set, pch = '.',col = ifelse(y_grid == 1, 'springgreen3','tomato'))
points(set, pch = 21, bg = ifelse(set[,3] == 1, 'green4', 'red3'))#was 'green4', 'red3'
#springgreen3, tomato -> gray, black
#green4, red3 -> green, blue
#Having problems whit default colors
```

