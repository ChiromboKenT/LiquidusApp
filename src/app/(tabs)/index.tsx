import InfoCard from '@components/InfoCard';
import { Typography } from '@components/Typography';
import { useLoading } from '@context/loading.context';
import { useGetContractDataQuery } from '@services/blockchain.service';
import { useGetBNBUSDPriceQuery } from '@services/stat.service';
import { useEffect } from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function Tab() {
  const { data, error, isLoading } = useGetContractDataQuery();
  const {
    data: bnbPrice,
    error: error3,
  } = useGetBNBUSDPriceQuery();

  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
   if((data  && bnbPrice ) && (!error && !error3)) {
     hideLoader();
   } else {
     showLoader();
   }
  }, [isLoading,data, bnbPrice])

  return (
    <View style={styles.container}>
      <Typography variant="title" style={styles.title}>
        <Text>LIQ Farming</Text>
      </Typography>
      <View>
        {data && bnbPrice ? (
          <InfoCard
            title="LIQ Single Token"
            totalLiquidity={convertToUSD(data.totalLiquidity, bnbPrice, 2)}
            liqTokensStacked={convertToUSD(data.totalLiquidity, bnbPrice, 2)}
            apr={data.apr}
            imageSrc="https://via.placeholder.com/150"
          />
        ) : (
          <View></View>
        )}
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

const convertToUSD = (
  number: number,
  currentPrice: string,
  dp: number = 2,
): number => {
  const value = number * parseFloat(currentPrice);
  return parseFloat(value.toFixed(dp));
};