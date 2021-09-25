import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { View, Card, Button, Text } from 'react-native-ui-lib';
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
        style={{
          width: '100%',
          height: '100%'
        }}
        source={require('../../../assets/bg.jpg')}
      >
        <Image
          style={{
            width: '100%',
            height: '50%',
            marginTop: 50,
            marginLeft: -20,

            resizeMode: 'stretch'
          }}
          source={require('../../../assets/phone.png')}
        />
        <Card
          style={{
            backgroundColor: '#fff',
            margin: 30,
            padding: 20,
            flex: 1,
            borderRadius: 35,
            borderWidth: 0
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              paddingTop: 10,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'BalsamiqSans_700Bold'
                }}
              >
                Started to Discover
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ fontSize: 30, fontFamily: 'BalsamiqSans_700Bold' }}
                >
                  New{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#2acdd5',
                    fontFamily: 'BalsamiqSans_700Bold'
                  }}
                >
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
              style={{ marginBottom: 20, width: '70%', height: 60 }}
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
  }
});

export default SplashScreen;
