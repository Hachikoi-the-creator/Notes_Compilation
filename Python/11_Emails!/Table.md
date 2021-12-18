| **Keyword**                                             | **Definition**                                               |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| ‘ALL’                                                   | Returns all messages in your email folder. Often there are size  limits from imaplib. To change these use imaplib._MAXLINE = 100 , where 100  is whatever you want the limit to be. |
| ‘BEFORE date’                                           | Returns all messages before the date. Date must be formatted as  01-Nov-2000. |
| ‘ON date’                                               | Returns all messages on the date. Date must be formatted as  01-Nov-2000. |
| ‘SINCE date’                                            | Returns all messages after the date. Date must be formatted as  01-Nov-2000. |
| ‘FROM some_str’                                         | Returns all from the sender in the string. String can be an email,  for example 'FROM user@example.com' or just a string that may appear in the  email, "FROM example" |
| ‘TO some_str’                                           | Returns all outgoing email to the email in the string. String can  be an email, for example 'FROM user@example.com' or just a string that may  appear in the email, "FROM example" |
| ‘CC some_sring’ and/or ‘BCC some_str’                   | Returns all messages in your email folder. Often there are size  limits from imaplib. To change these use imaplib._MAXLINE = 100 , where 100  is whatever you want the limit to be. |
| ‘SUBJECT string’, ‘BODY string’, ‘TEXT str whit spaces’ | Returns all messages with the subject string or the string in the  body of the email. If the string you are searching for has spaces in it, wrap  it in double quotes. |
| ‘SEEN’, ‘UNSEEN’                                        | Returns all messages that have been seen or unseen. (Also known as  read or unread) |
| ‘ANSWERED’, ‘UNANSWERED’                                | Returns all messages that have been replied to or unreplied to. |
| ‘DELETED’, ‘UNDELETED’                                  | Returns all messages that have been deleted or that have not been  deleted. |

 