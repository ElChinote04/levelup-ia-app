import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';
import Highlight from '../components/Highlight.jsx';

const OPTIONS = [
  { key: 'A', text: 'Todas las personas que quieran cuidar su piel', correct: false },
  { key: 'B', text: 'Mujeres de 20-30 en Lima con piel grasa que compran por Instagram', correct: true },
  { key: 'C', text: 'Quien tenga presupuesto para comprar mi producto', correct: false },
];

const RING_COLOR = '#8B3FE8';

export default function LessonScreen() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(null);
  const isCorrect = answer === 'B';

  return (
    <Screen background="#FFFFFF">
      <div style={{ flex: 'none', padding: '18px 18px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div onClick={() => navigate('/mundos')} style={{ width: 34, height: 34, borderRadius: 12, background: '#F4F3F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, color: '#4A4857', cursor: 'pointer' }}>✕</div>
        <div style={{ flex: 1, height: 8, borderRadius: 999, background: '#EDEBF4', overflow: 'hidden' }}>
          <div style={{ width: '45%', height: '100%', borderRadius: 999, background: 'linear-gradient(90deg, #4C6FFF, #B721D6)' }} />
        </div>
        <div style={{ height: 30, padding: '0 11px', borderRadius: 999, background: '#FFF0F1', display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: '#C0263A' }}>❤️ 3</div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '4px 18px 0', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: '#4C6FFF' }}>MUNDO 1 · MENTALIDAD · LECCIÓN 3</div>
          <div className="heading-font" style={{ fontSize: 25, fontWeight: 800, color: '#16151F', letterSpacing: '-0.02em', lineHeight: 1.28 }}>
            Quieres vender mascarillas faciales. ¿Cuál describe mejor a tu <Highlight>cliente ideal</Highlight>?
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          {OPTIONS.map((opt) => {
            const isSelected = answer === opt.key;
            return (
              <div
                key={opt.key}
                onClick={() => setAnswer(opt.key)}
                style={{ position: 'relative', borderRadius: 18, border: '1px solid #E9E8F0', background: '#FFFFFF', padding: 16, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
              >
                <div style={{ width: 30, height: 30, flex: 'none', borderRadius: 10, background: '#F4F3F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 700, color: '#4A4857' }}>{opt.key}</div>
                <div style={{ fontSize: 14, color: '#16151F', lineHeight: 1.45 }}>{opt.text}</div>
                <div style={{ position: 'absolute', inset: -1, borderRadius: 19, border: `2px solid ${isSelected ? RING_COLOR : 'transparent'}`, pointerEvents: 'none' }} />
              </div>
            );
          })}
        </div>
      </div>

      {answer && (
        <div style={{ flex: 'none', padding: '16px 18px 22px' }}>
          <div style={{ background: isCorrect ? '#E7F6EC' : '#FDEAEA', borderRadius: 24, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 26, height: 26, borderRadius: 999, background: isCorrect ? '#1C7A4A' : '#C0263A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: '#FFFFFF' }}>{isCorrect ? '✓' : '✕'}</div>
              <div className="heading-font" style={{ fontSize: 16, fontWeight: 800, color: isCorrect ? '#135C37' : '#8A1F2E' }}>{isCorrect ? '¡Correcto! +25 XP' : 'No es la mejor opción'}</div>
            </div>
            <div style={{ fontSize: 13, color: isCorrect ? '#2E5C43' : '#6B3238', lineHeight: 1.5 }}>
              {isCorrect
                ? 'Mientras más específico tu cliente, más fácil es escribir un anuncio que le hable directo. "Todos" no es un cliente.'
                : 'Piénsalo de nuevo: mientras más específico tu cliente, más fácil es escribir un anuncio que le hable directo. "Todos" no es un cliente.'}
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              style={{ height: 52, border: 'none', borderRadius: 999, background: 'linear-gradient(90deg, #4C6FFF, #8B3FE8 55%, #B721D6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Manrope, sans-serif', fontSize: 16, fontWeight: 700, color: '#FFFFFF', cursor: 'pointer' }}
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </Screen>
  );
}
