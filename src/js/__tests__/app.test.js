import GameSavingLoader from "../app";

jest.setTimeout(5000);
test('test app fail', async(done) =>{
    const Game = new GameSavingLoader;
    let result = Game.load;
    expect(result).toBe({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
    done();
});


test('test app fail error', async() =>{
    expect.assertions(1);
    try{
    const Game = new GameSavingLoader;
    let result = Game.load;
    }
    catch(error) {
        expect(error).toBe(error);
    }
});