"use strict";
var isok = false;
function checkFm(iptName,cateName,ruleCont,ruleTips){
  $(iptName).blur(function(){
    var valueIpt = $(iptName).val();
    if(valueIpt.length == 0){
      $(iptName).siblings('i').html(cateName+"还没有输入");
      return isok = false;
    }else if (!ruleCont.test(valueIpt)) {
      $(iptName).siblings('i').html(ruleTips);
      return isok = false;
    }else if($('#x_pwd').val() !== $('#x_pwd2').val() && $('#x_pwd2').val() != ""){
        $('#x_pwd2').siblings('i').html("两次密码不相同");
        return isok = false;
    }else{
    $(iptName).siblings('i').html("");
    return isok = true;
    }})
}
checkFm('#x_uname',"用户名",/^[a-z]{6,12}/i,"请输入6-12的英文字母");
checkFm('#x_pwd',"密码",/\w{6,16}/i,"请输入6-16的密码,可包含数字、字母、“_”");
checkFm('#x_pwd2',"确认密码",/\w{6,16}/i,"请输入6-16的密码,可包含数字、字母、“_”");
checkFm('#x_mbphone',"手机号",/^((\+86)|(86))?(13)\d{9}$/i,"请输入正确的手机号码");
checkFm('#x_email',"邮箱地址",/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g,"请输入正确的邮箱地址");
function checkForm(){
  if(isok == true){
    return true;
  }else{
    $('#quest').siblings('i').html("注册信息未符合要求");
    return false;
  }
}
