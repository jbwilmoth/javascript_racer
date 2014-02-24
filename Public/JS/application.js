$(document).ready(function() {
    player1 = 0
    player2 = 0
  $(document).on('keyup', function(event) {
    if (event.keyCode == 32){
      player1++;
      updatePlayer('player1');
    }
    if (event.keyCode == 39){
      player2++;
      updatePlayer('player2');
    }
    if (player1 > 10){
      alert('Player 1 wins!');
      gameOver();
    }
    if (player2 > 10){
      alert('Player 2 wins!');
      gameOver();
    }
  });

function gameOver() {
    alert('Press Enter to play again');
  $(document).on('keyup', function(event) {
    if (event.keyCode == 13){
      location.reload();
    }
  });
  }
});
 
function updatePlayer(player) {
  var current_pos = $('#' + player + '_strip').find('.active');
  $(current_pos).removeClass('active');
  $(current_pos).next().addClass('active');
};
