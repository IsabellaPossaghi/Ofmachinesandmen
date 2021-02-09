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

//move 5
var config5 = {
  position: 'r1bqkbnr/pp1npppp/2p5/6N1/3P4/8/PPP2PPP/R1BQKBNR'
}
var board5 = Chessboard('myBoard5', config5)

$('#m05').on('click', function(){
board5.position('r1bqkb1r/pp1npppp/2p2n2/6N1/3P4/8/PPP2PPP/R1BQKBNR')
})

//move 6
var config6 = {
  position: 'r1bqkb1r/pp1npppp/2p2n2/6N1/3P4/3B4/PPP2PPP/R1BQK1NR'
}
var board6 = Chessboard('myBoard6', config6)

$('#m06').on('click', function(){
board6.position('r1bqkb1r/pp1n1ppp/2p1pn2/6N1/3P4/3B4/PPP2PPP/R1BQK1NR')
})

//move 7
var config7 = {
  position: 'r1bqkb1r/pp1n1ppp/2p1pn2/6N1/3P4/3B1N2/PPP2PPP/R1BQK2R'
}
var board7 = Chessboard('myBoard7', config7)

$('#m07').on('click', function(){
board7.position('r1bqkb1r/pp1n1pp1/2p1pn1p/6N1/3P4/3B1N2/PPP2PPP/R1BQK2R')
})

//move 8
var config8 = {
  position: 'r1bqkb1r/pp1n1pp1/2p1Nn1p/8/3P4/3B1N2/PPP2PPP/R1BQK2R'
}
var board8 = Chessboard('myBoard8', config8)

$('#m08').on('click', function(){
board8.position('r1b1kb1r/pp1nqpp1/2p1Nn1p/8/3P4/3B1N2/PPP2PPP/R1BQK2R')
})
