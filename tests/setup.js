// Global test setup for MailGeek Chrome Extension
// Mocking Chrome extension APIs and global functions

// Mock Chrome extension APIs
global.chrome = {
  runtime: {
    sendMessage: vi.fn(),
    onMessage: {
      addListener: vi.fn(),
    },
  },
  storage: {
    sync: {
      get: vi.fn(),
      set: vi.fn(),
    },
  },
  tabs: {
    query: vi.fn(),
    sendMessage: vi.fn(),
  },
};

// Mock jQuery if used in extension
global.$ = vi.fn();