```R
#IMPORT THE DATASET
dataset = read.csv("Position_Salaries.csv")
dataset = dataset[2:3]
#No feature scaling needed! could be used tho

#FIT LINEAR MODEL
linear_reg = lm(formula = Salary ~ dataset$Level, data = dataset)

#FIT POLY MODEL
dataset$Level2 = dataset$Level^2
dataset$Level3 = dataset$Level^3
dataset$Level4 = dataset$Level^4
poly_reg = lm(formula = Salary ~., data = dataset)

#LINEAR GRAPH
library(ggplot2)
library(ggplot2)
ggplot() +
  geom_point(aes(x = dataset$Level, y = dataset$Salary),
             colour = "red")+
  geom_line(aes(x = dataset$Level,
                y = predict(linear_reg,newdata = dataset)),
            colour = "blue")+ 
  ggtitle("Linear bluf verification")+
  ylab("Level")+
  xlab("Salary")

#POLY GRAPH
ggplot() +
  geom_point(aes(x = dataset$Level, y = dataset$Salary),
             colour = "red")+
  geom_line(aes(x = dataset$Level,
                y = predict(poly_reg, newdata = dataset)),
            colour = "blue")+ 
  ggtitle("Poly bluf verification")+
  ylab("Level")+
  xlab("Salary")

#UNIQUE LINEAR PREDICTION
predict(linear_reg, data.frame(Level = 6.5))#250k

#UNIQUE POLY PREDICTION
predict(poly_reg, data.frame(Level = 6.5,#158k
                             Level2= 6.5^2,
                             Level3 = 6.5^3,
                             Level4 = 6.5^4))

```

