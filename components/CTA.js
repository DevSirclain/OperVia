export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contáctanos</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold leading-tight">
            ¿Tu negocio tiene un problema técnico pendiente?
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Una falla pequeña puede transformarse en pérdida de tiempo, clientes y oportunidades.
          </p>
          <div className="mt-8">
            <a href="#contacto" className="btn btn-accent text-base px-6 py-3">Solicitar revisión</a>
          </div>
        </div>
      </div>
    </section>
  )
}
