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

//move 9
var config9 = {
  position: 'r1b1kb1r/pp1nqpp1/2p1Nn1p/8/3P4/3B1N2/PPP2PPP/R1BQ1RK1'
}
var board9 = Chessboard('myBoard9', config9)

$('#m09').on('click', function(){
board9.position('r1b1kb1r/pp1nq1p1/2p1pn1p/8/3P4/3B1N2/PPP2PPP/R1BQ1RK1')
})

//move 10
var config10 = {
  position: 'r1b1kb1r/pp1nq1p1/2p1pnBp/8/3P4/5N2/PPP2PPP/R1BQ1RK1'
}
var board10 = Chessboard('myBoard10', config10)

$('#m10').on('click', function(){
board10.position('r1bk1b1r/pp1nq1p1/2p1pnBp/8/3P4/5N2/PPP2PPP/R1BQ1RK1')
})

//move 11
var config11 = {
  position: 'r1bk1b1r/pp1nq1p1/2p1pnBp/8/3P1B2/5N2/PPP2PPP/R2Q1RK1'
}
var board11 = Chessboard('myBoard11', config11)

$('#m11').on('click', function(){
board11.position('r1bk1b1r/p2nq1p1/2p1pnBp/1p6/3P1B2/5N2/PPP2PPP/R2Q1RK1')
})

//move 12
var config12 = {
  position: 'r1bk1b1r/p2nq1p1/2p1pnBp/1p6/P2P1B2/5N2/1PP2PPP/R2Q1RK1'
}
var board12 = Chessboard('myBoard12', config12)

$('#m12').on('click', function(){
board12.position('r2k1b1r/pb1nq1p1/2p1pnBp/1p6/P2P1B2/5N2/1PP2PPP/R2Q1RK1')
})

//move 13
var config13 = {
  position: 'r2k1b1r/pb1nq1p1/2p1pnBp/1p6/P2P1B2/5N2/1PP2PPP/R2QR1K1'
}
var board13 = Chessboard('myBoard13', config13)

$('#m13').on('click', function(){
board13.position('r2k1b1r/pb1nq1p1/2p1p1Bp/1p1n4/P2P1B2/5N2/1PP2PPP/R2QR1K1')
})


//move 14
var config14 = {
  position: 'r2k1b1r/pb1nq1p1/2p1p1Bp/1p1n4/P2P4/5NB1/1PP2PPP/R2QR1K1'
}
var board14 = Chessboard('myBoard14', config14)

$('#m14').on('click', function(){
board14.position('r1k2b1r/pb1nq1p1/2p1p1Bp/1p1n4/P2P4/5NB1/1PP2PPP/R2QR1K1')
})


//move 15
var config15 = {
  position: 'r1k2b1r/pb1nq1p1/2p1p1Bp/1P1n4/3P4/5NB1/1PP2PPP/R2QR1K1'
}
var board15 = Chessboard('myBoard15', config15)

$('#m15').on('click', function(){
board15.position('r1k2b1r/pb1nq1p1/4p1Bp/1p1n4/3P4/5NB1/1PP2PPP/R2QR1K1')
})


//move 16
var config16 = {
  position: 'r1k2b1r/pb1nq1p1/4p1Bp/1p1n4/3P4/3Q1NB1/1PP2PPP/R3R1K1'
}
var board16 = Chessboard('myBoard16', config16)

$('#m16').on('click', function(){
board16.position('r1k2b1r/p2nq1p1/2b1p1Bp/1p1n4/3P4/3Q1NB1/1PP2PPP/R3R1K1')
})


//move 17
var config17 = {
  position: 'r1k2b1r/p2nq1p1/2b1p2p/1p1n1B2/3P4/3Q1NB1/1PP2PPP/R3R1K1'
}
var board17 = Chessboard('myBoard17', config17)

$('#m17').on('click', function(){
board17.position('r1k2b1r/p2nq1p1/2b4p/1p1n1p2/3P4/3Q1NB1/1PP2PPP/R3R1K1')
})


//move 18
var config18 = {
  position: 'r1k2b1r/p2nR1p1/2b4p/1p1n1p2/3P4/3Q1NB1/1PP2PPP/R5K1'
}
var board18 = Chessboard('myBoard18', config18)

$('#m18').on('click', function(){
board18.position('r1k4r/p2nb1p1/2b4p/1p1n1p2/3P4/3Q1NB1/1PP2PPP/R5K1')
})

//move 19
var config19 = {
  position: 'r1k4r/p2nb1p1/2b4p/1p1n1p2/2PP4/3Q1NB1/1P3PPP/R5K1'
}
var board19 = Chessboard('myBoard19', config19)

$('#m19').on('click', function(){
board19.position('8/8/8/8/8/8/8/8')
})
