// Generated by CoffeeScript 1.6.2
var currentPage, moveLeft, moveRight, updatePages;

currentPage = 0;

updatePages = function() {
  $('body').animate({
    scrollTop: 0
  }, 500);
  if (currentPage === -1) {
    $("#page").html("Resum&eacute;");
  } else if (currentPage === 0) {
    $("#page").html("Projects");
  } else {
    $("#page").html("Contact Information");
  }
  $("#content-main").css('left', "" + (currentPage * -110) + "%");
  $("#content-left").css('left', "" + ((1 + currentPage) * -110) + "%");
  $("#content-right").css('left', "" + ((-1 + currentPage) * -110) + "%");
  if (currentPage === -1) {
    return $("#page-left").addClass("disabled");
  } else if (currentPage === 1) {
    return $("#page-right").addClass("disabled");
  } else {
    $("#page-right").removeClass("disabled");
    return $("#page-left").removeClass("disabled");
  }
};

moveLeft = function() {
  if (currentPage > -1) {
    currentPage -= 1;
    return updatePages();
  }
};

moveRight = function() {
  if (currentPage < 1) {
    currentPage += 1;
    return updatePages();
  }
};

$(function() {
  updatePages();
  $("#page-right").mousedown(function() {
    $("#usage").fadeOut(1000);
    return moveRight();
  });
  $("#page-left").mousedown(function() {
    $("#usage").fadeOut(1000);
    return moveLeft();
  });
  $('body').keydown(function(e) {
    var code;

    code = e.which;
    if (code === 37) {
      $("#usage").fadeOut(1000);
      return moveLeft();
    } else if (code === 39) {
      $("#usage").fadeOut(1000);
      return moveRight();
    }
  });
  $('body').swipeleft(function() {
    $("#usage").fadeOut(1000);
    return moveRight();
  });
  return $('body').swiperight(function() {
    $("#usage").fadeOut(1000);
    return moveLeft();
  });
});
