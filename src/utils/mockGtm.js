// Mock implementation of react-gtm-module
const TagManager = {
  initialize: (config) => {
    console.log('GTM initialized with config:', config);
    // In production, this would actually initialize Google Tag Manager
  },
  dataLayer: (dataLayer) => {
    console.log('GTM dataLayer updated:', dataLayer);
    // In production, this would push to the dataLayer
  }
};

export default TagManager;