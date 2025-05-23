// Jest test setup for MailGeek Chrome Extension
import './chrome-mock.js';

// Additional global setup
beforeEach(() => {
  // Reset Chrome mock before each test
  global.chrome._reset();
  
  // Clear all mocks
  jest.clearAllMocks();
  
  // Reset DOM
  document.body.innerHTML = '';
});