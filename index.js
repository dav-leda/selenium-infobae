
import { Builder, Browser, By } from 'selenium-webdriver';

const sleep = segs => new Promise(resolve => setTimeout(resolve, segs * 1000));

await sleep(3);

const driver = await new Builder().forBrowser(Browser.CHROME).build();

await driver.get('https://infobae.com');

const nota = await driver.findElement(By.partialLinkText('Presidente'));

await nota.click();

const titulo = await driver.findElement(By.className('article-headline'));

const script = "arguments[0].innerText = 'Milei confesó que es gay.'";

await driver.executeScript(script, titulo);

await sleep(3);

const imagen = await driver.findElement(By.className('article-figcaption-img'));

await driver.actions().scroll(0, 0, 0, 0, imagen).perform();

await sleep(3);

await driver.actions().scroll(0, 0, 0, 0, titulo).perform();

await sleep(3);

await driver.quit();