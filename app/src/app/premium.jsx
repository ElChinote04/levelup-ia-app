import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { Screen, BackChip, PrimaryButton } from '../components/ui';
import { colors, fonts, APP_NAME } from '../theme';

const BENEFITS = [
  'Diamantes cada semana',
  '2x diamantes por lección',
  'Personaliza tu animal',
  'Personaliza tu chat con Nova',
];

export default function PremiumScreen() {
  const activatePremium = () => {
    Alert.alert('¡Premium activado!', 'Bienvenida de vuelta 🚀', [
      { text: 'Continuar', onPress: () => router.dismissTo('/dashboard') },
    ]);
  };

  return (
    <Screen>
      <View style={styles.closeRow}>
        <BackChip icon="✕" onPress={() => router.back()} />
      </View>

      <View style={styles.headingBlock}>
        <Text style={styles.eyebrow}>{APP_NAME.toUpperCase()} PREMIUM</Text>
        <Text style={styles.headline}>Explora sin{'\n'}quedarte sin combustible</Text>
      </View>

      <View style={styles.priceCard}>
        <View style={styles.priceRow}>
          <Text style={styles.price}>S/ 29</Text>
          <Text style={styles.priceUnit}>/ mes</Text>
        </View>
        <View style={{ gap: 12 }}>
          {BENEFITS.map((b) => (
            <View key={b} style={styles.benefitRow}>
              <View style={styles.checkCircle}>
                <Text style={styles.checkMark}>✓</Text>
              </View>
              <Text style={styles.benefitText}>{b}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.compareRow}>
        <View style={[styles.compareCard, { backgroundColor: colors.card }]}>
          <Text style={styles.compareLabelMuted}>GRATIS</Text>
          <Text style={styles.compareTitleDark}>Diamantes que ganas</Text>
          <Text style={styles.compareSubMuted}>solo por avanzar</Text>
        </View>
        <View style={[styles.compareCard, { backgroundColor: colors.cyan }]}>
          <Text style={styles.compareLabelDeep}>PREMIUM</Text>
          <Text style={styles.compareTitleDark}>N 💠 por semana</Text>
          <Text style={styles.compareSubDeep}>cantidad por definir</Text>
        </View>
      </View>

      <View style={{ flex: 1 }} />

      <View style={styles.footer}>
        <PrimaryButton label="Activar Premium" onPress={activatePremium} />
        <Text style={styles.footerNote}>Puedes cancelar cuando quieras</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  closeRow: { paddingHorizontal: 24, paddingTop: 8, alignItems: 'flex-end' },
  headingBlock: { paddingHorizontal: 24, paddingTop: 14, gap: 8 },
  eyebrow: { fontFamily: fonts.caption, fontSize: 11, letterSpacing: 1.8, color: colors.textOnDarkMuted },
  headline: { fontFamily: fonts.displayBold, fontSize: 34, color: '#FFFFFF', lineHeight: 40 },
  priceCard: { margin: 24, marginBottom: 16, backgroundColor: colors.accent, borderRadius: 24, padding: 22, gap: 18 },
  priceRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  price: { fontFamily: fonts.displayBold, fontSize: 44, color: '#FFFFFF' },
  priceUnit: { fontFamily: fonts.captionRegular, fontSize: 15, color: '#C3C9F5', paddingBottom: 7 },
  benefitRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  checkCircle: { width: 24, height: 24, borderRadius: 12, backgroundColor: colors.cyan, alignItems: 'center', justifyContent: 'center' },
  checkMark: { fontFamily: fonts.displayBold, color: '#0E1666', fontSize: 12 },
  benefitText: { fontFamily: fonts.emphasis, fontSize: 15, color: '#FFFFFF' },
  compareRow: { flexDirection: 'row', gap: 12, paddingHorizontal: 24 },
  compareCard: { flex: 1, borderRadius: 18, padding: 16, gap: 6 },
  compareLabelMuted: { fontFamily: fonts.caption, fontSize: 10, color: colors.textMuted },
  compareLabelDeep: { fontFamily: fonts.caption, fontSize: 10, color: colors.cyanDeep },
  compareTitleDark: { fontFamily: fonts.cardTitle, fontSize: 15, color: colors.textDark },
  compareSubMuted: { fontFamily: fonts.captionRegular, fontSize: 12, color: colors.textMuted },
  compareSubDeep: { fontFamily: fonts.captionRegular, fontSize: 12, color: colors.cyanDeep },
  footer: { padding: 24, gap: 12 },
  footerNote: { fontFamily: fonts.captionRegular, fontSize: 12, color: colors.textOnDarkMuted, textAlign: 'center' },
});
