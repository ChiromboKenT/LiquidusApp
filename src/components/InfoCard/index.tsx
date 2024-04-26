import { Typography } from '@components/Typography';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

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
          <Typography style={styles.title} variant="title">
            {title}
          </Typography>
          <Typography variant="default" style={styles.text}>
            Total Liquidity: {totalLiquidity}
          </Typography>
          <Typography variant="default" style={styles.text}>
            Liq Tokens Stacked: {liqTokensStacked}
          </Typography>
          <Typography variant="default" style={styles.text}>
            APR: {apr}%
          </Typography>
        </View>
        <View style={styles.infoCardRight}>
          <Image source={require("@assets/img/profile.jpeg")} style={styles.image} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    margin: 0,
    padding: 0,
  },
  infoCard: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    overflow: 'hidden',
    width: '100%',
    marginBottom: 10,
      padding: 10,
      paddingTop: 15,
      paddingBottom: 15,
    },
  infoCardLeft: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoCardRight: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default InfoCard;