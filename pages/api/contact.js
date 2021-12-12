const sgMail = require("@sendgrid/mail");

console.log(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "bamias7@gmail.com",
    from: "bamias7@gmail.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await sgMail.send(data);

  res.status(200).json({ status: "OK" });
};
