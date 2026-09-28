import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { router } from 'expo-router';
import { Screen, BackChip, BottomNavGalaxy } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

// Pantalla estática (sin scroll): todo el camino del planeta cabe en una sola
// vista, como en la propuesta de Claude Design. Referencia de coordenadas:
// lienzo de 390x660 (el área que queda entre el header y la barra inferior).
const TOTAL_STOPS = 5;
const DONE_STOPS = 2;

const NODES = [
  { key: 'cdmx', type: 'main-locked', label: 'Ciudad de México', unlockNote: 'se desbloquea en la parada 5', x: 262, y: 40 },
  { key: 'bogota', type: 'locked-numbered', label: 'Bogotá', number: 4, x: 108, y: 168 },
  { key: 'lima', type: 'current', label: 'Lima', lesson: 'Lección 1 · E-commerce', x: 195, y: 300 },
  { key: 'santiago', type: 'done-check', label: 'Santiago', x: 272, y: 470 },
  { key: 'buenosaires', type: 'done-check', label: 'Buenos Aires', x: 130, y: 568 },
];

const TRAIL_D =
  'M262,40 C220,90 155,130 108,168 C60,208 245,255 195,320 C155,368 300,415 272,470 C240,515 175,545 130,568';

const COASTLINES = [
  { key: 'c1', d: 'M30,10 C90,50 60,110 110,160 C160,210 120,280 170,330 C210,370 180,430 220,480' },
  { key: 'c2', d: 'M360,20 C320,70 350,120 310,170 C270,220 300,270 260,320 C230,360 260,400 230,450' },
  { key: 'c3', d: 'M50,420 C100,460 80,510 130,545 C170,575 150,610 190,640' },
];

const PLACE_LABELS = [
  { key: 'mexico', x: 40, y: 22, label: 'México' },
  { key: 'colombia', x: 260, y: 155, label: 'Colombia' },
  { key: 'ecuador', x: 30, y: 250, label: 'Ecuador' },
  { key: 'peru', x: 285, y: 300, label: 'Perú' },
  { key: 'chile', x: 100, y: 455, label: 'Chile' },
  { key: 'argentina', x: 260, y: 555, label: 'Argentina' },
];

