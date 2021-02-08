//move 01
var config = {
  position: 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR'
}
var board = Chessboard('myBoard', config)


$('#m01').on('click', function () {
  board.position('rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR')
})

var delay=1000 * 16;//1*6 seconds
setTimeout(function(){
  //window.scrollTo(500, 0);//scrolls to specific location
  location.hash = "#c2"; //scrolls to element with given id
},delay);


//move 02
var config2 = {
  position: 'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR'
}
var board2 = Chessboard('myBoard2', config2)


$('#m02').on('click', function () {
  board2.position('rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR')
})
