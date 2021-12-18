- Decision Tree Regressor: 
  From the long (Where all the data is), thought making decisions divides the data into smaller branches that end in leaves, depending on the depth of the Tree (How many decisions are made) the precision of the model is defined
  Too much leaves, bad
  Too few leaves, bad
  Must find the sweet spot

```python
from sklearn.ensemble import DecisionTreeRegressor
from sklearn.metrics import mean_absolute_error

# Specify Model & Fit the Model
iowa_model = DecisionTreeRegressor(random_state=1)
iowa_model.fit(train_X, train_y)

# Make validation predictions and calculate mean absolute error
val_predictions = iowa_model.predict(val_X)
val_mae = mean_absolute_error(val_predictions, val_y)
print("Validation MAE when not specifying max_leaf_nodes: {:,.0f}".format(val_mae))

#Output
Validation MAE when not specifying max_leaf_nodes: 29,653
```



- Random Forest:

  Work whit a bunch of Trees, from Decision Tree (above), and takes the decision based on the average outcome of every Tree
  Usually has better accurancy than a single Tree, Works good whit default parameters (Depth, etc.)

<h4>Creation</h4>

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

# Specify Model & Fit the Model
forest_model = RandomForestRegressor(random_state=1)
forest_model.fit(train_X, train_y)

# Make validation predictions and calculate mean absolute error
melb_preds = forest_model.predict(val_X)
print(mean_absolute_error(val_y, melb_preds))

#Output
191669.7536453626
```

