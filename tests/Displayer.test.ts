import Displayer from '../classes/application/service/Displayer'

describe('Displayer', () => {
  it('Should create instance of Displayer', () => {
    const displayer = new Displayer();
    expect(displayer instanceof Displayer).toBe(true);
  });

  it('Should update a message to "hello"', () => {
    const displayer = new Displayer();
    displayer.updateMessage('hello');
    expect(displayer.latestMessage).toBe('hello');
  });
})