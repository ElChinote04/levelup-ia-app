import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Screen, BackChip, PrimaryButton, NovaAvatar } from '../components/ui';
import { colors, fonts } from '../theme';

// Sin backend real: la "corrección" es un chequeo de palabras clave hardcodeado en el
// front, no una IA de verdad — suficiente para la demo (el estudiante escribe su propia
// respuesta y ve un check o una X según si menciona el concepto esperado).
const QUESTIONS = [
  {
    question: '¿Qué diferencia hay entre e-commerce y solo tener redes sociales?',
    check: (a) => a.includes('digital') && (a.includes('pedido') || a.includes('proceso') || a.includes('orden') || a.includes('red')),
  },
  {
    question: 'Una tienda vende zapatillas directo a personas por su web. ¿Qué modelo es?',
    check: (a) => a.includes('b2c'),
  },
  {
    question: '¿Y si una empresa le compra insumos a otra empresa?',
    check: (a) => a.includes('b2b'),
  },
];

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function NovaBubble({ text }) {
  return (
    <View style={styles.bubbleRow}>
      <NovaAvatar size={34} radius={11} emojiSize={17} />
      <View style={styles.novaBubble}>
        <Text style={styles.novaBubbleText}>{text}</Text>
      </View>
    </View>
  );
}

function AnswerBubble({ text, correct }) {
  return (
    <View style={styles.bubbleRowEnd}>
      <View style={[styles.answerBubble, correct ? styles.answerCorrect : styles.answerDimmed]}>
        <Text style={correct ? styles.answerTextCorrect : styles.answerTextDimmed}>{text}</Text>
      </View>
      <View style={[styles.markCircle, correct ? styles.markCorrect : styles.markWrong]}>
        <Text style={correct ? styles.markTextCorrect : styles.markTextWrong}>{correct ? '✓' : '✕'}</Text>
      </View>
    </View>
  );
}

function QuestionBlock({ question, check, onAnswered }) {
  const [draft, setDraft] = useState('');
  const [answer, setAnswer] = useState(null); // { text, correct } once submitted

  const submit = () => {
    const normalized = normalize(draft);
    if (!normalized) return;
    const correct = check(normalized);
    setAnswer({ text: draft.trim(), correct });
    onAnswered(correct);
  };

  return (
    <View style={{ gap: 10 }}>
      <NovaBubble text={question} />
      {answer ? (
        <AnswerBubble text={answer.text} correct={answer.correct} />
      ) : (
        <View style={styles.answerInputRow}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Escribe tu respuesta…"
            placeholderTextColor="#8087B4"
            style={styles.answerInput}
            onSubmitEditing={submit}
            returnKeyType="done"
          />
          <Pressable style={styles.answerSendButton} onPress={submit}>
            <Text style={styles.answerSendArrow}>↑</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default function LessonResolutionScreen() {
  const finishLesson = () => router.dismissTo('/path');
  const [results, setResults] = useState([null, null, null]);

  const setResult = (i, correct) => {
    setResults((prev) => {
      const next = [...prev];
      next[i] = correct;
      return next;
    });
  };

  const answeredCount = results.filter((r) => r !== null).length;
  const correctCount = results.filter((r) => r === true).length;

  return (
    <Screen>
      <View style={styles.header}>
        <BackChip onPress={() => router.back()} />
        <View style={styles.progressRow}>
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
          <View style={[styles.seg, { backgroundColor: colors.orange }]} />
        </View>
        <Text style={styles.stepText}>4/4</Text>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={{ gap: 14, paddingBottom: 8 }}>
        <Text style={styles.eyebrow}>RESOLUCIÓN · EVALUACIÓN FINAL</Text>

        {QUESTIONS.map((q, i) => (
          <QuestionBlock key={i} question={q.question} check={q.check} onAnswered={(c) => setResult(i, c)} />
        ))}

        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryTitle}>
              {answeredCount === QUESTIONS.length ? 'Lección aprobada' : 'Responde las preguntas'}
            </Text>
            <Text style={styles.summarySub}>{correctCount} de {QUESTIONS.length} correctas</Text>
          </View>
          <View style={styles.summaryChip}>
            <Text style={{ fontSize: 19 }}>💎</Text>
            <Text style={styles.summaryChipText}>+15</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton label="Volver al camino" onPress={finishLesson} />
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
  eyebrow: { fontFamily: fonts.caption, fontSize: 11, letterSpacing: 1.5, color: colors.textOnDarkMuted },
  bubbleRow: { flexDirection: 'row', gap: 10, alignItems: 'flex-end' },
  novaBubble: { backgroundColor: colors.card, borderRadius: 18, borderBottomLeftRadius: 5, paddingHorizontal: 16, paddingVertical: 14, maxWidth: '78%' },
  novaBubbleText: { fontFamily: fonts.body, fontSize: 14, lineHeight: 20, color: colors.textDark },
  bubbleRowEnd: { flexDirection: 'row', gap: 8, alignItems: 'flex-end', justifyContent: 'flex-end' },
  answerBubble: { borderRadius: 18, paddingHorizontal: 16, paddingVertical: 14, maxWidth: '72%' },
  answerCorrect: { backgroundColor: colors.accent, borderBottomRightRadius: 5 },
  answerDimmed: { backgroundColor: colors.cardMuted, borderBottomRightRadius: 5 },
  answerTextCorrect: { fontFamily: fonts.body, color: '#FFFFFF', fontSize: 14, lineHeight: 20 },
  answerTextDimmed: { fontFamily: fonts.body, color: colors.textDimmed, fontSize: 14, lineHeight: 20 },
  markCircle: { width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  markCorrect: { backgroundColor: colors.checkFill },
  markWrong: { backgroundColor: colors.cardMuted, borderWidth: 1.5, borderColor: colors.borderDashed },
  markTextCorrect: { fontFamily: fonts.emphasis, color: '#FFFFFF', fontSize: 13 },
  markTextWrong: { fontFamily: fonts.emphasis, color: colors.textDimmed, fontSize: 12 },
  answerInputRow: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', gap: 8, maxWidth: '85%' },
  answerInput: {
    flex: 1, minWidth: 180, height: 46, borderRadius: 999, backgroundColor: '#FFFFFF',
    borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16,
    fontFamily: fonts.body, fontSize: 14, color: colors.textDark,
  },
  answerSendButton: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: colors.accent,
    alignItems: 'center', justifyContent: 'center',
  },
  answerSendArrow: { color: '#FFFFFF', fontSize: 16 },
  summaryCard: { backgroundColor: colors.card, borderRadius: 22, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 },
  summaryTitle: { fontFamily: fonts.displayBold, fontSize: 20, color: colors.textDark },
  summarySub: { fontFamily: fonts.captionRegular, fontSize: 13, color: colors.textMuted },
  summaryChip: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 14, backgroundColor: colors.cardAlt },
  summaryChipText: { fontFamily: fonts.emphasis, fontSize: 18, color: colors.textDark },
  footer: { padding: 24 },
});
