import { WHATSAPP_URL, CONTACT_EMAIL } from '../config'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-100 bg-white">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-bold text-slate-900 text-lg">Resolvia</div>
          <div className="text-sm text-gray-400 mt-0.5">Soluciones tecnológicas para negocios</div>
          <div className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} Resolvia. Todos los derechos reservados.</div>
        </div>
        <div className="flex items-center gap-5">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-sm text-accent hover:underline">WhatsApp</a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-500 hover:text-slate-800 transition-colors">{CONTACT_EMAIL}</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-slate-800 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
