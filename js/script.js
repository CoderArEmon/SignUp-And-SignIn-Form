$(document).ready(function(){
    $(".signup").hide();
    $(".form1").hide();
    $(".form2").hide();

    $(".btn1").click(function(){
        $(".form1").show();
        $(this).hide();
    })

    $(".link1").click(function(){
        $(".form2").show();
        $(".form1").hide();
        $(".login").hide();
        $(".signup").show();
    })

    $(".link2").click(function(){
        $(".form1").show();
        $(".form2").hide();
        $(".login").show();
        $(".signup").hide();
    })

    $(".dismiss").click(function(){
        $(".form1").hide();
        $(".form2").hide();
        $(".btn1").show();
        $(".login").show();
        $(".signup").hide();
    })
})