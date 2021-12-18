<h2>1D Creation</h2>

```java
dataType[] arrayName = {data} //syntax
String[] myStr = {"One","Two","Three"}
int[] numbers = {1,4,3,5}

//Check len
numLen = numbers.length
```

<h2>2D Creation</h2>

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };//1 array inside another
int x = myNumbers[1][2];	//7

//Loop trough a 2D array
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
    for (int i = 0; i < myNumbers.length; ++i) {
      for(int m = 0; m < myNumbers[i].length; ++m) {
        System.out.println(myNumbers[i][m]);
      }
    }
```

<h2>Cloning</h2>

```java
// 1D
int[] numbers = {1,4,3,5};
int clone = number.clone();
//2D
int intArray[][] = {{1,2,3},{4,5}};
int cloneArray[][] = intArray.clone();
```

