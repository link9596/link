window.onload=function(){
  document.getElementById('alert').style.Transform='translateY(1000px)';
  document.getElementById('alert').style.WebkitTransform='translateY(1000px)';
}

window.setInterval(clean, 4000);

function clean(){
  document.getElementById('alert').style.transform='translateY(1000px)';
  document.getElementById('alert').style.WebkitTransform='translateY(100px)';
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
   document.getElementById('alert').style.transform='translateY(922px)';
   document.getElementById('alert').style.WebkitTransform='translateY(921px)';
   //alert("用户名或密码错误!");
  }
}
