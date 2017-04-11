import { WebPortalPage } from './app.po';

describe('web-portal App', () => {
  let page: WebPortalPage;

  beforeEach(() => {
    page = new WebPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
