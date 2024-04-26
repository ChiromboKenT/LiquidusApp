import InfoCard from '@components/InfoCard';
import { Typography } from '@components/Typography';
import { useGetAPRQuery, useGetLIQTokensStakedQuery, useGetTotalLiquidityQuery } from '@services/blockchain.service';
import { View, Text , StyleSheet} from 'react-native';

export default function Tab() {
  const { data, error, isLoading } = useGetTotalLiquidityQuery();
  const { data : data1, error : error1, isLoading : isloading1 } = useGetAPRQuery();
  const { data: data2, error : error2, isLoading : isLao } = useGetLIQTokensStakedQuery();

  return (
    <View style={styles.container}>
      <Typography variant="title" style={styles.title}>LIQ Farming</Typography>
      <View>
        <InfoCard
          title="LIQ Single Token"
          totalLiquidity={20000000}
          apr={20}
          liqTokensStacked={22222}
          imageSrc="https://via.placeholder.com/150"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 100
  },
  title: {
    marginBottom: 20,
  }
});
