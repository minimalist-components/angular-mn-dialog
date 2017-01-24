[![Bower version](https://badge.fury.io/bo/angular-mn-dialog.svg)](https://badge.fury.io/bo/angular-mn-dialog)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# angular-mn-dialog

An angular directive to [mn-dialog](https://github.com/minimalist-components/mn-dialog)

See the [demo](https://github.com/minimalist-components/mn-dialog)

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-dialog/master/sources/example/mn-dialog.gif)](http://codepen.io/darlanmendonca/full/akgXQq) -->

### Install

```sh
bower install --save angular-mn-dialog
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/angular-mn-dialog/tree/master/dist)

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-dialog'
])
```

Add to your html, the tag `mn-dialog` and assign to it an `id`, e.g.

```html
<mn-dialog id="example">
  <!-- here goes the content of your dialog -->
</mn-dialog>
```

and to open this dialog, you can add to any element (we suggest a button), the attibute `open-dialog` with id as value, e.g.

```html
<!-- when click in the button, dialog will be opened -->
<button open-dialog="example">Open dialog</button>
```

For more details check docs [mn-dialog docs](https://github.com/minimalist-components/mn-dialog).

Now, about service, you can use the service `$mnDialog`, like below:

```js
angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController($mnDialog) {
  // to open, call method open with id of dialog
  $mnDialog.open('example')

  // to close dialog visible, just call .close()
  $mnDialog.close()
}
```
