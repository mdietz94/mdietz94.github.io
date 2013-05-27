currentPage = 0
currentProject = 0
updatePages = ->
  $("#content-main").css 'left', "#{currentPage*-110}%"
  $("#content-left").css 'left', "#{(1+currentPage)*-110}%"
  $("#content-right").css 'left', "#{(-1+currentPage)*-110}%"
  # resets in any scrolling occurred
  $("#content-main").css 'top', "#{currentProject*-200 + 10}"
  if currentPage == -1
    $("#page-left").addClass("disabled")
    $("#page-control").addClass("disabled")
  else if currentPage == 1
    $("#page-right").addClass("disabled")
    $("#page-control").addClass("disabled")
  else
    $("#page-control").removeClass("disabled")
    $("#page-right").removeClass("disabled")
    $("#page-left").removeClass("disabled")
  if currentPage == 0 and currentProject == 0
    $("#page-up").addClass("disabled")
  else
    $("#page-up").removeClass("disabled")

  
moveLeft = ->
  $("#page-right").removeClass("disabled")
  if currentPage > -1 # otherwise we are already all the way left
    currentProject = 0
    currentPage -= 1
    updatePages()

moveRight = ->
  $("#page-up").removeClass("disabled")
  $("#page-left").removeClass("disabled")
  if currentPage < 1 # otherwise we are already all the way right
    currentProject = 0
    currentPage += 1
    updatePages()

moveUp = ->
  if currentPage == 0 # only main page scrolls
    if currentProject > 0
      currentProject -= 1
      updatePages()

moveDown = ->
  $("#page-up").removeClass("disabled")
  if currentPage == 0
    currentProject += 1
    updatePages()

$ ->
  updatePages()
  $("#page-right").mousedown moveRight
  $("#page-left").mousedown moveLeft
  $("#page-up").mousedown moveUp
  $("#page-down").mousedown moveDown
  $('body').keyup (e) ->
    code = e.which
    if code == 37
      moveLeft()
    else if code == 38
      moveUp()
    else if code == 39
      moveRight()
    else if code == 40
      moveDown()