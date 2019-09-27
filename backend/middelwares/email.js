const nodemailer = require('nodemailer');
const htmlToText = require('html-to-text');
const pug = require('pug');

module.exports = class Email {
  constructor(user, url) {
    this.to = process.env.EMAIL_FROM; // user.email
    this.name = user.name;
    this.url = url;
    this.from = `Vasyl Pankiv <${process.env.EMAIL_FROM}>`;
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Tours Family');
  }

  async sendPassReset() {
    await this.send('pass-reset', 'Reset password');
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENGRIG_USER_NAME,
          pass: process.env.SENGRIG_PASSWORD,
        },
      });
    }
    console.log(
      `process: ${process.env.NODE_ENV}, send to ${process.env.MAIL_TRAP_HOST}`,
    );
    return nodemailer.createTransport({
      host: process.env.MAIL_TRAP_HOST,
      port: process.env.MAIL_TRAP_PORT,
      auth: {
        user: process.env.MAIL_TRAP_USER_NAME,
        pass: process.env.MAIL_TRAP_USER_PASS,
      },
    });
  }

  async send(template, title) {
    //1) Render HTML
    const html = pug.renderFile(`${__dirname}/../views/mail/${template}.pug`, {
      name: this.name,
      url: this.url,
      title,
    });

    //2) Options
    const options = {
      from: this.from,
      to: this.to,
      subject: title,
      html,
      text: htmlToText.fromString(html),
    };

    //3) Create a transport and send email
    await this.newTransport().sendMail(options);
  }

  // async readFile(path) {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(path, 'utf8', (err, data) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(data);
  //     });
  //   });
  // }
};
