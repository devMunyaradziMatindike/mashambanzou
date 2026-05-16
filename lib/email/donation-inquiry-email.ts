import { escapeHtml } from "@/lib/escape-html";

const OUTFIT_STACK = "'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export type DonationInquiryEmailPayload = {
  /** Shown in the salutation instead of a generic “User”. */
  email: string;
  name: string;
  phone: string;
};

/**
 * HTML for transactional email: Outfit via Google Fonts + inline fallbacks.
 * Replaces a generic “User” salutation with the submitter’s email address.
 */
export function buildDonationInquiryEmailHtml({ email, name, phone }: DonationInquiryEmailPayload): string {
  const safeEmail = escapeHtml(email.trim());
  const safeName = escapeHtml(name.trim());
  const safePhone = escapeHtml(phone.trim());

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
  <title>In-kind donation interest</title>
</head>
<body style="margin:0;padding:0;background-color:#fdf8e8;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#fdf8e8;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 8px;font-family:${OUTFIT_STACK};font-size:16px;line-height:1.6;color:#1a1a1a;">
              <p style="margin:0 0 16px;font-size:20px;font-weight:600;color:#2d6a4f;">Mashambanzou Care Trust</p>
              <p style="margin:0 0 12px;">Dear ${safeEmail},</p>
              <p style="margin:0 0 16px;">Thank you for your interest in supporting us with in-kind donations. We have received your details and will be in touch to help coordinate drop-off or delivery.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:20px 0;border-radius:12px;background-color:#f8fafc;border:1px solid #e2e8f0;">
                <tr>
                  <td style="padding:16px 18px;font-family:${OUTFIT_STACK};font-size:14px;color:#334155;">
                    <p style="margin:0 0 8px;"><strong style="color:#1a1a1a;">Name</strong><br />${safeName}</p>
                    <p style="margin:0 0 8px;"><strong style="color:#1a1a1a;">Email</strong><br />${safeEmail}</p>
                    <p style="margin:0;"><strong style="color:#1a1a1a;">Phone</strong><br />${safePhone}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:20px 0 0;font-size:14px;color:#64748b;">With gratitude,<br />Mashambanzou Care Trust</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
