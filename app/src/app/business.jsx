import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';
import { Screen, PrimaryButton } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts, BUSINESS_OPTIONS, BUSINESS_PLACEHOLDER_LABEL, BUSINESS_UNDEFINED } from '../theme';

function FlipCard({ number, label, flipped, selected, onPress }) {
  // Volteo simulado con scaleX (comprime a una tira vertical, cambia el contenido, se expande).
  // Evitamos rotateY + perspective: esa combinación es poco confiable con el native driver en
  // dispositivos reales (funciona en el preview web porque react-native-web simula el native
  // driver sin ejecutar la misma ruta de código nativa, así que ahí no se detecta el problema).
  const scaleX = useRef(new Animated.Value(1)).current;
  const [showBack, setShowBack] = useState(flipped);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return; // ya arranca en el estado correcto (showBack = flipped), sin animar
    }
    if (flipped === showBack) return;
    Animated.timing(scaleX, { toValue: 0, duration: 130, useNativeDriver: true }).start(() => {
      setShowBack(flipped);
      Animated.timing(scaleX, { toValue: 1, duration: 130, useNativeDriver: true }).start();
    });
  }, [flipped]);

  return (
    <Pressable onPress={onPress} style={styles.cardWrap}>
      <Animated.View
        style={[
          styles.cardFace,
          { backgroundColor: showBack ? (selected ? colors.cyan : colors.cardMuted) : colors.card },
          { transform: [{ scaleX }] },
        ]}
      >
        {showBack ? (
          <Text style={[styles.cardBackLabel, { color: selected ? colors.textDark : colors.textMuted }]}>
            {label}
          </Text>
        ) : (
          <Text style={styles.numberText}>{number}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

export default function BusinessScreen() {
  const { business, toggleBusiness } = useAppState();
  const [previewFlipped, setPreviewFlipped] = useState(false);
  const goNext = () => router.push('/dashboard');

  const [undefinedKey, undefinedLabel] = BUSINESS_UNDEFINED;
  const undefinedOn = business.has(undefinedKey);

  return (
    <Screen>
      <View style={styles.topRow}>
        <View style={styles.progressRow}>
          <View style={[styles.progressDash, { backgroundColor: colors.orange }]} />
          <View style={[styles.progressDash, { backgroundColor: colors.orange }]} />
          <View style={[styles.progressDash, { backgroundColor: colors.trackDim }]} />
        </View>
        <Pressable style={styles.skipChip} onPress={goNext}>
          <Text style={styles.skipText}>SKIP</Text>
        </Pressable>
      </View>

      <View style={styles.headingBlock}>
        <Text style={styles.heading}>
          Tu idea de <Text style={styles.headingHighlight}>negocio</Text>
        </Text>
        <Text style={styles.subheading}>Toca una casilla para descubrir el rubro.</Text>
      </View>

      <View style={styles.grid}>
        {BUSINESS_OPTIONS.map(([key, label], i) => (
          <FlipCard
            key={key}
            number={i + 1}
            label={label}
            flipped={business.has(key)}
            selected={business.has(key)}
            onPress={() => toggleBusiness(key)}
          />
        ))}
        <FlipCard
          number={BUSINESS_OPTIONS.length + 1}
          label={BUSINESS_PLACEHOLDER_LABEL}
          flipped={previewFlipped}
          selected={false}
          onPress={() => setPreviewFlipped((v) => !v)}
        />
      </View>

      <View style={styles.footerStack}>
        <Pressable
          onPress={() => toggleBusiness(undefinedKey)}
          style={[styles.undefinedButton, { backgroundColor: undefinedOn ? colors.cyan : colors.card }]}
        >
          <Text style={[styles.undefinedText, { color: undefinedOn ? colors.textDark : colors.textMuted }]}>
            {undefinedLabel}
          </Text>
        </Pressable>

        <PrimaryButton label="Comenzar" onPress={goNext} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: { paddingHorizontal: 28, paddingTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  progressRow: { flexDirection: 'row', gap: 6 },
  progressDash: { width: 34, height: 5, borderRadius: 3 },
  skipChip: { paddingHorizontal: 18, paddingVertical: 9, borderRadius: 999, backgroundColor: colors.accentSoft, borderWidth: 1, borderColor: colors.border },
  skipText: { fontFamily: fonts.caption, fontSize: 12, letterSpacing: 1.5, color: colors.textOnDarkFaint },
  headingBlock: { paddingHorizontal: 28, paddingTop: 28, paddingBottom: 18, gap: 10 },
  heading: { fontFamily: fonts.displayBold, fontSize: 32, color: '#FFFFFF', lineHeight: 38 },
  headingHighlight: { backgroundColor: colors.checkFill, color: '#FFFFFF', paddingHorizontal: 6, borderRadius: 5, overflow: 'hidden' },
  subheading: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22, color: colors.textOnDarkFaint },
  grid: {
    paddingHorizontal: 28,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  cardWrap: { width: '48%', aspectRatio: 1.35 },
  cardFace: {
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  numberText: { fontFamily: fonts.displayBold, fontSize: 26, color: colors.textDark },
  cardBackLabel: { fontFamily: fonts.emphasis, fontSize: 16, textAlign: 'center' },
  footerStack: { padding: 28, paddingTop: 16, gap: 12 },
  undefinedButton: { height: 58, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  undefinedText: { fontFamily: fonts.emphasis, fontSize: 16 },
});
