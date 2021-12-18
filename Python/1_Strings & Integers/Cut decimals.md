<h1>F-string</h1>



```python
result = 111/778

print(result)

print('The result is {r:0.4f})'.format(r=result))
#{<INDEX>:<WIDTH(pn)>.<Presicion>}
#pn. is some identation before (0.1427)
```

<h1>Another</h1>

```python
import math
a = ((5**2)*2)/5 + 90.5-.25
print(a)
b = 3.7 + 9 + 77
print(type(b))
bRoot = math.sqrt(b)
# == b**0.5
print(f'Done {bRoot:3f}')
print(f'Also works! {math.sqrt(b):.3f}')
#Cutting decimals!

```

