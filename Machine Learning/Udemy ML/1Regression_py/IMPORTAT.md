<h3>Linear regression models are run whit a couple of assumptions in mind!</h3>

![Assumptions](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\Assumptions.png)

#TODO research later ww

5. Can happen when you divide a dummy var in 2, AND use them both at the same time, because first = 1- second & vice versa
   Thus always ommit 1 dumy var (?)
   -DUMMY VARIABLE TRAP-

   ![multicolinearity](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\multicolinearity.png)

<h3>P -significance-</h3>

also called alpha *α* 
Is a level we can adjust from where beyond that, we ignore the results
Like in the case of the coin, we ignore the results if it's Tails more than 4 times in a row whit our  *α* set at the 5% percent of probability of that happening.
Thus we a re 95% sure it's not likely to happen!

![P value](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\P value.png)

- use Y when there was just one feature, ŷ when there was multiple features!

<h4>When Label encoding or One hot encoding?!</h4>

If it's something like the size of the t-shirt, bought it or not, position levels in str - LABEL ENCODING (LabelEncoder)

If it's something like the country - ONE HOT ENCODING (ColumnTransformer -> OneHotEncoder)

