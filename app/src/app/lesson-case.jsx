import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Screen, BackChip, PrimaryButton } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

export default function LessonCaseScreen() {
  const { caseDecision, setCaseDecision } = useAppState();
  const si = caseDecision === 'si';
  const no = caseDecision === 'no';

  return (
    <Screen>
      <View style={styles.header}>
        <BackChip onPress={() => router.back()} />
        <View style={styles.progressRow}>
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.trackDim }]} />
        </View>
        <Text style={styles.stepText}>3/4</Text>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <View style={styles.caseCard}>
          <Image source={require('../../assets/case-sneakers-ad.png')} style={styles.caseThumb} resizeMode="cover" />
          <View style={{ padding: 18, gap: 10 }}>
            <Text style={styles.caseEyebrow}>CASO REAL · ¿ES O NO ES E-COMMERCE?</Text>
            <Text style={styles.caseTitle}>Zapatillas por Instagram</Text>
            <Text style={styles.caseDesc}>
              Un estudiante ve un anuncio de zapatillas en Instagram, pero decide ir a la tienda
              física y comprarlas ahí, sin hacer ningún pedido por internet.
            </Text>
          </View>
        </View>

        <Text style={styles.question}>¿Es esto e-commerce?</Text>

        <View style={styles.choiceRow}>
          <Pressable
            onPress={() => setCaseDecision('si')}
            style={[styles.choice, { backgroundColor: si ? colors.cyan : colors.card }]}
          >
            <Text style={[styles.choiceText, { color: si ? colors.textDark : colors.textMuted }]}>Sí</Text>
          </Pressable>
          <Pressable
            onPress={() => setCaseDecision('no')}
            style={[styles.choice, { backgroundColor: no ? colors.cyan : colors.card }]}
          >
            <Text style={[styles.choiceText, { color: no ? colors.textDark : colors.textMuted }]}>No</Text>
          </Pressable>
        </View>

        <View style={styles.pistaCard}>
          <Text style={styles.pistaEyebrow}>PISTA</Text>
          <Text style={styles.pistaText}>
            E-commerce no significa solo "estar en internet". Significa que el pedido se realiza
            mediante un proceso digital — si la compra ocurre físicamente, no cuenta.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton label="Confirmar decisión" onPress={() => router.push('/lesson-resolution')} />
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
  caseCard: { borderRadius: 22, backgroundColor: colors.card, overflow: 'hidden' },
  caseThumb: { width: '100%', aspectRatio: 1 },
  caseEyebrow: { fontFamily: fonts.caption, fontSize: 10, letterSpacing: 1.5, color: colors.textMuted },
  caseTitle: { fontFamily: fonts.displayBold, fontSize: 24, color: colors.textDark },
  caseDesc: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.textBody },
  question: { fontFamily: fonts.displayBold, fontSize: 17, color: '#FFFFFF' },
  choiceRow: { flexDirection: 'row', gap: 12 },
  choice: { flex: 1, height: 72, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  choiceText: { fontFamily: fonts.emphasis, fontSize: 18 },
  pistaCard: { backgroundColor: colors.accent, borderRadius: 18, padding: 16, gap: 8 },
  pistaEyebrow: { fontFamily: fonts.caption, fontSize: 10, letterSpacing: 1.5, color: '#C3C9F5' },
  pistaText: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: '#EDEFFF' },
  footer: { padding: 24 },
});
