import { Link } from 'expo-router'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { PhoneSplit } from '@/components/split'
import { useProtocolContext } from '@/components/protocol';

export default function HomeScreen() {
    
    const {state:{home}} = useProtocolContext();

    return (
        <PhoneSplit state={home} screen="home">
            <View style={styles.col}>
                <TouchableOpacity style={styles.button}>
                    <Link href={'/edit/home'}>
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