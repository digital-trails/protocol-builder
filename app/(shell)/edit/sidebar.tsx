import { View, Text, StyleSheet } from "react-native"
import { PhoneSplit } from '@/components/split'
import { useProtocolContext } from '@/components/protocol';


export default function EditSidebarScreen() {
    const {state:{home}, dispatch} = useProtocolContext();

    return (
          <PhoneSplit state={home} screen='sidebar'>
              
          </PhoneSplit>
    
    )
}

const styles = StyleSheet.create({
    col: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize:100
    },
});