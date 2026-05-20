// Configuración global de Resolvia
// Ingresa el número de WhatsApp sin el prefijo "+56" (solo los 9 dígitos)
export const WHATSAPP_NUMBER = "963603585"

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/56${WHATSAPP_NUMBER}?text=Hola%20Resolvia%20-%20Necesito%20ayuda%20con%20mi%20negocio`
  : `https://wa.me/`

export const CONTACT_EMAIL = "hola@resolvia.cl"
