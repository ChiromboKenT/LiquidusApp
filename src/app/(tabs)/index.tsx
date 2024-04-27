import InfoCard from '@components/InfoCard';
import { Typography } from '@components/Typography';
import { useLoading } from '@context/loading.context';
import { useGetAPRQuery, useGetLIQTokensStakedQuery, useGetTotalLiquidityQuery } from '@services/blockchain.service';
import { useGetBNBUSDPriceQuery } from '@services/stat.service';
import { useEffect } from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function Tab() {
  const { data : totalLiquidity, error,  } = useGetTotalLiquidityQuery();
  const { data : apr, error : error1  } = useGetAPRQuery();
  const {
    data: bnbPrice,
    error: error3,
  } = useGetBNBUSDPriceQuery();

  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
   if((totalLiquidity && apr  && bnbPrice ) && (!error && !error1 && !error3)) {
     hideLoader();
   } else {
     showLoader();
   }
  }, [totalLiquidity, apr, bnbPrice])

  return (
    <View style={styles.container}>
      <Typography variant="title" style={styles.title}>
        <Text>LIQ Farming</Text>
      </Typography>
      <View>
        {
          totalLiquidity && apr && bnbPrice ? (
          <InfoCard
            title="LIQ Single Token"
            totalLiquidity={convertToUSD(totalLiquidity, bnbPrice, 2)}
            liqTokensStacked={convertToUSD(totalLiquidity, bnbPrice, 2)}
            apr={apr}
            imageSrc="https://via.placeholder.com/150"
          />
        ) : <View></View>}
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