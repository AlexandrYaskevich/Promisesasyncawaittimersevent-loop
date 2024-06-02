import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((value) => value)
      .catch((error) => {
        throw new Error(error);
      });
  }
}