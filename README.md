## study.parcel

Setting up a professional React project with Parcel as a code bundler Edit

## os
|Software|Version(s)|
|--|--|
|os|ubuntu 14.04|
|nodejs|v8.10.0 |

## Feater

- React
- ES6 with Babel
- SCSS
- CSS Modules
- Typography.js
- Build for production


## install
```bash
$ npm install -g parcel-bundler
$ npm install --save react react-dom
$ npm install --save-dev babel-preset-env babel-preset-react
```

```
// .babelrc
{
  "presets": ["env", "react"]
}
```

## use

```bash
$ parcel index.html => $ npm start
```
- `.babelrc`가 있다면 babel을 쓰는구나 라고 parcel이 알아채고 자동으로 babel을 이용해서 해준다. parcel의 편리함!