![dice logo](src/assets/branding/readme-banner.png)

# Board Game Tracker

This is a React-Native app to assist manual record-keeping of player balances and common stats for board games (and card games).

## Installation

There are no current production builds released.

To run a development copy, clone down the source code, enter the root directory of the project, and install the necessary dependencies using [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (currently node.js v16 LTS, npm v8).

```bash
git clone https://github.com/lanceturbes/board-game-tracker-mobile.git
cd board-game-tracker-mobile
npm install
```

## Setup Instructions

Start your mobile emulator(s) OR connect a mobile device (that you'd like to test this app on) to your desktop computer.

Next, run `npm run android` OR `npm run ios` to build/install the app for your desired platform.

Finally, start the Metro web server from the root of the project via `npm start` to launch into the app for development, provided you have a mobile device connected to your computer and proper drivers installed.

## Usage

From the home screen, tap the "Start New Game" button. This will take you to the game setup menu, where you can provide game details for things like scoring, player count, and whether you need dice (and how many).

Your responses will not clear if swapping pages, but be careful not to change critical options mid game, such as player count, or you may lose progress for some players.

On your turn, you can roll dice via the "Roll Dice" button to simulate a single or double dice role, depending on the requirements you set earlier. You can change between using 1, 2, or no dice at any time.

Note: Dice rolls are not persistent, so screen/turn switches will reset the last known dice roll.

When your turn is over, simply press the "End Turn" button, and the active player will be rotated to the next available person. The currently active player is displayed at the top of the gameplay screen for reference. When the final player is done, control will be given back to player 1.

**App is still in development!**

## License

[MIT](https://choosealicense.com/licenses/mit/)
