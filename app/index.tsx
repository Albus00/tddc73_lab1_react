import { View, StyleSheet, Text, SafeAreaView, StatusBar, Image, Button, TextInput } from 'react-native';
import { Svg } from 'react-native-svg';
import pie from '@/assets/images/pie.png';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar backgroundColor="#1a574b" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.title}>Example 1 - React Native</Text>
        </View>

        <View style={styles.centered}>
          <Image source={pie} style={{ width: 130, height: 130, marginTop: 10, marginBottom: 40 }} />
          <View style={styles.gridContainer}>
            <View style={styles.row}>
              <Button
                title="BUTTON"
                color="gray" />
              <Button
                title="BUTTON"
                color="gray" />
            </View>
            <View style={styles.row}>
              <Button
                title="BUTTON"
                color="gray" />
              <Button
                title="BUTTON"
                color="gray" />
            </View>
          </View>
          <View>
            <View style={styles.stepContainer}>
              <Text>Email:</Text>
              <TextInput
                style={styles.textInput}
                placeholder=""
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  appbar: {
    padding: 16,
    backgroundColor: '#2d8577',
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  },
  gridContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '65%',
    gap: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    width: '70%',
    borderColor: 'red',
    borderBottomWidth: 2,
  },
});
