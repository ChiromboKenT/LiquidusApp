import { useGetAPRQuery, useGetLIQTokensStakedQuery, useGetTotalLiquidityQuery } from '@services/blockchain.service';
import { View, Text } from 'react-native';

export default function Tab() {
  const { data, error, isLoading } = useGetTotalLiquidityQuery();
  const { data : data1, error : error1, isLoading : isloading1 } = useGetAPRQuery();
  const { data: data2, error : error2, isLoading : isLao } = useGetLIQTokensStakedQuery();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>Tab [Home|Settings]</Text>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: { JSON.stringify((error as any)?.message)}</Text>}
    </View>
  );
}
