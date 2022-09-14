import { restartGame, movePieceFromTo, checkPiecesInLine, checkNumOfPieces } from '/cypress/support/actions.js'

const startNumOfCheckers = 12;
const orange = 'orange';
const blue = 'blue';

// I decided to map squares like in chess board 
// rows - [A-H] and lines - [1-8] 
// example: A1 is the lower left corner , H8 is upper right corner

const squares = {
  B3: '[name="space62"]',
  C4: '[name="space53"]',
  D5: '[name="space44"]',
}
const lines = {
  "6": 2,
  "5": 3,
  "4": 4,
  "3": 5,
}

describe('Checkers task', () => {
  before('open checkers and restart game', () => {
    cy.visit('/');
    restartGame();
  })

  it('should do first move', () => {
    const expectedNumInLine3 = 3;
    const expectedNumInLine4 = 1;

    movePieceFromTo(squares.B3, squares.C4);
    checkPiecesInLine(orange, lines['3'], expectedNumInLine3);
    checkPiecesInLine(orange, lines['4'], expectedNumInLine4);
  })

  it('should wait for computers move', () => {
    const expectedNumInLine5 = 1;
    const expectedNumInLine6 = 3;

    checkPiecesInLine(blue, lines['5'], expectedNumInLine5);
    checkPiecesInLine(blue, lines['6'], expectedNumInLine6);
  })

  it('should do second move and check if orange pile was beaten', () => {
    movePieceFromTo(squares.C4, squares.D5);
    checkNumOfPieces(blue, startNumOfCheckers);
    checkNumOfPieces(orange, startNumOfCheckers - 1);
  })

  it('should restart the game', () => {
    restartGame();
  })
})