import sendgrid from "@sendgrid/mail";
import {config} from "dotenv";
import {NextApiRequest, NextApiResponse} from "next";

// load env variables
config();

// set sendgrid api key
sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);

// TODO: make it a service
async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    try {
        // send email to my inbox
        await sendgrid.send({
            to: [{
                email: "contact@ojpro.me",
                name: "ojpro"
            }],
            from: {
                email: "work@ojpro.me",
                name: "ojpro"
            },
            subject: `🌟 Lead from my portfolio`,
            // email template
            // TODO: need more improvements
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <title>Lead from my portfolio</title>
                <meta name="description" content="I got i new lead from my portfolio website">
                <meta name="author" content="Oussama ELJABBARI">
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
              </head>
              
              <body>
                <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
                      </div>
                      <div class="container" style="margin-left: 20px;margin-right: 20px;">
                      <p>You've got a new mail from <b>${req.body.name}</b>, their email is: ✉️ ${req.body.email} </p>
                      <div style="font-size: 16px;">
                      <b>Message:</b>
                      <p>${req.body.message}</p>
                      <br>
                      </div>
                      <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">
                      <i>Best Regards.</i>
                      <br/><br/>
                      Oussama ELJABBARI
                      <br/>
                      Software Developer
                      </p>
                      <div class="footer-links" style="display: flex;justify-content: center;align-items: center;margin: 8px auto;">
                        <a href="https://ojpro.me/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                        <a href="https://ojpro.me/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                        <a href="https://github.com/ojpro/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                        <a href="https://instagram.com/heyojpro/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                        <a href="https://linkedin.com/in/ojpro/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                        <a href="https://twitter.com/heyojpro/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Twitter</a>
                      </div>
                      </div>
              </body>
              </html>`,
        });
    } catch (error: any) {
        // TODO:  #52 issues
        return res.status(error.statusCode || 500).json({error: error.message});
    }
    // return success response
    return res.status(200).json({error: ""});
}

export default sendEmail;