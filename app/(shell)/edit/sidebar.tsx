import { View, Text, StyleSheet } from "react-native"

export default function EditSidebarScreen() {
    return (
        <View style={styles.col}>
            <Text style={styles.text}> Sidebar... </Text>
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