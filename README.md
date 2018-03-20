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
$ npm install --save-dev postcss-modules
$ npm install node-sass
$ npm install --save-dev autoprefixer
```

## use

```bash
$ parcel index.html => $ npm start
```

## js 변환
- add file
```
// .babelrc
{
  "presets": ["env", "react"]
}
```
- `.babelrc`가 있다면 babel을 쓰는구나 라고  
parcel이 알아채고 자동으로 babel을 이용해서 해준다. parcel의 편리함!
- 즉 babel만 공부하면 된다

## css 변환
- add file
```
// .postcssrc
{
  "modules": true  => 모듈 단위로 css를 관리해줌
  "plugins": {
    "autoprefixer": {  => 브라우저 prefix를 다 처리해줌
      "browsers": [  => 어떤 브라우저를 지원하고 싶은지
        "> 1%",  => 글로벌 마켓 쉐어에 1% 이상인 브라우저를 지원
        "Last 2 versions",  => 해당 브라우저의 최근 2개 버전을 지원
        "IE 10" => IE 10 지원
      ]
    }
  }  
}
```

## build
```bash
$ parcel build index.html -d build --public-url ./
```
- `-d build`: build 디렉토리에 빌드하겠다
- `public-url ./` aws 또는 깃헙브 공개페이지로 url 작업 할때 이렇게하면 같은 폴더에 작업할 수 있음  
- href 이런거 앞에 `./`를 다 넣어줌

## 부록
- typography.js
```bash
$ npm install --save typography
```
- js로 css typography를 관리할 수 있다.
- 여러 테마도 있어서 간단하게 수정 후 사용 가능!
- `typography.js` 참고
- [링크](https://kyleamathews.github.io/typography.js/)