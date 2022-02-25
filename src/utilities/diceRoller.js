const getDiceRoll = (diceCount) => {
  const diceRolls = [];

  for (let i = 0; i < diceCount; i++) {
    const randomDiceRoll = Math.floor(Math.random() * 6);
    diceRolls.push(randomDiceRoll);
  }

  return diceRolls;
};

export default getDiceRoll;
