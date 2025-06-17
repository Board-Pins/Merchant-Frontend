import { addAPIProvider, disableCache, enableCache } from '@iconify/react';

// Configure Iconify cache
const configureIconify = () => {
  // Option 1: Disable cache completely
  // disableCache('all');

  // Option 2: Enable cache with expiration
  enableCache('all', {
    expire: 24 * 60 * 60 * 1000, // 24 hours
    persistent: false // Don't store in localStorage
  });
};

export default configureIconify;
