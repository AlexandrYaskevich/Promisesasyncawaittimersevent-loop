import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
        return resolve;
    });
  }
};

async function all () {
    await GameSavingLoader.load();
    await read();
    await json(data);
    return json(data);
};