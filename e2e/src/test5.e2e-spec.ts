import { AppPage } from './app.po';
import { browser, element, by } from "protractor";


describe('Pruebas el menu usuario btn SALIR', () => {

    beforeEach(() => {
        browser.get('/p-menu-usuario');
    });
  
    it('En el menu usuario aparece btn SALIR', () => {
        expect(element(by.css('.page-selected ion-label')).getText()).toContain('Salir');
    });
  
  });
  