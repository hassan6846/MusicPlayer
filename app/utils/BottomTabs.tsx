
// Screens names identification Respectivly
//Configs are made seprate to scalable and mainable Code
// to apply value or keys to props respectivly thanks!😁
// This page only contains the Props configs option of TabScreen Option
// iF you are reading this this took time me to learn .
//Customize the Icon Focus styles here
//App Etc

//ui
import { Icon, Text, Avatar } from "@rneui/themed"
import { View } from "react-native"
//utils
export const DefaultImageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/434px-Unknown_person.jpg"
import { Colors } from "./ColorProvider"

export const bottomTabs = {
    Home: {
        Svg: ({ focused }: { focused: any }) => (
            <View style={{ height: "100%", alignItems: "center", marginTop: 20 }}>
                <Icon size={25} color={focused ? Colors.primary : "#5F6368"} name="home-filled" type="material" />
                <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? Colors.primary : "#5F6368" }}>Home</Text>

            </View>
        )
    },
    Browse: {
        Svg: ({ focused }: { focused: any }) => (
            <View style={{ height: "100%", alignItems: "center", marginTop: 20 }}>
                <Icon size={25} color={focused ? Colors.primary : "#5F6368"} name="explore" type="material" />
                <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? Colors.primary : "#5F6368" }}>Browse</Text>

            </View>
        )
    },
    Profile: {
        Svg: ({ focused }: { focused: any }) => (
            <View style={{ height: "100%", alignItems: "center", marginTop: 20, }}>
                <Avatar avatarStyle={{ borderWidth: 2, borderColor: focused ? Colors.primary : "#5F6368" }} rounded source={{ uri: DefaultImageSrc }} size={25} />
                <Text style={{ fontSize: 10, fontWeight: "bold", color: focused ? Colors.primary : "#5F6368" }}>You</Text>
            </View>
        )
    }
}

export const TabHeight = 70