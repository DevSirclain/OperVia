const ServiceCard = ({ icon, title, desc, items }) => (
  <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
    <div className="text-3xl mb-5">{icon}</div>
    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    <p className="mt-2.5 text-gray-500 text-sm leading-relaxed">{desc}</p>
    <ul className="mt-6 space-y-2.5">
      {items.map(item => (
        <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Servicios</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Lo que resolvemos para tu negocio</h2>
          <p className="mt-3 text-gray-500">Soluciones concretas para los problemas técnicos más comunes de pymes y negocios en Chile.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ServiceCard
            icon="🛠️"
            title="Rescate Web"
            desc="Corrección de errores, formularios caídos, dominios, certificados SSL, lentitud y recuperación operativa."
            items={['Recuperación rápida', 'Menor pérdida de clientes', 'Continuidad digital']}
          />
          <ServiceCard
            icon="⚙️"
            title="Automatización de Procesos"
            desc="Automatizamos tareas repetitivas para reducir trabajo manual y mejorar eficiencia."
            items={['Ahorro de tiempo', 'Menos errores', 'Procesos más ordenados']}
          />
          <ServiceCard
            icon="🔧"
            title="Soporte Tecnológico"
            desc="Acompañamiento técnico confiable para mantener tus sistemas funcionando correctamente."
            items={['Disponibilidad confiable', 'Resolución oportuna', 'Seguimiento continuo']}
          />
        </div>
      </div>
    </section>
  )
}
