import nodemailer from 'nodemailer'
import { CONTACT_EMAIL } from '../../config'

function isEmail(value) {
  return typeof value === 'string' && /.+@.+\..+/.test(value)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido.' })
  }

  const { nombre, empresa, email, telefono, necesidad } = req.body || {}

  if (!nombre || !email || !necesidad || !isEmail(email)) {
    return res.status(400).json({ message: 'Datos inválidos.' })
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    MAIL_FROM,
  } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return res.status(503).json({ message: 'Servicio de correo no configurado.' })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const lines = [
    `Nombre: ${nombre}`,
    `Empresa: ${empresa || 'No informada'}`,
    `Correo: ${email}`,
    `Teléfono: ${telefono || 'No informado'}`,
    '',
    'Necesidad:',
    necesidad,
  ]

  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto desde Opervia - ${nombre}`,
      text: lines.join('\n'),
    })

    return res.status(200).json({ message: 'Formulario enviado correctamente.' })
  } catch (_error) {
    return res.status(500).json({ message: 'No fue posible enviar el formulario.' })
  }
}
