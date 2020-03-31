# Custom Console Log

This library show different kind of custom messages on browser
These are the availables functions "ok", "info", "error" and "warning".

## Instalation

```
npm i custom-console-log
```

## Uso

Para usar el módulo tenemos que importarlo.
```javascript
var m = require('custom-console-log');
```
### Confirmation message "ok"

```javascript
m.ok('Los datos se han enviado correctamente');
```

### Information message "info"

```javascript
m.info('Los datos se han enviado correctamente');
```

### Warning message "warning"

```javascript
m.aviso('Los datos se han enviado correctamente aunque no muy rápido');
```

### Failure message "error"

```javascript
m.error('Los datos NO se han enviado correctamente');
```