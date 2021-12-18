- Clean plots etc -> Control + L == cls on cmd
- Erase all variables -> rm(list=ls())
- Erase a specific variable - > rm(<variable name>)



<h1>Variables Elimination Trick!</h1>

<h2>How to know when to keep a variable or not?</h2>

In the case of Marketing spend we can just look at the Adjusted R^2 in the summary(regressor) data <at the very bottom>

1 -> 2
3 -> 4

<img src="C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\R&adjustedR.png" alt="R&adjustedR" style="zoom:200%;" />

The Pr is barely above our "random" decided value (0.05), but  Adjusted R^2 is bigger when it´s in the model, thus we should keep that variable!