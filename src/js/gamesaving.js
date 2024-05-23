import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
        return resolve(true);
    });
  }
}

GameSavingLoader.load().then(data => {
    const data = read();
    return data;
})
    .then(value => {
        const value = json(data);
        return value;
    });