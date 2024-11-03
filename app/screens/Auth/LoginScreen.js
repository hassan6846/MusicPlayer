import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useEffect } from "react";

//navigation
import { useNavigation } from "@react-navigation/native";
//storage
import AsyncStorage from "@react-native-async-storage/async-storage";
//icons
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



//gradient
import { LinearGradient } from "expo-linear-gradient"
const LoginScreen = () => {

    useEffect(() => {
        console.log("Login Screen Rendered")
    })
    return (
        <LinearGradient colors={["#0d0d14", "#1c1f42", "#3a3f7a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} style={{ flex: 1 }} >
            <SafeAreaView>

                <View style={{ height: 100, alignItems: "center", width: "100%", justifyContent: "center" }} />
                <View style={{ justifyContent: "center", alignItems: 'center' }}>
                    <Entypo name="spotify" size={100} color="white" />

                </View>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 40,
                        fontWeight: "bold",
                        paddingHorizontal: 10,
                        textAlign: "center",
                        marginTop: 40,
                    }}
                >
                    Millions of Songs Free on spotify!
                </Text>

                <View style={{ height: 80 }} />
                <Pressable

                    style={{
                        backgroundColor: "#1DB954",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 10
                    }}
                >

                    <Text>Sign In with spotify</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}
                >
                    <MaterialIcons name="phone-android" size={24} color="#fff" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue with phone number</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}
                >
                    <Entypo name="google-play" size={24} color="#fff" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Continue with Google</Text>
                </Pressable>

                <Pressable
                    style={{
                        backgroundColor: "#131624",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}
                >
                    <Entypo name="facebook" size={24} color="#fff" />
                    <Text style={{ fontWeight: "500", color: "white", textAlign: "center", flex: 1 }}>Sign In with facebook</Text>
                </Pressable>
            </SafeAreaView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({

})
export default LoginScreen