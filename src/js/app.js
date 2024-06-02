import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    (async () => {
      try{  
        await read();
        await json((data) => data);
      }
      catch(error) {
        throw new Error(error);
      }
    
    })();
  };
}