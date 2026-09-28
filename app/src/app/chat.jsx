import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Screen, BackChip, NovaAvatar } from '../components/ui';
import { useAppState } from '../state/AppState';
import { colors, fonts } from '../theme';

export default function ChatScreen() {
  const { diamonds } = useAppState();

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackChip onPress={() => router.back()} />
          <NovaAvatar />
          <View>
            <Text style={styles.novaName}>Nova</Text>
            <Text style={styles.novaSub}>a bordo de la nave</Text>
          </View>
        </View>
        <Pressable style={styles.diamondChip} onPress={() => router.push('/paywall')}>
          <Text style={{ fontSize: 15 }}>💎</Text>
          <Text style={styles.diamondText}>{diamonds}</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={{ gap: 12, paddingVertical: 18 }}>
        <Text style={styles.costPill}>cada mensaje cuesta 2 diamantes</Text>

        <View style={styles.bubbleRow}>
          <NovaAvatar size={30} radius={10} emojiSize={15} />
          <View style={styles.novaBubble}>
            <Text style={styles.novaBubbleText}>
              Hola Camila. Vi que terminaste el embudo de ventas. ¿Quieres aplicarlo a tu tienda de ropa?
            </Text>
          </View>
        </View>

        <View style={styles.userBubble}>
          <Text style={styles.userBubbleText}>Sí, vendo por Instagram pero casi nadie me escribe</Text>
        </View>

        <View style={styles.bubbleRow}>
          <NovaAvatar size={30} radius={10} emojiSize={15} />
          <View style={styles.novaBubble}>
            <Text style={styles.novaBubbleText}>
              Entonces tu problema está en descubrimiento, no en conversión. Empecemos por tus tres
              publicaciones con más alcance.
            </Text>
          </View>
        </View>

        <Text style={styles.spendNote}>💎 −2 · quedan 6</Text>
      </ScrollView>

      <View style={styles.inputBar}>
        <TextInput
          placeholder="Escribe a Nova…"
          placeholderTextColor="#8087B4"
          style={styles.input}
        />
        <View style={styles.sendButtonWrap}>
          <LinearGradient colors={[colors.violet, colors.accent]} style={styles.sendButton}>
            <Text style={styles.sendArrow}>↑</Text>
          </LinearGradient>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 24, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.accentSoft, borderBottomWidth: 1, borderBottomColor: colors.border },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  novaName: { fontFamily: fonts.displayBold, fontSize: 17, color: '#FFFFFF' },
  novaSub: { fontFamily: fonts.caption, fontSize: 10, color: colors.textOnDarkMuted },
  diamondChip: { flexDirection: 'row', alignItems: 'center', gap: 7, paddingHorizontal: 14, paddingVertical: 9, borderRadius: 999, backgroundColor: colors.accentDeep, borderWidth: 1, borderColor: colors.border },
  diamondText: { fontFamily: fonts.emphasis, fontSize: 14, color: '#FFFFFF' },
  body: { flex: 1, paddingHorizontal: 24 },
  costPill: { alignSelf: 'center', fontFamily: fonts.caption, fontSize: 10, color: colors.textOnDarkMuted, backgroundColor: '#222B93', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  bubbleRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-end' },
  novaBubble: { backgroundColor: colors.card, borderRadius: 18, borderBottomLeftRadius: 5, paddingHorizontal: 16, paddingVertical: 14, maxWidth: '78%' },
  novaBubbleText: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: colors.textDark },
  userBubble: { alignSelf: 'flex-end', backgroundColor: colors.accent, borderRadius: 18, borderBottomRightRadius: 5, paddingHorizontal: 16, paddingVertical: 14, maxWidth: '75%' },
  userBubbleText: { fontFamily: fonts.body, color: '#FFFFFF', fontSize: 14, lineHeight: 21 },
  spendNote: { alignSelf: 'flex-end', fontFamily: fonts.caption, fontSize: 10, color: colors.textOnDarkMuted },
  inputBar: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20, paddingTop: 14, paddingBottom: 20, borderTopWidth: 1, borderTopColor: colors.border, backgroundColor: colors.accentSoft },
  input: { flex: 1, height: 50, borderRadius: 999, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: colors.border, paddingHorizontal: 18, fontFamily: fonts.body, fontSize: 14, color: colors.textDark },
  sendButtonWrap: { width: 50, height: 50 },
  sendButton: { flex: 1, borderRadius: 25, alignItems: 'center', justifyContent: 'center' },
  sendArrow: { color: '#FFFFFF', fontSize: 16 },
});
