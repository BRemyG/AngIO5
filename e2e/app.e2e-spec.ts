import { SproutAppPage } from './app.po';

describe('sprout-app App', () => {
  let page: SproutAppPage;

  beforeEach(() => {
    page = new SproutAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
