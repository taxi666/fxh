//get window height
//$("body").height($(window).height());

// page iscroll        
var myScroll;
var myScroll02;
function loaded() {
  myScroll = new iScroll('wrapper');
  myScroll02 = new iScroll('wrapperSlide');

}
document.addEventListener('DOMContentLoaded', loaded, false);