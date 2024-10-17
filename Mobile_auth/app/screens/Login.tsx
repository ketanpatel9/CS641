import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  ActivityIndicator, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform,
  SafeAreaView
} from 'react-native';
import { StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    const auth = FIREBASE_AUTH;

    const handleAuth = async (action: 'signIn' | 'signUp') => {
        setLoading(true);
        try {
            const authFunction = action === 'signIn' ? signInWithEmailAndPassword : createUserWithEmailAndPassword;
            const response = await authFunction(auth, email, password);
            console.log(response);
            Alert.alert("Success", action === 'signIn' ? "Logged in successfully!" : "Account created successfully!");
            navigation.navigate('Home');
        } catch (error: any) {
            console.log(error);
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
            >
                <Text style={styles.title}>Welcome</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    autoCapitalize="none"
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {loading ? (
                    <ActivityIndicator size="large" color="#007AFF" />
                ) : (
                    <>
                        <TouchableOpacity style={styles.button} onPress={() => handleAuth('signIn')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => handleAuth('signUp')}>
                            <Text style={styles.buttonText}>Create account</Text>
                        </TouchableOpacity>
                    </>
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#1F2937',
    },
    input: {
        width: '100%',
        marginVertical: 12,
        height: 50,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        padding: 12,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#1D4ED8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
    },
    secondaryButton: {
        backgroundColor: '#059669',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Login;
