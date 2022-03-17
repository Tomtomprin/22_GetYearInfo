window.addEventListener('DOMContentLoaded', function () {
    // 年号を取得
    var Year = (new Date).getFullYear();
    // 上記で得た情報をHTMLに渡す
    document.getElementById('year').textContent = Year;
})

// 年の他にも色々取得できる
// console.log("年=" + today.getFullYear());
// console.log("月=" + (today.getMonth()+1));
// console.log("日=" + today.getDate());
// console.log("時=" + today.getHours());
// console.log("分=" + today.getMinutes());
// console.log("秒=" + today.getSeconds());

// javascriptの情報をHTMLに渡す方法
// innerHTML ・・・　タグもテキストもHTMLに渡すことができる。セキュリティ上の問題に注意。　
// textContent・・　タグは渡せず、テキストだけ渡すことができる。
// 以下参考サイト　他にも複数方法ある
// https://www.sejuku.net/blog/88958
