## 创建项目
npx create-react-app --template typescript douban


### 引入react-router-dom
需要 
``` js
declare module 'react-router-dom';
```

```js
let instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3e4,
  params: {
    // 这里的params没有被加上
    "apikey": API_KEY,
  }
});
```