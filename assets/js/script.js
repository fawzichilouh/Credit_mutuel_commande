$(document).ready(function () {
  $(".btn1").click(function () {
    $(".btn1").addClass("d-none");
    $(".inf-1").addClass("d-none");
    $(".access").addClass("d-none");
    $(".inf-2").removeClass("d-none");
    var username = $("#username").val();
    sessionStorage.setItem("lastname", username);
    $("#usernametape2").val(sessionStorage.getItem("lastname"));
  });
  $("#icon_back").click(function () {
    $(".btn1").removeClass("d-none");
    $(".inf-1").removeClass("d-none");
    $(".access").removeClass("d-none");
    $(".inf-2").addClass("d-none");
    var username = $("#username").val();
    sessionStorage.setItem("lastname", username);
    $("#usernametape2").val(sessionStorage.getItem("lastname"));
  });

  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});
