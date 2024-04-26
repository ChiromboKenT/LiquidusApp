import InfoCard from '@components/InfoCard';
import { Typography } from '@components/Typography';
import { useLoading } from '@context/loading.context';
import { useGetAPRQuery, useGetLIQTokensStakedQuery, useGetTotalLiquidityQuery } from '@services/blockchain.service';
import { useGetBNBUSDPriceQuery } from '@services/stat.service';
import { parse } from 'expo-linking';
import { useEffect } from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default function Tab() {
  const { data : totalLiquidity, error,  } = useGetTotalLiquidityQuery();
  const { data : apr, error : error1  } = useGetAPRQuery();
  const { data: tokenStacked, error: error2} = useGetLIQTokensStakedQuery();
  const {
    data: bnbPrice,
    error: error3,
  } = useGetBNBUSDPriceQuery();

  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
   if((totalLiquidity && apr && tokenStacked && bnbPrice ) && (!error && !error1 && !error2)) {
     hideLoader();
   } else {
     showLoader();
   }
  }, [totalLiquidity, apr, tokenStacked, bnbPrice])

  return (
    <View style={styles.container}>
      <Typography variant="title" style={styles.title}>
        LIQ Farming
      </Typography>
      <View>
        <InfoCard
          title="LIQ Single Token"
          totalLiquidity={formatValue(totalLiquidity!, bnbPrice!, 2)}
          liqTokensStacked={convertToEther(tokenStacked!)}
          apr={parseFloat((convertToEther(apr!) * 100).toFixed(2))}
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

const convertToEther = (number: string): number => {
  return parseFloat(number) * Math.pow(10, -18);
};

const formatValue = (
  number: string,
  currentPrice: string,
  dp: number = 2,
): number => {
  const value = convertToEther(number) * parseFloat(currentPrice);
  return parseFloat(value.toFixed(dp));
};