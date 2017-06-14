import { AdiflashPage } from './app.po';

describe('adiflash App', () => {
  let page: AdiflashPage;

  beforeEach(() => {
    page = new AdiflashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
