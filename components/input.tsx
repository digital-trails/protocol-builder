import { StyleSheet, View, TextInput, Text, Switch } from 'react-native';

export function Input({label='', type='', style={}, ...props}) {
    let getInput = () => {
      switch (type) {
        case 'text': return <TextInput style={[styles.input,style]} {...props} autoCapitalize="none"/>;
        case 'switch': return <Switch style={style} {...props} />;
      }
    }

    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        {getInput()}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 8,
    },
    label: {
      paddingVertical: 5,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#444',
    },  
    input: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 5,
      paddingLeft: 5,
      fontSize: 16,
      height: 40,
      color: '#111',
    },
  });