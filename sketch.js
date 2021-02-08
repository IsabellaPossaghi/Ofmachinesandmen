//move 01
var config = {
  position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR'
}
var board = Chessboard('myBoard', config)


$('#m01').on('click', function () {
  board.position('rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR')
})

//move 02
var config2 = {
  position: 'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR'
}
var board2 = Chessboard('myBoard2', config2)


$('#m02').on('click', function () {
  board2.position('rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR')
})

//move 03
var config3 = {
  position: 'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR'
}
var board3 = Chessboard('myBoard3', config3)


$('#m03').on('click', function () {
  board3.position('rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR')
})


//move 04
var config4 = {
  position: 'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR'
}
var board4 = Chessboard('myBoard4', config4)


$('#m04').on('click', function () {
  board4.position('r1bqkbnr/pp1npppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR')
})
