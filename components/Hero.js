import { WHATSAPP_URL } from '../config'

export default function Hero() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse 60% 60% at 80% 20%, rgba(14,165,164,0.18) 0%, transparent 70%)'}} />
      <div className="container relative">
        <div className="max-w-2xl fade-in">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-5">Soporte técnico · Automatización · Rescate web</span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Soluciones rápidas para problemas técnicos que frenan tu negocio
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            Resolvemos fallas web, optimizamos procesos y automatizamos tareas para que tu operación funcione sin interrupciones.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contacto" className="btn btn-accent text-base px-6 py-3">Solicitar diagnóstico</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn text-base px-6 py-3 bg-white/10 text-white border border-white/20 hover:bg-white/20">Hablar por WhatsApp</a>
          </div>
          <p className="mt-5 text-sm text-slate-400">Diagnóstico inicial sin compromiso</p>
        </div>
      </div>
    </section>
  )
}
