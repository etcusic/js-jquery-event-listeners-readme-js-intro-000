function getIt(){
  $('p').on('click', function(){
    window.alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}

function pressIt(){
  $('#typing').on('keydown', function(){
    if (key.which == 71){
      window.alert('G was pressed')
    }
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  // call functions here

});
