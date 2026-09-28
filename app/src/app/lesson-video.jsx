import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Screen, BackChip, PrimaryButton, NovaAvatar } from '../components/ui';
import { colors, fonts } from '../theme';

export default function LessonVideoScreen() {
  return (
    <Screen>
      <View style={styles.header}>
        <BackChip icon="✕" onPress={() => router.back()} />
        <View style={styles.progressRow}>
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.trackDim }]} />
          <View style={[styles.seg, { backgroundColor: colors.trackDim }]} />
          <View style={[styles.seg, { backgroundColor: colors.trackDim }]} />
        </View>
        <Text style={styles.stepText}>1/4</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.videoBox}>
          <View style={styles.playCircle}>
            <View style={styles.playTriangle} />
          </View>
          <View style={styles.videoBottom}>
            <View style={styles.videoTrack}>
              <View style={styles.videoFill} />
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>02:14</Text>
              <Text style={styles.timeText}>06:30</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Text style={styles.eyebrow}>CLASE 1 · ¿QUÉ ES EL E-COMMERCE?</Text>
          <Text style={styles.title}>¿Qué es el e-commerce?</Text>
          <Text style={styles.description}>
            El comercio electrónico consiste en comprar o vender bienes y servicios mediante redes
            digitales. Una operación es e-commerce cuando el pedido se realiza a través de un
            proceso digital — el pago o la entrega no necesariamente tienen que ocurrir por internet.
          </Text>
        </View>

        <View style={styles.novaCard}>
          <NovaAvatar size={42} radius={13} emojiSize={21} />
          <View>
            <Text style={styles.novaName}>Nova</Text>
            <Text style={styles.novaRole}>mentora de esta lección</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <PrimaryButton label="Continuar" onPress={() => router.push('/lesson-quiz')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 12 },
  progressRow: { flex: 1, flexDirection: 'row', gap: 6 },
  seg: { flex: 1, height: 6, borderRadius: 4 },
  stepText: { fontFamily: fonts.caption, fontSize: 11, color: colors.textOnDarkMuted },
  body: { flex: 1, paddingHorizontal: 24, gap: 18 },
  videoBox: {
    borderRadius: 22, backgroundColor: colors.accent, aspectRatio: 16 / 10,
    alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  playCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.92)', alignItems: 'center', justifyContent: 'center' },
  playTriangle: {
    width: 0, height: 0, marginLeft: 6,
    borderTopWidth: 13, borderBottomWidth: 13, borderLeftWidth: 22,
    borderTopColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: colors.bg,
  },
  videoBottom: { position: 'absolute', left: 16, right: 16, bottom: 14, gap: 7 },
  videoTrack: { height: 4, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.28)', overflow: 'hidden' },
  videoFill: { width: '34%', height: '100%', backgroundColor: '#222B93' },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between' },
  timeText: { fontFamily: fonts.caption, fontSize: 10, color: '#D6DBFF' },
  eyebrow: { fontFamily: fonts.caption, fontSize: 11, letterSpacing: 1.5, color: colors.textOnDarkMuted },
  title: { fontFamily: fonts.displayBold, fontSize: 27, color: '#FFFFFF', lineHeight: 33 },
  description: { fontFamily: fonts.body, fontSize: 15, lineHeight: 23, color: colors.textOnDarkSoft },
  novaCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: colors.card, borderRadius: 18, padding: 14 },
  novaName: { fontFamily: fonts.cardTitle, fontSize: 14, color: colors.textDark },
  novaRole: { fontFamily: fonts.captionRegular, fontSize: 12, color: colors.textMuted },
  footer: { padding: 24 },
});
