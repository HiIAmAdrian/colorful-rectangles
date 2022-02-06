export function determineFinished(board) {
  const sortedLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return board.filter(line => line.sort() === sortedLine).length === 9;
}

export function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function inRange(number, min, max){
  return number <= max && number >= min;
}

export function fillBoard(strBoard) {
  strBoard = strBoard.split('');
  let board = Array(9)
    .fill()
    .map(() => Array(9).fill());
  let index = 0;
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) board[i][j] = strBoard[index++];

  return board;
}

export function secondsToTime(secs){

  let divisorForMinutes = secs % (60 * 60);
  let minutes = Math.floor(divisorForMinutes / 60);

  let divisorForSeconds = divisorForMinutes % 60;
  let seconds = Math.ceil(divisorForSeconds);

  return `0${minutes}:${seconds < 10 ? '0' + seconds: seconds}`;
}

export function transformBoardToStr(board) {
  let strBoard = '';

  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) strBoard = strBoard.concat(board[i][j]);

  return strBoard;
}
