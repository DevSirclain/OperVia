import Link from 'next/link'
import { WHATSAPP_URL } from '../config'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="font-bold text-xl text-accent tracking-tight">Opervia</span>
          <span className="hidden sm:block text-xs text-gray-400 border-l border-gray-200 pl-2.5 ml-0.5">Soluciones tecnológicas para negocios</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#servicios" className="text-sm text-gray-600 hover:text-accent transition-colors">Servicios</a>
          <a href="#como" className="text-sm text-gray-600 hover:text-accent transition-colors">Cómo trabajamos</a>
          <a href="#contacto" className="text-sm text-gray-600 hover:text-accent transition-colors">Contacto</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-accent text-xs px-4 py-2">WhatsApp</a>
        </nav>
        <a href="#contacto" className="md:hidden btn btn-accent text-xs px-3 py-1.5">Contacto</a>
      </div>
    </header>
  )
}
