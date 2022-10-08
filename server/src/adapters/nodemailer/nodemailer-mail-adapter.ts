import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "923ed557757871",
      pass: "2ecefae0b2855a"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
  async  sendMail({ subject, body }: SendMailData) {
       await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Otacilio Cesar <otaciliocesarsantos@gmail.com>',
        subject,
        html: body,
    });

  };
}