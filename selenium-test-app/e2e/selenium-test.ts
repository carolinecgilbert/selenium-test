import { log } from 'console';
import { Builder, By, until } from 'selenium-webdriver';
const fs = require('fs');

// Specify the path to the log file
const logFilePath = 'selenium-test.log';

// Function to log messages to a file
function logToFile(message) {
  fs.appendFileSync(logFilePath, `${new Date().toISOString()} - ${message}\n`);
}

async function example() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Log that the test is starting
    logToFile('Starting Selenium test...');

    // Navigate to the app
    await driver.get('http://localhost:4200');
    logToFile('Navigated to http://localhost:4200');

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
    logToFile('Test completed successfully.');
  } catch (error) {
    // Log any errors that occur during the test
    logToFile(`Error during Selenium test: ${error}`);
  } finally {
    logToFile('Quitting Selenium test...');
    await driver.quit();
  }
}

example();
