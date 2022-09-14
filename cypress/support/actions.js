export function checkNumOfPieces(color, expectedNumber,) {
    if (color === 'blue') {
        cy.get('#board').find('[src="me1.gif"]').should('have.length', expectedNumber);
    }
    else if (color === 'orange') {
        cy.get('#board').find('[src="you1.gif"]').should('have.length', expectedNumber);
    } else {
        throw 'Wrong color was defined.'
    }
}

export function restartGame(startNumOfCheckers = 12) {
    cy.contains('Restart...').should('exist');
    cy.contains('Restart...').click();
    checkNumOfPieces('blue', startNumOfCheckers);
    checkNumOfPieces('orange', startNumOfCheckers);
    cy.contains('Select an orange piece to move.').should('exist');
}

export function movePieceFromTo(from, to) {
    const gifs = {
        unchecked: 'you1.gif',
        checked: 'you2.gif',
        empty: 'gray.gif'
    }
    cy.get(from).should('have.attr', 'src', gifs.unchecked);
    cy.get(from).click();
    cy.get(from).should('have.attr', 'src', gifs.checked);
    cy.get(to).should('have.attr', 'src', gifs.empty);
    cy.get(to).click();
    cy.get(from).should('not.have.attr', 'src', gifs.unchecked);
    cy.get(from).should('not.have.attr', 'src', gifs.checked);
}


export function checkPiecesInLine(color, lineNum, expectedNumber) {
    if (color === 'blue') {
        cy.get('.line').eq(lineNum).find('[src="me1.gif"]').should('have.length', expectedNumber);
    }
    else if (color === 'orange') {
        cy.get('.line').eq(lineNum).find('[src="you1.gif"]').should('have.length', expectedNumber);
    } else {
        throw 'Wrong color was defined.'
    }
}