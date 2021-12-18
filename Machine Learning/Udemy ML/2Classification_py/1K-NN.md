Depending on a given amount of categories in the data set, the model judges where the new data point belongs to

**In this case the new data, belongs to Category 1**

![2021-09-14 12_24_47-Window](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\2021-09-14 12_24_47-Window.png)

<h2>How the model works</h2>

1. Choose the K neighbours (number of groups, 5 by default) -ok
2. Take the K nearest neighbours, according to Euclidean/Haden distance

![eucliden distance](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\eucliden distance.png)

3. Among the K nearest neighbours (the closer data points to the new data point in the training set) count the number of data points in each category 

![knn](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\knn.png)

4. Assign the new data point to the category whit the most neighbours. (since within the 5 closest neighbours 3 where on Category 1, is assigned there!)