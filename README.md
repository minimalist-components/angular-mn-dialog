[![npm version](https://badge.fury.io/js/angular-mn-dialog.svg)](https://badge.fury.io/js/angular-mn-dialog)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-dialog.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-dialog)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# angular-mn-dialog

A angular service to [mn-dialog](https://github.com/minimalist-components/mn-dialog)

See the [demo](https://github.com/minimalist-components/angular-mn-dialog)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-dialog/master/preview.gif)](https://minimalist-components.github.io/angular-mn-dialog/)

### Install

```sh
npm install --save angular-mn-dialog
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-dialog/tree/master/dist) with your preferred tool.

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

For more details check [mn-dialog docs](https://github.com/minimalist-components/mn-dialog).

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
