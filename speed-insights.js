/**
 * Vercel Speed Insights initialization
 * This script loads and initializes Speed Insights for performance monitoring
 */

import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false
});
