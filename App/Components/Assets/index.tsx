import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View, Image } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import Text from '@cryptomania/Components/Text';
import * as actions from '../../helpers/redux/actions';

function index() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.root);

  const FlatListItemSeparator = () => {
    return <View style={styles.listseparator} />;
  };
  return (
    <View style={styles.container}>
      <Text size={22} color="#6778c1" bold>
        My Assets
      </Text>
      <FlatList
        data={state.assetstoarray}
        ItemSeparatorComponent={FlatListItemSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              dispatch(
                actions.openItem(item.coin_token, item.percentage_increase)
              )
            }
          >
            <View style={styles.itemcontainer}>
              <View style={{ justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    style={styles.asseticon}
                    source={require('../../../assets/btc.png')}
                  />
                  <Text size={22} bold>
                    {item.coin_token} /
                  </Text>
                  <Text size={20}>{' ' + item.unit / item.noofuploads}</Text>
                </View>
                <Text size={15} color={'#797676'}>
                  at +{item.percentage_to_sell_at || 25}%{' '}
                  {item.percentage_increase < item.percentage_to_sell_at ||
                  item.percentage_increase < 25
                    ? '(No, Coin cannot be sold yet)'
                    : '(Yes, Coin can be sold now)'}
                </Text>
              </View>
              <View style={styles.linedescription}>
                <Text size={18}>
                  {state.mainCurrency}{' '}
                  {(item.total_cost / item.noofuploads)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
                <View style={styles.percentageinccontainer}>
                  <Ionicons
                    name={
                      item.percentage_increase <= 0
                        ? 'md-caret-down'
                        : 'md-caret-up'
                    }
                    style={styles.changeIcon}
                    size={12}
                    color={
                      item.percentage_increase <= 0 ? '#fc0505' : '#50c50c'
                    }
                  />
                  <Text
                    size={15}
                    color={
                      item.percentage_increase <= 0 ? '#fc0505' : '#50c50c'
                    }
                    bold
                  >
                    {item.percentage_increase}%
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '40%'
  },
  listseparator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#fcfcfd'
  },

  changeIcon: {
    marginRight: 5
  },
  itemcontainer: {
    backgroundColor: '#fff',
    padding: 15,
    height: 110,
    borderWidth: 1,
    borderColor: '#eeeeee',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  asseticon: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'stretch'
  },
  percentageinccontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linedescription: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default index;
