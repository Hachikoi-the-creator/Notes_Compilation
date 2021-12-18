<ul>
    <li href="#simp">some link</li>
</ul>

#I dont remember how to make those www

<h2 id="simp">Simple linear regresion</h2>

<h4>What's that?</h4>

![simplelr1](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\simplelr1.png)
y = What we try to predict
b<sub>1</sub> = A kind of multiplier, tells how important is a given variable to obtain the prediction
x<sub>1</sub> = A variable used to predict y, must have a direct correlation of any type 

<h4>Create a line</h4>

Example of a linear regression model whit the correlation between Years of XP and Salary

![simplelr example](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\simplelr example.png)
b<sub>0</sub> = Is the estimated salary a new employee will get whit 0 years of XP
b<sub>1</sub> = Is the slope, how much the increase will be for every unit of change, years of XP

<h2>Predict a specific result</h2>

```python
#How to predict a specific Year(of xp)
regressor.predict([[12]])#Has to be a 2D array
```

<h2>Error calculation</h2>

- MSE: Mean Squared Error
  Summary of the sum of the distance between the |predicted value - real value|^2

- RMSD: Root Mean Squared Deviation/Error
  the root-squared of an MSE... Example below :P

  ![RMSD](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\RMSD.png)