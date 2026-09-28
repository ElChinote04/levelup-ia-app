import React, { createContext, useContext, useMemo, useState } from 'react';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [business, setBusiness] = useState(() => new Set(['ecommerce', 'ropa']));
  const [quiz, setQuiz] = useState('b');
  const [caseDecision, setCaseDecision] = useState(null);
  const [planetIndex, setPlanetIndex] = useState(0);
  const [diamonds, setDiamonds] = useState(128);

  const value = useMemo(
    () => ({
      business,
      toggleBusiness: (key) => {
        setBusiness((prev) => {
          const next = new Set(prev);
          if (next.has(key)) next.delete(key);
          else next.add(key);
          return next;
        });
      },
      quiz,
      setQuiz,
      caseDecision,
      setCaseDecision,
      planetIndex,
      cyclePlanet: (delta, total) => {
        setPlanetIndex((i) => (i + delta + total) % total);
      },
      jumpPlanet: setPlanetIndex,
      diamonds,
      setDiamonds,
    }),
    [business, quiz, caseDecision, planetIndex, diamonds]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
