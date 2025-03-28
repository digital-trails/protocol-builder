import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { PhoneSplit } from '@/components/split';
import { Input } from '@/components/input';
import { useProtocolContext } from '@/components/protocol';

export default function EditSidebarScreen() {
  const { state: { home }, dispatch } = useProtocolContext();

  function homeDispatch(home: any, action: any) {
    home = { ...home };
    const match = action.type.match(/(label|icon|dest)(\d+)/);
    if (match) {
      const [, field, indexStr] = match;
      const index = parseInt(indexStr);
      const fieldIndex = field === "label" ? 0 : field === "icon" ? 1 : 2;

      if (!home.sidebar[index]) {
        home.sidebar[index] = ["", "", ""];
      }

      home.sidebar[index][fieldIndex] = action.value;
      dispatch({ type: 'home', value: home });
    }
  }

  function deleteSidebarItem(index: number) {
    const updated = home.sidebar.filter((_, idx) => idx !== index);
    dispatch({ type: 'home', value: { ...home, sidebar: updated } });
  }

  return (
    <PhoneSplit state={home} screen='sidebar'>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.row}>
          {/* Label Column */}
          <View style={styles.input}>
            <Text style={styles.header}>Label</Text>
            {home.sidebar.map((item: any, idx: number) => (
              <Input
                key={`label-${idx}`}
                label=''
                type='text'
                value={item[0]}
                onChangeText={(text: string) => homeDispatch(home, { type: `label${idx}`, value: text })}
              />
            ))}
          </View>

          {/* Icon Column */}
          <View style={styles.input}>
            <Text style={styles.header}>Icon</Text>
            {home.sidebar.map((item: any, idx: number) => (
              <Input
                key={`icon-${idx}`}
                label=''
                type='text'
                value={item[1]}
                onChangeText={(text: string) => homeDispatch(home, { type: `icon${idx}`, value: text })}
              />
            ))}
          </View>

          {/* Dest Column */}
          <View style={styles.input}>
            <Text style={styles.header}>Dest</Text>
            {home.sidebar.map((item: any, idx: number) => (
              <Input
                key={`dest-${idx}`}
                label=''
                type='text'
                value={item[2] || ""}
                onChangeText={(text: string) => homeDispatch(home, { type: `dest${idx}`, value: text })}
              />
            ))}
          </View>

          {/* Delete Column */}
          <View style={styles.deleteCol}>
            <Text style={styles.header}> </Text>
            {home.sidebar.map((_: any, idx: number) => (
              <View key={`delete-wrapper-${idx}`} style={{ marginBottom: 12 }}>
                <Pressable
                  onPress={() => deleteSidebarItem(idx)}
                  style={styles.deleteButton}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>X</Text>
                </Pressable>
              </View>
            ))}
          </View>
        </View>

        {/* Add Button */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text
            style={styles.addButton}
            onPress={() => {
              const updated = [...home.sidebar, ["New Label", "", ""]];
              dispatch({ type: 'home', value: { ...home, sidebar: updated } });
            }}
          >
            + Add Sidebar Option
          </Text>
        </View>
      </ScrollView>
    </PhoneSplit>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: 800,
    width: "100%",
    gap: 10,
  },
  input: {
    flex: 3,
  },
  deleteCol: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    height: 44, // match input height
    width: 44,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#007bff',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    fontWeight: 'bold',
  },
});
