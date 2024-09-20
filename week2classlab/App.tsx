import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    ScrollView,
    Text,
    ActivityIndicator,
    Image,
} from "react-native";

export default function App() {
    return (
        <ScrollView>
            <Text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
            </Text>
            <Text >
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
                neque eu tellus rhoncus ut eleifend nibh porttitor.
            </Text>
            <ActivityIndicator size="large" color="#000" />
            <Image
                source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
                style={styles.image}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    
    image: {
        width: 500,
        height: 500,
    },
});