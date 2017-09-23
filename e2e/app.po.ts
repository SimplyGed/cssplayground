import { browser, element, by } from 'protractor';

export class CssplaygoundPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('css-root h1')).getText();
  }
}
