import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import TabBar from '../components/TabBar.jsx';
import Highlight from '../components/Highlight.jsx';

const stats = [
  { icon: '🧠', value: 'Lv. 2', label: 'NIVEL', badgeBg: '#ECE9FB' },
  { icon: '⚡', value: '465', label: 'XP', badgeBg: '#FDEEDB' },
  { icon: '🔥', value: '3', label: 'RACHA', badgeBg: '#FBE6EA' },
  { icon: '📊', value: '2', label: 'CURSOS', badgeBg: '#E3F1EC' },
];

const profileFields = [
  { label: 'Tipo', value: 'Cosméticos y skincare' },
  { label: 'Nivel', value: 'Estoy empezando' },
  { label: 'Objetivo', value: 'Primeras ventas' },
  { label: 'Producto', value: 'Mascarillas y serum' },
];

const TABS = [
  { key: 'inicio', icon: '🏠', label: 'Inicio', to: '/dashboard' },
  { key: 'mundos', icon: '🌍', label: 'Mundos', to: '/mundos' },
  { key: 'nova', icon: '🤖', label: 'Nova', to: '/nova' },
  { key: 'perfil', icon: '👤', label: 'Perfil', to: null },
];

export default function DashboardScreen() {
  const navigate = useNavigate();
  return (
    <Screen background="#FBF1DE">
      <div style={{ flex: 1, padding: '20px 18px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ flex: 'none', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#D14863' }}>HOLA, LUCÍA</div>
            <div className="heading-font" style={{ fontSize: 24, fontWeight: 800, color: '#1C1C22', letterSpacing: '-0.025em' }}>LevelUp IA</div>
          </div>
          <div style={{ height: 28, padding: '0 10px', borderRadius: 999, background: '#FFFFFF', border: '1px solid #ECE6D6', display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 700, color: '#4A4857', whiteSpace: 'nowrap' }}>🚀 Nivel 2 · Gratis</div>
        </div>
        <div style={{ flex: 'none', fontSize: 12.5, color: '#6B6A57', lineHeight: 1.45 }}>No estás estudiando: estás construyendo tu futuro negocio con Nova.</div>
        <div style={{ flex: 'none', background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 999, padding: '8px 13px', fontSize: 11, fontWeight: 600, color: '#4A4857', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          🌱 Glow Lab · Cosméticos y skincare · Instagram · Estoy empezando → Primeras ventas
        </div>

        <div style={{ flex: 'none', borderRadius: 26, background: '#3B8C74', padding: 16, display: 'flex', flexDirection: 'column', gap: 10, boxShadow: '0 18px 40px rgba(59,140,116,0.30)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.72)' }}>DASHBOARD PRINCIPAL</div>
          <div className="heading-font" style={{ fontSize: 22, fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.18 }}>Tu próxima venta está más cerca.</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.82)', lineHeight: 1.45 }}>
            Completa <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Cliente Ideal</span> en Mentalidad. Activa Premium para abrir todos los mundos y un mentor más profundo.
          </div>
          <div style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16, padding: 10, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, flex: 'none', borderRadius: 11, background: 'linear-gradient(135deg, #F5C744, #D9A61E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🤖</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div className="heading-font" style={{ fontSize: 12.5, fontWeight: 700, color: '#FFFFFF' }}>Nova</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.82)', lineHeight: 1.4 }}>¡Excelente trabajo! Hoy aprendiste algo que miles de emprendedores aún no saben.</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
            <button onClick={() => navigate('/leccion')} style={{ height: 42, borderRadius: 999, background: '#1C1C22', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 700, color: '#FFFFFF', textAlign: 'center', cursor: 'pointer' }}>Continuar aprendiendo</button>
            <button onClick={() => navigate('/nova')} style={{ height: 42, borderRadius: 999, background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 700, color: '#FFFFFF', cursor: 'pointer' }}>Hablar con Nova</button>
          </div>
        </div>

        <div style={{ flex: 'none', background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 18, padding: '11px 6px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 26, height: 26, borderRadius: 999, background: s.badgeBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>{s.icon}</div>
              <div className="heading-font" style={{ fontSize: 17, fontWeight: 800, color: '#1C1C22', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.1em', color: '#8A8570' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ flex: 'none', background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 20, padding: 11, display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', color: '#8A8570' }}>PERFIL DEL EMPRENDIMIENTO</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            <div className="heading-font" style={{ fontSize: 14.5, fontWeight: 700, color: '#1C1C22' }}>Glow Lab · Skincare</div>
            <div style={{ height: 24, padding: '0 9px', borderRadius: 999, background: '#ECE9FB', display: 'flex', alignItems: 'center', fontSize: 10.5, fontWeight: 700, color: '#6355C7' }}>Instagram</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
            {profileFields.map((f) => (
              <div key={f.label} style={{ background: '#FBF1DE', borderRadius: 12, padding: '7px 10px', fontSize: 10.5, color: '#6B6A57', lineHeight: 1.35 }}>
                {f.label}<br /><span style={{ fontWeight: 700, color: '#1C1C22' }}>{f.value}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: '#6B6A57', lineHeight: 1.45 }}>
            Ejemplos y actividades se adaptan a: <Highlight style={{ fontWeight: 700, color: '#1C1C22', padding: '1px 5px', borderRadius: 4 }}>Crea una publicación para vender mascarillas.</Highlight>
          </div>
        </div>
      </div>
      <TabBar tabs={TABS} active="inicio" />
    </Screen>
  );
}
