import { MailAdapter, sendMailData } from '../MailAdapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '51fe316cce634a',
    pass: 'f27dbd802d85af',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Jose Junior <jferreirajunior143@gmail.com>',
      subject,
      html: body,
    });
  }
}
