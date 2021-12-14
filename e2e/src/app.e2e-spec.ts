import { AppPage } from './app.po';
import { browser, element, by } from "protractor";
describe('Prueba por defecto', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
});


