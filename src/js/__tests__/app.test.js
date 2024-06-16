import GameSavingLoader from "../app";

jest.setTimeout(5000);
test('test app fail', async(done) =>{   
    expect(await GameSavingLoader.load()).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    done();
});


test('test app fail error', async () => {
        expect.assertions(1);
        try {
            await GameSavingLoader.load();
        } catch (error) {
          expect(await GameSavingLoader.load(132)).rejects.toMatch('error');
        }
      });