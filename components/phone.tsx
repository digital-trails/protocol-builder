import { StyleSheet, View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { SvgUri } from 'react-native-svg';

export function Phone({ state: home, screen }: any) {
  const PHONE_WIDTH = 216;
  const SIDEBAR_WIDTH = PHONE_WIDTH * 0.7;

  if (screen === 'home') {
    return (
      <View style={styles.phoneWrapper}>
        <View style={styles.phoneContainer}>
          {/* Header */}
          <View style={styles.header}>
            <View style={{ flex: 2, alignItems: 'flex-start', marginLeft:10 }}>
              <Text style={styles.title}>{home.title}</Text>
              <Text style={styles.flavors}>{home.flavors[0]}{"\n"}{"\n"}{home.flavors[1]}</Text>
            </View>
            <View style={{ flex: 0.75 }}>
              <View style={{ flex: 0.33, alignItems: "flex-end" }}>
                <FontAwesome5 style={{ marginRight: 10 }} size={17} name="star" color='black' />
              </View>
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            <View style={styles.surveyButton}>
              <Text>View Surveys</Text>
            </View>

            <View style={styles.buttonsContainer}>
              {home.buttons?.slice(0, 4).map((btn: [string, string], idx: number) => (
                <View
                  key={idx}
                  style={[
                    styles.button,
                    { backgroundColor: ['#206AFF1A', '#00E05A1A', '#00C2FF1A', '#5C2FDA1A'][idx] }
                  ]}
                >
                  <Text>{btn[0]}</Text>
                  {btn[1]?.startsWith("http") ? (
                    <SvgUri width="30" height="30" uri={btn[1]} />
                  ) : (
                    <Text>{btn[1]}</Text>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Bottom Nav */}
          <View style={styles.bottomBar}>
            <View style={styles.navItem}>
              <FontAwesome5 name="bars" size={16} />
              <Text style={styles.navText}>Menu</Text>
            </View>
            <View style={styles.navItem}>
              <FontAwesome5 name="home" size={16} />
              <Text style={styles.navText}>Home</Text>
            </View>
            <View style={styles.navItem}>
              <FontAwesome5 name="cog" size={16} />
              <Text style={styles.navText}>Settings</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (screen === 'sidebar') {
    return (
      <View style={styles.phoneWrapper}>
        <View style={styles.phoneContainer}>
          <View style={styles.dimmedBackground} />
          <View style={[styles.sidebar, { width: SIDEBAR_WIDTH }]}>
            {home.sidebar.map((item: [string, string], idx: number) => (
              <View key={idx} style={{ marginBottom: 5 }}>
                <Text style={{ fontWeight: "600" }}>{item[0]}</Text>
                {item[1] && item[1].startsWith("http") ? (
                  <SvgUri width="30" height="30" uri={item[1]} />
                ) : (
                  <Text>{item[1]}</Text>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phoneWrapper: {
    marginVertical: 12,
    alignItems: 'center',
    transform: [{ scale: 0.95 }],
  },
  phoneContainer: {
    borderColor: 'black',
    borderWidth: 6,
    borderRadius: 10,
    height: 459.75,
    width: 216,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#EEE',
    flex: 1.25,
    flexDirection: 'row',
    paddingTop: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  flavors: {
    fontWeight: "bold",
    fontSize: 9,
    textAlign: 'center',
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
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    height: 40,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    marginTop: 2,
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
});
