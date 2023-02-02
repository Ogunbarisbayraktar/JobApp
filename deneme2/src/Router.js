import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Jobs from './pages/Jobs/Jobs';
import DetailJobs from './pages/JobsDetail';
import FavoriteJobs from './pages/FavoritesJobs';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function JobsStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="DetailJobs" component={DetailJobs} />
            </Stack.Navigator>

    )
}

function Router() {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Jobs" >
            <Drawer.Screen name="Jobs" component={JobsStack}/>
            <Drawer.Screen name="FavoriteJobs" component={FavoriteJobs} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
    }

export default Router;