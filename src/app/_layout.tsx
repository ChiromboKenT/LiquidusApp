import { Stack } from 'expo-router/stack';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Entypo from '@expo/vector-icons/Entypo';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          ...Entypo.font,
          'MaxTF-Bold': require('../../assets/fonts/MaxTF-Bold.ttf'),
          'Familjen Grotesk': require('../../assets/fonts/FamiljenGrotesk.ttf'),
          'Cabinet Grotesk': require('../../assets/fonts/CabinetGrotesk.ttf'),
          'Nanum Pen': require('../../assets/fonts/NanumPenScript.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

return appIsReady ? (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
  </Stack>
) : null;
}
