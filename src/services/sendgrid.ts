import sendgrid from "@sendgrid/mail";
import { config } from "dotenv";
import { newLeadtemplate } from "@/templates/emails/NewLead";

// load env variables
config();

// set sendgrid api key
sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default async function sendEmail(to: any, from: any, subject: string, name: string, email: string, content: string) {
    const message = {
        to,
        from,
        subject,
        html: newLeadtemplate({ name, email, content }),
    };
    try {
        await sendgrid.send(message);
        console.log(`Email sent`);
    } catch (error) {
        console.error(error);
    }
};
