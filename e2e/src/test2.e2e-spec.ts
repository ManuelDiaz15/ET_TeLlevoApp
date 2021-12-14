import { AppPage } from './app.po';
import { browser, element, by } from "protractor";
describe('Nombre de la app en Recuperar Password', () => {

    beforeEach(() => {
        browser.get('/p-recuperar-password');
    });
  
    it('Muestra nombre de la App', () => {
        expect(element(by.css('.page-selected ion-title')).getText()).toContain('LlevoAPP');
    });
  
  });
