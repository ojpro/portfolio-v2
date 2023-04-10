import sendgrid from "@/services/sendgrid";
import { NextApiRequest, NextApiResponse } from "next";

// TODO: make it a service
async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const to = [{ email: "contact@ojpro.me", name: "ojpro" }];
  const from = { email: "work@ojpro.me", name: "ojpro" };
  const subject = `🌟 Lead from my portfolio`;
  const client_name = req.body.name;
  const cleint_email = req.body.email;
  const message = req.body.message;

  try {
    // send email to my inbox
    await sendgrid(
      to,
      from,
      subject,
      client_name,
      cleint_email,
      message
    );
} catch (error: any) {
  // TODO:  #52 issues
  return res.status(error.statusCode || 500).json({ error: error.message });
}
// return success response
return res.status(200).json({ error: "" });
}

export default sendEmail;