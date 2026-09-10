import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Screen from '../components/Screen.jsx';

const INITIAL_MESSAGES = [
  { id: 1, from: 'nova', text: 'Hola Lucía 👋 Vi que Glow Lab vende mascarillas y serum. ¿Trabajamos hoy tu primera publicación de venta?' },
  { id: 2, from: 'user', text: 'Sí, pero no sé qué escribir para que la gente me compre.' },
  {
    id: 3,
    from: 'nova',
    text: 'Empecemos por el dolor de tu clienta, no por el producto. Prueba esta estructura:',
    block: '1. El problema en 1 línea\n2. Por qué tu mascarilla lo resuelve\n3. Prueba (antes/después o reseña)\n4. Llamado directo: "escríbeme MASCARILLA"',
    chips: ['Dame un ejemplo', 'Revisa mi texto'],
  },
];

const CANNED_REPLIES = [
  'Buena pregunta. Cuéntame más sobre tu clienta ideal y armamos el mensaje juntas.',
  'Con eso ya tenemos suficiente. Prueba publicarlo hoy y cuéntame cómo respondió tu audiencia.',
  'Recuerda: un llamado a la acción claro vale más que un texto perfecto. ¿Quieres que lo revisemos línea por línea?',
];

let nextId = 100;

export default function ChatScreen() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  function sendUserText(text) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: nextId++, from: 'user', text }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
      setMessages((prev) => [...prev, { id: nextId++, from: 'nova', text: reply }]);
    }, 1100);
  }

  return (
    <Screen background="#F7F7FB">
      <div style={{ flex: 'none', background: '#FFFFFF', borderBottom: '1px solid #EDEBF4', padding: '18px 18px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div onClick={() => navigate('/dashboard')} style={{ width: 34, height: 34, flex: 'none', borderRadius: 12, background: '#F4F3F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: '#4A4857', cursor: 'pointer' }}>‹</div>
        <div style={{ width: 44, height: 44, flex: 'none', borderRadius: 14, background: 'linear-gradient(135deg, #F5C744, #D9A61E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 8px 18px rgba(217,166,30,0.3)' }}>🤖</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <div className="heading-font" style={{ fontSize: 17, fontWeight: 800, color: '#16151F' }}>Nova</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: '#1C7A4A' }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: '#1C7A4A' }} />Tu mentor de IA
          </div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflow: 'auto', padding: '18px 18px 8px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ alignSelf: 'center', fontSize: 10.5, fontWeight: 600, color: '#A09EB0', background: '#EDEBF4', borderRadius: 999, padding: '4px 11px' }}>HOY · 9:32</div>
        {messages.map((m) =>
          m.from === 'nova' ? (
            <div key={m.id} style={{ alignSelf: 'flex-start', maxWidth: '88%', background: '#FFFFFF', border: '1px solid #E9E8F0', borderRadius: '20px 20px 20px 6px', padding: '13px 15px', display: 'flex', flexDirection: 'column', gap: 9 }}>
              <div style={{ fontSize: 13.5, color: '#16151F', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{m.text}</div>
              {m.block && (
                <div style={{ background: '#F3EFFC', borderRadius: 14, padding: '11px 13px', fontSize: 12.5, color: '#3B3949', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{m.block}</div>
              )}
              {m.chips && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {m.chips.map((c) => (
                    <button key={c} onClick={() => sendUserText(c)} style={{ height: 30, padding: '0 12px', borderRadius: 999, background: '#F7F7FB', border: '1px solid #E9E8F0', display: 'flex', alignItems: 'center', fontSize: 11.5, fontWeight: 600, color: '#4A4857', cursor: 'pointer' }}>{c}</button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div key={m.id} style={{ alignSelf: 'flex-end', maxWidth: '84%', background: 'linear-gradient(120deg, #4C6FFF, #8B3FE8)', borderRadius: '20px 20px 6px 20px', padding: '13px 15px', fontSize: 13.5, color: '#FFFFFF', lineHeight: 1.5 }}>{m.text}</div>
          )
        )}
        {typing && (
          <div style={{ alignSelf: 'flex-start', background: '#FFFFFF', border: '1px solid #E9E8F0', borderRadius: '20px 20px 20px 6px', padding: '14px 16px', display: 'flex', gap: 5 }}>
            <div style={{ width: 7, height: 7, borderRadius: 999, background: '#C3C0D4' }} />
            <div style={{ width: 7, height: 7, borderRadius: 999, background: '#D8D6E4' }} />
            <div style={{ width: 7, height: 7, borderRadius: 999, background: '#E6E4EE' }} />
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); sendUserText(draft); }}
        style={{ flex: 'none', background: '#FFFFFF', borderTop: '1px solid #EDEBF4', padding: '14px 18px 24px', display: 'flex', alignItems: 'center', gap: 10 }}
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Escríbele a Nova..."
          style={{ flex: 1, height: 50, borderRadius: 999, background: '#F4F3F9', border: '1px solid #EDEBF4', padding: '0 18px', fontSize: 14, color: '#16151F', outline: 'none' }}
        />
        <button type="submit" style={{ width: 50, height: 50, flex: 'none', borderRadius: 999, background: 'linear-gradient(135deg, #4C6FFF, #B721D6)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, color: '#FFFFFF', boxShadow: '0 10px 22px rgba(103,63,232,0.32)', cursor: 'pointer' }}>↑</button>
      </form>
    </Screen>
  );
}
