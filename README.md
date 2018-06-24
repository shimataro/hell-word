hell, word
===

CJS / ES Modules / Babel 対応パッケージの例

## インストール

```bash
npm install hell-word
```

## 使い方

### CJS

```javascript
const {default: foo, bar} = require("hell-word");

console.log(foo(1, 2)); // 1 + 2
console.log(bar(3, 4)); // 3 * 4
```

### ES Modules(.mjs) / Babel

```javascript
import foo, {bar} from "hell-word";

console.log(foo(1, 2)); // 1 + 2
console.log(bar(3, 4)); // 3 * 4
```
