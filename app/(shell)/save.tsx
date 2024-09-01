import { View, Text, StyleSheet } from "react-native"

export default function SaveScreen() {
    return (
        <View style={styles.col}>
            <Text style={styles.text}> Saving... </Text>
        </View>
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