import {Link} from 'expo-router'
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {PhoneSplit} from '@/components/split'

export default function HomeScreen() {
    let defaultState = {
        "title": "Main Title",
        "flavors": ["flavor1",""],
        "sessions": false,
        "buttons": [
            ["button1", "", ""],
            ["button2", "", ""],
            ["button3", "", ""],
            ["button4", "", ""]
        ]
    };
    return (
        <PhoneSplit state={defaultState}>
            <View style={styles.col}>
                <TouchableOpacity style={styles.button}>
                    <Link href={'/home'}>
                        <Text style={styles.button_txt}>Create a protocol</Text>
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_txt}>Modify a protocol</Text>
                </TouchableOpacity>
            </View>
        </PhoneSplit>
    );
  }

const styles = StyleSheet.create({
    col: {
        flex           : 1,
        flexDirection  : 'column', 
        justifyContent : 'center', 
        alignItems     : 'flex-end',
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