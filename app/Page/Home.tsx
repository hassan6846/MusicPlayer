import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
//ui
import { SafeAreaView } from "react-native-safe-area-context"
import { Avatar } from '@rneui/themed'

const Home = ({ navigation }: { navigation: any }) => {
  const [artistsData, setArtistsData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<any>(true);
  const [error, setError] = React.useState<any>(null);
  const [playlistData, setPlaylistData] = React.useState<any>(null);

  ////////////////////////////////////////////
  const fetchArtistData = async (): Promise<any[]> => {
    const fetchPromises = [];
    const numCalls = 10;

    for (let i = 0; i < numCalls; i++) {
      const randomId = Math.floor(Math.random() * 1000) + 1; // Random ID between 1 and 1000
      const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${randomId}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '5f16ed5ffemshe4550dacca20074p1a0450jsnfe1557d7577b',
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      };

      fetchPromises.push(
        fetch(url, options)
          .then((response) => response.json())
          .catch((error) => {
            console.error(error);
            return null; // Handle failed requests gracefully
          })
      );
    }

    return Promise.all(fetchPromises).then((results) => results.filter((item) => item !== null));
  };

  // Function to fetch playlist data
  const fetchPlaylistData = async (): Promise<any> => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/playlist/13253799423`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '5f16ed5ffemshe4550dacca20074p1a0450jsnfe1557d7577b',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };

    return fetch(url, options)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        return null;
      });
  };
  ///////////////////////////////////////////////

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [artists, playlist] = await Promise.all([
          fetchArtistData(),
          fetchPlaylistData(),
        ]);
        setArtistsData(artists);
        // console.log("Artists Data:", artists);
        setPlaylistData(playlist);
        console.log("Playlist Data:", playlist.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();


  }, [])
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
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : error ? (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>No Internet</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={{ position: "relative" }}>
            <Avatar source={{ uri: "https://via.placeholder.com/150" }} containerStyle={{ width: "100%", height: 240, borderRadius: 5 }} avatarStyle={{ borderRadius: 5 }} />

          </View>
          <Text style={styles.title}>Hot</Text>
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
          <Text style={styles.title}>2024 Hit Songs</Text>
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
          <Text style={styles.title}>Artists</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{
              alignItems: 'center', // Center items vertically
            }}
            style={{ maxHeight: 120 }} // Restrict height to desired value
          >
            {artistsData.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                {/* Media Image as Avatar */}
                <Avatar
                  size={100}
                  rounded
                  source={{ uri: item.picture_big }}
                  containerStyle={styles.mediaAvatar}
                />

                {/* Type Icon Overlay */}
                <Text>{item.name}</Text>
              </View>
            ))}


          </ScrollView>
          <Text style={styles.title}>Podcasts</Text>
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
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  }, title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  iconOverlay: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  }, mediaAvatar: {
    borderRadius: 10,
  }, itemContainer: {
    marginRight: 15,
    alignItems: "center"

  }
})