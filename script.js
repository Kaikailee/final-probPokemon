$(".restart").click(function() {
    document.location.reload(true);
});

$(".introcaterpie").hide(function() {});
$(".incaterpie").hide(function() {});
$(".caterpiefight").hide(function() {});
$(".fightc").hide(function() {});
$(".caterdefeat").hide(function() {});
$(".wobbles").hide(function() {});
$(".win").hide(function() {});
$(".happyfinal").hide(function() {});
$(".flee").hide(function() {});

$(".bulb").dblclick(function() {
    $(".intro").text("Neat! Bulbasaur is a frog like grass pokemon! My personal favorite..(look at em so cute)");
    $(".irlb").fadeIn();
    $(".first").show();
    $("body").css("background-color", "#53b586");
});
$(".char").dblclick(function() {
    $(".intro").text("Spicy! Charmader is the lizard like fire pokemon. Be sure you don't leave them in the rain for too long..");
    $(".irlc").fadeIn();
    $(".first").show();
    $("body").css("background-color", "#ed3238");
});
$(".squrt").dblclick(function() {
    $(".intro").text("Cool!! Squirtle is a turtle water pokemon! (Should've photoshopped some shades on em..)");
    $(".irls").fadeIn();
    $(".first").show();
    $("body").css("background-color", "#a19ef7");
});
$(".first").click(function() {
    $(".incaterpie").fadeIn().fadeOut(2000);
    $(".intro").hide();
    $(".pokemon").hide();
    $(".first").hide();
    $("body").css("background-color", "#ffeb87");
    $(".introcaterpie").show(2000);
});
$(".irlcat").click(function() {
    $(".introcaterpie").hide();
    $(".caterpiefight").fadeIn();
});

$(".fightbutton").click(function() {
    $(".fightc").fadeIn();
    $(".caterpiefight").hide();

});
$(".fleebutton").click(function() {
    $(".flee").fadeIn();
    $(".caterpiefight").hide();
});

$(".nervc").click(function() {
    $(".caterdefeat").fadeIn();
    $(".fightc").hide();
});

$(".pokebal").hover(function() {
    $(".wobbles").fadeIn().fadeOut(1000);
    $(".caterdefeat").hide();
    $(".win").fadeIn(5000);
});

$(".Final").click(function() {
    $(".happyfinal").fadeIn();
    $(".win").hide();
});