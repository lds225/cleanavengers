let formBtn = $('.form_btn');
let popup = $('.popup');
let popupBtn = $('.popup_btn');
let closeBtn = $('.close_btn');

$(function(){
  popupBtn.on('click',function(){
    popup.addClass('on');
  })
  closeBtn.on('click',function(){
    popup.removeClass('on');
  })
});