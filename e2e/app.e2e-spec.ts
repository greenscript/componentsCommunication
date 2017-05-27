import { ComponentsComunicationPage } from './app.po';

describe('components-comunication App', () => {
  let page: ComponentsComunicationPage;

  beforeEach(() => {
    page = new ComponentsComunicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
