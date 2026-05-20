const cases = [
  {
    title: 'Recuperación de sitio con problemas de acceso y dominio',
    desc: 'Un negocio perdía clientes porque su sitio mostraba errores de SSL y el dominio estaba próximo a vencer. Resolvimos ambos problemas en menos de 24 horas.',
  },
  {
    title: 'Optimización de formularios y captura de clientes',
    desc: 'Los formularios de contacto no llegaban al correo del cliente. Identificamos el fallo, corregimos la configuración y mejoramos la tasa de captura de leads.',
  },
  {
    title: 'Automatización de procesos internos y reportes',
    desc: 'Eliminamos tareas manuales repetitivas conectando herramientas existentes, reduciendo el tiempo operativo semanal en más de 5 horas.',
  },
]

export default function Testimonial() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Resultados</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Resultados que generan confianza</h2>
          <p className="mt-3 text-gray-500">Ejemplos de soluciones implementadas en negocios reales.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.title} className="flex flex-col p-7 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider">Caso resuelto</span>
              <h4 className="mt-3 font-bold text-slate-900 leading-snug">{c.title}</h4>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
