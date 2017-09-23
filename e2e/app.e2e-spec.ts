import { CssplaygoundPage } from './app.po';

describe('cssplaygound App', () => {
  let page: CssplaygoundPage;

  beforeEach(() => {
    page = new CssplaygoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('css works!');
  });
});
