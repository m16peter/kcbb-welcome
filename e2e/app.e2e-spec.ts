import { KcbbWelcomePage } from './app.po';

describe('kcbb-welcome App', () => {
  let page: KcbbWelcomePage;

  beforeEach(() => {
    page = new KcbbWelcomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
