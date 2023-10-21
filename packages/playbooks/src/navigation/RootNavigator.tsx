import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { DrawerContent } from "../components/DrawerContent";
import { useNavigation } from "@react-navigation/native";
import BestSellerScreen from "../screens/Home/BestSellerScreen";
import NewEstablishScreen from "../screens/Home/NewEstablishScreen";

const Drawer = createDrawerNavigator();
const navigation = useNavigation();

export default function RootNavigator() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                    <Drawer.Screen
                        name='Best Seller'
                        component={BestSellerScreen}
                    />
                    <Drawer.Screen
                        name='New Est'
                        component={NewEstablishScreen}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>

    )
}