<h1>Support Vector Regression</h1>

![SVR1](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\SVR1.png)

Above is a comparison between Simple LR and SVR

- The mae of the dots inside the insensitive tube(ϵ,ϵ), does NOT matter
- Dots above the tube are ξi and below are ξi*
- We only care about the mae outside the tube!

<h2>Implementation</h2>

###### if big difference between variables, MUST implement feature scaling, since it has not a explicit equation as simple/multiple/polynomial regression.

<h4>inverse feature scaling</h4>

use the .inverse_transform method, easy!

<h2>Configurations</h2>

![svr_options](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\svr_options.png)

in the kernel selection, we can use any of this options!