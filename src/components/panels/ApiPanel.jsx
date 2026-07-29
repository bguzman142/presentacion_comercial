import { motion } from 'framer-motion'
import GlassPanel from '../shared/GlassPanel'

const endpoints = [
  { method: 'POST', path: '/API/AUTH/REGISTER', desc: 'Registro seguro de clientes', type: 'orange' },
  { method: 'POST', path: '/API/AUTH/LOGIN', desc: 'Autenticación y sesiones', type: 'orange' },
  { method: 'GET', path: '/API/PRODUCTS', desc: 'Catálogo y stock en tiempo real', type: 'blue' },
  { method: 'GET', path: '/API/PRODUCTS/:ID', desc: 'Ficha detallada del coleccionable', type: 'blue' },
  { method: 'GET', path: '/API/CATEGORIES', desc: 'Filtros por nicho y colecciones', type: 'blue' },
  { method: 'POST', path: '/API/ORDERS', desc: 'Gestión y checkout de pedidos', type: 'orange' },
  { method: 'GET', path: '/API/ORDERS/:ID', desc: 'Seguimiento y logística', type: 'blue' },
  { method: 'POST', path: '/API/PAYMENTS/MP', desc: 'Pasarela de pagos (MercadoPago)', type: 'orange' },
  { method: 'POST', path: '/API/PAYMENTS/CRYPTO', desc: 'Procesamiento de pagos crypto', type: 'orange' },
  { method: 'POST', path: '/API/CHATBOT', desc: 'Asistencia y recomendador IA', type: 'orange' },
]

export default function ApiPanel() {
  return (
    <GlassPanel>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: 20,
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,90,0,0.6)',
          marginBottom: 8,
        }}
      >
        11 — INTEGRACIONES Y API
      </p>

      <h2
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 900,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          fontSize: 'clamp(42px, 6vw, 72px)',
          color: '#f4f4f5',
          marginBottom: 6,
          letterSpacing: -0.5,
        }}
      >
        ARQUITECTURA MODULAR
      </h2>

      <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 26, color: 'rgba(161,161,170,0.8)', marginBottom: 18, lineHeight: 1.55, maxWidth: 900 }}>
        Arquitectura modular que facilita la conexión con servicios de logística, marketing y analítica avanzada, garantizando que la plataforma crezca a la par de tu negocio.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 12,
          width: '100%',
          maxWidth: 880,
          marginBottom: 10,
        }}
      >
        {endpoints.map((ep, i) => (
          <motion.div
            key={ep.path}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            style={{
              background: 'rgba(255,90,0,0.04)',
              border: `1px solid ${ep.type === 'orange' ? 'rgba(255,90,0,0.18)' : 'rgba(0,86,179,0.22)'}`,
              borderRadius: 10,
              padding: '12px 16px',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 900,
                  fontSize: 12,
                  padding: '2px 6px',
                  borderRadius: 4,
                  backgroundColor: ep.type === 'orange' ? 'rgba(255,90,0,0.2)' : 'rgba(0,86,179,0.2)',
                  color: ep.type === 'orange' ? '#ff5a00' : '#0056b3',
                }}
              >
                {ep.method}
              </span>
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 15,
                  color: '#f4f4f5',
                }}
              >
                {ep.path}
              </span>
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'rgba(161,161,170,0.6)',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500,
                fontStyle: 'italic',
              }}
            >
              {ep.desc}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: 12,
          fontSize: 20,
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 700,
          fontStyle: 'italic',
          textTransform: 'uppercase',
          color: 'rgba(0,86,179,0.5)',
          letterSpacing: 2,
        }}
      >
        "ESCALABILIDAD E INTEGRACIÓN SIN LÍMITES."
      </motion.p>
    </GlassPanel>
  )
}
