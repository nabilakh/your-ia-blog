$(document).ready(function(){


  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $('.close-btn').click(function(){
    $(this).parent().hide();
    // $(".alert").slideUp(300);
  });
  
  $(".show-login-btn").on("click",function(){
    $(".login-box").toggleClass("showed");
  });
  $(".hide-login-btn").on("click",function(){
    $(".login-box").toggleClass("showed");
  });
  
  
});