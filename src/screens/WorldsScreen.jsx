import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import TabBar from '../components/TabBar.jsx';
import Highlight from '../components/Highlight.jsx';

const worlds = [
  { key: 'mentalidad', icon: '🚀', iconBg: '#EAF0FF', title: 'Mentalidad', tag: 'Mundo 1', locked: false, progress: 60 },
  { key: 'marketing', icon: '📈', iconBg: '#FFF0E6', title: 'Marketing', tag: 'Mundo 2', locked: false, progress: 20 },
  { key: 'redes', icon: '💬', title: 'Redes', tag: 'Mundo 3', locked: true },
  { key: 'ventas', icon: '🧾', title: 'Ventas', tag: 'Mundo 4', locked: true },
  { key: 'ecommerce', icon: '🛒', title: 'E-Commerce', tag: 'Mundo 5', locked: true },
  { key: 'ia', icon: '🤖', title: 'IA', tag: 'Mundo 6', locked: true },
  { key: 'escalamiento', icon: '📊', title: 'Escalamiento', tag: 'Mundo 7', locked: true },
];

const TABS = [
  { key: 'inicio', icon: '🏠', label: 'Inicio', to: '/dashboard' },
  { key: 'mundos', icon: '🌍', label: 'Mundos', to: '/mundos' },
  { key: 'nova', icon: '🤖', label: 'Nova', to: '/nova' },
  { key: 'perfil', icon: '👤', label: 'Perfil', to: null },
];

export default function WorldsScreen() {
  const navigate = useNavigate();

  return (
    <Screen background="#F7F7FB">
      <div style={{ flex: 1, padding: '18px 18px 0', display: 'flex', flexDirection: 'column', gap: 13 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#4C6FFF' }}>MUNDOS INCLUIDOS</div>
          <div className="heading-font" style={{ fontSize: 27, fontWeight: 800, color: '#16151F', letterSpacing: '-0.025em' }}>Tu ruta de <Highlight>7 mundos</Highlight></div>
          <div style={{ fontSize: 13, color: '#6B6A7B', lineHeight: 1.5 }}>2 desbloqueados · activa Premium para abrir el resto.</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 11 }}>
          {worlds.map((w) => (
            <div
              key={w.key}
              onClick={() => navigate(w.locked ? '/paywall' : '/leccion')}
              style={{ background: '#FFFFFF', border: '1px solid #E9E8F0', borderRadius: 20, padding: 15, display: 'flex', flexDirection: 'column', gap: 10, opacity: w.locked ? 0.55 : 1, cursor: 'pointer' }}
            >
              {w.locked ? (
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, filter: 'grayscale(1)' }}>{w.icon}</div>
                  <div style={{ fontSize: 13 }}>🔒</div>
                </div>
              ) : (
                <div style={{ width: 44, height: 44, borderRadius: 14, background: w.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21 }}>{w.icon}</div>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <div className="heading-font" style={{ fontSize: 15.5, fontWeight: 700, color: w.locked ? '#4A4857' : '#16151F' }}>{w.title}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#8A889A' }}>{w.tag}</div>
              </div>
              {!w.locked && (
                <div style={{ height: 5, borderRadius: 999, background: '#EDEBF4', overflow: 'hidden' }}>
                  <div style={{ width: `${w.progress}%`, height: '100%', background: 'linear-gradient(90deg, #4C6FFF, #B721D6)' }} />
                </div>
              )}
            </div>
          ))}
          <div
            onClick={() => navigate('/paywall')}
            style={{ background: 'linear-gradient(140deg, #1C1A4A, #2B1C4E)', borderRadius: 20, padding: 15, display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21 }}>🎨</div>
              <div style={{ height: 22, padding: '0 8px', borderRadius: 999, background: 'linear-gradient(90deg, #4C6FFF, #B721D6)', display: 'flex', alignItems: 'center', fontSize: 9.5, fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.06em' }}>BONUS</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <div className="heading-font" style={{ fontSize: 15.5, fontWeight: 700, color: '#FFFFFF' }}>Branding</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#B4AEDA' }}>Sprint Bonus</div>
            </div>
          </div>
        </div>

        <div onClick={() => navigate('/paywall')} style={{ background: '#FFFFFF', border: '1px solid #E9E8F0', borderRadius: 20, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', marginBottom: 6 }}>
          <div style={{ width: 38, height: 38, flex: 'none', borderRadius: 12, background: 'linear-gradient(135deg, #4C6FFF, #B721D6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>⭐</div>
          <div style={{ flex: 1, fontSize: 12, color: '#6B6A7B', lineHeight: 1.45 }}>Abre los 7 mundos con <span style={{ fontWeight: 700, color: '#16151F' }}>Plan Plus</span></div>
          <div style={{ height: 36, padding: '0 15px', borderRadius: 999, background: 'linear-gradient(90deg, #4C6FFF, #B721D6)', display: 'flex', alignItems: 'center', fontSize: 12.5, fontWeight: 700, color: '#FFFFFF' }}>Ver</div>
        </div>
      </div>
      <TabBar tabs={TABS} active="mundos" />
    </Screen>
  );
}
