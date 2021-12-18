MARKER:In the next section I'll introduce a neural network that can do a pretty good job classifying handwritten digits


---

<h2>Something</h2>

-  two important types of artificial neuron (the perceptron and the sigmoid neuron)

- and the standard learning algorithm for neural networks, known as stochastic gradient descent. There's also another, not remember which was the older tho

- BIAS:
  The int value "inside" the neuron which needs to be lesser than the sum of all entries, in order to output a 1, Big = easy get 1. Negative = hard get 1

- Perceptron: takes in 1/0
  Pretty much just another NAND gate, the first neuronal net in 1655~, Example of a bunch of perceptron whit 2 inputs of -2, and Bias of 3, the exact same as a NAND
  A small change in a Bias could easily mess everything up

- Sigmoid Neurons/Logistic neuron: takes in 0.000-0.9999

  A small change in a Bias/Weights  = Small change in the output!, thus making some light adjustments we can calibrate itself to have an awesome performance!

  ![functions_dif](C:\Users\User\Desktop\Illegal Drugs Accounting!\Machine Learning\src\functions_dif.png)
  Above is the Sigmoid behaviour, below is the Perceptron behaviour 