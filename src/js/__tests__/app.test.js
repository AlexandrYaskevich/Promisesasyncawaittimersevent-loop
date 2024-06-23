import GameSavingLoader from "../app";

jest.setTimeout(5000);
test('test app fail', async() =>{ 
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  };
  const result = await GameSavingLoader.load();
    expect(result).toEqual(data);;
    
});


test('test app fail error', async () => {
  GameSavingLoader.load = jest.fn().mockRejectedValue(new Error('Test error'));

  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).toBe('Test error');
  }
}, 10000);