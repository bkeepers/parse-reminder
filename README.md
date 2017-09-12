# parse-reminder

> a node module to parse natural language reminders into who, what, and when.

It aims to support all common forms of natural language for reminders. For example:

- remind me to send invites at 3pm tomorrow
- remind me to wish Jamie happy birthday on 8/28
- remind me in 10 minutes to change the laundry
- remind me that the oil needs changed on Oct 4
- remind me next Friday to water the plants

## Usage

```js
var parseReminder = require('parse-reminder')

console.log(parseReminder('remind me to call the doctor tomorrow'))
// Output:
// { who: 'me',
//   what: 'call the doctor',
//   when: 2017-09-12T12:00:00.000Z }
```
