Until now I'm not able to successfully import this shit in my VSCode environment
but it should be something like 

->pip install Pillow

->pip install cImage

````python
from PIL import Image
````

* Extra warnings, from documentation page
  - Pillow and PIL cannot co-exist in the same environment. Before installing Pillow, please uninstall PIL.
  - Pillow >= 1.0 no longer supports “import Image”. Please use “from PIL import Image” instead.
  - Pillow >= 2.1.0 no longer supports “import _imaging”. Please use “from PIL.Image import core as _imaging” instead.

