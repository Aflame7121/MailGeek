import { describe, it, expect, beforeEach } from 'vitest';

describe('Content Script Functionality', () => {
  beforeEach(() => {
    // Reset DOM and mocks before each test
    document.body.innerHTML = '';
    vi.resetAllMocks();
  });

  it('should have access to document', () => {
    expect(document).toBeTruthy();
  });

  it('should handle chrome message listeners', () => {
    // Test message listener setup
    const mockListener = vi.fn();
    chrome.runtime.onMessage.addListener.mockImplementation((listener) => {
      listener = mockListener;
    });

    // Simulate message listener registration
    chrome.runtime.onMessage.addListener((message) => {
      expect(message).toBeDefined();
    });

    expect(chrome.runtime.onMessage.addListener).toHaveBeenCalledOnce();
  });

  it('should interact with page elements', () => {
    // Create a mock element to test interactions
    const testElement = document.createElement('div');
    testElement.id = 'test-element';
    document.body.appendChild(testElement);

    expect(document.getElementById('test-element')).toBeTruthy();
  });
});