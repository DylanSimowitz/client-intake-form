import jwt from 'jsonwebtoken'
import {mail as helper} from 'sendgrid'
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

export default function(req, res, next) {
	const {email} = res.locals
  const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1d'})
  const link = `${req.protocol}://${req.get('host')}/api/verify?token=${token}`
	
  const from_email = new helper.Email('registration@simowitz.com', 'Law Offices of Mark B. Simowitz');
  const to_email = new helper.Email(email);
  const subject = 'Activate your client account';
  const content = new helper.Content('text/html', `Thank you for choosing the Law Offices of Mark B. Simowitz<br><a href=${link}>Click here to verify your email</a>`);
  const mail = new helper.Mail(from_email, subject, to_email, content);

  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function(error, response) {
		if (error) {
			res.end('error')
		}
		res.json({success: true})
		next()
  })
}
