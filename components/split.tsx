import { View, StyleSheet, Button, Text } from 'react-native';
import {Phone} from '@/components/phone'

export function PhoneSplit({state, children}:any) {
  return (
    <View style={styles.row}>
        <View style={styles.left_col}>
          {children}
        </View>
        <View style={styles.phone_col}>
            <Phone state={state}/>
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
    //flex:1
  },
  phone_col: {
    //flex           : 1,
    justifyContent : 'center',
    alignItems     : 'flex-start',
  },
});