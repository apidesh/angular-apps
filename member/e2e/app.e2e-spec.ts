import { MemberPage } from './app.po';

describe('member App', () => {
  let page: MemberPage;

  beforeEach(() => {
    page = new MemberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
