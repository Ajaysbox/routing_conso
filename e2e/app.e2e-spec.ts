import { RoutoingConsoPage } from './app.po';

describe('routoing-conso App', () => {
  let page: RoutoingConsoPage;

  beforeEach(() => {
    page = new RoutoingConsoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
