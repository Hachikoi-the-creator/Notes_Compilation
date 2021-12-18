1. Basic data hands on w/Pandas

   1. Import pandas
   2. Open the file whit pandas.open_csv as data_set
   3.  use data_set.describe(), to print  a descriptive table to get to know your data
   4. Understand your data set, get averages, think if it's up to date, if not, would that affect performance? etc.

2. Define your Y <Prediction Tarjet> & X <Features or Variables>

   1. for Y, usually is just the price
      1.  so once you know what your price columns is named whit data_set.columns
      2.  store the prices in Y whit Y = data_set.Prices or data_set["Price"]
   2. For X, theres a bunch of data, you'll know how to pick it whit practice and testing the results
      1. In the houses example: 'Rooms', 'Bathroom', 'Landsize', 'Latitude', 'Longitude'
      2. same as above, store those in X like so
      3. X=data_set['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
   3. Confirm your X & Y data are correct whit .describe & .head

   ---

3. Building your model

   1. DEFINE: what kind of prediction model will be, also define some parameters of the model

      1. ```python
         from sklearn.tree import DecisionTreeRegressor
         # Define model. Specify a number for random_state to ensure same results each run
         melbourne_model = DecisionTreeRegressor(random_state=1)
         
         # Fit model
         melbourne_model.fit(X, y)
         ```

   2. FIT: Capture patterns from provided data

   3. PREDICT: that

      1. ```python
         print("Making predictions for the following 5 houses:")
         print(X.head())
         print("The predictions are")
         print(my_model.predict(X.head()))
         
         #Output
         """Basically print a table whit all the selected features in X, and then a list whit all the 'predicted' prices (the ones we already had data of)"""
         ```

   4. EVALUATE:  Determine how accurate the model's predictions are

---

1. Select data for Modelling, Create the ML model.
   1. Use the .columns method of the Pandas object to easily see what you can use as arguments in this case we will use: 'Rooms', 'Bathroom', 'Landsize', 'Latitude', 'Longitude'.
   2. Just in case handle the empty spaces first: w/average or just drop it whit .dropna(axis=0), This method must be assigned in order to take effect in the data set:
      melbourne_data = melbourne_data.dropna(axis=0)
2. Select the prediction target(What we will try to predict):
   1. You can do this by DataSet.Price or DataSet["Price"]
   2. Store it as Y, it's done like that by convention
3. Select the features (What parameters use to make a prediction):
   1. It's way better to make this w/List
   2. Store it as X
4. Important step as a Data Scientist
   - You can also use the .description & .head to make sure you got the correct data!

---

<h2>NOTEBOOK MODEL MAKING</h2>

1. Specify the prediction target:

```python
#Since in this case we want to know the price of future houses
Y = DataSet.Prices
```

2. Create the list of features:

```python
#This is what we will use to try and predict future prices
X = DataSet[
    'LotArea',
    'YearBuilt',
    '1stFlrSF',
    '2ndFlrSF',
    'FullBath',
    'BedroomAbvGr',
    'TotRmsAbvGrd']
```

3. Specify and fit the model (what kind of model, and input the features that will be used)

```python
from sklearn.tree import DecisionTreeRegressor
#specify the model. 
#For model reproducibility, set a numeric value for random_state when specifying the model
iowa_model = DecisionTreeRegressor(random_state=2)

# Fit the model
iowa_model.fit(X,y)
```

4. Make predictions (In this case we will predict data whit the same data we used o build de model, due to lack of new data)

```python
#predictions is now a list whit all the results from using the iowa houses data to predict a price
predictions = iowa_model.predict(X)
print(predictions[:7])
#Since it's predicting "old data" it's 100% accurrate
```

