import jwt from 'jsonwebtoken'
import transporter from './createTransport'

export default function(req, res, next) {
  const {email} = res.locals
  const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1d'})
  const link = `${req.protocol}://${req.get('host')}/api/verify?token=${token}`
  const mailOptions = {
    from: 'Law Offices of Mark B. Simowitz <registration@simowitz.com>',
    to: email,
    subject: 'Activate your account',
    html: `Thank you for choosing the Law Offices of Mark B. Simowitz<br><a href=${link}>Click here to verify your email</a>`
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.end('error')
    }
    res.json({success: true})
    next()
  })
}
