<h1>Basics</h1>



```python
from pathlib import Path
"""Cannot be written separately
win_path = 'C:\Users\User\Downloads'
Path(win_path) - WONT WORK!
"""

#Create a path regardless of the OS, it will change itself accordly
print(str(Path('C:', 'Users', 'User', 'Downloads')), '\n')

#Output
```