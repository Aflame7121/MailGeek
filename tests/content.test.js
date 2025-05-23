import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mocking browser extension APIs
global.chrome = {
  runtime: {
    onMessage: {
      addListener: vi.fn()
    },
    sendMessage: vi.fn()
  },
  storage: {
    local: {
      get: vi.fn(),
      set: vi.fn()
    }
  }
};

describe('Content Script', () => {
  beforeEach(async () => {
    // Reset mocks before each test
    vi.resetAllMocks();
    
    // Dynamically import the content script
    await import('../content.js');
  });

  it('should set up runtime message listener', () => {
    const mockAddListener = vi.spyOn(chrome.runtime.onMessage, 'addListener');
    expect(mockAddListener).toHaveBeenCalled();
  });

  it('should have core variables defined', () => {
    // Note: This assumes the variables are global in the content script
    expect(global.button_Active).toBeDefined();
    expect(global.image_shower).toBeDefined();
  });
});