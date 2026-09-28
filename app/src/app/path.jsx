import React, { useRef } from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { router } from 'expo-router';
import { Screen, BackChip, BottomNavGalaxy } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

// Camino simple, de un solo trazo (como los mapas de nivel de los juegos casuales),
// pero ambientado en el planeta Tierra: colinas y selva de un continente real en vez
// de props genéricos. Se desplaza solo verticalmente — sin arrastre libre — y arranca
// centrado en la lección actual (Lima).
const TRAIL_W = 390;
const TRAIL_H = 1520;

const NODES = [
  { key: 'bogota', type: 'done-check', label: 'Bogotá', x: 258, y: 1310 },
  { key: 'lima', type: 'main', label: 'Lima', x: 132, y: 1110 },
  { key: 'cdmx', type: 'next', label: 'Ciudad de México', x: 252, y: 910 },
  { key: 'locked1', type: 'locked', label: 'bloqueado', x: 122, y: 710 },
  { key: 'locked2', type: 'locked', label: 'bloqueado', x: 258, y: 520 },
  { key: 'locked3', type: 'locked', label: 'bloqueado', x: 132, y: 340 },
];

const TRAIL_D =
  'M258,1310 C220,1250 170,1200 132,1150 C 96,1104 200,1040 252,988 C 300,940 168,860 122,808 C 78,760 300,700 258,648 C 220,600 176,540 132,488 C 96,444 210,400 196,352';

const HILLS = [
  { key: 'h1', fill: '#2E7D5B', d: 'M0,1420 Q90,1360 190,1400 Q290,1440 390,1380 L390,1520 L0,1520 Z' },
  { key: 'h2', fill: '#3C9E71', d: 'M0,1480 Q100,1430 210,1470 Q300,1500 390,1450 L390,1520 L0,1520 Z' },
  { key: 'h3', fill: '#2E7D5B', d: 'M0,1020 Q100,970 210,1010 Q300,1040 390,990 L390,1140 L0,1140 Z' },
  { key: 'h4', fill: '#265F4A', d: 'M0,610 Q110,560 220,600 Q300,630 390,580 L390,760 L0,760 Z' },
  { key: 'h5', fill: '#234A3E', d: 'M0,140 Q120,90 220,130 Q300,160 390,110 L390,300 L0,300 Z' },
];

const MOUNTAINS = [
  { key: 'm1', fill: '#4A5A82', d: 'M20,760 L80,660 L130,730 L190,600 L250,760 Z' },
  { key: 'm2', fill: '#57699A', d: 'M210,150 L270,60 L320,140 L370,80 L390,150 L390,220 L210,220 Z' },
];

const CLOUDS = [
  { key: 'c1', x: 40, y: 210 },
  { key: 'c2', x: 260, y: 680 },
  { key: 'c3', x: 60, y: 980 },
  { key: 'c4', x: 300, y: 1240 },
];

