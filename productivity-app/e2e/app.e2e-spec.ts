import { ProductivityAppPage } from './app.po';

describe('productivity-app App', () => {
  let page: ProductivityAppPage;

  beforeEach(() => {
    page = new ProductivityAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
