import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView, Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// icons
import {AntDesign, MaterialIcons, Entypo, Ionicons} from "@expo/vector-icons";

function HomeScreen(){
    return(
      <SafeAreaView>
        <ScrollView>
          <Pressable>
              <Text>
                goals
              </Text>
          </Pressable>
          <Pressable onpress={GoalsScreen}>
              <Text>
                goals
              </Text>
          </Pressable>
          <Pressable>
              <Text>
                goals
              </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    )
}

function GoalsScreen(){
    return(
        <SafeAreaView>
            <Text>
                this is goals screen
            </Text>
        </SafeAreaView>
    )
}

function SettingsScreen(){
    return(
        <SafeAreaView>
            <Text>

            </Text>
        </SafeAreaView>
    )
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <SafeAreaView style={styles.container}>
              <Tab.Navigator>
                  <Tab.Screen name="Home" component={HomeScreen}
                              options={{
                                  tabBarLabel: 'Home',
                                  tabBarIcon: () => (
                                      <Entypo name="home" size={24} color="black" />
                                  ),
                              }}
                  />
                  <Tab.Screen name="Settings" component={SettingsScreen}
                              options={{
                                  tabBarLabel: 'Settings',
                                  tabBarIcon: () => (
                                      <Ionicons name="settings" size={24} color="black" />
                                  ),
                              }}
                  />

              </Tab.Navigator>
          </SafeAreaView>

      </NavigationContainer>


  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //marginTop: 45,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    header: {
        flexDirection: "row",
        width: "90%",
        alignSelf: "center",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    heading: {
        fontSize: 30,
        //backgroundColor: "red",
        fontWeight: "500",
        flex: 1,
    },
    input: {
        color: "white",
        fontSize: 17,
        backgroundColor: "steelblue",
        padding: 10,
        width: "100%",
        alignSelf: "center",
        borderRadius: 0,
        //automatically sticks to the bottom
        flexDirection: "row",
        borderStyle: "solid",
    },
    inputs: {
        //flexDirection: "row",
        marginTop: "auto",
    }
});



/*
* forklare MISS ideen
* Hvor han ville ha begrensa det
* Form som spør om...?
* japanturen
* tips takk?
* er dette gjennomførbart?
* hva kan kuttes?
* hva kan legges til?
* hvilken karakter hadde et slikt prosjekt ligget på
* hadde brukere f.eks hjulpet med oppgava?
* gode ideer til implementasjon av startside
*
*
* google kilder på utseende og design
* begrunnelse for design
*
* mål:
* bli ferdig med req
* tekniske løsninger
* hvilke biblioteker osv.
*
* hver funksjonell req har en tilsvarende figur
*
* hvorform man bytter
*
*
* personvern
* hvilke opplysninger
* datatilsynet.no
* bruker vilkår
*   standard
* sikkerhet
*
* */