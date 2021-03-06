import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Countdown from 'react-countdown-now';
import Box from 'common/components/Box';
import Fade from 'react-reveal/Fade';
import Card from 'common/components/Card';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { ControlWrapper } from './controlSection.style';
import ControlImage from 'common/assets/image/crypto/control.svg';

const Completionist = () => (
  <span className="readMore">You are good to go!</span>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="countPortion">
        <div className="countSingle">
          {days} <span className="countText">Days</span>
        </div>
        <div className="countSingle">
          {hours} <span className="countText">Hours</span>
        </div>
        <div className="countSingle">
          {minutes} <span className="countText">Minutes</span>
        </div>
        <div className="countSingle">
          {seconds} <span className="countText">Seconds</span>
        </div>
      </div>
    );
  }
};
const ControlSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  readMoreTitle,
}) => {
  return (
    <ControlWrapper id="nft_value">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: 'column' }}>
            <Image
              src={ControlImage}
              className="controlImage"
              alt="Control Section Image"
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            {/*<Text {...sectionSubTitle} />*/}
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            {/*<Box className="readMoreSection">*/}
            {/*  <Text {...readMoreTitle} />*/}
            {/*  <Link href="#">*/}
            {/*    <a className="readMore">Read More. </a>*/}
            {/*  </Link>*/}
            {/*</Box>*/}
            {/*<Fade up>*/}
            {/*  <Box className="countDownSection">*/}
            {/*    <Countdown*/}
            {/*      date={Date.now() + 909999999}*/}
            {/*      renderer={renderer}*/}
            {/*      completed={false}*/}
            {/*    />*/}
            {/*  </Box>*/}
            {/*</Fade>*/}
            {/*<Box className="countDownButton">*/}
            {/*  <Button*/}
            {/*    title="BUY TOKENS"*/}
            {/*    className="countDownMainButton"*/}
            {/*    {...btnStyle}*/}
            {/*  />*/}
            {/*  <Button*/}
            {/*    title="35% Bonus"*/}
            {/*    className="countDownDiscountButton"*/}
            {/*    {...btnStyle}*/}
            {/*  />*/}
            {/*</Box>*/}
          </Box>
        </Box>
      </Container>
    </ControlWrapper>
  );
};

// Transactions style props
ControlSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  readMoreTitle: PropTypes.object,
  btnStyle: PropTypes.object,
};

// Transactions default style
ControlSection.defaultProps = {
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
    content: 'NFT的价值',
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
      '与所有资产一样，供求是价格的主要市场驱动因素。由于 NFT 的稀缺性以及游戏玩家、收藏家和投资者对它们的高需求，人们通常准备为它们支付大量资金\n' +
      '目前，被称为被称为NFT市场的“亚马逊”的OpenSea是NFT领域最大的交易平台。目前Opensea上的交易量进入了爆发阶段，2021年1月份的交易量为800万美元，到2月份这个数字迅速增长为9000万美元，再到4月份的单日交易额便已经达到了1991.86万美元，创造了历史新高。一些其他的比较知名的NFT艺术品交易平台比如SuperRare、KnownOrigin、Async Art、AART也出现了快速增长的交易额。所以NFT是一个时代的产物，NFT数字资产具有无限的商业价值和前景。',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['30px', '30px', '35px', '35px', '45px'],
    textAlign: ['left', 'left'],
    maxWidth: ['100%', '100%', '100%', '100%', '430px'],
  },
  sectionSubTitle: {
    content: 'Effortless crypto for everyone.',
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
  readMoreTitle: {
    content: 'Sale currently on hold. ',
    as: 'span',
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['25px', '27px', '27px', '27px', '27px'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left'],
  },
};

export default ControlSection;
