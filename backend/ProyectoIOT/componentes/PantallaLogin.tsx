// components/PantallaLogin.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router'; // <--- Importamos useRouter

type Props = {
  onLogin: () => void; // Función que se llama al hacer clic en "Iniciar sesión"
};

export default function PantallaLogin({ onLogin }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Instancia del router
    const router = useRouter();

    // Función para el botón "Iniciar sesión"
    const handleLogin = () => {
        // Validar credenciales...
        // Cuando todo OK, llamas a onLogin()
        onLogin();
    };

    // Función para el botón "Registrarse"
    const handleRegister = () => {
        // Navega a la ruta de tu pantalla de registro, p. ej. "/registro1"
        router.push('/registro1');
    };

    // Función para "¿Olvidaste tu contraseña?"
    const handleForgotPassword = () => {
        // Navega a la ruta "/resetPassword"
        router.push('/resetPassword');
    };

    return (
        <SafeAreaView style={styles.screen}>
        <ScrollView contentContainerStyle={styles.scrollContent}>

            {/* Tarjeta blanca */}
            <View style={styles.cardContainer}>

            {/* Barra Superior, igual a tus otras pantallas */}
            <View style={styles.topBar}>
                <Text style={styles.logo}>Segurix</Text>
            </View>

            {/* Contenido principal del login */}
            <View style={styles.contentContainer}>
                <Feather name="user" size={80} color="black" style={styles.icon} />
                <Text style={styles.title}>Inicio de sesión</Text>

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                style={styles.input}
                placeholder="ejemplo@correo.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                />

                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                style={styles.input}
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />

                {/* Botón Iniciar Sesión */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Iniciar sesión</Text>
                </TouchableOpacity>

                {/* Botón Registrarse */}
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Registrarse</Text>
                </TouchableOpacity>

                {/* Enlace "¿Olvidaste tu contraseña?" */}
                <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/recovery')}>
                <Text style={styles.forgotPasswordText}>Reestablecer contraseña...</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    // Fondo azul (igual que tus otras pantallas)
    screen: {
        flex: 1,
        backgroundColor: '#CFE2FF',
    },
    // Permite centrar verticalmente la tarjeta
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    // Tarjeta blanca con sombra
    cardContainer: {
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 20,
        // Sombra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        // Sombra Android
        elevation: 6,
    },
    // Barra Superior
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        marginBottom: 20,
        paddingBottom: 10,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E1E1E',
    },
    // Contenido del login
    contentContainer: {
        alignItems: 'center',
    },
    icon: {
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1E1E1E',
    },
    label: {
        width: '100%',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5,
        color: '#1E1E1E',
    },
    input: {
        width: '100%',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        fontSize: 16,
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 10,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
    registerButton: {
        width: '100%',
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 10,
    },
    registerButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#007BFF',
        marginTop: 20,
        textDecorationLine: 'underline',
    },
});
