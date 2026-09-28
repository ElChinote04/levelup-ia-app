import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Screen, BackChip, PrimaryButton, NovaAvatar } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts, QUIZ_OPTIONS } from '../theme';

export default function LessonQuizScreen() {
  const { quiz, setQuiz } = useAppState();

  return (
    <Screen>
      <View style={styles.header}>
        <BackChip onPress={() => router.back()} />
        <View style={styles.progressRow}>
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.trackDim }]} />
          <View style={[styles.seg, { backgroundColor: colors.trackDim }]} />
        </View>
        <Text style={styles.stepText}>2/4</Text>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <View style={styles.refuerzoCard}>
          <Text style={styles.refuerzoEyebrow}>REFUERZO</Text>
          <Text style={styles.refuerzoTitle}>¿Cómo funciona una compra online?</Text>
          <Text style={styles.refuerzoDesc}>
            Una compra en e-commerce sigue un recorrido: descubrimiento → evaluación → decisión →
            compra → pago → preparación → entrega → postventa. El proceso no termina cuando el
            usuario presiona "Comprar".
          </Text>
        </View>

        <Text style={styles.question}>¿Qué característica define principalmente una transacción de e-commerce?</Text>

        <View style={{ gap: 10 }}>
          {QUIZ_OPTIONS.map(([key, label]) => {
            const on = quiz === key;
            return (
              <Pressable
                key={key}
                onPress={() => setQuiz(key)}
                style={[styles.option, { backgroundColor: on ? colors.cyan : colors.card }]}
              >
                <View style={[styles.optionBadge, { backgroundColor: on ? colors.checkFill : colors.cardAlt }]}>
                  <Text style={[styles.optionBadgeText, { color: on ? '#FFFFFF' : colors.textMuted }]}>
                    {key.toUpperCase()}
                  </Text>
                </View>
                <Text style={on ? styles.optionLabelOn : styles.optionLabelOff}>{label}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.hintBox}>
          <NovaAvatar size={26} radius={13} emojiSize={14} />
          <Text style={styles.hintText}>Nova puede explicarte esto otra vez por 2 💠</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton label="Comprobar" onPress={() => router.push('/lesson-case')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  progressRow: { flex: 1, flexDirection: 'row', gap: 6 },
  seg: { flex: 1, height: 6, borderRadius: 4 },
  stepText: { fontFamily: fonts.caption, fontSize: 11, color: colors.textOnDarkMuted },
  body: { flex: 1, paddingHorizontal: 24 },
  bodyContent: { gap: 16, paddingBottom: 16 },
  refuerzoCard: { backgroundColor: colors.accent, borderRadius: 24, padding: 24, gap: 12 },
  refuerzoEyebrow: { fontFamily: fonts.caption, fontSize: 11, letterSpacing: 1.5, color: '#C3C9F5' },
  refuerzoTitle: { fontFamily: fonts.displayBold, fontSize: 28, color: '#FFFFFF', lineHeight: 34 },
  refuerzoDesc: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: '#D6DBFF' },
  question: { fontFamily: fonts.displayBold, fontSize: 16, color: '#FFFFFF' },
  option: { borderRadius: 16, paddingHorizontal: 18, paddingVertical: 16, flexDirection: 'row', gap: 14, alignItems: 'center' },
  optionBadge: { width: 28, height: 28, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  optionBadgeText: { fontFamily: fonts.emphasis, fontSize: 13 },
  optionLabelOn: { flex: 1, fontFamily: fonts.emphasis, fontSize: 15, lineHeight: 20, color: colors.textDark },
  optionLabelOff: { flex: 1, fontFamily: fonts.body, fontSize: 15, lineHeight: 20, color: colors.textDark },
  hintBox: { flexDirection: 'row', gap: 10, alignItems: 'center', padding: 14, borderRadius: 16, backgroundColor: '#F4F2FF', borderWidth: 1, borderColor: '#D9D2FF', borderStyle: 'dashed' },
  hintText: { flex: 1, fontFamily: fonts.body, fontSize: 13, lineHeight: 19, color: '#524F91' },
  footer: { padding: 24 },
});
