import { WelcomeAppPage } from './app.po';

describe('welcome-app App', () => {
  let page: WelcomeAppPage;

  beforeEach(() => {
    page = new WelcomeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
