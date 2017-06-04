import { MyAppTestPage } from './app.po';

describe('my-app-test App', () => {
  let page: MyAppTestPage;

  beforeEach(() => {
    page = new MyAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
