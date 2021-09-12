import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Fade from 'react-reveal/Fade';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { TRANSACTIONS_FEATURE } from 'common/data/Crypto';
import { TransactionsWrapper, FeatureSection } from './transaction.style';

const TransactionsHistory = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <TransactionsWrapper id="what_is_nft">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            {/*<Text {...sectionSubTitle} />*/}
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
              // button={<Button title="GET DOCS" {...btnStyle} />}
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {TRANSACTIONS_FEATURE.map((item, index) => (
                <Fade up key={`feature-${index}`}>
                  <div className="featureWrapper">
                    <Image src={item.image} alt={item.title} />
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.des} {...featureDescriptionStyle} />
                  </div>
                </Fade>
              ))}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </TransactionsWrapper>
  );
};

// Transactions style props
TransactionsHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Transactions default style
TransactionsHistory.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Transactions section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },

  // Transactions section title default style
  title: {
    content: '什么是NFT',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '100%', '415px'],
    textAlign: ['left', 'left'],
  },
  // Transactions section description default style
  description: {
    content:
      'NFT是Non-Fungible Token的缩写，中文称为「非同质化代币」，是一种非同质化通证。它是一个储存在区块链（以太坊、币安智能链、火币生态链等）上的数字内容作品权益（数权）的签名证明。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行的代币，它的特性为不可分割、不可替代、独一无二的，简单来说，采用ERC721标准/协议而发行的代币就叫做NFT。简而言之，NFT 是一种数字资产，代表现实世界的对象，如艺术、音乐、游戏内物品和视频。',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '40px', '40px', '55px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    content: 'NFT的特点',
    as: 'span',
    textAlign: 'left',
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontFamily: 'Poppins',
    fontWeight: '600',
    lineHeight: '27px',
    color: '#525f7f',
    textAlign: ['left', 'left'],
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left'],
  },
  // Transactions section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left'],
  },
};

export default TransactionsHistory;