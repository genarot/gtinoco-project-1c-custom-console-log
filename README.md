# Custom Console Log

This library show different kind of custom messages on browser
These are the available functions "ok", "info", "error" and "warning".

## Installation

```
npm i gtinoco-project-1c-custom-console-log
```

## Useo

To use the module we must to import it.
```javascript
const m = require('gtinoco-project-1c-custom-console-log');
```
### Confirmation message "ok"

```javascript
m.ok('The data has been sent properly');
```

### Information message "info"

```javascript
m.info('The data has been sent properly');
```

### Warning message "warning"

```javascript
m.warn('The data has been sent properly even though not so fast');
```

### Failure message "error"

```javascript
m.error('The data has not been sent properly!');
```
