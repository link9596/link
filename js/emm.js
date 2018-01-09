window.onload=function(){
  document.getElementById('alert').style.margin='-100px 0px 0px 0px';
}

window.setInterval(clean, 4000);

function clean(){
  document.getElementById('alert').style.margin='-100px 0px 0px 0px';
}

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
window.location.href="http://lkopp.ml";
}
 else{
   document.getElementById('alert').style.margin='-165px 0px 0px 0px';
   alert("用户名或密码错误!");
  }
}
