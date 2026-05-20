const steps = [
  { num: '01', title: 'Diagnóstico', desc: 'Revisión inicial del problema, prioridades y alcance. Rápido y sin costo.' },
  { num: '02', title: 'Propuesta clara', desc: 'Plan detallado con tiempos, costos y entregables definidos antes de empezar.' },
  { num: '03', title: 'Implementación', desc: 'Ejecución eficiente con comunicación constante durante todo el proceso.' },
  { num: '04', title: 'Seguimiento', desc: 'Verificación de resultados y soporte post-entrega para asegurar continuidad.' },
]

export default function HowItWorks() {
  return (
    <section id="como" className="py-20 bg-slate-50">
      <div className="container">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Proceso</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Cómo trabajamos</h2>
          <p className="mt-3 text-gray-500">Un proceso ordenado que reduce incertidumbre y entrega resultados concretos.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-8">
          {steps.map(s => (
            <div key={s.num}>
              <div className="text-5xl font-bold text-accent/15 leading-none">{s.num}</div>
              <h4 className="mt-3 font-bold text-slate-900">{s.title}</h4>
              <p className="mt-1.5 text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
