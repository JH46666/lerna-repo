//  function getQueryString(name) {
//   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//   var r = window.location.search.substr(1).match(reg);

//   if (r != null) {
//      return unescape(r[2]);
//   }
//   return null;
// }


function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();

  if (url.indexOf("?") != -1) {
          var str = url.substr(1);  //获取除了问号外的东西。
          strs = str.split("&");  // 以&做切割 变为数组
       for(var i = 0; i < strs.length; i ++) {
               theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);  //在将数组项中的等号作为切割对象，作为key 右为value
        }
  }
return theRequest;
}


//指定取
function GetQueryString(name) { 
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
  var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
  var context = ""; 

if (r != null) 
context = r[2]; 
reg = null; 
r = null; 
return context == null || context == "" || context == "undefined" ? "" : context; 
}
alert(GetQueryString("j")





















