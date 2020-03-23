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

```js
// this.state as any
let {
  hotShowList,
  newMovieList,
  goodBoxList,
  boxLastDate,
  isLoadingHotShow,
  isLoadingNewMovie,
  isLoadingGoodBox,
} = (this.state as any);
```

```css
// 每第四个 .movie-card 的盒子 margin-right: 0
.movie-card:nth-of-type(4n){
  margin-right:0;
}
```

```css
/* 指定名为"myFirstFont"的字体，并指定在哪里可以找到它的URL： */
@font-face{
  font-family: myFirstFont;
  src: url('Sansation_Light.ttf'),
      url('Sansation_Light.eot'); /* IE9 */
}
@font-face {
  font-family: <YourWebFontName>;
  src: <source> [<format>][,<source> [<format>]]*;
  [font-weight: <weight>];
  [font-style: <style>];
}
/* weight和style:这两个值大家一定很熟悉，weight定义字体是否为粗体，style主要定义字体样式，如斜体。 */
/* source:此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝路径 */
/* format：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：truetype,opentype,truetype-aat,embedded-opentype,avg等 */
/* 本项目用到的format("truetype") = > .ttf => TrueTypeFont 的缩写 */
```