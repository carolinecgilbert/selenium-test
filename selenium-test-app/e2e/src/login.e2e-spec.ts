// login.e2e-spec.ts

import { browser, element, by } from 'protractor';
import axios from 'axios';

describe('Login Component', () => {
  it('should log in successfully', async () => {
    // Navigate to the login page
    await browser.get('/login');

    // Enter login credentials using Protractor
    const usernameInput = element(by.id('username'));
    const passwordInput = element(by.id('password'));
    await usernameInput.sendKeys('example_user');
    await passwordInput.sendKeys('secure_password');

    // Click the login button using Protractor
    const loginButton = element(by.id('loginButton'));
    await loginButton.click();

    // Wait for the login process to complete (you might need to customize this based on your application)
    // (This is just a placeholder; you may need to customize the wait based on your application)
    await browser.sleep(3000);

    // Use Axios to verify the API response after the UI interaction
    try {
      const response = await axios.post('http://api.example.com/login', {
        username: 'example_user',
        password: 'secure_password',
      });

      // Assert the 200 response from the API
      expect(response.status).toBe(200);

      // Additional assertions for the login process can be added here
      // For demonstration purposes, let's assume the response body contains a success message
      expect(response.data).toBe('Login successful');
    } catch (error) {
      // Handle errors, if any
    }
  });
});
