export default function handler(req, res) {

  const VERIFICATION_TOKEN =
    'partmatch-ebay-verify-2026-venkat';

  if (req.method === 'GET') {
    // eBay sends a challenge code
    // We must hash it and return it
    const challengeCode =
      req.query.challenge_code;

    if (challengeCode) {
      const crypto = require('crypto');

      // eBay requires:
      // SHA256(challengeCode +
      //        verificationToken +
      //        endpoint URL)
      const endpoint =
        'https://partmatch-ai.vercel.app/api/ebay-notify';

      const hash = crypto
        .createHash('sha256')
        .update(challengeCode +
                VERIFICATION_TOKEN +
                endpoint)
        .digest('hex');

      return res.status(200).json({
        challengeResponse: hash
      });
    }

    return res.status(200)
      .json({ status: 'eBay endpoint active' });
  }

  if (req.method === 'POST') {
    // eBay sends account deletion notices
    // We just acknowledge receipt
    // Since we store nothing in a database
    // there is nothing to delete
    console.log('eBay notification received:',
      req.body);
    return res.status(200)
      .json({ status: 'received' });
  }

  return res.status(405)
    .json({ error: 'Method not allowed' });
}
