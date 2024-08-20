import { View, StyleSheet } from 'react-native';


export function Split({margin,children}) {

  return (
      <View style={styles.row}>
        <View style={{minWidth:margin}} />
        {children}
        <View style={{minWidth:margin}} />
      </View>
  );
}

const styles = StyleSheet.create({
  row: {
      flexDirection: 'row', flex: 1
  },
  margin: {
      
  }
});