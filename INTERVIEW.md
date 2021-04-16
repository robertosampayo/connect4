# CONNECT4 CODING CHALLENGE

READ THIS WHOLE DOCUMENT BEFORE STARTING THE EXERCISE

## Introduction

The following test requires you to be knowledgeable in the following fields:

- Javascript and/or Typescript
- React
- State management
- Jest
- HTML / CSS

## Setup

- Fork this repo https://github.com/friendbuy/connect4
- Clone the repository locally on your computer
- Use `npm`/`yarn` to install dependencies
- Run `npm start` or `yarn start` to launch the game
- Run tests with `npm test` or `yarn test`

## Tasks

Once you're done with a task, you will need to **commit and push your changes** to your forked repository.

### Task 1: Play again / reset button

Display a button resetting the game:

- On click reset the game to an empty board
- The button is to be placed under the board with:
  - a margin of 10px
  - padding of 4px
  - a radius of 3px
  - white font
- If the game is over:

  - the button should read `"play again"`
  - the background color should be green

- If the game is on-going:
  - the button should read `"start over"`
  - the background color should be red

### Task 2: Scoreboard

Add a scoreboard to the game under the game board. For example, if Red had won once and Yellow 3 times, the scoreboard would read the following:

| Red   | Yellow |
| ----- | ------ |
| 1 win | 3 wins |

> _As a reminder, 1 is singular while 0 and greater than 1 are plural._

## Requirements

**Basic**

- Write clear code and distinguishable React components
- Make use of state management w/ Redux
  - Implement/modify applicable actions
  - Implement/modify applicable reducers
- Write at least one unit test

**Bonus**

- Implement full unit test coverage
- Implement with Typescript

**Double Bonus**

- Create one or more E2E tests using a framework such as Cypress
