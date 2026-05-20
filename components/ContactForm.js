import { useState } from 'react'

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-slate-700">{label}</label>
    {children}
  </div>
)

const inputClass = "p-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"

export default function ContactForm() {
  const [status, setStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Gracias. Te responderemos con una evaluación inicial y próximos pasos.')
  }

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="container">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contacto</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Cuéntanos qué necesitas</h2>
          <p className="mt-3 text-gray-500">Te responderemos con una evaluación inicial y próximos pasos.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Nombre">
            <input name="nombre" placeholder="Tu nombre" required className={inputClass} />
          </Field>
          <Field label="Empresa">
            <input name="empresa" placeholder="Nombre de tu empresa" className={inputClass} />
          </Field>
          <Field label="Correo">
            <input name="email" type="email" placeholder="tu@correo.com" required className={inputClass} />
          </Field>
          <Field label="Teléfono">
            <input name="telefono" placeholder="+56 9 XXXX XXXX" className={inputClass} />
          </Field>
          <div className="flex flex-col gap-1.5 col-span-1 sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">Cuéntanos brevemente qué necesitas</label>
            <textarea
              name="necesidad"
              placeholder="Describe el problema o lo que buscas resolver..."
              required
              className={`${inputClass} resize-none`}
              rows={4}
            />
          </div>
          <div className="col-span-1 sm:col-span-2 flex items-center gap-4 flex-wrap">
            <button type="submit" className="btn btn-accent px-6 py-3">Solicitar diagnóstico</button>
            {status && <p className="text-sm text-green-600 font-medium">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
