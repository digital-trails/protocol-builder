import { View, StyleSheet } from 'react-native';
import {Phone} from '@/components/phone'

export function PhoneSplit({state, screen, children}:any) {
  return (
    <View style={styles.row}>
        <View style={styles.left_col}>
          {children}
        </View>
        <View style={styles.phone_col}>
            <Phone state={state} screen={screen}/>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
  row: {
    flex          : 1,
    gap           : 30,
    flexDirection : 'row',
    justifyContent: 'center',
  },
  left_col: {
    //backgroundColor:'red',
    flex:.5
  },
  phone_col: {
    //backgroundColor: 'blue',
    flex           : .5,
    justifyContent : 'center',
    alignItems     : 'flex-start',
  },
});