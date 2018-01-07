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
 var user = "123", password = "2222"; 
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
}
