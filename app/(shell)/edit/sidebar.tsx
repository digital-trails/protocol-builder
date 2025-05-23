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
        <View style={styles.table}>
          {/* Header Row */}
          <View style={styles.row}>
            <Text style={styles.headerCell}>Label</Text>
            <Text style={[styles.headerCell, styles.nudgeRight]}>Icon</Text>
            <Text style={[styles.headerCell, styles.nudgeRightMore]}>Dest</Text>
            <Text style={styles.headerCell}></Text>
          </View>

          {/* Input Rows */}
          {home.sidebar.map((item: any, idx: number) => (
            <View key={`row-${idx}`} style={styles.row}>
              <View style={styles.cellWithMargin}>
                <Input
                  label=""
                  type="text"
                  value={item[0]}
                  onChangeText={(text: string) =>
                    homeDispatch(home, { type: `label${idx}`, value: text })
                  }
                />
              </View>
              <View style={styles.cellWithMargin}>
                <Input
                  label=""
                  type="text"
                  value={item[1]}
                  onChangeText={(text: string) =>
                    homeDispatch(home, { type: `icon${idx}`, value: text })
                  }
                />
              </View>
              <View style={styles.cell}>
                <Input
                  label=""
                  type="text"
                  value={item[2] || ""}
                  onChangeText={(text: string) =>
                    homeDispatch(home, { type: `dest${idx}`, value: text })
                  }
                />
              </View>
              <View style={styles.deleteCell}>
                <Pressable onPress={() => deleteSidebarItem(idx)} style={styles.deleteButton}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
                </Pressable>
              </View>
            </View>
          ))}

          {/* Add Button */}
          <View style={{ alignItems: 'center' }}>
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
        </View>
      </ScrollView>
    </PhoneSplit>
  );
}

const styles = StyleSheet.create({
  table: {
    width: '100%',
    maxWidth: 900,
    paddingHorizontal: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerCell: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 16,
  },
  nudgeRight: {
    paddingLeft: 6,
    textAlign: 'center',
  },
  nudgeRightMore: {
    paddingLeft: 12,
    textAlign: 'center',
  },
  cellWithMargin: {
    flex: 3,
    marginRight: 10,
  },
  cell: {
    flex: 3,
  },
  deleteCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    height: 44,
    width: 44,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
});
