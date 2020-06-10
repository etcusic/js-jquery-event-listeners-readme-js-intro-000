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
    if ('keydown' === 71){
      window.alert('You have pressed G')
    }
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  // call functions here

});
