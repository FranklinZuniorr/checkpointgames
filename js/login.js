
    $("#lg").click(function(){
      $("#entrar").show();
      $("#cadastrar").hide();
      $(".mx-auto").html("Tela de login");
      $("#lg").animate({opacity: 0.5}, 100);
      $("#lg2").animate({opacity: 1}, 100);
    });

    $("#lg2").click(function(){
        $("#entrar").hide();
        $("#cadastrar").show();
        $(".mx-auto").html("Tela de cadastro");
        $("#lg").animate({opacity: 1}, 100);
        $("#lg2").animate({opacity: 0.5}, 100);
      });

    $("#lg").click(function(){
        $(".apresenta").css({"animation": "ttan 2s linear 0s 1 normal forwards"});
    });
