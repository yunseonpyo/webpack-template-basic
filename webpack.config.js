// 브라우져에서 작동하지 않고 node.js에서 작동함 

//import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


//export
module.exports={
  //parcel main.js
  //파일을 읽어들이기 시작하는 진입점 설정
  entry:"./js/main.js",

  //결과물(번들)을 반환하는 설정
  output:{
    // path: path.resolve(__dirname,"public"),
    // filename:"main.js",
    // 상기 2개의 자료는 생략가능하다.
    clean:true
    //clean을 추가시 기존에 생성된 데이터(필요하지 않은 데이터)는 날라감.
  },

  //css 파일 컴파일
  module: {
    rules:[
      {
        test:/\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      //babel 코드 작성
      {
        test:/.\js$/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },


  plugins:[
    //js 파일 컴파일
    new HtmlPlugin({
      template:"./index.html"
    }),

    // static 폴더 컴파일
    new CopyPlugin({
      patterns: [
        {from:"static"} //static 폴더
      ]
    })
  ],

  devServer: {
    host: "localhost",
    port: 8080,
    hot: true
  }
}