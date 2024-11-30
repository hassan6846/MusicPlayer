import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
//ui
import { SafeAreaView } from "react-native-safe-area-context"
import { Avatar } from '@rneui/themed'
import { Icon } from '@rneui/base'
import { DefaultImageSrc } from '../utils/BottomTabs'

const Discover = () => {
    const genres = [
        "All", "Acoustic", "Party", "Rock", "Soul & Funk", "Dance & EDM", "Country",
        "At home", "R&B", "Sleep", "Electronic", "Gaming", "Metal", "Lofi",
        "Jazz", "Folk & singer-songwriter", "Feel good", "Indie & Alternative",
        "Focus", "Movies & Series", "Kids", "Classical", "Latin music", "Afro",
        "Reggae", "Blues", "Reggaeton"
    ]

    const [selectedGenre, setSelectedGenre] = React.useState<any>("All");

    const handleGenrePress = (genre: any) => {
        setSelectedGenre(genre);
    };
    const data = [
        {
            id: "1",
            avatar: "https://via.placeholder.com/150",
            type: "audio",
        },
        {
            id: "2",
            avatar: "https://via.placeholder.com/150",
            type: "video",
        },
        {
            id: "3",
            avatar: "https://via.placeholder.com/150",
            type: "audio",
        },
        {
            id: "4",
            avatar: "https://via.placeholder.com/150",
            type: "audio",
        },
    ];
    const ExploreAllData = [
        { title: "My Deezer Year", color: "#a238ff" },
        { title: "Charts", color: "#2f7c90" },
        { title: "New releases", color: "#4e0193" },
        { title: "Rap", color: "#0a1578" },
        { title: "Workout", color: "#0a1578" },
        { title: "Deezer Next", color: "#3448fc" },
        { title: "Christmas", color: "#3448fc" },
        { title: "Chill", color: "#ff3d3d" },
        { title: "Pop", color: "#90931e" },
        { title: "Acoustic", color: "#90931e" },
        { title: "Party", color: "#2f7c90" },
        { title: "Rock", color: "#a238ff" },
        { title: "Soul & Funk", color: "#2f7c90" },
        { title: "Dance & EDM", color: "#3448fc" },
        { title: "Country", color: "#4e0193" },
        { title: "At home", color: "#0a1578" },
        { title: "R&B", color: "#0a1578" },
        { title: "Sleep", color: "#3448fc" },
        { title: "Electronic", color: "#3448fc" },
        { title: "Gaming", color: "#ff3d3d" },
        { title: "Metal", color: "#90931e" },
        { title: "Lofi", color: "#90931e" },
        { title: "Jazz", color: "#2f7c90" },
        { title: "Folk & singer-songwriter", color: "#a238ff" },
        { title: "Feel good", color: "#2f7c90" },
        { title: "Indie & Alternative", color: "#3448fc" },
        { title: "Focus", color: "#3448fc" },
        { title: "Movies & Series", color: "#ff3d3d" },
        { title: "Kids", color: "#90931e" },
        { title: "Classical", color: "#2f7c90" },
        { title: "Latin music", color: "#a238ff" },
        { title: "Afro", color: "#ff3d3d" },
        { title: "Reggae", color: "#2f7c90" },
        { title: "Blues", color: "#3448fc" },
        { title: "Reggaeton", color: "#ff3d3d" },
        { title: "Bubble", color: "#90931e" },
        { title: "K-pop", color: "#4e0193" },
        { title: "AnimeVerse", color: "#a238ff" }
    ];

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <View>
                    <Text style={styles.title}>Music Genres</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContainer}
                    >
                        {genres.map((genre, index) => (
                            <Pressable
                                key={index}
                                style={[
                                    styles.genreItem,
                                    selectedGenre === genre && styles.selectedItem
                                ]}
                                onPress={() => handleGenrePress(genre)}
                            >
                                <Text style={[
                                    styles.genreText,
                                    selectedGenre === genre && styles.selectedText
                                ]}>
                                    {genre}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <View style={{ width: "100%", height: 200, marginTop: 10, marginBottom: 10, padding: 10, flexDirection: "row", columnGap: 5 }}>
                        <Avatar source={{ uri: DefaultImageSrc }} avatarStyle={{ borderRadius: 5 }} containerStyle={{ width: "60%", height: '100%' }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: "40%", rowGap: 2 }}>
                            <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: DefaultImageSrc }} containerStyle={{ width: "100%", height: "50%" }} />
                            <Avatar avatarStyle={{ borderRadius: 5 }} source={{ uri: DefaultImageSrc }} containerStyle={{ width: "100%", height: "50%" }} />
                        </View>
                    </View>


                </View>
                <Text style={styles.title}>Live Radio</Text>
                <Avatar containerStyle={{ width: "100%", height: 100, position: "relative", borderRadius: 5, }} avatarStyle={{ borderRadius: 5 }} source={{ uri: "https://th.bing.com/th/id/OIP.u-oLDJfDFXdHUEfV4EiPrAHaBR?rs=1&pid=ImgDetMain" }}>
                    <View style={{ alignItems: "center", borderRadius: 5, height: 100, position: "absolute", backgroundColor: "rgba(0, 0, 0, 0.1)", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 20, padding: 10, }}>
                        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}> Radio Persian</Text>
                        <Icon containerStyle={{ padding: 20, backgroundColor: "rgba(0, 0, 0, 0.4)", borderRadius: 100 }} size={10} color='#fff' name='play' type="font-awesome" />
                    </View>
                </Avatar>
                <Text style={styles.title}>Latest Albums</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{
                        alignItems: 'center', // Center items vertically
                    }}
                    style={{ maxHeight: 120 }} // Restrict height to desired value
                >
                    {data.map((item) => (
                        <View key={item.id} style={styles.itemContainer}>
                            {/* Media Image as Avatar */}
                            <Avatar
                                size={100}
                                
                                source={{ uri: item.avatar }}
                                containerStyle={styles.mediaAvatar}
                            />

                            {/* Type Icon Overlay */}
                            <Avatar
                                size={24}
                                rounded
                                containerStyle={styles.iconOverlay}
                                icon={{
                                    name: item.type === "audio" ? "music" : "video",
                                    color: "white",
                                }}
                            />
                        </View>
                    ))}


                </ScrollView>
                <Text style={styles.title}>Explore All</Text>
                <View style={styles.ExploreContainer}>
                    {
                        ExploreAllData.map((data, index) => (
                            <View style={[styles.ExploreItem, { backgroundColor: data.color }]} key={index}>
                                <Text style={styles.ExploreText}>{data.title}</Text>
                            </View>
                        ))
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    genreItem: {
        backgroundColor: '#D3D3D3',
        paddingVertical: 8,
        paddingHorizontal: 14,
        marginRight: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedItem: {
        backgroundColor: '#6200EE',
    },
    genreText: {
        fontSize: 14,
        color: '#333',
    },
    selectedText: {
        color: '#fff',
    },
    listContainer: {


        backgroundColor: "orange"
    },
    itemContainer: {
        marginRight: 15,
        position: "relative",
    },
    mediaAvatar: {
        borderRadius: 10,
    },
    iconOverlay: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    ExploreContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 10,
    },
    ExploreItem: {
        width: '48%',
        marginBottom: 15,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }, ExploreText: {
        color: "#fff",
        fontWeight: "bold",

    }
})