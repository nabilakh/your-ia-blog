function render(data){
    let html = "<div class='commentBox'><div class='LeftPanelImg'><img src='wajahh.jpg' alt='logo'></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";

    $('#container').append(html);
}
$(document).ready(function () {

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
      });
    

    let comment = [{
            "name": "Kim Jennie",
            "date": "7th March, 2021",
            "body": "Why the robot is so cute ?! <br>Good information"
        },
        {
            "name": "Park Bo-gum",
            "date": "8th March, 2021",
            "body": "Sensing Robot really can be Healthcare Helpers, I really want to have a robot like that ! <br>Thank you for the information"
        }
    ];

    for (let i = 0; i < comment.length; i++) {
        render(comment[i]);
    }
    $('#addComment').click(function(){
        let addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val()
        };
        comment.push(addObj);
        render(addObj);
        $('#name').val('');  
    })

    $(".show-login-btn").on("click",function(){
        $(".login-box").toggleClass("showed");
      });
      $(".hide-login-btn").on("click",function(){
        $(".login-box").toggleClass("showed");
      });
})