import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

//navigation
import { useNavigation } from "@react-navigation/native";
//storage
import AsyncStorage from "@react-native-async-storage/async-storage";
//icons
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//Session
import * as AppAuth from "expo-auth-session";



//gradient
import { LinearGradient } from "expo-linear-gradient"
const LoginScreen = () => {
    //Function Login
    const HandleAuth = async () => {
        const config={
            issuer:"https://accounts.spotify.com",
            clientId:'fc17ece7b199440bae7b73857369430b',
            scopes:[
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public" 
            ],
              redirectUrl:"exp://localhost:19002/--/spotify-auth-callback"
        }
     
        try {
            const result=await AppAuth.auth
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        console.log("Login Screen Rendered")
    })


    return (
        <LinearGradient colors={["#0d0d14", "#1c1f42"]}

            style={{ flex: 1 }} >
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
                <TouchableOpacity
                    onPress={HandleAuth}
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
                </TouchableOpacity>

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