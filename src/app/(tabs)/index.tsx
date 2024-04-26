import { useGetTotalLiquidityQuery } from '@services/blockchain.service';
import { View, Text } from 'react-native';

export default function Tab() {
  const { data, error, isLoading } = useGetTotalLiquidityQuery();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Tab [Home|Settings]</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: { JSON.stringify((error as any)?.message)}</Text>}
    </View>
  );
}
