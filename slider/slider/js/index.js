(function() {
  var $screens = $('.js-screens');
  var $exploreButton = $('.js-explore-button');
  var $discoverButton = $('.js-discover-button');
  var $collectButton = $('.js-collect-button');


  $collectButton.on('click', {index: 1}, showScreen);
  $discoverButton.on('click', {index: 2}, showScreen);
  $exploreButton.on('click', {index: 3}, showScreen);


  function showScreen(e){
    var targetX = -100 * e.data.index;
  	$screens.css('left', targetX);
  }
})();