```python
def wtf_bro(m: int, n: int):
    """ m = m+1 the same as m:int it seems..."""
    matrix = reversed([[f'x{y + 1} y{x + 1}' for y in range(n)]
                       for x in range(m)])
    """Pretty weird, so this prints x & y at the same time but only runs once, instead of y for x times"""
    return matrix


result = wtf_bro(3, 2)
print(*result, sep='\n')
#Output
['x1 y3', 'x2 y3']
['x1 y2', 'x2 y2']
['x1 y1', 'x2 y1']
```

