<h2>Smart way of separating argument in a print func</h2>

```python
def mult_by_five(x):
    return 5 * x

def call(fn, arg):
    """Call fn on arg"""
    return fn(arg)

def squared_call(fn, arg):
    """Call fn on the result of calling fn on arg"""
    return fn(fn(arg))

print(
    call(mult_by_five, 1),
    squared_call(mult_by_five, 1), 
    sep='\n', # '\n' is the newline character - it starts a new line
)

#Output
5
25
```

<h2>More higher-order functions</h2>

```python
def mod_5(x):
    """Return the remainder of x after dividing by 5"""
    return x % 5

print(
    'Which number is biggest?',
    max(100, 51, 14),
    'Which number is the biggest modulo 5?',
    max(100, 51, 14, key=mod_5),
    sep='\n',
)

#Output
"""
Which number is biggest?
100
Which number is the biggest modulo 5?
14
```

<h2>SMH</h2>

```python
def round_by_two(num):
    return round(num,2)
#OMG
print(round(7431.3421,-1))
#7230.0
```

<h2>If w/Print</h2>

```python
print("Splitting", total_candies, "candy" if total_candies == 1 else "candies")
```

<h2>Imaginary numbers</h2>

```python
x = 12
# x is a real number, so its imaginary part is 0.
print(x.imag)
# Here's how to make a complex number, in case you've ever been curious:
c = 12 + 3j
print(c.imag)

#Output
0
3
```

<h2>Fractions in python</h2>

```python
x = 0.125
x.as_integer_ratio()

numerator, denominator = x.as_integer_ratio()
print(numerator / denominator)

#Output
(1,8)
0.125
```

<h2>Cool .Format round</h2>

```python
print(val_mae)
print("Validation MAE: {:,.0f}".format(val_mae))#leaves 0 decimals
#Gives a , after 3 nums

#Output
29652.931506849316
Validation MAE: 29,653
```

<h2>Add zeros</h2>

```python
print(format(2.0, '.6f'))

#Output
'2.000000'
```

