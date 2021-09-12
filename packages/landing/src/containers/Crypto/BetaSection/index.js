import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import { BETA_FEATURE } from 'common/data/Crypto';
import { BetaSectionWrapper, FeatureSection } from './betaSection.style';

const BetaSection = ({
  row,
  title,
  description,
  sectionSubTitle,
  featureTitleStyle,
  featureDescriptionStyle,
}) => {
  return (
    <BetaSectionWrapper id="generate_NFT">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        {/*<Box className="BetaSection">*/}
        {/*  <FeatureSection>*/}
        {/*    {BETA_FEATURE.map((item, index) => (*/}
        {/*      <Fade up key={`feature-${index}`}>*/}
        {/*        <div className="featureWrapper">*/}
        {/*          <Image src={item.image} alt={item.title} />*/}
        {/*          <Box className="contextPortion">*/}
        {/*            <Heading*/}
        {/*              as="h3"*/}
        {/*              content={item.title}*/}
        {/*              {...featureTitleStyle}*/}
        {/*            />*/}

        {/*            <Text content={item.des} {...featureDescriptionStyle} />*/}
        {/*          </Box>*/}
        {/*        </div>*/}
        {/*      </Fade>*/}
        {/*    ))}*/}
        {/*  </FeatureSection>*/}
        {/*</Box>*/}
      </Container>
    </BetaSectionWrapper>
  );
};

// Transactions style props
BetaSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  row: PropTypes.object,
  featureTitleStyle: PropTypes.object,
  featureDescriptionStyle: PropTypes.object,
};

// Trusted default style
BetaSection.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    flexBox: true,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  title: {
    content: '如何铸造NFT',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center'],
  },

  description: {
    content:
      '首先您需要申请NFT铸造资格？\n\r' +
      '如您的账号还未实名认证，请先注册并进行实名认证。\n' +
      '如果已经完成实名认证，请点击顶部导航栏“铸造NFT”按钮 ➡ 阅读并同意《NFT铸造协议》，点击“确认申请” ➡ 设置NFT资产账户密码 ➡ 等待审核资格通过。\n' +
      '\n\r' +
      '审核资格通过后，点击顶部导航栏“铸造NFT”按钮 ➡ 输入NFT账户密码  ➡填写作品信息和NFT信息➡ 在线提交带铸造的资料➡等待邮件确认通知\n',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left'],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left'],
  },
};

export default BetaSection;
