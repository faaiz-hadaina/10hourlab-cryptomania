import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native-ui-lib';
import Text from '@cryptomania/Components/Text';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';
import * as actions from '../../../helpers/redux/actions';

function Index(props: any) {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.root);

  return (
    <MenuProvider style={styles.container}>
      <View>
        <Text color={'#858585'} size={15}>
          Welcome
        </Text>
        <Text size={25} bold>
          Amy Bello
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger>
            <Image
              style={styles.useravatar}
              source={require('../../../../assets/user.png')}
            />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => dispatch(actions.clearData())}>
              <Text style={{ color: 'red' }}>Delete all Uploaded Files</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  useravatar: {
    width: 60,
    height: 60,
    resizeMode: 'stretch'
  }
});

export default Index;
