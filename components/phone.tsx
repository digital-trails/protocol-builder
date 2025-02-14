import { StyleSheet, View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SvgUri } from 'react-native-svg';

export function Phone({ state: home, screen }: any) {
  const PHONE_WIDTH=216;
  const SIDEBAR_WIDTH = PHONE_WIDTH*0.7;

  if (screen == 'home') {
    return (
      <View style={{ borderColor: 'black', borderWidth: 6, borderRadius: 10, height: 459.75, width: 216 }}>
        
        {/* Header Section */}
        <View style={{ backgroundColor: '#EEE', flex: 1.25, flexDirection: 'row', paddingTop: 10 }}>
          <View style={{ flex: 0.5 }}>
            <View style={{ flex: 0.33 }}>
              <FontAwesome5 style={{ marginLeft: 10 }} size={17} name="bars" color='black' />
            </View>
          </View>
          <View style={{ flex: 1.5 }}>
            <Text style={{ fontWeight: "bold", flex: 0.33 }}>{home.title}</Text>
            <Text style={{ fontWeight: "bold", fontSize: 9, flex: 0.7 }}>{home.flavors[0]}{"\n"}{"\n"}{home.flavors[1]}</Text>
          </View>
          <View style={{ flex: 0.75 }}>
            <View style={{ flex: 0.33, alignItems: "flex-end" }}>
              <FontAwesome5 style={{ marginRight: 10 }} size={17} name="star" color='black' />
            </View>
          </View>
        </View>

        {/* Main Content Section */}
        <View style={{ backgroundColor: 'green', flex: 4.25 }}>
          <View style={{ flex: 3, backgroundColor: "white", margin: 10, alignItems: "center", justifyContent: "center", borderRadius: 6 }}>
            <Text>View Surveys</Text>
          </View>

          {/* Buttons Section */}
          <View style={{ flex: 5, backgroundColor: "white", flexDirection: 'row', flexWrap: 'wrap' }}>
            
            {/* First Box - Display SVG if valid URL */}
            <View style={{ minWidth: '48%', margin: '1%', borderRadius: 2, backgroundColor: '#206AFF1A', alignItems: "center", justifyContent: "center" }}>
              <Text>{home.buttons[0][0]}</Text>
              {home.buttons[0][1] && home.buttons[0][1].startsWith("http") ? (
                <SvgUri width="30" height="30" uri={home.buttons[0][1]} />
              ) : (
                <Text>{home.buttons[0][1]}</Text> // Show text if not a URL
              )}
            </View>

            {/* Other Boxes - No Changes */}
            <View style={{ minWidth: '48%', margin: '1%', borderRadius: 2, backgroundColor: '#00E05A1A', alignItems: "center", justifyContent: "center" }}>
              <Text>{home.buttons[1][0]}</Text>
              <Text>{home.buttons[1][1]}</Text>
            </View>

            <View style={{ minWidth: '48%', margin: '1%', borderRadius: 2, backgroundColor: '#00C2FF1A', alignItems: "center", justifyContent: "center" }}>
              <Text>{home.buttons[2][0]}</Text>
              <Text>{home.buttons[2][1]}</Text>
            </View>

            <View style={{ minWidth: '48%', margin: '1%', borderRadius: 2, backgroundColor: '#5C2FDA1A', alignItems: "center", justifyContent: "center" }}>
              <Text>{home.buttons[3][0]}</Text>
              <Text>{home.buttons[3][1]}</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }

  if (screen == 'sidebar') {
    return (
      <View style={styles.phoneContainer}>
        {/* Dimmed Background Inside Phone */}
        <View style={styles.dimmedBackground} />

        {/* Sidebar Inside Phone */}
        <View style={[styles.sidebar, { width: SIDEBAR_WIDTH }]}>
          {[
            { name: "Home", icon: "home" },
            { name: "Favorites", icon: "star" },
            { name: "¿Qué es MindTrails Español?", icon: "lightbulb" },
            { name: "Instrucciones", icon: "book" },
            { name: "¿Qué es la Ansiedad?", icon: "user-md" },
            { name: "Recursos", icon: "folder-open" },
            { name: "F.A.Q.", icon: "question-circle" },
            { name: "Meet the Team", icon: "users" },
            { name: "Get Help", icon: "hands-helping" },
            { name: "Disclaimer", icon: "file-alt" },
            { name: "Submit Data", icon: "upload" },
            { name: "Study Information", icon: "info-circle" },
            { name: "Log out", icon: "sign-out-alt" },
            { name: "Unenroll", icon: "times-circle" },
          ].map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <FontAwesome5 name={item.icon} size={16} color="black" style={styles.icon} />
              <Text style={styles.menuText}>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phoneContainer: {
    borderColor: 'black',
    borderWidth: 6,
    borderRadius: 10,
    height: 459.75,
    width: 216,
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#EEE',
    flex: 1.25,
    flexDirection: 'row',
    paddingTop: 10,
  },
  title: {
    fontWeight: "bold",
    flex: 0.33,
  },
  flavors: {
    fontWeight: "bold",
    fontSize: 9,
    flex: 0.7,
  },
  mainContent: {
    backgroundColor: 'green',
    flex: 4.25,
  },
  surveyButton: {
    flex: 3,
    backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonsContainer: {
    flex: 5,
    backgroundColor: "white",
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    minWidth: '48%',
    margin: '1%',
    borderRadius: 2,
    backgroundColor: '#206AFF1A',
    alignItems: "center",
    justifyContent: "center",
  },
  dimmedBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 12,
    fontWeight: "500",
  },
});