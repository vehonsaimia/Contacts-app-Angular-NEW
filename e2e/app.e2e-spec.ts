import { ContactsANG4Page } from './app.po';

describe('contacts-ang4 App', () => {
  let page: ContactsANG4Page;

  beforeEach(() => {
    page = new ContactsANG4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