export default function PathScreen() {
  const { diamonds } = useAppState();
  const scrollRef = useRef(null);
  const didScroll = useRef(false);

  const scrollToStart = (viewportH) => {
    if (didScroll.current || !viewportH) return;
    didScroll.current = true;
    const lima = NODES.find((n) => n.key === 'lima');
    const target = Math.max(0, Math.min(TRAIL_H - viewportH, lima.y - viewportH / 2));
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ y: target, animated: false });
    });
  };

  return (
    <Screen bg={colors.bgPath} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackChip onPress={() => router.back()} />
          <View>
            <Text style={styles.planetTitle}>Planeta Tierra</Text>
            <Text style={styles.planetSubtitle}>tema visual: un continente real</Text>
          </View>
        </View>
        <View style={styles.diamondChip}>
          <View style={styles.diamondShape} />
          <Text style={styles.diamondText}>{diamonds}</Text>
        </View>
      </View>

      <View style={styles.trailViewport} onLayout={(e) => scrollToStart(e.nativeEvent.layout.height)}>
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: TRAIL_W, height: TRAIL_H }}
        >
          <LinearGradient colors={['#1E7FB8', '#5FB8C9', '#7FCDA6']} style={StyleSheet.absoluteFill} />

          <Svg width={TRAIL_W} height={TRAIL_H} style={StyleSheet.absoluteFill}>
            {MOUNTAINS.map((m) => <Path key={m.key} d={m.d} fill={m.fill} opacity={0.7} />)}
            {HILLS.map((h) => <Path key={h.key} d={h.d} fill={h.fill} />)}
            <Path
              d={TRAIL_D}
              stroke="#FFFFFF" strokeWidth={5} strokeDasharray="2,14" strokeLinecap="round"
              fill="none" opacity={0.85}
            />
          </Svg>

          {CLOUDS.map((c) => (
            <View key={c.key} style={[styles.cloud, { left: c.x, top: c.y }]}>
              <View style={styles.cloudPuff} />
              <View style={[styles.cloudPuff, { width: 30, height: 30, marginLeft: -10 }]} />
              <View style={[styles.cloudPuff, { width: 22, height: 22, marginLeft: -8 }]} />
            </View>
          ))}

          <View style={[styles.flagMarker, { left: 196, top: 300 }]}>
            <View style={styles.flagPole} />
            <View style={styles.flagFlag}>
              <Text style={styles.flagText}>🔒</Text>
            </View>
            <Text style={styles.nodeLabelDark}>más lecciones{'\n'}muy pronto</Text>
          </View>

          {NODES.map((n) => <TrailNode key={n.key} node={n} />)}
        </ScrollView>
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

  if (type === 'main') {
    return (
      <View style={[styles.node, { left: x, top: y }]}>
        <LinearGradient colors={[colors.novaStart, colors.novaEnd]} style={styles.mainStop}>
          <Text style={styles.mainStopEyebrow}>PARADA</Text>
          <Text style={styles.mainStopLabel}>PRINCIPAL</Text>
        </LinearGradient>
        <Text style={styles.nodeLabelDark}>{label}</Text>
      </View>
    );
  }

  if (type === 'next') {
    return (
      <Pressable style={[styles.node, { left: x, top: y }]} onPress={() => router.push('/lesson-video')}>
        <View style={styles.nodeCircleNext}>
          <Text style={styles.nodePlay}>▶</Text>
        </View>
        <Text style={styles.nodeLabelDark}>{label}</Text>
      </Pressable>
    );
  }

  if (type === 'locked') {
    return (
      <View style={[styles.node, { left: x, top: y }]}>
        <View style={styles.nodeCircleLocked} />
        <Text style={styles.nodeLockedLabel}>{label}</Text>
      </View>
    );
  }

  const gradientColors = type === 'done-check' ? [colors.cyan, '#63C9E8'] : ['#FFFFFF', colors.cyan];
  return (
    <View style={[styles.node, { left: x, top: y }]}>
      <LinearGradient colors={gradientColors} style={styles.nodeCircleDone}>
        {type === 'done-check' ? <Text style={styles.nodeCheck}>✓</Text> : <View style={styles.nodeDot} />}
      </LinearGradient>
      <Text style={styles.nodeLabelDark}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingTop: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  planetTitle: { fontFamily: fonts.displayBold, fontSize: 18, color: '#FFFFFF' },
  planetSubtitle: { fontFamily: fonts.caption, fontSize: 10, color: '#C3C9F5' },
  diamondChip: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderColor: colors.border },
  diamondShape: { width: 12, height: 12, backgroundColor: colors.cyan, borderRadius: 2, transform: [{ rotate: '45deg' }] },
  diamondText: { fontFamily: fonts.emphasis, fontSize: 13, color: '#FFFFFF' },
  trailViewport: { flex: 1, overflow: 'hidden' },
  cloud: { position: 'absolute', flexDirection: 'row', alignItems: 'center' },
  cloudPuff: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.85)' },
  flagMarker: { position: 'absolute', alignItems: 'center', width: 110, marginLeft: -55 },
  flagPole: { width: 3, height: 34, backgroundColor: '#EFE7D0' },
  flagFlag: {
    position: 'absolute', top: 0, left: 55, width: 40, height: 30, borderRadius: 8,
    backgroundColor: 'rgba(20,20,43,0.55)', alignItems: 'center', justifyContent: 'center',
  },
  flagText: { fontSize: 15 },
  node: { position: 'absolute', alignItems: 'center', gap: 7, width: 130, marginLeft: -65 },
  nodeCircleDone: { width: 72, height: 72, borderRadius: 36, alignItems: 'center', justifyContent: 'center' },
  nodeDot: { width: 22, height: 22, borderRadius: 11, backgroundColor: colors.bgPath },
  nodeCheck: { fontFamily: fonts.displayBold, fontSize: 20, color: colors.bgPath },
  nodeLabelDark: {
    fontFamily: fonts.cardTitle, fontSize: 12, color: '#14142B', textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8,
  },
  mainStop: { width: 96, height: 96, borderRadius: 26, borderWidth: 3, borderColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', gap: 2 },
  mainStopEyebrow: { fontFamily: fonts.caption, fontSize: 9, letterSpacing: 1, color: '#5A3C05' },
  mainStopLabel: { fontFamily: fonts.emphasis, fontSize: 15, color: '#3A2606' },
  nodeCircleNext: { width: 68, height: 68, borderRadius: 34, backgroundColor: 'rgba(255,255,255,0.5)', borderWidth: 2, borderColor: colors.accent, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },
  nodePlay: { color: colors.accent, fontSize: 18 },
  nodeCircleLocked: { width: 62, height: 62, borderRadius: 31, backgroundColor: 'rgba(255,255,255,0.2)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' },
  nodeLockedLabel: { fontFamily: fonts.caption, fontSize: 10, color: '#FFFFFF' },
});
