import {StyleSheet, View, Button, Text} from 'react-native';
import {Phone} from '@/components/phone'
import {Split} from '@/components/split'

export default function HomeScreen() {
    return (
        <Split margin='15%'>
            <View style={styles.col}>
                <View style={styles.button}>
                    <Text style={styles.button_txt}>Create a protocol</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.button_txt}>Modify a protocol</Text>
                </View>
            </View>
            <View style={styles.col}>
                <Phone />
            </View>
        </Split>
    );
  }

const styles = StyleSheet.create({
    col: {
        flexDirection: 'column', 
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', //Centered horizontally
        flex:1
    },
    button: {
        padding:5,
        margin:10,
        borderRadius:5,
        minWidth: 250,
        alignItems: 'center',
        backgroundColor:'blue'
    },
    button_txt: {
        color:'white',
        fontSize:20
    }
});