Solves the separation whit non-linear separable datasets:

<h1>Option 1 - Mapping to a higher dimension</h1>

**DISCLOSURE**
This is highly computer intensive (heavy as fuck)

-Where you cannot really separate the data whit a straight line, not even a simple curve.

![k_SVM](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\k_SVM.png)

<h2>How tho</h2>

1. Mapping to a higher dimension.

![mappin1](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\mappin1.png)

In this example we cannot separate those data point, whit any point (in a 1D space we separate whit points, 2D lines, 3D hyperplanes).

Thus we need to map it to a higher dimension, 1 way to do it is by changing how the data is presented, whit some equivalences.

![mappin2](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\mappin2.png)

We first changed X value to X-5, then changed that X to it's squared.

Only now we can create a linear separation in the dataset.

2. Go back to the original dimension and keep the separation points, where the line used to separate the points in the 2D representation.

<h2>2D example</h2> 

**Mapping to a higher dimension & create a linear separation**

In this case is a more complex formula, we also have multiple formula options.

![mapping3](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\mapping3.png)

**Come back to the original dimension**

![mappin4](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\mappin4.png)

<h1>Option 2 - The kernel trick</h1>

**DISCLOSURE**

We can get very similar result without doing all that heavy computation!

![kernel trick](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\kernel trick.png)

We need to use the Gaussian/RBF Kernel to simulate a higher dimension.

The closer the data point is from the Landmark, the closer the result is to 1, whit an exponential change actually, and that 1 or difference helps us map it in a higher dimension within our dimension

**NOW MORE WWW**

![sumimasen wakarimasen](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\sumimasen wakarimasen.png)

The Landmark is placed in an optimal place (trough more hidden calculations), and Sigma defines how wide the radio of the representation is, thus defining until where the green data points are.

**Sigma changes examples** 

![low sigma](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\low sigma.png)

![high sigma](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\high sigma.png)

---

<h2>The power of Kernel SVM!</h2>

![powerrrr](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\powerrrr.png)

<h2>Kernels!</h2>

There are more, but these are the most popular!

![kernels1](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\kernels1.png)

<h1>non-linear SVR</h1>

**DISCLAMER: We don't actually project to 3D, this is only for visualization purposes, we use the same kernel trick as above!**

**How works?**

As before the data get plotted into a 3D space whit the help of the rbf function, but now instead of using the value of distance between the landmark, we now use the 3D space to draw a hyperplane that fits the data

![original svm](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\original svm.png)

But we have 3 hyperplanes as in a previous model (cannot remember name www),
where we don't care about the R^2 of the data inside the sandwich of hyperplanes, but about the ones outside!

![svr in 3d](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\svr in 3d.png)

Thus those data points whit a circle are our support data (or whatever the name was www)!

![support data](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\support data.png)