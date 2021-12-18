```R
#Regression template
#IMPORT THE DATASET
dataset = read.csv("DATASET.csv")

#SPLIT THE DATASET IN TRAINING & TEST
library(caTools)#Run every time we want to use it
set.seed(777)
split = sample.split(dataset$Profit, 8/10)
training_set = subset(dataset, split == TRUE)
test_set = subset(dataset, split == FALSE)

# FEATURE SCALING, usually not needed
# training_set[,2:3] = scale(training_set[,2:3])
# test_set[,2:3] = scale(test_set[,2:3])

# FIT THE REGRESSOR

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
x_grid = seq(min(dataset$Level),max(dataset$Level),0.1)
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

