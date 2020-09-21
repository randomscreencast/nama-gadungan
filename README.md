<img src="https://img.shields.io/codecov/c/github/rizafahmi/nama-gadungan" />
<img src="https://img.shields.io/github/repo-size/rizafahmi/nama-gadungan" />

# nama-gadungan

Pustaka kecil yang dapat membantu kamu untuk mendapatkan nama acak untuk data gadungan atau data _dummy_ yang dapat digunakan untuk aplikasi dan database.

## Instalasi

### Menggunakan npm

```
npm install nama-gadungan
```

### Menggunakan CDN

```
<script src="https://unpkg.com/nama-gadungan@1.0.0/dist/bundle.js" type="module"></script>
```

## Cara Menggunakan

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

## Cara Berkontribusi

## TODO
- [x] Ganti license di package.json
- [ ] Lengkapi README
- [x] Tambah file LICENSE
- [ ] Bahasa Indonesia dan Bahasa Inggris
