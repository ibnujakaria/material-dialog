## Material Dialog

A simple js library to display material-design styled modal or dialog.

### How To Install
```bash
npm install --save material-dialog
```

### How To Use

#### Browser
```js
<script src="dist/material-dialog.js"></script>
<script>
new Dialog({
  title: 'Use Google\'s location service?',
  body: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
  size: 'medium'
}).show()
</script>
```
#### Moduled Style

```js
import Dialog from 'material-dialog'

new Dialog({
  title: 'Use Google\'s location service?',
  body: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
  size: 'medium'
}).show()
```

### License

The project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).