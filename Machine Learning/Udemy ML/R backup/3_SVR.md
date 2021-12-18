```R
#SVR!
#IMPORT THE DATASET
dataset = read.csv("Position_Salaries.csv")
dataset = dataset[2:3]

# FIT THE REGRESSOR
# install.packages("e1071")
library(e1071) 
regressor = svm(formula = Salary ~ ., data = dataset,
                type = "eps-regression")
#C-classification for a clasifier model! kernel is also adjustable!

#PREDICT A NEW RESULT
y_pred = predict(regressor, data.frame(Level = 6.5))#177k

#VISUALICE THE RESULTS
library(ggplot2)
ggplot() +
  
  geom_point(aes(x = dataset$Level, y = dataset$Salary),
             colour = "red")+
  
  geom_line(aes(x = dataset$Level,
                y = predict(regressor, newdata = dataset)),
            colour = "blue")+ 
  ggtitle("Linear bluf verification")+
  ylab("Salary")+
  xlab("Level")
#Since the last data point is way too far away from the others, the model just ignored it!!!

```

