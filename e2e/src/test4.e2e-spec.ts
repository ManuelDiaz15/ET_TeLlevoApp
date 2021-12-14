import { AppPage } from './app.po';
import { browser, element, by } from "protractor";


describe('Pruebas en el Home msg Bienvenido', () => {
    beforeEach(() => {
        browser.get('/home');
    });
  
    it('En home se saluda al usuario con mensaje Bienvenido', () => {
        expect(element(by.css('.page-selected h1')).getText()).toContain('Bienvenido');
    });
  
  });
  