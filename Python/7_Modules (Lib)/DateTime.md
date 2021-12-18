imma take a shower

````python
import datetime
boku_no_time = datetime.time(13,17)
"""Creates and object whit those parameters as hour/minute/sec..etc"""
print(boku_no_time)
print(boku_no_time.hour)
print(boku_no_time.minute)

todaynt = datetime.date(2021,5,13)
today = datetime.date.today()
print(today)
print(today.ctime())    #IC
#Output
'''
13:17:00
13
17
2021-06-01
Tue Jun  1 00:00:00 2021
````

---

abc

````python
combined = datetime.datetime.today()
print('\n',combined)

ran_date = datetime.datetime(1998,7,13,19,21,7)
print(ran_date)
#The attributes of this class are not writeable, must re-assign the changed date
# to a new date or the same, lol
ran_date = ran_date.replace(year=2121)
print(ran_date)
#Output
'''
2021-06-01 19:05:37.164934
1998-07-13 19:21:07
2121-07-13 19:21:07
````

---

math whit dates

`````python
date1 = datetime.date(2020,10,1)
date2 = datetime.date(2020,11,7)
year_dif = date2.year-date1.year
month_dif = date2.month-date1.month
day_dif = date2.day-date1.day

total_dif = date2 - date1
print(f'The user spent {year_dif} years & {month_dif} month(s) & {day_dif} day(s) in the server')
print(total_dif)    #Takes into account the number of days the month has!
#Output
'''
The user spent 0 years & 1 month(s) & 6 day(s) in the server
37 days, 0:00:00
`````

----

math whit full dates

````python
datime1 = datetime.datetime(2020,10,1,13,40,30)
datime2 = datetime.datetime(2021,10,1,23,50,30)
print(datime2-datime1)
my_difer = datime2-datime1
print(my_difer.total_seconds())     #lol

#Output
'''
365 days, 10:10:00
31572600.0

````

