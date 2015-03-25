$(function () {

  function stopChildClick() {
    $('div a').unbind('click');
    $('div:not(.zoom) a').click(function (e) {
      e.preventDefault();
    });
  }

  $('.task ul').each(function () {
    var childCount = $(this).children().size();
    $(this).addClass('count-' + childCount);
  });

  $('.task').click(function () {
    $(this).toggleClass('zoom');
    stopChildClick();
  });

});





