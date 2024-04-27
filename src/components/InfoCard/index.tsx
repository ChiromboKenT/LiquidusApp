import { Typography } from '@components/Typography';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { formatCurrency } from '@utils/format.utils';

interface InfoCardProps {
    title: string;
    totalLiquidity: number;
    apr: number;
    liqTokensStacked: number;
    imageSrc: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    totalLiquidity,
    apr,
    liqTokensStacked,
    imageSrc,
}) => {
    return (
      <View style={styles.infoCard}>
        <View style={styles.infoCardLeft}>
          <View style={styles.titleContainer}>
            <Typography variant="title" style={styles.title}>{title}</Typography>
            <View style={styles.headerImageContainer}>
              <Image
                source={require('@assets/img/profile.jpeg')}
                style={styles.image}
              />
            </View>
          </View>
          <Typography variant="default" style={styles.text}>
            Total Liquidity: {formatCurrency(totalLiquidity, 'USD')}
          </Typography>
          <Typography variant="default" style={styles.text}>
            Liq Tokens Stacked: {formatCurrency(liqTokensStacked, 'USD')}
          </Typography>
          <Typography variant="default" style={styles.text}>
            APR: {apr}%
          </Typography>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginBottom: 5,
    padding: 0,
  },
  infoCard: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },

  infoCardLeft: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoCardRight: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
      justifyContent: 'space-between',
    marginBottom: 0,
  },
  headerImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 5,
      borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default InfoCard;