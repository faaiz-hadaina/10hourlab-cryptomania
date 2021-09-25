import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native-ui-lib';
import Header from '@cryptomania/Components/Shared/Header';
import Footer from '@cryptomania/Components/Shared/Footer';
import BalanceCard from '@cryptomania/Components/Cards/BalanceCard';
import Portfolio from '@cryptomania/Components/Portfolio';
import Assets from '@cryptomania/Components/Assets';
import * as actions from '../../helpers/redux/actions';

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HomeScreen() {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const state = useSelector((state: any) => state.root);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(actions.loadCurrency());
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View flex>
        <ScrollView
          style={styles.scrollcontainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Header />
          <BalanceCard />
        </ScrollView>
        {state.openedCurrencies ? <Portfolio /> : null}
        {state.assetstoarray ? <Assets /> : null}
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f6f9fe',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  scrollcontainer: {
    maxHeight: '33%',
    minHeight: '33%'
  }
});

export default HomeScreen;
