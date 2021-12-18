<h2>Erase column</h2>

```python
df.drop('a', inplace=True, axis=1)
#Axis 0 = X, default
#Axis 1 = Y
```

Possible X:

- LotArea - int

- Street - WORDS (Grvl, Pave)
  Type of road to access the property

- Utilities - WORDS (AllPub, NoSewr, NoSeWa, ELO)
  Gas, Electricity, etc

- Neighborhood - WORDS(...)
  Physical locations around

- BldgType - WORDS (1Fam, 2FmCon, Duplx, TwnhsE, TwnhsI)
  Type of dwelling (?)

- HouseStyle - WORDS (...)
  Style of dwelling (?)

- OverallQual - int
  Overall material and finish of the house

- OverallCond - int
  Overall condition of the house

- YearBuilt
  ....

- YearRemodAdd - int
  Year of last remodel, same as construction if not remodel

- RoofMatl - WORDS (ClyTile, CompShg, Membran, Metal, Roll, Tar&Grv, WdShake, WdShngl)
  Roof material...

- Exterior1st | Exterior2nd WORDS (A lot of them actually)
  Exterior covering the house, 2nd if more than one material

- MasVnrType - WORDS (BrkCmn, BrkFace, CBlock, None, Stone)
  Masonry veneer type

- MasVnrArea - int
  Masonry veneer area in ft<sup>2</sup>

- ExterQual - LETTERS (Ex, Gd, TA, Fa, Po)
  Quality of the material of the exterior

- ExterCond - LETTERS (Ex, Gd, TA, Fa, Po)
  Condition of the material of the exterior

- BsmtQual - WORDS(Ex<115>, Gd<100>, TA<90>, Fa<80>, Po<70>, NA<0>)
  Height of the basement

- BsmtCond - WORDS (Ex, Gd, TA, Fa, Po NA) 
  Condition of the basement

- TotalBsmtSf
  Total ft<sup>2</sup> of the basement area

- ```
  1stFlrSF: First Floor square feet
  
  2ndFlrSF: Second floor square feet
  
  LowQualFinSF: Low quality finished square feet (all floors)
  
  GrLivArea: Above grade (ground) living area square feet
  
  FullBath: Full bathrooms above grade
  
  HalfBath: Half baths above grade
  
  BedroomAbvGr: Bedrooms above grade (does NOT include basement bedrooms)
  
  Kitchen: Kitchens above grade
  
  Fireplaces: Number of fireplaces
  
  GarageYrBlt: Year garage was built
  
  GarageCars: Size of garage in car capacity
  
  GarageArea: Size of garage in square feet
  
  PoolArea: Pool area in square feet
  
  
  ```

