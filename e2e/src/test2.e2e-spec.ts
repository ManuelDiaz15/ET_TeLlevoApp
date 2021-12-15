import { browser, element, by } from "protractor";

describe('Pruebas e2e', () => {

    beforeEach(() => {
        browser.get('/p-recuperar-password');
    });
  
    it('Muestra nombre de la App', () => {
        expect(element(by.css('.page-selected ion-title')).getText()).toContain('LlevoAPP');
    });

    it('Recuperar Password posee titulo de App', () => {
        expect(element(by.css('.page-selected h2')).getText()).toContain('LLevoApp');
    });

    it('En el menu usuario aparece btn SALIR', () => {
        expect(element(by.css('.page-selected ion-label')).getText()).toContain('Salir');
    });

  
  });
