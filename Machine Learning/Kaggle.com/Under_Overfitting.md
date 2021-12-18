- Tree's depht:
  Is the amount of times the data get divided (decisions like, has it 2 bathrooms, total area, second floor etc)
- Overfitting:
  Phenomena that happens whe you select a Tree model that leaves you whit very few data in every leaf(end of the Tree), makes data unreliable.
  High acuranccy w/"old" data & High volatile w/new data, this MAY happen
- Underfitting:
  The opposite of above, when the Tree doesn't divide enough times, it ends up whit too much data in it's leaves, and narrows it down poorly-
  This doesn't even perfom well when compared w/ Training data(what shouldn't be done when we want to know the real accurancy of a model)
- ![Tree](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\Kaggle.com\img\Tree.png)

<h4>This graph says</h4>

- IF the depht is too high, every leaf is left whit very few data to train, high error margin
- IF the depth is too low, every leaf has a lot of data to train, as well as a lot of error margin
- We want the sweet spot (warning sign)

<h2>Example</h2>

```python
from sklearn.metrics import mean_absolute_error
from sklearn.tree import DecisionTreeRegressor

#I already knwo how to create both X,y's.	 hehe~ 
def get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y):
    model = DecisionTreeRegressor(max_leaf_nodes=max_leaf_nodes, random_state=0)
    model.fit(train_X, train_y)
    preds_val = model.predict(val_X)
    mae = mean_absolute_error(val_y, preds_val)
    return(mae)

# compare MAE with differing values of max_leaf_nodes
for max_leaf_nodes in [5, 50, 500, 5000]:
    my_mae = get_mae(max_leaf_nodes, train_X, val_X, train_y, val_y)
    print("Max leaf nodes: %d  \t\t Mean Absolute Error:  %d" %(max_leaf_nodes, my_mae))
    
#Output
Max leaf nodes: 5  		 	 Mean Absolute Error:  347380
Max leaf nodes: 50  		 Mean Absolute Error:  258171
Max leaf nodes: 500  		 Mean Absolute Error:  243495
Max leaf nodes: 5000  		 Mean Absolute Error:  254983
```

<h2>My attemp</h2>

```python
candidate_max_leaf_nodes = [5, 25, 50, 100, 250, 500]
# Write loop to find the ideal tree size from candidate_max_leaf_nodes
best_mae = 777
best_result = 10**10
for nnodes in candidate_max_leaf_nodes:
    my_mae = get_mae(nnodes,train_X,val_X,train_y,val_y)
    if my_mae < best_result:
        best_result = my_mae
        best_mae = nnodes

# Store the best value of max_leaf_nodes (it will be either 5, 25, 50, 100, 250 or 500)
best_tree_size = best_mae
print(best_mae,'\t',best_result)

#Output
100 	 27282.50803885739
```

<h2>Final step</h2>

- Once we know the optimal leaf nodes...
- Make another model whit all the data for extra precision 

```python
#Just add it as parameter here!
final_model = DecisionTreeRegressor(random_state=0,max_leaf_nodes=100)

# fit the final model and uncomment the next two lines whit all the data!
final_model.fit(X, y)
```

