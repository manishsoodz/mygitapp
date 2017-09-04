import { MygitappPage } from './app.po';

describe('mygitapp App', () => {
  let page: MygitappPage;

  beforeEach(() => {
    page = new MygitappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
