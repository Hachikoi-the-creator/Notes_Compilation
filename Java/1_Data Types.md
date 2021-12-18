<h2>Primitive data types</h2>

- int, float, String, boolean, char, byte, short, long.
  Add final before to avoid changing the value after

```java
final int number = 777;
//This var value can't be changed
float myFloatNum = 5.99f;
short smol_number = 13;
long bigaf_number = 219889472896457L;//ends w/L
double decimals_ooi = 7.129378d;//edns w/d
double dondon = 123e-4;//Declaration w/exponent

char myLetter = 'D';
boolean myBool = true;
```

| Data Type | Size    | Description                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| byte      | 1 byte  | Stores whole numbers from -128 to 127                        |
| short     | 2 bytes | Stores whole numbers from -32,768 to 32,767                  |
| int       | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647    |
| long      | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| float     | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits |
| double    | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits |
| boolean   | 1 bit   | Stores true or false values                                  |
| char      | 2 bytes | Stores a single character/letter or ASCII values             |

<h2>Numerical declaration</h2>

```java
//int, above
short smol_number = 13;
long bigaf_number = 219889472896457L;//ends w/L
double decimals_ooi = 7.129378d;//edns w/d
```

<h5>primitive data as a default value, while non-primitive not</h5>

<h2>Casting</h2>

- **Widening Casting** (automatically) - converting a smaller type to a larger type size
  `byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`

  

- **Narrowing Casting** (manually) - converting a larger type to a smaller size type, can also work otherwise
  `double` -> `float` -> `long` -> `int` -> `char` -> `short` -> `byte`

```java
//Widening
int num = 7;
double doom = num;

//Narrowing
long num99 = 9999;
int smoler = (long) num99;
```

