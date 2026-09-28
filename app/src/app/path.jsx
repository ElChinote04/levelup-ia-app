import React, { useRef } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { router } from 'expo-router';
import { Screen, BackChip, BottomNavGalaxy } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

// Camino simple de un solo trazo (como un mapa de niveles), pero ahora con el
// telón de fondo de un mapa real: siluetas de costa muy tenues + nombres de
// país/ciudad, en vez del terreno genérico de la versión anterior. Ajuste
// pedido tras ver una propuesta de Claude Design con esta combinación.
const TRAIL_W = 390;
const TRAIL_H = 1500;
const TOTAL_STOPS = 5;
const DONE_STOPS = 2;

const NODES = [
  { key: 'buenosaires', type: 'done-check', label: 'Buenos Aires', x: 260, y: 1330 },
  { key: 'santiago', type: 'done-check', label: 'Santiago', x: 125, y: 1140 },
  { key: 'lima', type: 'current', label: 'Lima', lesson: 'Lección 1 · E-commerce', x: 255, y: 940 },
  { key: 'bogota', type: 'locked-numbered', label: 'Bogotá', number: 4, x: 120, y: 740 },
  { key: 'cdmx', type: 'main-locked', label: 'Ciudad de México', unlockNote: 'se desbloquea en la parada 5', x: 260, y: 540 },
];

const TRAIL_D =
  'M260,1330 C220,1270 170,1210 125,1140 C80,1070 195,1005 255,940 C300,890 165,800 120,740 C80,690 295,600 260,540 C230,495 175,430 200,380';

// Siluetas de costa muy tenues (solo trazo, sin relleno), como telón de fondo tipo mapa.
const COASTLINES = [
  { key: 'c1', d: 'M40,60 C120,30 180,100 150,190 C120,280 200,340 170,430 C140,520 210,600 180,690' },
  { key: 'c2', d: 'M350,120 C300,200 340,260 290,340 C240,420 300,480 260,560 C220,640 290,700 250,780' },
  { key: 'c3', d: 'M60,850 C130,900 100,970 160,1030 C220,1090 180,1160 240,1220 C290,1270 250,1340 300,1400' },
  { key: 'c4', d: 'M330,900 C280,960 320,1020 280,1090 C240,1160 290,1220 250,1290' },
];

const PLACE_LABELS = [
  { key: 'mexico', x: 70, y: 470, label: 'México' },
  { key: 'cuba', x: 300, y: 605, label: 'Cuba' },
  { key: 'colombia', x: 300, y: 700, label: 'Colombia' },
  { key: 'venezuela', x: 310, y: 775, label: 'Venezuela' },
  { key: 'ecuador', x: 40, y: 855, label: 'Ecuador' },
  { key: 'peru', x: 300, y: 965, label: 'Perú' },
  { key: 'chile', x: 280, y: 1155, label: 'Chile' },
  { key: 'paraguay', x: 70, y: 1215, label: 'Paraguay' },
  { key: 'brasil', x: 295, y: 1255, label: 'Brasil' },
  { key: 'argentina', x: 165, y: 1385, label: 'Argentina' },
];

