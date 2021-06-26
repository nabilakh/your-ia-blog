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
            "name": "Alexandra Daddario",
            "date": "3rd March, 2021",
            "body": "Amazing  !!! <br> Woww.."
        },
        {
            "name": "Hero Fiennes-Tiffin",
            "date": "1st March, 2021",
            "body": "Insects with supernatural speed ? <br> I can't imagine that !!! "
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