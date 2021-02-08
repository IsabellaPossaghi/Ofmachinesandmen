
var config = {
  position: 'start'
}
var board = Chessboard('myBoard', config)

var board2 = Chessboard('myBoard2', config)



$('#m01').on('click', function () {
  board.position('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R')
})
