import { AngularTestProjectPage } from './app.po';

describe('angular-test-project App', () => {
  let page: AngularTestProjectPage;

  beforeEach(() => {
    page = new AngularTestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
