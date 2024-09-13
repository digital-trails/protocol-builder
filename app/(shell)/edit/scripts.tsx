import { View, Text, StyleSheet } from "react-native"

export default function EditScriptsScreen() {
    return (
        <View style={styles.col}>
            <Text style={styles.text}> Scripts... </Text>
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