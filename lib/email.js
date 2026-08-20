import nodemailer from "nodemailer";

// SMTP Transporter setup (GSuite / Hostinger / Zoho / Gmail / CPanel SMTP)
const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
const smtpUser = process.env.SMTP_USER || "anavyainfotech@gmail.com";
const smtpPass = process.env.SMTP_PASS || "svcqpoovfegbxwbl";

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465, // true for 465, false for 587/other ports
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
  tls: {
    rejectUnauthorized: false, // Prevents self-signed cert issues
  },
});

// Professional Display Sender & Reply-To Setup
const FROM_EMAIL = `"Anavya Infotech" <${smtpUser}>`;
const REPLY_TO_EMAIL = process.env.REPLY_TO_EMAIL || "info@anavyainfotech.com";

const ADMIN_NOTIFICATION_EMAIL = process.env.ADMIN_EMAIL || "anavyainfotech@gmail.com";

/**
 * Sends dual email notifications via SMTP when a lead/query is submitted.
 * 1. Confirmation Email to Customer
 * 2. New Lead Alert Email to Admin
 */
export async function sendLeadNotificationEmails({ name, email, phone, service, message, source = "Website Form" }) {
  if (!smtpPass && !process.env.SMTP_PASS) {
    console.warn("SMTP_PASS is not configured in environment variables. Skipping email dispatch.");
    return { success: false, reason: "No SMTP Password" };
  }

  const customerContact = email && email.includes("@") ? email : null;
  const leadPhone = phone || (email && !email.includes("@") ? email : "N/A");

  const results = { customerEmail: false, adminEmail: false };

  try {
    // 1. Send Notification Email to Admin / Business Team
    if (ADMIN_NOTIFICATION_EMAIL) {
      const adminMailOptions = {
        from: FROM_EMAIL,
        to: ADMIN_NOTIFICATION_EMAIL,
        replyTo: customerContact || smtpUser,
        subject: `🚨 New Lead Captured: ${name} (${service || source})`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #09090b; color: #ffffff; padding: 20px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px;">New Customer Lead Received!</h2>
              <p style="margin: 5px 0 0; font-size: 12px; color: #a1a1aa;">Source: ${source}</p>
            </div>
            
            <div style="padding: 24px; color: #27272a; font-size: 14px; line-height: 1.6;">
              <p style="margin-top: 0;">You have received a new inquiry on <strong>Anavya Infotech</strong>.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 10px 0; font-weight: bold; color: #71717a; width: 140px;">Customer Name:</td>
                  <td style="padding: 10px 0; font-weight: bold; color: #09090b;">${name || "N/A"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 10px 0; font-weight: bold; color: #71717a;">Email Address:</td>
                  <td style="padding: 10px 0; color: #2563eb;">${customerContact || "Not Provided"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 10px 0; font-weight: bold; color: #71717a;">Phone Number:</td>
                  <td style="padding: 10px 0; color: #09090b;">${leadPhone}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="padding: 10px 0; font-weight: bold; color: #71717a;">Service / Topic:</td>
                  <td style="padding: 10px 0; color: #09090b;">${service || source}</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-top: 16px;">
                <strong style="color: #475569; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 6px;">Customer Message / Requirements:</strong>
                <p style="margin: 0; white-space: pre-wrap; color: #1e293b;">${message || "No detailed message provided."}</p>
              </div>

              <div style="margin-top: 24px; text-align: center;">
                <a href="https://anavyainfotech.com/admin/leads" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 13px;">View Lead in Admin Dashboard</a>
              </div>
            </div>
            
            <div style="background-color: #f4f4f5; padding: 12px; text-align: center; font-size: 11px; color: #71717a;">
              Anavya Infotech Admin Notification System
            </div>
          </div>
        `,
      };

      const adminRes = await transporter.sendMail(adminMailOptions);
      results.adminEmail = !!adminRes.messageId;
    }

    // 2. Send Confirmation Email to Customer (if email is provided)
    if (customerContact) {
      const customerMailOptions = {
        from: FROM_EMAIL,
        to: customerContact,
        replyTo: REPLY_TO_EMAIL,
        subject: `Thank you for contacting Anavya Infotech! We've received your query.`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1d4ed8; color: #ffffff; padding: 24px; text-align: center;">
              <h1 style="margin: 0; font-size: 22px; font-weight: bold;">Anavya Infotech</h1>
              <p style="margin: 6px 0 0; font-size: 13px; color: #bfdbfe;">Transforming Ideas into Digital Excellence</p>
            </div>
            
            <div style="padding: 28px; color: #334155; font-size: 14px; line-height: 1.6;">
              <h3 style="color: #0f172a; margin-top: 0;">Hi ${name || "there"},</h3>
              <p>Thank you for reaching out to <strong>Anavya Infotech</strong>! We have successfully received your inquiry regarding <strong>${service || "our digital services"}</strong>.</p>
              
              <p>Our engineering & consulting team is reviewing your requirements and will get back to you within <strong>2 to 4 business hours</strong>.</p>

              <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; margin: 20px 0; border-radius: 0 6px 6px 0;">
                <strong style="color: #1e293b; font-size: 13px;">Summary of your request:</strong>
                <p style="margin: 8px 0 0; font-size: 13px; color: #475569; font-style: italic;">"${message || service || 'General Consultation Inquiry'}"</p>
              </div>

              <p style="margin-bottom: 0;">If you need urgent assistance, feel free to reply directly to this email or contact us at <strong>${REPLY_TO_EMAIL}</strong>.</p>
            </div>

            <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0 0 6px;"><strong>Anavya Infotech</strong> • Web, AI & Cloud Engineering</p>
              <p style="margin: 0;"><a href="https://anavyainfotech.com" style="color: #2563eb; text-decoration: none;">www.anavyainfotech.com</a></p>
            </div>
          </div>
        `,
      };

      const customerRes = await transporter.sendMail(customerMailOptions);
      results.customerEmail = !!customerRes.messageId;
    }

    return { success: true, results };
  } catch (err) {
    console.error("SMTP Nodemailer Error:", err);
    return { success: false, error: err.message };
  }
}

