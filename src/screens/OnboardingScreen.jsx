import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import Highlight from '../components/Highlight.jsx';

const OPTIONS = [
  { key: 'ecom', icon: '🛒', iconBg: '#FBE6EA', title: 'E-commerce', subtitle: 'Tienda propia o marketplace' },
  { key: 'skin', icon: '🌱', iconBg: '#E3F1EC', title: 'Skincare / belleza', subtitle: 'Cosméticos, cuidado personal' },
  { key: 'ropa', icon: '👕', iconBg: '#ECE9FB', title: 'Ropa y accesorios', subtitle: 'Moda, joyería, calzado' },
  { key: 'nose', icon: '🧭', iconBg: '#FDEEDB', title: 'Aún no lo sé', subtitle: 'Nova te ayuda a decidir' },
];

const RING_COLOR = '#EA6079';

export default function OnboardingScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('skin');

  return (
    <Screen background="#FBF1DE">
      <div style={{ flex: 1, padding: '24px 20px 26px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            <div style={{ width: 26, height: 6, borderRadius: 999, background: '#EA6079' }} />
            <div style={{ width: 26, height: 6, borderRadius: 999, background: '#EA6079' }} />
            <div style={{ width: 12, height: 6, borderRadius: 999, background: '#EEE3CB' }} />
            <div style={{ width: 12, height: 6, borderRadius: 999, background: '#EEE3CB' }} />
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#8A8570' }}>Paso 2 de 4</div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #F1EAD9', borderRadius: 28, boxShadow: '0 16px 40px rgba(28,28,34,0.08)', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#D14863' }}>TU NEGOCIO</div>
            <div className="heading-font" style={{ fontSize: 26, fontWeight: 800, color: '#1C1C22', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
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
                  style={{ position: 'relative', borderRadius: 18, border: '1px solid #ECE6D6', background: '#FFFFFF', padding: '15px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 13, background: opt.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19 }}>{opt.icon}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <div className="heading-font" style={{ fontSize: 15.5, fontWeight: 700, color: '#1C1C22' }}>{opt.title}</div>
                    <div style={{ fontSize: 12, color: '#8A8570' }}>{opt.subtitle}</div>
                  </div>
                  <div style={{ position: 'absolute', inset: -1, borderRadius: 19, border: `2px solid ${isActive ? RING_COLOR : 'transparent'}`, pointerEvents: 'none' }} />
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <PrimaryButton height={54} fontSize={16.5} onClick={() => navigate('/dashboard')}>Continuar</PrimaryButton>
            <div onClick={() => navigate('/dashboard')} style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: '#8A8570', cursor: 'pointer' }}>Omitir por ahora</div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
