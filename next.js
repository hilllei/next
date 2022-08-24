function travelling() {
  var url = new Array();
  var rip_url = "https://o.hilllei.com/next/rip.html";

  url[0] = "https://slykiten.com/";
  url[1] = "https://www.foryuanbo.com/";
  url[2] = "https://www.yayu.net/";
  url[3] = "https://yyjn.org/";
  url[4] = "https://synyan.cn/";
  url[5] = "https://couqiao.net/";
  url[6] = "https://fatesinger.com/";
  url[7] = "https://www.juroku.net/";
  url[8] = "https://blog.shaoxiao.net/";
  url[9] = "https://husay.cc/";
  url[10] = "https://rawchen.com/";
  url[11] = "https://imzm.im/";
  url[12] = "https://novcu.com/";
  url[13] = "https://heycmm.cn";
  url[14] = "http://mingxin.life/";
  url[15] = "https://onojyun.com/";
  url[16] = "https://wuse.ink/";
  url[17] = "https://2cat.net/";
  url[18] = "https://www.ntiy.com";
  url[19] = "https://zblogs.top/";
  url[20] = "https://www.thyuu.com/";
  url[21] = "https://feng.pub/";
  url[22] = "https://wind.ink/";
  url[23] = "https://maie.name/";
  url[24] = "http://www.winature.com/";
  url[25] = "http://www.winegrower.cn/";
  url[26] = "https://muguayuan.com/";


  url[99] = rip_url;


  url[url.length] = "https://github.com/hilllei/next";


  if (document.referrer) {
    var origin = new URL(document.referrer).origin;
    if (url.includes(origin)) {
      url.splice(url.indexOf(origin), 1);
    }
  }

  url = [... new Set([rip_url,].concat(url))].slice(1);
  var ints = Math.floor(Math.random() * url.length);
  window.location = url[ints];
}
