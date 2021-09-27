import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { View, Button } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as actions from '../../../helpers/redux/actions';

function Index() {
  const dispatch = useDispatch();
  const currencies = useSelector((state: any) => state.root.otherCurrencies);

  const selectFile = async () => {
    try {
      const options = { multiple: false, copyToCacheDirectory: false };
      let reader: FileReader = new FileReader();
      const picked = await DocumentPicker.getDocumentAsync(options);
      const { name, uri } = JSON.parse(JSON.stringify(picked));
      let read = '';
      const fileUri = `${FileSystem.documentDirectory}${name}`;
      console.log(fileUri);
      if (Platform.OS === 'ios') {
        const downloaded = await FileSystem.downloadAsync(uri, fileUri);
        read = await FileSystem.readAsStringAsync(downloaded.uri);
      } else {
        const copyAsync = await FileSystem.copyAsync({
          from: uri,
          to: fileUri
        });

        read = await FileSystem.readAsStringAsync(fileUri);
      }
      if (read.includes('purchasing_currency,to_currency1')) {
        dispatch(actions.loadFile(read, 1));
        console.log('Coinmania Currency File');
      } else if (read.includes('purchase id,coin/token,unit')) {
        if (!currencies) {
          alert('Please select currency file first');
          return;
        }
        console.log('Coinmania Portfolio File');
        dispatch(actions.loadFile(read, 2));
      } else {
        alert('Inavlid Currency or Portfolio File');
        return;
      }
    } catch (err: any) {
      alert('Upload failed');
      throw err;
    }
  };

  return (
    <View style={styles.container}>
      <Button
        label={!currencies ? 'Upload Currency File' : 'Upload Portfolio File'}
        labelStyle={{
          fontSize: 20,
          marginTop: 5,
          fontFamily: 'BalsamiqSans_700Bold'
        }}
        onPress={selectFile}
        backgroundColor={'#6360fb'}
        enableShadow
        style={styles.uploadbutton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '8%'
  },
  uploadbutton: {
    marginBottom: 20,
    width: '80%',
    marginTop: 10,
    height: 50
  }
});

export default Index;
