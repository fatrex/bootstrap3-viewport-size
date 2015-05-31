# Bootstrap 3 Viewport Size

This is a very simple "plugin" for Bootstrap 3 for getting the current viewport size ("xs", "sm", "md" or "lg") in your JavaScript code.

## Usage
You can simply include it in a script:

```
<script src="bs3vs.js"></script>
```

and you will have a function in the global window object that you can use to discover the current size:

```
window.viewportIs(size) // return a boolean
```

where *size* is one of the Bootstrap sizes ("xs", "sm", "md" or "lg")

### That's it! :)
