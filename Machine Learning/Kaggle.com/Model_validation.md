There's a handful of ways to know how accurarate the model is

- MAE: Mean Absolute Error.
  Get the absolute difference between the predicted price and real price |Predicted-Real|
  Then get the averge of them all, must be a high population (1k  - 10k or so)

  Example

```python
from sklearn.metrics import mean_absolute_error
#Y future prices
#y prices we used to make the model

predicted_home_prices = my_model.predict(X)# X have all the features
#my_model is a DecisionTreeRegressor object, from sklearn.tree
#Predict is a method of that object, allows to predict Y( Future_prices)

mean_absolute_error(y, predicted_home_prices)

#Output
434.715
```

- CAREFULL WHIT in-sample scores: the one above
  This happens when we use the same data (Price) to build the model and to test the effectiviness of the model
  - How to avoit it?:
    The most used way is... to split some data from the training data, and use it to test the mdoel after training it, that way will be tested out agains data taht has never seen before! (Validation Data)

```python
from sklearn.model_selection import train_test_split

# split data into training and validation data, for both features and target
# The split is based on a random number generator. Supplying a numeric value to
# the random_state argument guarantees we get the same split every time we
# run this script.
train_X, val_X, train_y, val_y = train_test_split(X, y, random_state = 0)
# Define model
melbourne_model = DecisionTreeRegressor()
# Fit model
melbourne_model.fit(train_X, train_y)

# get predicted prices on validation data
val_predictions = melbourne_model.predict(val_X)
print(mean_absolute_error(val_y, val_predictions))

#Output
261425.99# 260k+ lol

```

<h2>Example of a correctly made model</h2>

<h3>- Split you data -</h3>

```python
# Import the train_test_split function 
from sklearn.model_selection import train_test_split

# Assing the train data & validation data, 
train_X, val_X, train_y, val_y = train_test_split(X,y, random_state=1)
#random_state IMPORTANT
```

<h3>- Specify and fit the model -</h3>

```python
# Specify the model
iowa_model = DecisionTreeRegressor(random_state=1)

# Fit iowa_model with the training data.
iowa_model.fit(train_X,train_y)

```

<h3>- Make predictions whit validation data -</h3>

```python
# Predict with all validation observations
val_predictions = iowa_model.predict(val_X)#Only needs the feeatures, then it predicts the data

# print the top few validation predictions
print(val_predictions[0:6])
# print the top few actual prices from validation data
print(val_y[0:6])

#Output
[186500. 184000. 130000.  92000. 164500. 220000.]
258     231500
267     179500
288     122000
649      84500
1233    142000
167     325624
Name: SalePrice, dtype: int64
```

<h3>- Calculate the Mean Absolute Error in Validation data -</h3>

```python

from sklearn.metrics import mean_absolute_error
val_mae = mean_absolute_error(val_predictions,val_y)

# uncomment following line to see the validation_mae
print(val_mae)

#Output
29652.93
```



