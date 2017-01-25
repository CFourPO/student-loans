import { StudentloansPage } from './app.po';

describe('studentloans App', function() {
  let page: StudentloansPage;

  beforeEach(() => {
    page = new StudentloansPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
