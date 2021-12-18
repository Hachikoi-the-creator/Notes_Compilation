<h2>R Squared</h2>

R = How good is the model, the closer to 1, the better!

![r2ed](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\r2ed.png)

SS<sub>res</sub> = The sum of the (real_value - predicted_value)^2

SS<sub>tot</sub> = The sum of the (real_value - value in average line)^2

Thus the greater the result of the division on R f(x) is, the better
the closer it is to the real values, the better it is to the average line

All under the constant supposition that  SS<sub>tot</sub> > SS<sub>res</sub> !
if  SS<sub>res</sub> is greater instead... your model is broken lol

<h2>Adjusted R Squared</h2>

Solves the problem when adding a variable whit no logical correlation like the last 2 digits of the phone number to predict Y, results in a better R<sup>2</sup> .

Does that by adding a penalization when adding more variables!

![adjustedR](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\adjustedR.png)

note: adding new variable = add another regressor

IF the change made by the new variable/regressor is not enough meaningful, the change in the division will be greater, thus Adj R<sup>2</sup> will be worse/smaller(not sure if it get's smaller or bigger smh)

For every new variable/regressor, the division get bigger (from 1.02 to 1.087)
Thus the result of the multiplication get's bigger as well (from 0.121 to 0.154)
Thus Adj R<sup>2</sup> ends up being smaller, or something like that www

<h4>How to implement</h4>

```python
from sklearn.metrics import r2_score
y_true = [3, -0.5, 2, 7]
y_pred = [2.5, 0.0, 2, 8]
r2_score(y_true, y_pred)
```

+Tip for documentation, look into API!