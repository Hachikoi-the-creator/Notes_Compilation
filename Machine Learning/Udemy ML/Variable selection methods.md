<h3>How to build a model</h3>

![build a model mth](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\build a model mth.png)

1. ALL-IN
   Not really a term, but here you just use all the variables, not recommended unless you have prior knowledge in that field, or somebody just told you to make a model whit those!
2. BACKWARD ELIMINATION
   1. Select the significance level *α*(alpha). by example 5% (0.05)
   2. Fit the model whit all available variables
   3. Consider removing the variable whit the highest P (*α*)value, if the highest is less that your P just use that model to predict already
   4. Remove that variable whit the highest P(*α*)
   5. Fit the model again without the trashy variable, and repeat from Step 3
3. FORWARD SELECTION (wtf yo crazy)
   1. Select the significance level *α*(alpha). by example 5% (0.05)
   2. Fit a simple linear regression model for EVERY variable available. Stay whit the one whit the lowest P value
   3. Add that single variable to every model done before...
   4. If after adding a new variable the P value is no longer below 0.05, stop and run the one you had before, if still is good.. keep doing Step 3....
4. BIDIRECTIONAL ELIMINATION/ STEPWISE REGRESSION
   1. Select a PStay & PEnter, example 0,05 & 0,05
   2. Do a model for every variable and add all that
   3. DONT GET IT T.T
5. SCORE COMPARISION
   1. Select a criterion of goodness, Example: (Akaike criterion)
   2. Make a model for every possible combination of  regression models where 2^n, where n = number of columns....
   3. MOM COME PICK ME UP, IM SCARED!

