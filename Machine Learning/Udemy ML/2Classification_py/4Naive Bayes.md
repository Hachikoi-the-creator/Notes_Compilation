<h1>Bayes Theorem</h1>

<h2>Formula</h2>

![bayest](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\bayest.png)

<h2>Example</h2>

![bayes_2](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\bayes_2.png)

P(Mach2) = Probablity of that wrench comming from machine 2

P(Defect) = Probablity of that wrench being defectus

P(Mach2 | Defect) = Probablity of that wrench comming from machine 2, given that was taken from the defective batch

P(Defect | Mach2) = Probablity of that wrench being defective, given it comes from machine 2



![bayes_3](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\bayes_3.png)

---

![bayes_example](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\bayes_example.png)

<h1>ML Case walks or drives</h1>

![naive_model](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\naive_model.png)

1/20 * 20/30

**Step 1**

![step1](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\step1.png)

1. Prior prob: The amount of people that drives / the total of data points
   (Pure prob of a new point being a walker, uknowly of any dependan variable)

2. Marginal likehood: Amount of datapoints inside the selected radious / total of data points

   (Same as above but about the new data point being in the same group as the created by the radious)

3. Amount of walkers / total of walkers
   (Likehood of the new data being inside the radious given we are only working whit walkers)

4. The probability of a new data point being a walker, given those dependant variables ´X´

**Step 2**

Make the same as above but whit drivers likehoods

**Step 3**

Compatr both probablities, choose a winner