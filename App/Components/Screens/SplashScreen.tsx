import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { View, Card, Button } from 'react-native-ui-lib';
import Text from '@cryptomania/Components/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
function SplashScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../../assets/bg.jpg')}
      >
        <Image
          style={styles.productpic}
          source={require('../../../assets/phone.png')}
        />
        <Card style={styles.getstartedcard}>
          <View style={styles.getstartedbody}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text size={30} bold>
                Started to Discover
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text size={30} bold>
                  New{' '}
                </Text>
                <Text size={30} color={'#2acdd5'} bold>
                  Currency
                </Text>
              </View>
            </View>
            <Button
              label={'Get Started'}
              labelStyle={{
                fontSize: 23,
                marginTop: 5,
                fontFamily: 'BalsamiqSans_700Bold'
              }}
              onPress={() => navigation.navigate('Home')}
              backgroundColor={'#1b81d9'}
              enableShadow
              style={styles.button}
            />
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%'
  },
  productpic: {
    width: '100%',
    height: '50%',
    marginTop: 50,
    marginLeft: -20,
    resizeMode: 'stretch'
  },
  getstartedcard: {
    backgroundColor: '#fff',
    margin: 30,
    padding: 20,
    flex: 1,
    borderRadius: 35,
    borderWidth: 0
  },
  getstartedbody: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    marginBottom: 20,
    width: '70%',
    height: 60
  }
});

export default SplashScreen;
