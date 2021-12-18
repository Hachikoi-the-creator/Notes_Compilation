Pretty much the template I made!

```R
#DATA PREPROSSESING

# Import the dataset
dataset = read_csv("Data.csv")

#Split in train & test
# install.packages("caTools"), run once
library(caTools)
set.seed(777)
split = sample.split(dataset, split = TRUE, SplitRatio = 8/10)
#80% to train
train_set = subset(dataset, split = TRUE)
test_set = subset(dataset, split = FALSE)

#Feature Scaling
train_set[,2:3] = scale(train_set[,2:3])
test_set[,2:3] = scale(test_set[,2:3])

```

<h2>Notes</h2>

- library line
  kind of activates the library for use, probably have to install it on every time it's run(Open R)

- set.seed

  The same as random_forest in python, helps in selection the exact same values for train & test over and over 

- Feature Scaling
  Used when one value could overwhelm another, mae sum(x^2) by example 30000^2 vs 3.2^2
  Be careful of all the values to scale are numeric type