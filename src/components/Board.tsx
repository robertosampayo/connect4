import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { getBoard, getCurrentPlayer, getWinner } from "../reducers/selectors";
import { Row } from "./Row";
import { dropCoin } from "../actions/dropCoin";
import { Color } from "../types";
import { resetGame } from "../actions/resetGame";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  dropCoin: typeof dropCoin;
  resetGame: typeof resetGame;


}

interface BoardState {
  redPlayer: number, 
  yellowPlayer: number
}

export class BoardComponent extends React.Component<Props, BoardState> {



    state: BoardState = {
      redPlayer: 0,
      yellowPlayer: 0,
    }



  componentDidUpdate(previousProps: Props, previousState: {redPlayer: number, yellowPlayer: number}) {
    if (previousProps !== this.props) {
      if (previousProps.winner) {
        if (previousProps.winner.color === 'yellow') {
          this.setState({ ...previousState, yellowPlayer: previousState.yellowPlayer + 1 })
        }

        if (previousProps.winner.color === 'red') {
          this.setState({ ...previousState, redPlayer: previousState.redPlayer + 1 })
        }


        
      }
    }
}

  dropCoin = (column: number) => () => {
    // we only allow a player to drop a coin if there is no winner yet
    if (!this.props.winner) {
      this.props.dropCoin(column, this.props.color);
    }
  };

  displayHeader() {
    // only display the winner if there is one
    if (this.props.winner) {
      return <h2>Congratulations, {this.props.winner.color} wins the game!</h2>;
    } else {
      return <h2>It's {this.props.color}'s turn to play</h2>;
    }
  }

  resetGame() {

    this.props.resetGame()
  }

  resetButton = () => <button style={{
    margin: '10px',
    padding: '4px',
    border: 0,
    background: this.props.winner ? 'green':'red',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '20px'
  }} onClick={() => this.resetGame()}>{this.props.winner ? `play again`: `start over`}</button>;


  score = () => <section style={{

  }} >
    <p>Red: {this.state.redPlayer}</p>
    <p>Yellow: {this.state.yellowPlayer}</p>

  </section>;



  displayRow = (colors: Color[], key: number) => {
    return (
      <Row
        row={key}
        dropCoin={this.dropCoin}
        colors={colors}
        key={`column-${key}`}
        winner={this.props.winner}
      />
    );
  };

  render() {
    const classes = cn("Game-Board");

    return (
      <>
        {this.displayHeader()}

        <div className="Game">
          <div className={classes}>{this.props.board.map(this.displayRow)}</div>
        </div>



        {this.resetButton()}

        {this.score()}
      </>
    );
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state)
});

export const Board = connect(mapState, { dropCoin, resetGame })(BoardComponent);
