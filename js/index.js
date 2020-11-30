(function() {
  var SELECTOR_BUTTON_NEWGROUP = '.button-newgroup';
  var SELECTOR_BUTTON_LEADERBOARD = '.button-leaderboard';
  var SELECTOR_BUTTON_SETTINGS = '.button-settings';

  var timelineIntroScreen;

  function buildTimelines() {
    timelineIntroScreen = new TimelineMax({
      paused: false
    });

    timelineIntroScreen.staggerFrom('.screen-intro .button', 2, {
      css: {
        scale: 0
      },
      autoAlpha: 0,
      ease: Elastic.easeOut
    }, .1);
  }

  function playIntroButtons() {
    timelineIntroScreen.restart();
  }

  function reverseIntroButtons() {
    timelineIntroScreen.reverse();
  }

  function fadeToScreen(targetScreenClassName) {
    var _nameScreen;

    if (!targetScreenClassName) {
      _nameScreen = 'screen-intro';
    }

    _nameScreen = targetScreenClassName;

    var $elementTarget = $('.' + _nameScreen);
    var $elementActiveScreen = $('.active-screen');
    
    console.log('$elementTarget: ', $elementTarget);
    console.log('targetScreenClassName: ', targetScreenClassName);
    console.log('$elementActiveScreen: ', $elementActiveScreen);    
    
    return TweenMax.to($elementActiveScreen, .4, {
      autoAlpha: 0,
      y: '+=10',
      onComplete: function() {
        console.log('onComplete: ', $elementTarget);
        
        $elementActiveScreen.removeClass('active-screen');
        
        TweenMax
        .to($elementTarget, .4, {
          y: '-=10',
          autoAlpha: 1,
          className: '+=active-screen'
        });
      }
    });

  }

  // Initialize
  $(document).ready(buildTimelines);

  $(document).on('click', SELECTOR_BUTTON_NEWGROUP, function(event) {
    event.preventDefault();
    reverseIntroButtons();

    timelineIntroScreen.eventCallback('onReverseComplete', function() {
      window.location = "new-group.html";
    });
  });

  $(document).on('click', SELECTOR_BUTTON_SETTINGS, function(event) {
    event.preventDefault();
    reverseIntroButtons();

    timelineIntroScreen.eventCallback('onReverseComplete', function() {
      window.location = "Settings.html";
    });
  });

  $(document).on('click', SELECTOR_BUTTON_LEADERBOARD, function(event) {
    event.preventDefault();
    reverseIntroButtons();

    timelineIntroScreen.eventCallback('onReverseComplete', function() {
      window.location = "Stats.html";
    });
  });
})();
