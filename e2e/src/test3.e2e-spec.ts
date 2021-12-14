import { AppPage } from './app.po';
import { browser, element, by } from "protractor";

describe('Pruebas en recuperar Password', () => {

    beforeEach(() => {
        browser.get('/p-recuperar-password');
    });
  
    it('Recuperar Password posee titulo de App', () => {
        expect(element(by.css('.page-selected h2')).getText()).toContain('LLevoApp');
    });
  
  });