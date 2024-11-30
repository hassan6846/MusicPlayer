import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
//params
import { useRoute } from '@react-navigation/native';
//ui
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Avatar } from '@rneui/themed';
import Slider from "@react-native-community/slider";

const PlayerPage = () => {
    const route = useRoute<any>();


    const [sliderValue, setSliderValue] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLooping, setIsLooping] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setSliderValue(sliderValue + 10);
    };

    const handleLoop = () => {
        setIsLooping(!isLooping);
    };


    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
            <Avatar
                avatarStyle={styles.avatar}
                source={{
                    uri: "https://populaceindia.com/wp-content/uploads/2020/01/design-portfolio-03.jpg"
                }}
                containerStyle={styles.avatarContainer}
            />
            <Text style={styles.title}>Vsauce</Text>
            <Text style={styles.subtitle}>Digital marketing etc</Text>

            {/* Slider with Timing */}
            <View style={styles.sliderContainer}>
                <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{formatTime(sliderValue)}</Text>
                    <Text style={styles.timeText}>{formatTime(100)}</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    value={sliderValue}
                    minimumTrackTintColor="#FF6347"
                    maximumTrackTintColor="#d3d3d3"
                    thumbTintColor="#FF6347"
                    onValueChange={(value) => setSliderValue(value)}
                />
            </View>


            <View style={styles.controlsContainer}>
                <Icon
                    name="equalizer"
                    type="material"
                    color="#FF6347"
                    size={20}
                    onPress={handleNext}
                    containerStyle={styles.controlButton}
                />
                <Icon
                    name="skip-previous"
                    type="material"
                    color="#FF6347"
                    size={40}
                    onPress={handleNext}
                    containerStyle={styles.controlButton}
                />
                <Icon
                    name={isPlaying ? "pause" : "play-arrow"}
                    type="material"
                    color="#fff"
                    size={40}
                    onPress={handlePlayPause}
                    containerStyle={[styles.controlButton, { backgroundColor: "#FF6347", padding: 10, borderRadius: 30, elevation: 20 }, styles.PauseSHadow]}
                />
                <Icon
                    name="skip-next"
                    type="material"
                    color="#FF6347"
                    size={40}
                    onPress={handleNext}
                    containerStyle={styles.controlButton}
                />
                <Icon
                    name={isLooping ? "loop" : "repeat"}
                    type="material"
                    color="#FF6347"
                    size={20}
                    onPress={handleLoop}
                    containerStyle={styles.controlButton}
                />
            </View>
        </SafeAreaView>
    );
};

export default PlayerPage;

const styles = StyleSheet.create({
    PauseSHadow: {
        shadowColor: "#FF6347", // Tomato color for shadow
        shadowOffset: {
            width: 0,
            height: 20, // More offset for a stronger shadow
        },
        shadowOpacity: 0.9, // High opacity for a darker shadow
        shadowRadius: 15, // Larger radius to spread the shadow
        elevation: 30, // Strong shadow for Android

    },
    avatarContainer: {
        width: '100%',
        height: "50%",
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 10,
    },
    avatar: {
        borderRadius: 10,
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10,
        color: "#333",
    },
    subtitle: {
        textAlign: "center",
        fontSize: 14,
        color: "gray",
        marginBottom: 20,
    },
    sliderContainer: {
        width: '100%',
        alignItems: "center",
        marginTop: 10,
    },
    slider: {
        width: '90%',
        height: 40,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    timeText: {
        fontSize: 14,
        color: "#333",
    },
    controlsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: "center",

        marginTop: 20,
    },
    controlButton: {
        padding: 5,
        borderRadius: 30,
        marginHorizontal: 15,

    },
});
