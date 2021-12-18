<h1>RegEx Functions</h1>

| Function                                                     | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [findall](https://www.w3schools.com/python/python_regex.asp#findall) | Returns a list containing all matches                        |
| [search](https://www.w3schools.com/python/python_regex.asp#search) | Returns a [Match object](https://www.w3schools.com/python/python_regex.asp#matchobject) if there is a match anywhere in the string |
| [split](https://www.w3schools.com/python/python_regex.asp#split) | Returns a list where the string has been split at each match |
| [sub](https://www.w3schools.com/python/python_regex.asp#sub) | Replaces one or many matches with a string                   |

---

<h1>Metacharacters</h1>

| Character | Description                                                  | Example Pattern Code | Example match    |
| :-------- | :----------------------------------------------------------- | :------------------- | ---------------- |
| []        | A set of characters                                          | [amd]                | 'a', 'm', 'd'    |
| \         | Signals a special sequence (can also be used to escape special characters) | \d \w \W             | 7, a, +          |
| .         | Any character (except newline character, unless DOTALL specified) | .                    | [a-z], [0-9]     |
| ^         | Starts with (if MUTILINE on, also after \n)                  | ^hello               | "hello world"    |
| $         | Ends with (if MUTILINE on, also after \n)                    | world$               | "Hello world"    |
| *         | 0 or multiple occurrences                                    | aix*                 | "ai", "aixxxxx"  |
| +         | 1 or mutiple occurrences                                     | aix+                 | "aix", "aixxxxx" |
| {n}       | Exactly N number of occurrences                              | al{2}                | "all"            |
| a\|b      | Either a or b                                                | falls\|stays         | "falls", "stays" |
| ?         | 1 or 0 occurrences                                           | boom?                | "boo", "boom"    |
| ?         | As non-gredy addon  whit [*, +, ?,{m,n}], since only matches 0 or 1 | -                    | -                |
| {m,n}     | Matches from m to n occurrences                              | ay{1,3}              | "ay","ayyy"      |

---

<h1>Special Sequences</h1>

| Character | Description                              | Example Pattern   | Example match |
| :-------- | :--------------------------------------- | :---------------- | ------------- |
| \A        | Pattern At the beggining                 | "\AThe"           |               |
| \b        | Pattern at the beggining or at the end   | r"\bain" r"ain\b" |               |
| \B        | Pettern Not at the beggining nor the end | r"\Bain" r"ain\B" |               |
| \d        | A digit                                  | "\d"              |               |
| \D        | NOT a digit                              | "\D"              |               |
| \s        | White spaces                             | "\s"              |               |
| \S        | NOT White spaces                         | "\S"              |               |
| \w        | Alphanumeric & _                         | "\w"              |               |
| \W        | NOT Alphanumeric or _                    | "\W"              |               |

---

<h1>Sets</h1>

| Set       | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| [arn]     | Returns a match where one of the specified characters (`a`, `r`, or `n`) are present |
| [a-n]     | Returns a match for any lower case character, alphabetically between `a` and `n` |
| [^arn]    | Returns a match for any character EXCEPT `a`, `r`, and `n`   |
| [0123]    | Returns a match where any of the specified digits (`0`, `1`, `2`, or `3`) are present |
| [0-9]     | Returns a match for any digit between `0` and `9`            |
| 0-5][0-9] | Returns a match for any two-digit numbers from `00` and `59` |
| [a-zA-Z]  | Returns a match for any character alphabetically between `a` and `z`, lower case OR upper case |
| [+]       | In sets, `+`, `*`, `.`, `|`, `()`, `$`,`{}` has no special meaning, so `[+]` means: return a match for any `+` character in the string |

