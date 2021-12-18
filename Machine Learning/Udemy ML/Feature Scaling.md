<h1>Explanation</h1>

<h2>Why?</h2>

Because most of the ML models use the Euclidean distance, and if 2 values are far way in scale , (hundreds & millions) the smallest scale will barely be taken into account or totally overwhelmed 

For example whit our 1st data set

| Country | Age  | Salary | Purchased |
| ------- | ---- | ------ | --------- |
| France  | 44   | 72k    | No        |
| Spain   | 27   | 48k    | Yes       |

the Euclidean distance in the Age column is = (44-27)^2 = 289
and in the Salary columns is = (72000-48000)^2 = 576000000
As a result the Age column is totally overwhelmed by the Salary... this is undesired



<h2>Options</h2>

<img src="C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\scaling fx.png" alt="scaling fx" style="zoom:90%;" />

- Type 1 - Standardisation - [-3,3]

  Will make improvements in all the scenarios.

  IF we apply this to the dummy variables, may minimally improve the results' but it'll lose the meaning for the user

  <h4> Standard deviation f(x)</h4>

  ![standart deviation fx](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\standart deviation fx.png)
  Basically is the squared root, of the sum, of the square, of all the values - the mean / the number of values

- Type 2 - Normalization - [0,1]
  Will preform better when all the features have normal distribution

<h4>When Label encoding or One hot encoding?!</h4>

If it's something like the size of the t-shirt, bought it or not, position levels in str - LABEL ENCODING (LabelEncoder)

If it's something like the country - ONE HOT ENCODING (ColumnTransformer -> OneHotEncoder)

