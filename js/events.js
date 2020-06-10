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
    if (keydown.which == 71){
      window.alert('G was pressed')
    }
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  // call functions here

});
