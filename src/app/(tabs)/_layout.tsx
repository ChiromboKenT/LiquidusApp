import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { LoadingProvider } from '@context/loading.context';
import 'react-native-gesture-handler';
import { colors, spacing } from '@theme/index';
import { AppImage } from '@components/AppImage';

export default function TabLayout() {
  return (
    <LoadingProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {
            height: 80,
            borderWidth: 1,
            borderTopColor: colors.primary,
            backgroundColor: colors.background_dark,
            paddingBottom: spacing.sm,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AppImage
                source={require('@assets/img/tabHome.png')}
                style={{ width: 50, height: 50, tintColor: color }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: 'Chat',
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AppImage
                source={require('@assets/img/chat.png')}
                style={{ width: 35, height: 35, tintColor: color }}
              />
            ),
          }}
        />
      </Tabs>
    </LoadingProvider>
  );
}
