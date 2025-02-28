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

        <Text style={{ fontWeight: 600 }}>{home.sidebar[0][0]}</Text>
    {home.sidebar[0][1] && home.sidebar[0][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[0][1]} />
    ) : (
        <Text>{home.sidebar[0][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[1][0]}</Text>
    {home.sidebar[1][1] && home.sidebar[1][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[0][1]} />
    ) : (
        <Text>{home.sidebar[1][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[2][0]}</Text>
    {home.sidebar[2][1] && home.sidebar[2][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[2][1]} />
    ) : (
        <Text>{home.sidebar[2][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[3][0]}</Text>
    {home.sidebar[3][1] && home.sidebar[0][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[3][1]} />
    ) : (
        <Text>{home.sidebar[3][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[4][0]}</Text>
    {home.sidebar[4][1] && home.sidebar[4][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[4][1]} />
    ) : (
        <Text>{home.sidebar[4][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[5][0]}</Text>
    {home.sidebar[5][1] && home.sidebar[5][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[5][1]} />
    ) : (
        <Text>{home.sidebar[5][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[5][0]}</Text>
    {home.sidebar[5][1] && home.sidebar[5][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[5][1]} />
    ) : (
        <Text>{home.sidebar[5][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[6][0]}</Text>
    {home.sidebar[6][1] && home.sidebar[6][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[6][1]} />
    ) : (
        <Text>{home.sidebar[6][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[7][0]}</Text>
    {home.sidebar[7][1] && home.sidebar[7][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[7][1]} />
    ) : (
        <Text>{home.sidebar[7][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[8][0]}</Text>
    {home.sidebar[8][1] && home.sidebar[8][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[8][1]} />
    ) : (
        <Text>{home.sidebar[8][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[9][0]}</Text>
    {home.sidebar[9][1] && home.sidebar[9][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[9][1]} />
    ) : (
        <Text>{home.sidebar[9][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[10][0]}</Text>
    {home.sidebar[10][1] && home.sidebar[10][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[10][1]} />
    ) : (
        <Text>{home.sidebar[10][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[11][0]}</Text>
    {home.sidebar[11][1] && home.sidebar[11][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[11][1]} />
    ) : (
        <Text>{home.sidebar[11][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[12][0]}</Text>
    {home.sidebar[12][1] && home.sidebar[12][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[12][1]} />
    ) : (
        <Text>{home.sidebar[12][1]}</Text> // Show text if not a URL
    )}
    <Text style={{ fontWeight: 600 }}>{home.sidebar[13][0]}</Text>
    {home.sidebar[13][1] && home.sidebar[13][1].startsWith("http") ? (
        <SvgUri width="30" height="30" uri={home.sidebar[13][1]} />
    ) : (
        <Text>{home.sidebar[13][1]}</Text> // Show text if not a URL
    )}
    
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