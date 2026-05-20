export default function Benefits(){
  const items = [
    'Atención personalizada',
    'Soluciones rápidas',
    'Lenguaje simple, sin tecnicismos',
    'Trabajo remoto',
    'Soporte continuo'
  ]

  return (
    <section className="py-8">
      <div className="container">
        <h3 className="text-xl font-semibold">Beneficios</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          {items.map((b)=> (
            <li key={b} className="flex items-start gap-3">
              <span className="text-accent">●</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
