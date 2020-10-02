<img src="https://img.shields.io/codecov/c/github/rizafahmi/nama-gadungan" />
<img src="https://img.shields.io/github/repo-size/rizafahmi/nama-gadungan" />

# nama-gadungan

A small library that can help you to get random names for fake data or dummy data that can be used for applications and databases. This library is intended for experimentation for those who wish to learn to contribute to opensource projects. See the manufacturing process on [youtube](https://www.youtube.com/playlist?list=PLTY2nW4jwtG_5wjvX1hFqgRe_QbcLVsWS).


## Installation

### Use npm

```
npm install nama-gadungan
```

### Use CDN

```
<script src="https://unpkg.com/nama-gadungan@1.0.0/dist/bundle.js" type="module"></script>
```

## How to use

### Node.js
```javascript
const { random } = require('nama-gadungan');

const name = random();
console.log(name);
```

### Browser

```html
<!doctype html -->
<html>
  <head>
    <title>Contoh Penggunaan Nama Gadungan</title>
  </head>
  <body>

    <script src="https://unpkg.com/nama-gadungan@1.0.0/dist/bundle.js" type="module"></script>
    <script type="module">
      import { random } from './bundle.js';

      console.log(random());
    </script>
  </body>
</html>
```

## How to contribute

* Fork this repository
* Clone the repository
* Make changes or improvements
* Make test case
* Push and make Pull Request

## TODO
- [x] Change license in package.json
- [ ] Complete the README
- [x] Add LICENSE file
- [ ] Indonesian and English
