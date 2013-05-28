// Generated by CoffeeScript 1.6.2
var currentPage, currentProject, moveDown, moveLeft, moveRight, moveUp, updatePages;

currentPage = 0;

currentProject = 0;

updatePages = function() {
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
  $("#content-main").css('top', "" + (currentProject * -200 + 10));
  $("#content-left").css('top', "" + (currentProject * -200 + 10));
  $("#content-right").css('top', "" + (currentProject * -200 + 10));
  if (currentPage === -1) {
    $("#page-left").addClass("disabled");
  } else if (currentPage === 1) {
    $("#page-right").addClass("disabled");
  } else {
    $("#page-right").removeClass("disabled");
    $("#page-left").removeClass("disabled");
  }
  if (currentProject === 0) {
    return $("#page-up").addClass("disabled");
  } else {
    return $("#page-up").removeClass("disabled");
  }
};

moveLeft = function() {
  $("#page-up").removeClass("disabled");
  $("#page-right").removeClass("disabled");
  if (currentPage > -1) {
    currentProject = 0;
    currentPage -= 1;
    return updatePages();
  }
};

moveRight = function() {
  $("#page-up").removeClass("disabled");
  $("#page-left").removeClass("disabled");
  if (currentPage < 1) {
    currentProject = 0;
    currentPage += 1;
    return updatePages();
  }
};

moveUp = function() {
  if (currentProject > 0) {
    currentProject -= 1;
    return updatePages();
  }
};

moveDown = function() {
  $("#page-up").removeClass("disabled");
  currentProject += 1;
  return updatePages();
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
  $("#page-up").mousedown(function() {
    $("#usage").fadeOut(1000);
    return moveUp();
  });
  $("#page-down").mousedown(function() {
    $("#usage").fadeOut(1000);
    return moveDown();
  });
  return $('body').keyup(function(e) {
    var code;

    code = e.which;
    if (code === 37) {
      $("#usage").fadeOut(1000);
      return moveLeft();
    } else if (code === 38) {
      $("#usage").fadeOut(1000);
      return moveUp();
    } else if (code === 39) {
      $("#usage").fadeOut(1000);
      return moveRight();
    } else if (code === 40) {
      $("#usage").fadeOut(1000);
      return moveDown();
    }
  });
});
