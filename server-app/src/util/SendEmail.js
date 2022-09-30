const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res, next) => {
  console.log("Send email...");

  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "fruituser443@gmail.com", // generated ethereal user
        pass: "123456789QAZqaz.", // generated ethereal password
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "fruituser443@gmail.com",
      to: "levietduc2000cb@gmail.com", // list of receivers
      subject: "Hello", // Subject line
      text: "Hello world", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Send email 3...");
    return res
      .status(200)
      .json({ state: true, message: "Gửi liên hệ thành công" });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    res.status(400).json({ state: false, message: "Email send Error" });
  }
};
