import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import GradientButton from '../components/GradientButton.jsx';
import Highlight from '../components/Highlight.jsx';

const OPTIONS = [
  { key: 'ecom', icon: '🛒', iconBg: '#EAF0FF', title: 'E-commerce', subtitle: 'Tienda propia o marketplace' },
  { key: 'skin', icon: '🌱', iconBg: '#FBEBF6', title: 'Skincare / belleza', subtitle: 'Cosméticos, cuidado personal' },
  { key: 'ropa', icon: '👕', iconBg: '#F0ECFC', title: 'Ropa y accesorios', subtitle: 'Moda, joyería, calzado' },
  { key: 'nose', icon: '🧭', iconBg: '#F2F2F7', title: 'Aún no lo sé', subtitle: 'Nova te ayuda a decidir' },
];

const RING_COLOR = '#8B3FE8';

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('skin');

  return (
    <Screen background="#F7F7FB">
      <div style={{ flex: 1, padding: '24px 20px 26px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            <div style={{ width: 26, height: 6, borderRadius: 999, background: 'linear-gradient(90deg, #4C6FFF, #B721D6)' }} />
            <div style={{ width: 26, height: 6, borderRadius: 999, background: 'linear-gradient(90deg, #4C6FFF, #B721D6)' }} />
            <div style={{ width: 12, height: 6, borderRadius: 999, background: '#E0DEEA' }} />
            <div style={{ width: 12, height: 6, borderRadius: 999, background: '#E0DEEA' }} />
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#8A889A' }}>Paso 2 de 4</div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #EDEBF4', borderRadius: 28, boxShadow: '0 16px 40px rgba(28,26,74,0.08)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#4C6FFF' }}>TU NEGOCIO</div>
            <div className="heading-font" style={{ fontSize: 26, fontWeight: 800, color: '#16151F', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              ¿Qué tipo de negocio quieres <Highlight>hacer crecer</Highlight>?
            </div>
            <div style={{ fontSize: 13.5, color: '#6B6A7B', lineHeight: 1.5 }}>Nova adapta ejemplos, casos y actividades a lo que elijas.</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {OPTIONS.map((opt) => {
              const isActive = selected === opt.key;
              return (
                <div
                  key={opt.key}
                  onClick={() => setSelected(opt.key)}
                  style={{ position: 'relative', borderRadius: 18, border: '1px solid #E9E8F0', background: '#FFFFFF', padding: '15px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 13, background: opt.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19 }}>{opt.icon}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div className="heading-font" style={{ fontSize: 15.5, fontWeight: 700, color: '#16151F' }}>{opt.title}</div>
                    <div style={{ fontSize: 12, color: '#8A889A' }}>{opt.subtitle}</div>
                  </div>
                  <div style={{ position: 'absolute', inset: -1, borderRadius: 19, border: `2px solid ${isActive ? RING_COLOR : 'transparent'}`, pointerEvents: 'none' }} />
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <GradientButton height={54} fontSize={16.5} onClick={() => navigate('/dashboard')}>Continuar</GradientButton>
            <div onClick={() => navigate('/dashboard')} style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#8A889A', cursor: 'pointer' }}>Omitir por ahora</div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
