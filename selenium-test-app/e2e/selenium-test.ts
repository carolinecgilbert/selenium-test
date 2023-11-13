import { Builder, By, until } from 'selenium-webdriver';

async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:4200');

    // Wait for the login form to be present (increase timeout to 10 seconds)
    const usernameInput = await driver.wait(until.elementLocated(By.css('#username')), 10000);
    const passwordInput = await driver.findElement(By.css('#password'));
    const loginButton = await driver.findElement(By.css('#loginButton'));

    // Enter test credentials
    await usernameInput.sendKeys('testuser');
    await passwordInput.sendKeys('testpassword');

    // Click the login button
    await loginButton.click();

    // Wait for a moment to see the result
    await driver.sleep(3000);
  } finally {
    await driver.quit();
  }
}

example();
