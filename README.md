# switchstyler

A jQuery plugin to add/remove classes when your divs are on the right target.

See a live [demo][demo] here!

![Alt text](http://honesign.com/github/jquery-switchstyler/switchstyler.png)


## Getting Started


Download the [production version][min] or the [development version][max].

[min]: https://github.com/cropcrop/jquery-switchstyler/raw/master/dist/jquery.switchstyler.min.js
[max]: https://github.com/cropcrop/jquery-switchstyler/raw/master/dist/jquery.switchstyler.js
[demo]: http://honesign.com/github/jquery-switchstyler/

In your web page:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="dist/switchstyler.min.js"></script>
<script>
$('.fixed-element').switchstyler({
  on: '.target1, .target2',
  addClass: 'class1 class2',
  removeClass: 'class3'
});
</script>
```
