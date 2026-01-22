**Disclaimer**:
</br>This extension does nothing on its own. This is an extension dependency.

# Kobold API Library
A function library for SillyTavern to help extension developers with using KoboldCpp API endpoints.

## Installation:
1. Extensions menu -> `Install extension`.
2. Paste the following in the top textbox:
```
https://github.com/CasualAutopsy/STLib-Kobo-API-Lib
```
3. Click `Install just for me`.
4. Done. You can now use extensions that use this as a dependency.
---

## Dev Usage:
`manifest.json`:
***
For the dependecny to work, set your `loading_order` above `1`.
***
**Importing**:
***
Assuming you're importing to a file that's in the extension's dir root, you add the following:
```js
import {kobo} from '../STLib-Kobo-API-Lib/expose.js'
```
