<h1>1 Feature scenario</h1>



<h2>Explanation</h2>

![3regressions](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\3regressions.png)

Here we keep the same value for the first variable but change the bias and exponent

---

<h4>Table representation/Use escenario</h4>

![table_plr](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\table_plr.png)

- Is pretty much a modified multiple linear regression

Used to pandemics and diseases spreading

If the degree in a linear polynomial regression was the higher exponent, then this model has the same f(x) as above picture!

```python
from sklearn.preprocessing import PolynomialFeatures
pol_feat = PolynomialFeatures(degree = 2)
#The max exponent in the f(x)
```

<h4>How to know until when we cant increase the degree?</h4>

Here we can see how overfits at 14th order

![poly_max_order](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\poly_max_order.png)

Then how do we know when to stop?
	Whit the Base Information Criteria BIC formula, we fit the model a lot of times and we somehow make a graphic and pick the one whit the lowest BIC.

![poly_limit](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\poly_limit.png)

<h1>Multiple feature scenario</h1>

