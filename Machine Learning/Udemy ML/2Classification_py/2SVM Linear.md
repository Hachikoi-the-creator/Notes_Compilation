![svm do](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\svm do.png)

<h2>What does?</h2>

Tries to find the best possible lane within all the possible line to divide the groups in a data set.

<h2>How tho?</h2>

![more_svm](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\more_svm.png)

Utilizes the support vectors to adjust the division line, and like the SVR has that margin, but here it's whit the same distance regarding the support vectors.
They are the only used because they are the closest to each other's cluster/group.
Thus if we erase all the data point, except those 2, the model stays the same.

---

![hyper_svm](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\hyper_svm.png)

More explanation.
That blue line, when in a 2D space is called Maximum Margin Classifier.
If in n Dimensions ; n>2 space is called Maximum Margin Hyperplane
There's no rule about where to put the negative & positive hyperplane, just need to be placed.



<h4>Cool Point - What's so special about SVM?</h4>

A normal ML algorithm will look to what's the most likely to be a positive and negative entry, and decide based on that if the entry is positive or negative or the apple example, what's the most out of stock/mold apple looking apple, and orange looking orange.

While SMV looks for the apple that's less likely to be an apple and the orange that's pretty much an apple, in a another example, who's the less likely to buy a car, and who's the less likely to not buy a car, to decide who will and who won't respectively.

And those are used as the support vectors.





