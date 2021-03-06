import AuthorOne from '../../assets/image/crypto/author-4.jpg';
import AuthorTwo from '../../assets/image/crypto/author-2.jpg';
import AuthorThree from '../../assets/image/crypto/author-3.jpg';
import AuthorFour from '../../assets/image/crypto/author-1.jpg';
import FEATURE1 from '../../assets/image/crypto/tf1.svg';
import FEATURE2 from '../../assets/image/crypto/tf2.svg';
import FEATURE3 from '../../assets/image/crypto/tf3.svg';
import FEATURE4 from '../../assets/image/crypto/tf4.svg';
import PROOF1 from '../../assets/image/crypto/proof1.svg';
import PROOF2 from '../../assets/image/crypto/proof2.svg';
import PROOF3 from '../../assets/image/crypto/proof3.svg';
import PROOF4 from '../../assets/image/crypto/proof4.svg';
import PROOF5 from '../../assets/image/crypto/proof5.svg';
import PROOF6 from '../../assets/image/crypto/proof6.svg';
import JACKPOTIMG from '../../assets/image/crypto/jackpot.svg';
import BETA1 from '../../assets/image/crypto/beta-1.svg';
import BETA2 from '../../assets/image/crypto/beta-2.svg';
import BETA3 from '../../assets/image/crypto/beta-3.svg';

export const MENU_ITEMS = [
  {
    label: '首页',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'NFT介绍',
    path: '#what_is_nft',
    offset: '0',
  },
  {
    label: 'NFT价值',
    path: '#nft_value',
    offset: '-10',
  },
  {
    label: '交易案例',
    path: '#trade_case',
    offset: '-10',
  },
  {
    label: '如何铸造',
    path: '#generate_NFT',
    offset: '-10',
  },
];

export const TESTIMONIALS = [
  {
    review:
      'Best working experience  with this amazing team & in future, we want to work together',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: `${AuthorOne}`,
  },
  {
    review:
      'Impressed with master class support of the team and really look forward for the future.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: `${AuthorTwo}`,
  },
  {
    review:
      'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: `${AuthorThree}`,
  },
  {
    review:
      'Impressed with master class support of the team and really look forward for the future.',
    name: 'Jon Doe',
    designation: 'Manager of Hp co.',
    avatar: `${AuthorFour}`,
  },
];
export const TRANSACTIONS_FEATURE = [
  {
    image: FEATURE1,
    title: 'NFT赋予艺术家对数字资产的所有权',
    des: '当内容创建者创建数字资产时，NFT 不仅让他们有机会展示真实性，而且还能从他们的工作中获利。像模因这样的东西广为流传，这可能意味着创作者的可观收入来源',
  },
  {
    image: FEATURE2,
    title: 'NFT是独一无二且具有收藏价值的数字资产',
    des: '“许多人喜欢收集独特或稀有的东西所带来的兴奋。  NFT提供了一种标记数字资产所有权的方法， NFT作品含有可追溯的「识别信息」，从而让可复制性变得无关紧要，这可以使更多数字内容创作者放心创作。换言之，NFT 为可收集内容提供了额外的合法性层，尤其是以数字资产的形式”',
  },
  {
    image: FEATURE3,
    title: 'NFT是不可更改的数字资产',
    des: '因为不可替代的代币是基于区块链的，所以它们永远不能被更改、擦除或替换。同样，在证明数字内容的来源或真实性时，这是一种宝贵的品质. 创作者（或持有者）在为自己的数字内容作品铸造NFT后，可用其作为自己对作品数权的凭证。基于NFT的标准化、唯一性和流动性特点，当有人想要购买该数字内容作品的数权时，可以直接通过NFT交易，快捷地完成数权转移',
  },
  {
    image: FEATURE4,
    title: 'NFT可以包括智能合约',
    des: '智能合约是区块链技术的另一个非常有趣的特征。本质上，它们可以存储在满足某些条件时执行的指令。因此，具有智能合约的 NFT 可以在未来出售 NFT 时为艺术家提供一定比例的利润',
  },
];
export const PROOFS_FEATURE = [
  {
    image: PROOF1,
    title: 'Instant trading',
    des: 'Never miss a price swing.',
  },
  {
    image: PROOF2,
    title: 'No hidden fees',
    des: 'know our fees upfront.',
  },
  {
    image: PROOF3,
    title: 'Secure storage',
    des: 'Sleep with peace of mind.',
  },
  {
    image: PROOF4,
    title: 'Systematic trading',
    des: 'History intraday market.',
  },
  {
    image: PROOF5,
    title: 'Network Effect',
    des: 'Casinos contribute 1%.',
  },
  {
    image: PROOF6,
    title: 'Bigger Rewards',
    des: 'Players are incentivized.',
  },
];
export const SCALABLE_FEATURE = [
  {
    image: JACKPOTIMG,
    title: 'Daily Jackpot',
    des: '35000 CLV',
  },
  {
    image: JACKPOTIMG,
    title: 'Weekly Jackpot',
    des: '250000 CLV',
  },
  {
    image: JACKPOTIMG,
    title: 'Monthly Jackpot',
    des: '4999697 CLV',
  },
  {
    image: JACKPOTIMG,
    title: 'Yearly Jackpot',
    des: '300245785000 CLV',
  },
];

export const BETA_FEATURE = [
  {
    image: BETA1,
    title: 'SEPA Transfers',
    des: 'Deposit & Withdraw money.',
  },
  {
    image: BETA2,
    title: '24/7 Support',
    des: 'Always here for you.',
  },
  {
    image: BETA3,
    title: 'Secure',
    des: 'Your money is safe.',
  },
];

export const menuWidget = [
  {
    id: 1,
    title: 'About Us',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Support Center',
      },
      {
        id: 2,
        url: '#',
        text: 'Customer Support',
      },
      {
        id: 3,
        url: '#',
        text: 'About Us',
      },
      {
        id: 4,
        url: '#',
        text: 'Copyright',
      },
      {
        id: 5,
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    id: 2,
    title: 'Our Information',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Return Policy',
      },
      {
        id: 2,
        url: '#',
        text: 'Privacy Policy',
      },
      {
        id: 3,
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        id: 4,
        url: '#',
        text: 'Site Map',
      },
      {
        id: 5,
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    id: 3,
    title: 'My Account',
    menuItems: [
      {
        id: 1,
        url: '#',
        text: 'Press inquiries',
      },
      {
        id: 2,
        url: '#',
        text: 'Social media directories',
      },
      {
        id: 3,
        url: '#',
        text: 'Images & B-roll',
      },
      {
        id: 4,
        url: '#',
        text: 'Permissions',
      },
      {
        id: 5,
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
];
export const Language_NAMES = [
  {
    label: 'English',
    value: 'eng',
  },
  {
    label: 'Chinese',
    value: 'chinese',
  },
  {
    label: 'Indian',
    value: 'indian',
  },
];
