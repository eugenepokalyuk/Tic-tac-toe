import "./App.css";
import React from 'react';

const initialState = {
    cells: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null
};

export default class TicTacToe extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleCellClick(index) {
        if (this.state.cells[index] === null && !this.state.winner) {
            this.state.cells.splice(index, 1, this.state.currentPlayer);
            this.setState({
                cells: this.state.cells,
                currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
            });

            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (let i = 0; i < winningConditions.length; i++) {
                if (this.state.cells[winningConditions[i][0]] &&
                    this.state.cells[winningConditions[i][0]] === this.state.cells[winningConditions[i][1]] &&
                    this.state.cells[winningConditions[i][1]] === this.state.cells[winningConditions[i][2]]) {
                    this.setState({
                        winner: this.state.cells[winningConditions[i][0]]
                    });
                    return;
                }
            }
        }
    }

    render() {
        return (
            <div className="playground">
                <div className="game-status">
                    {
                        this.state.winner ?
                            `The winner is: ${this.state.winner}` :
                            `Current Player: ${this.state.currentPlayer}`
                    }
                </div>
                <div className="board">
                    {
                        this.state.cells.map((cell, index) =>
                            <div className="cell"
                                key={index}
                                onClick={() => this.handleCellClick(index)}>
                                {cell}
                            </div>
                        )
                    }
                </div>
                <div style={{ "textAlign": "center" }}>
                    <h3>To start over, refresh the page</h3>
                    <a href="/">Start new game</a>
                </div>
            </div>
        )
    }
}