import { Stack } from "expo-router";
import { useFonts } from 'expo-font'

export default function RootLayout() {
  const [loaded] = useFonts({
    'REM-Regular': require('../assets/fonts/REM-Regular.ttf'),
    'REM-Bold': require('../assets/fonts/REM-Bold.ttf'),
    'REM-Black': require('../assets/fonts/REM-Black.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf')
  })

  if (!loaded) {
    return null;
  }

  return <Stack screenOptions={{headerShown: false}} />;
}
