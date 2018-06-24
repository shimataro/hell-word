hell, word
===

CJS / ES Modules / Babel 対応パッケージの例

## インストール

```bash
npm install @shimataro/hell-word
```

## 使い方

### CJS

```javascript
const {default: foo, bar} = require("@shimataro/hell-word");

foo(); // "hell, word"
bar(); // "地獄の言葉"
```

### ES Modules(.mjs) / Babel

```javascript
import foo, {bar} from "@shimataro/hell-word";

foo(); // "hell, word"
bar(); // "地獄の言葉"
```
