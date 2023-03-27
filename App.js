import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Pressable, Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "./pages/login";

// icons
import {AntDesign, MaterialIcons, Entypo, Ionicons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
function HomeScreen(){
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.heading}>Home</Text>
            </View>

            <ScrollView>

                <Pressable
                    style = {styles.container2}>
                    <Text style={styles.title}>Grade: </Text>
                </Pressable>
                <Pressable style = {styles.container2}>
                    <Text style={styles.title}>Grade: </Text>
                </Pressable>
                <Pressable
                    style = {styles.container2}
                    onPress = {GoalsScreen}

                >
                    <Text style={styles.title}>Grade: </Text>
                </Pressable>
            </ScrollView>

        </SafeAreaView>
    );
}

function GoalsScreen(){
    return(
        <Text>Goals</Text>
    )
}

export default function App() {
  return (
      <NavigationContainer >
          <SafeAreaView style={styles.container}>
              <Tab.Navigator
                  screenOptions={{headerShown: false}}>
                  <Tab.Screen name="Home" component={HomeScreen}
                              options={{
                                  tabBarLabel:() => {return null},

                                  tabBarIcon: () => (
                                      <Entypo name="home" size={24} color="black" />
                                  ),
                              }}
                  />
                  <Tab.Screen name="Add" component={GoalsScreen}
                              options={{
                                  tabBarLabel:() => {return null},
                                  tabBarIcon: () => (
                                      <Entypo name="add-to-list" size={24} color="black" />
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
        flexDirection: "column",
        backgroundColor: '#fff',
        paddingTop: 20,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    container2: {
        flexDirection: "row",
        backgroundColor: "lightblue",
        justifyContent: "space-between",
        padding: 10,
        //alignItems: "center",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 10,
        marginBottom: 0,
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


/*
* hvor konkrete/nøye burde vi være på figma?
* anbefalt neste steg
*
* */