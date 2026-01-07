import { Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Kiipling() {
  return Platform.OS === "web" ? (
    <iframe src="https://nutkey.github.io/kiipling" height={'100%'} width={'100%'} />
  ) :
    (
      <WebView
        style={styles.container}
        source={{ uri: 'https://nutkey.github.io/kiipling' }}
      />
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