export default function PathScreen() {
  const { diamonds } = useAppState();
  const scrollRef = useRef(null);
  const didScroll = useRef(false);
  const viewportH = useRef(0);

  const scrollToLima = (animated) => {
    const lima = NODES.find((n) => n.key === 'lima');
    const h = viewportH.current;
    if (!h) return;
    const target = Math.max(0, Math.min(TRAIL_H - h, lima.y - h / 2));
    scrollRef.current?.scrollTo({ y: target, animated });
  };

  const onLayoutViewport = (e) => {
    viewportH.current = e.nativeEvent.layout.height;
    if (didScroll.current) return;
    didScroll.current = true;
    requestAnimationFrame(() => scrollToLima(false));
  };

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

      <View style={styles.trailViewport} onLayout={onLayoutViewport}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: TRAIL_W, height: TRAIL_H }}
        >
          <LinearGradient colors={['#0C1250', '#16205C', '#1D2596']} style={StyleSheet.absoluteFill} />

          <Svg width={TRAIL_W} height={TRAIL_H} style={StyleSheet.absoluteFill}>
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

          <View style={[styles.hintPill, { left: 195 - 90, top: 388 }]}>
            <Text style={styles.hintPillText}>sigue hacia Madrid ↗</Text>
          </View>

          {NODES.map((n) => <TrailNode key={n.key} node={n} />)}
        </ScrollView>

        <View style={styles.progressPill}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${(DONE_STOPS / TOTAL_STOPS) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>{DONE_STOPS} / {TOTAL_STOPS} paradas</Text>
        </View>

        <Pressable style={styles.recenterButton} onPress={() => scrollToLima(true)}>
          <View style={styles.recenterDot} />
        </Pressable>
      </View>

      <BottomNavGalaxy
        onMenu={() => {}}
        onWorld={() => router.push('/galaxy')}
        onChat={() => router.push('/chat')}
        borderColor={colors.border}
        bg="rgba(12,18,80,0.94)"
        iconColor="#A7B0FF"
      />
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

  const gradientColors = [colors.cyan, '#63C9E8'];
  return (
    <View style={[styles.node, { left: x, top: y }]}>
      <LinearGradient colors={gradientColors} style={styles.nodeCircleDone}>
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
  trailViewport: { flex: 1, overflow: 'hidden' },

  placeLabel: { position: 'absolute', fontFamily: fonts.caption, fontSize: 11, letterSpacing: 0.5, color: '#8E97F0' },

  hintPill: {
    position: 'absolute', width: 180, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.92)', alignItems: 'center',
  },
  hintPillText: { fontFamily: fonts.emphasis, fontSize: 11, color: colors.textDark },

  node: { position: 'absolute', alignItems: 'center', gap: 7, width: 130, marginLeft: -65 },
  nodeCircleDone: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
  nodeCheck: { fontFamily: fonts.displayBold, fontSize: 20, color: colors.bgPath },
  nodeLabelDark: {
    fontFamily: fonts.cardTitle, fontSize: 12, color: '#14142B', textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8,
  },

  mainStop: { width: 90, height: 90, borderRadius: 24, borderWidth: 3, borderColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', gap: 2 },
  mainStopEyebrow: { fontFamily: fonts.caption, fontSize: 9, letterSpacing: 1, color: '#5A3C05' },
  mainStopLabel: { fontFamily: fonts.emphasis, fontSize: 14, color: '#3A2606' },
  unlockNote: { fontFamily: fonts.captionRegular, fontSize: 10, color: '#C3C9F5', textAlign: 'center' },

  nodeCircleLocked: {
    width: 58, height: 58, borderRadius: 29, backgroundColor: 'rgba(11,16,67,0.7)',
    borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)', borderStyle: 'dashed',
    alignItems: 'center', justifyContent: 'center',
  },
  nodeNumber: { fontFamily: fonts.displayBold, fontSize: 18, color: '#FFFFFF' },
  nodeLockedLabel: { fontFamily: fonts.cardTitle, fontSize: 12, color: '#FFFFFF' },

  currentRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  currentRing: {
    width: 84, height: 84, borderRadius: 42, borderWidth: 3, borderColor: 'rgba(167,230,242,0.55)',
    alignItems: 'center', justifyContent: 'center',
  },
  currentCircle: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  nodePlay: { color: colors.accent, fontSize: 20 },
  hereCard: { flex: 1, backgroundColor: colors.card, borderRadius: 16, padding: 12, gap: 2 },
  hereEyebrow: { fontFamily: fonts.caption, fontSize: 9, letterSpacing: 1, color: colors.orange },
  hereTitle: { fontFamily: fonts.displayBold, fontSize: 17, color: colors.textDark },
  hereSub: { fontFamily: fonts.captionRegular, fontSize: 11, color: colors.accent },

  progressPill: {
    position: 'absolute', left: 20, bottom: 16, flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 14, paddingVertical: 9, borderRadius: 999,
    backgroundColor: 'rgba(11,16,67,0.85)', borderWidth: 1, borderColor: 'rgba(167,176,255,0.35)',
  },
  progressTrack: { width: 70, height: 6, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.16)', overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.orange, borderRadius: 4 },
  progressText: { fontFamily: fonts.caption, fontSize: 10, color: '#E6E9FF' },

  recenterButton: {
    position: 'absolute', right: 20, bottom: 16, width: 44, height: 44, borderRadius: 22,
    backgroundColor: 'rgba(11,16,67,0.85)', borderWidth: 1, borderColor: 'rgba(167,176,255,0.35)',
    alignItems: 'center', justifyContent: 'center',
  },
  recenterDot: { width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: colors.cyan },
});
