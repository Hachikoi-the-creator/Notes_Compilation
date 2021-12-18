```R
#DECISION TREE REGRESSION
#IMPORT THE DATASET
dataset = read.csv("Position_Salaries.csv")
dataset = dataset[2:3]

#SPLIT THE DATASET IN TRAINING & TEST
library(caTools)#Run every time we want to use it
set.seed(777)
split = sample.split(dataset$Profit, 8/10)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

# FIT THE REGRESSOR
library(rpart)
regressor = rpart(formula = Salary ~ ., data = dataset,
                  control = rpart.control(minsplit = 1))
#Use the control argument to force a division in the leafs!

#PREDICT A UNIQUE RESULT
predict(regressor, data.frame(Level = 6.5))

#VISUALICE THE RESULTS
library(ggplot2)
ggplot() +
  
  geom_point(aes(x = dataset$Level, y = dataset$Salary),
             colour = "red")+
  
  geom_line(aes(x = dataset$Level,
                y = predict(regressor,newdata = dataset)),
            colour = "blue")+ 
  ggtitle("Linear bluf verification")+
  ylab("Level")+
  xlab("Salary")

#VISUALICE THE RESULTS (HIGER RESOLUTION)
library(ggplot2)
x_grid = seq(min(dataset$Level),max(dataset$Level),0.01)
ggplot() +
  
  geom_point(aes(x = dataset$Level, y = dataset$Salary),
             colour = "red")+
  
  geom_line(aes(x = x_grid,
                y = predict(regressor, newdata = data.frame(Level = x_grid))),
            colour = "blue")+ 
  ggtitle("Linear bluf verification")+
  ylab("Level")+
  xlab("Salary")

```

