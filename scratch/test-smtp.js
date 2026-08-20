import { sendLeadNotificationEmails } from "../lib/email.js";

async function testEmail() {
  console.log("Testing SMTP Email sending...");
  const res = await sendLeadNotificationEmails({
    name: "Akash Kumar Test",
    email: "anavyainfotech@gmail.com",
    phone: "+91 9876543210",
    service: "Web Development Test",
    message: "This is a direct test email from SMTP diagnostic script.",
    source: "Diagnostic Test Script",
  });

  console.log("Result:", JSON.stringify(res, null, 2));
}

testEmail();