export default function PathScreen() {
  const { diamonds } = useAppState();
  const [madridVisible, setMadridVisible] = useState(false);

  return (
    <Screen bg={colors.bgPath} edges={['top']}>
      <View style={styles.topBanner}>
        <Text style={styles.topBannerText}>PIZARRA + TU EXPLICACIÓN</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackChip onPress={() => router.back()} />
          <View>
            <Text style={styles.planetTitle}>Planeta Tierra</Text>
            <Text style={styles.planetSubtitle}>tema visual: lugares del mundo real</Text>
          </View>
        </View>
        <View style={styles.diamondChip}>
          <View style={styles.diamondShape} />
          <Text style={styles.diamondText}>{diamonds}</Text>
        </View>
      </View>

      <View style={styles.mapArea}>
        <LinearGradient colors={['#0C1250', '#16205C', '#1D2596']} style={StyleSheet.absoluteFill} />

        <Svg width="100%" height="100%" viewBox="0 0 390 660" style={StyleSheet.absoluteFill} preserveAspectRatio="none">
          {COASTLINES.map((c) => (
            <Path key={c.key} d={c.d} stroke="#5A67C2" strokeWidth={2} fill="none" opacity={0.4} strokeLinecap="round" />
          ))}
          <Path
            d={TRAIL_D}
            stroke={colors.orange} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round"
            fill="none" opacity={0.9}
          />
        </Svg>

        {PLACE_LABELS.map((p) => (
          <Text key={p.key} style={[styles.placeLabel, { left: p.x, top: p.y }]}>{p.label}</Text>
        ))}

        <Pressable style={[styles.hintPill, { left: 195 - 90, top: 8 }]} onPress={() => setMadridVisible(true)}>
          <Text style={styles.hintPillText}>sigue hacia Madrid ↗</Text>
        </Pressable>

        {NODES.map((n) => <TrailNode key={n.key} node={n} />)}

        <View style={styles.progressPill}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${(DONE_STOPS / TOTAL_STOPS) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{DONE_STOPS} / {TOTAL_STOPS} paradas</Text>
        </View>
      </View>

      <BottomNavGalaxy
        onMenu={() => router.push('/dashboard')}
        onWorld={() => router.push('/galaxy')}
        onChat={() => router.push('/chat')}
        borderColor={colors.border}
        bg="rgba(12,18,80,0.94)"
        iconColor="#A7B0FF"
      />

      <Modal visible={madridVisible} transparent animationType="fade" onRequestClose={() => setMadridVisible(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalIcon}>
              <Text style={{ fontSize: 28 }}>🔒</Text>
            </View>
            <Text style={styles.modalText}>Aún no puedes viajar a este lugar</Text>
            <Pressable style={styles.modalButton} onPress={() => setMadridVisible(false)}>
              <Text style={styles.modalButtonText}>Entendido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

function TrailNode({ node }) {
  const { type, label, x, y } = node;

  if (type === 'main-locked') {
    return (
      <View style={[styles.node, { left: x, top: y }]}>
        <LinearGradient colors={[colors.novaStart, colors.novaEnd]} style={[styles.mainStop, { opacity: 0.55 }]}>
          <Text style={styles.mainStopEyebrow}>PARADA</Text>
          <Text style={styles.mainStopLabel}>PRINCIPAL</Text>
        </LinearGradient>
        <Text style={styles.nodeLabelDark}>{label}</Text>
        <Text style={styles.unlockNote}>{node.unlockNote}</Text>
      </View>
    );
  }

  if (type === 'locked-numbered') {
    return (
      <View style={[styles.node, { left: x, top: y }]}>
        <View style={styles.nodeCircleLocked}>
          <Text style={styles.nodeNumber}>{node.number}</Text>
        </View>
        <Text style={styles.nodeLockedLabel}>{label}</Text>
      </View>
    );
  }

  if (type === 'current') {
    return (
      <View style={[styles.node, { left: x, top: y, width: 220, marginLeft: -110 }]}>
        <View style={styles.currentRow}>
          <Pressable style={styles.currentRing} onPress={() => router.push('/lesson-video')}>
            <View style={styles.currentCircle}>
              <Text style={styles.nodePlay}>▶</Text>
            </View>
          </Pressable>
          <View style={styles.hereCard}>
            <Text style={styles.hereEyebrow}>ESTÁS AQUÍ</Text>
            <Text style={styles.hereTitle}>{label}</Text>
            <Text style={styles.hereSub}>{node.lesson}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.node, { left: x, top: y }]}>
      <LinearGradient colors={[colors.cyan, '#63C9E8']} style={styles.nodeCircleDone}>
        <Text style={styles.nodeCheck}>✓</Text>
      </LinearGradient>
      <Text style={styles.nodeLabelDark}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBanner: { alignSelf: 'center', marginTop: 6, paddingHorizontal: 14, paddingVertical: 6, borderRadius: 999, backgroundColor: 'rgba(167,151,255,0.22)', borderWidth: 1, borderColor: 'rgba(167,151,255,0.4)' },
  topBannerText: { fontFamily: fonts.caption, fontSize: 9, letterSpacing: 1, color: colors.violet },
  header: { paddingHorizontal: 24, paddingTop: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  planetTitle: { fontFamily: fonts.displayBold, fontSize: 18, color: '#FFFFFF' },
  planetSubtitle: { fontFamily: fonts.caption, fontSize: 10, color: '#C3C9F5' },
  diamondChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: colors.border },
  diamondShape: { width: 12, height: 12, backgroundColor: colors.cyan, borderRadius: 2, transform: [{ rotate: '45deg' }] },
  diamondText: { fontFamily: fonts.emphasis, fontSize: 13, color: '#FFFFFF' },

  mapArea: { flex: 1, marginTop: 4, overflow: 'hidden' },

  placeLabel: { position: 'absolute', fontFamily: fonts.caption, fontSize: 10, letterSpacing: 0.5, color: '#8E97F0' },

  hintPill: {
    position: 'absolute', width: 180, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.92)', alignItems: 'center',
  },
  hintPillText: { fontFamily: fonts.emphasis, fontSize: 11, color: colors.textDark },

  node: { position: 'absolute', alignItems: 'center', gap: 6, width: 120, marginLeft: -60 },
  nodeCircleDone: { width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center' },
  nodeCheck: { fontFamily: fonts.displayBold, fontSize: 18, color: colors.bgPath },
  nodeLabelDark: {
    fontFamily: fonts.cardTitle, fontSize: 11, color: '#14142B', textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 8,
  },

  mainStop: { width: 78, height: 78, borderRadius: 20, borderWidth: 3, borderColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', gap: 2 },
  mainStopEyebrow: { fontFamily: fonts.caption, fontSize: 8, letterSpacing: 1, color: '#5A3C05' },
  mainStopLabel: { fontFamily: fonts.emphasis, fontSize: 12, color: '#3A2606' },
  unlockNote: { fontFamily: fonts.captionRegular, fontSize: 9, color: '#C3C9F5', textAlign: 'center' },

  nodeCircleLocked: {
    width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(11,16,67,0.7)',
    borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)', borderStyle: 'dashed',
    alignItems: 'center', justifyContent: 'center',
  },
  nodeNumber: { fontFamily: fonts.displayBold, fontSize: 16, color: '#FFFFFF' },
  nodeLockedLabel: { fontFamily: fonts.cardTitle, fontSize: 11, color: '#FFFFFF' },

  currentRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  currentRing: {
    width: 72, height: 72, borderRadius: 36, borderWidth: 3, borderColor: 'rgba(167,230,242,0.55)',
    alignItems: 'center', justifyContent: 'center',
  },
  currentCircle: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  nodePlay: { color: colors.accent, fontSize: 18 },
  hereCard: { flex: 1, backgroundColor: colors.card, borderRadius: 14, padding: 10, gap: 2 },
  hereEyebrow: { fontFamily: fonts.caption, fontSize: 8, letterSpacing: 1, color: colors.orange },
  hereTitle: { fontFamily: fonts.displayBold, fontSize: 15, color: colors.textDark },
  hereSub: { fontFamily: fonts.captionRegular, fontSize: 10, color: colors.accent },

  progressPill: {
    position: 'absolute', left: 16, bottom: 12, flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 14, paddingVertical: 9, borderRadius: 999,
    backgroundColor: 'rgba(11,16,67,0.85)', borderWidth: 1, borderColor: 'rgba(167,176,255,0.35)',
  },
  progressTrack: { width: 70, height: 6, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.16)', overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.orange, borderRadius: 4 },
  progressText: { fontFamily: fonts.caption, fontSize: 10, color: '#E6E9FF' },

  modalBackdrop: { flex: 1, backgroundColor: 'rgba(6,8,30,0.72)', alignItems: 'center', justifyContent: 'center', padding: 32 },
  modalCard: { width: '100%', maxWidth: 320, backgroundColor: colors.card, borderRadius: 22, padding: 26, alignItems: 'center', gap: 16 },
  modalIcon: { width: 56, height: 56, borderRadius: 16, backgroundColor: colors.cardAlt, alignItems: 'center', justifyContent: 'center' },
  modalText: { fontFamily: fonts.cardTitle, fontSize: 17, color: colors.textDark, textAlign: 'center', lineHeight: 24 },
  modalButton: { alignSelf: 'stretch', height: 50, borderRadius: 14, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  modalButtonText: { fontFamily: fonts.emphasis, color: '#FFFFFF', fontSize: 15 },
});
