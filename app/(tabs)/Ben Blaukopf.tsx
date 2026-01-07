import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Index2() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Ben Blaukopf's portfolio - coming soon</ThemedText>
    </ThemedView>
  );
}
