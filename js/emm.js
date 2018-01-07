function KeyDown()
{
  if (event.keyCode == 13)
  {
    event.returnValue=false;
    event.cancel = true;
    Form1.login.click();
  }
}

function check(){
 var user = "link", password = "95969639";
 var temUser = document.form1.username.value;
 var temPassword = document.form1.password.value;
 if(user==temUser && password==temPassword)
{
 alert("登入成功!");
window.location.href="http://lkopp.ml";
}
 else{
   alert("用户名或密码错误!");
  }
  var user2 = "lin", password2 = "888";
  var temUser2 = document.form1.username.value;
  var temPassword2 = document.form1.password.value;
  if(user2==temUser2 && password2==temPassword2)
  {
    alert("账户登入成功!");window.location.href="http://lkopp.ml";
  }
  else{
    alert("用户名或密码错误!");
  }
}
