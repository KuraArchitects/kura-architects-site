import test from 'node:test';
import assert from 'node:assert/strict';

// Dynamically import the POST handler
import { POST } from '../contact/route.js';

test('POST with missing fields returns 400', async () => {
  const res = await POST({ json: async () => ({}) });
  assert.equal(res.status, 400);
});