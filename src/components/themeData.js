import Foundation from "./icons/Foundation";
const xpoThemes = [
  {
    themeName: "ETHEREAL",
    themeBG: "../assets/etherealAssets/etherealBG.jpg",
    themeMainColor: "etherealGold",
    themeContrastColor: "black",
    themeStrokeColor: "etherealHeader",
    themeSubStrokeColor: "etherealSubHeader",
    themeAccentColor: [
      "dirtGold",
      "#319900",
      "natureSoftGreen",
      "natureHardGreen",
      "#274d16",
    ],
    /* Coloring of the elements */
    themeHomeLogoColor: "white",
    themeHomeLogoStroke: "etherealHeader",
    themeHomeNavbarColor: "#946a00",
    themeHomeNavBarStrokeColor: "",
    themeHomeScrollColor: "#946a00",
    themeAboutUsColor: "etherealGold" /* and process too */,
    themeAboutParaColor: "black",
    themeAboutStrokeColor: "etherealHeader",
    themeFooterIconColor: "#946a00",
    themeFooterScrollColor: "#946a00",
    themeNFTODNavColor: "black",
    themeNFTODTitleColor: "black",
    themeNFTODBGCryptoColor: "black",
    themeNFTODScrollColor: "white",
    themeNFTODPriceColor: "white",
    themeNFTODCryptoColor: "yellow-400",
    themeNFTODCryptoIconColor: "goldenRod",
    themeNFTDescSocialColor: "gold",
    themeNFTDescToolIconColor: "black",
    themeNFTDescSlideBGColor: "black",
    themeNFTSliderDotColor: "yellow-400",
    themeMenuBGColor: "white",
    themeNFTWeeklyNumColor: "yellow-400",
    themeNFTWeeklyNum: "1",
    themeNFTWeeklyArrowColor: "black",

    /* End of coloring  */
    themeLogo: "../assets/etherealAssets/etherealLogoAbout.png",
    themeBtnNFT: [
      "../assets/etherealAssets/etherealBtn1.webp",
      "../assets/etherealAssets/etherealBtn2.webp",
    ],

    themeAboutTitle: "../assets/etherealAssets/etherealAboutHeader.png",
    themeAboutBG: "../assets/etherealAssets/etherealAboutBG.jpg",
    themeLatinName: "ethe.re.al | 'i-'thir-e-el",
    themeAboutDesc:
      "Ethereal: the subtlety that encompasses perfection that is incompatible with reality; it's out of this world, impossible to reach, it's celestial perfection, not belonging to the humans, it's soft and immaterial, delicate and beautiful.",
    themeNFT: "../assets/etherealAssets/narci2.jpg",
    themePlaceHolderNFT: "../assets/etherealAssets/etherealNFTPlaceholder.jpg",
    themeNFTArtistBtn: "../assets/etherealAssets/etherealBtn.png",
    themeNFTArtistBtnArrow: "../assets/etherealAssets/etherealBtnArrow.png",
    themeNFTPriceCrypto: "0.31 ETH",
    themeNFTPriceDollar: " ($700,00)",
    nftAssets: [
      {
        img: "../assets/etherealAssets/etherealNFTAsset.jpg",
      },
      {
        img: "../assets/etherealAssets/etherealNFTAsset2.jpg",
      },
      {
        img: "../assets/etherealAssets/etherealNFTAsset3.jpg",
      },
    ],
    themeNFTDesc: [
      {
        story:
          "For the realization of Narcissus 2.0 I found inspiration in the Greek myth  of Narcissus, I decided to reinterpretate it in a modern way and with a female character. The character is so attracted by her own image reflected on the mirror she loses herself in that beautiful reflection In this piece her ego starts to have a shape and pushes her towards it.",
        tools: "",
        desc: '"Her own reflection was irresistible, she slowly came closer staring at that pure incarnation of beauty. But she was too close and ended up losing herself in that beautiful reflection."',
        social: "https://instagram.com/@teaalexis",
        signature: "../assets/etherealAssets/etherealArtistSignature.png",
        myth: "In Greek mythology, Narcissus was a hunter from Thespiae in Boeotia who was known for his beauty.  He rejected all romantic advances, eventually falling in love with his own reflection in a pool of water, staring at it for the remainder of his life. After he died, in his place sprouted a flower bearing his name. ",
        storyBehindTitle: "../assets/etherealAssets/etherealStoryHeader.png",
        descTitle: "../assets/etherealAssets/etherealDescTitle.png",
        mythTitle: "../assets/etherealAssets/etherealMythHeader.png",
        toolsTitle: "../assets/etherealAssets/etherealToolsHeader.png",
        artistName: "Aurorae",
        artistNameTitle: "../assets/etherealAssets/etherealArtistName.png",
        nftTitle: "Narcissus 2.0",
        nftAssetTitle: "Narcissus 2.0 Pre-render",
        socialMediaIcon: {
          function() {
            return (
              <Foundation iconSize={"2xl:w-20 lg:w-14 2xl:h-20 lg:h-14"} />
            );
          },
        },
      },
    ],
  },
  {
    themeName: "DREAMS",
    themeBG: "../assets/dreamAssets/dreamsBG.png",
    themeMainColor: "dreamPink",
    themeContrastColor: "black",
    themeStrokeColor: "dreamHeader",
    themeSubStrokeColor: "dreamSubHeader",
    themeAccentColor: [
      "dirtGold",
      "#319900",
      "natureSoftGreen",
      "natureHardGreen",
      "#274d16",
    ],
    /* Coloring of the elements */
    themeHomeLogoColor: "white",
    themeHomeLogoStroke: "dreamHeader",
    themeHomeNavbarColor: "#AB5B5C",
    themeHomeNavBarStrokeColor: "",
    themeHomeScrollColor: "#AB5B5C",
    themeAboutUsColor: "dreamPink" /* and process too */,
    themeAboutParaColor: "black",
    themeAboutStrokeColor: "dreamHeader",
    themeFooterIconColor: "#AB5B5C",
    themeFooterScrollColor: "#AB5B5C",
    themeNFTODNavColor: "#4600A4",
    themeNFTDescIconHeaderColor: "white",
    themeNFTODTitleColor: "white",
    themeNFTODBGCryptoColor: "dreamLightPurple",
    themeNFTODScrollColor: "white",
    themeNFTODPriceColor: "white",
    themeNFTODCryptoColor: "dreamPurple",
    themeNFTODCryptoIconColor: "#4600A4",
    themeNFTDescSocialColor: "white",
    themeNFTDescBGColor: "dreamYellow",
    themeNFTParaColor: "dreamPurple",
    themeNFTDescToolIconColor: "white",
    themeNFTDescSlideBGColor: "black",
    themeNFTSliderDotColor: "pink-400",
    themeMenuBGColor: "white",
    themeNFTWeeklyNumColor: "pink-400",
    themeNFTWeeklyNum: "2",
    themeNFTWeeklyArrowColor: "black",
    themeNFTAssetName: ["Front-view", "Side-view"],

    /* End of coloring  */
    themeLogo: "../assets/dreamAssets/dreamLogoAbout.png",
    themeBtnNFT: [
      "../assets/dreamAssets/dreamsBtn1.png",
      "../assets/dreamAssets/dreamsBtn2.webp",
    ],

    themeAboutTitle: "../assets/dreamAssets/dreamsAboutHeader.png",
    themeAboutBG: "../assets/dreamAssets/dreamsAboutBG.png",
    themeLatinName: "dream | 'drem",
    themeAboutDesc:
      "Dream: the the complexity of the unconscious images that encapsulates the abstact, alien and somehow familiar world of haziness and blurred memories that we inhabit every single night; dreams are fog, doubts , meanings, cravings.",
    themeNFT: "../assets/dreamAssets/dreamsNFTy.png",
    themePlaceHolderNFT: "../assets/dreamAssets/dreamsNFTPlaceholder.png",
    themeNFTArtistBtn: "../assets/dreamAssets/dreamsNFTBtn.png",
    themeNFTArtistBtnArrow: "../assets/dreamAssets/dreamsNFTBtnArrow.png",
    themeNFTPriceCrypto: "1.1 ETH",
    themeNFTPriceDollar: " ($2,600,00 USD)",
    nftAssets: [
      {
        img: "../assets/dreamAssets/dreamsNFTAsset.png",
      },
      {
        img: "../assets/dreamAssets/dreamsNFTAsset2.png",
      },
    ],
    themeNFTDesc: [
      {
        story:
          "As an adventure of experimenting with various colors and materials, i ended up with “Intricacy” the culmination of all those experiments formed into one.  The chosen colors really contrasts between them which makes the piece “eye popping”, they’re bright, like the ones in a dream, an alterated world The idea behind the piece, in the end, is representing what it felt to be in different states of mind to a point of not feeling like yourself.",
        tools: "",
        desc: '"Umcomfortably felt at home, where dazing lights shapes baseless forms not of reality, not of imagination, but in a dream, a place nowhere to be."',
        social: "https://instagram.com/@teaalexis",
        signature: "../assets/dreamAssets/dreamsArtistiSignature.png",
        myth: "Aeforia is a digital artist based in Montreal, in Canada, whose work is all about colors, balance, and emotion. Blending surreal landscapes and digital portraiture, he has managed to craft a distinct style over the years and develop a keen eye for details, while focusing on the emotional impact.",
        storyBehindTitle: "../assets/dreamAssets/dreamsStoryHeader.png",
        descTitle: "../assets/dreamAssets/dreamsDescHeader.png",
        mythTitle: "../assets/dreamAssets/dreamArtistHeader.png",
        toolsTitle: "../assets/dreamAssets/dreamToolsHeader.png",
        artistName: "aeforia",
        artistNameTitle: "../assets/dreamAssets/dreamsArtistName.png",
        nftTitle: "INTRICACY",
        nftAssetTitle: ["Face view", "Side View"],
        socialMediaIcon: {
          function() {
            return (
              <Foundation iconSize={"2xl:w-20 lg:w-14 2xl:h-20 lg:h-14"} />
            );
          },
        },
      },
    ],
  },
  {
    themeName: "VOID",
    themeBG: "../assets/mediumRes/etherealMed.jpg",
    themeMainColor: "",
    themeContrastColor: "",
    themeAccentColor: "",
    themeLogo: "",
    themeBtnNFT: "",
    themeAbout: "",
    themeNFT: "",
    themePlaceHolderNFT: "",
    themeNFTDesc: [
      {
        story: "",
        tools: "",
        desc: "",
        social: "",
        signature: "",
        behind: "",
        nftAssets: "",
        artistName: "",
      },
    ],
  },
  {
    themeName: "NATURE",
    themeBG: "../assets/natureAssets/natureThemeBG.png",
    themeMainColor: "white",
    themeContrastColor: "black",
    themeStrokeColor: "natureHeader",
    themeSubStrokeColor: "natureSubHeader",
    themeAccentColor: [
      "natureGreen",
      "#319900",
      "natureSoftGreen",
      "natureHardGreen",
      "#274d16",
    ],
    /* Coloring of the elements */
    themeHomeLogoColor: "white",
    themeHomeLogoStroke: "natureHeader",
    themeHomeNavbarColor: "white",
    themeHomeNavBarStrokeColor: "",
    themeHomeScrollColor: "white",
    themeAboutUsColor: "natureGreen" /* and process too */,
    themeAboutParaColor: "white",
    themeAboutStrokeColor: "etherealHeader",
    themeFooterIconColor: "#319900",
    themeFooterScrollColor: "#319900",
    /* End of coloring  */
    themeLogo: "../assets/natureAssets/nftxpoLogoNature.png",
    themeBtnNFT: [
      "../assets/natureAssets/btnNature1.webp",
      "../assets/natureAssets/btnNature2.webp",
    ],

    themeAbout:
      "Chaos not only destroys but creates life, nature itself was created by the chaos; nature is inner force, beauty, magnificence, sublime, fear and love. Nature is the beginning of everything, the mother.",
    themeAboutTitle: "../assets/natureAssets/aboutTitleNature.png",
    themeAboutBG: "../assets/natureAssets/aboutNatureBG.png",
    themeLatinName: "na.ture | 'nã-cher",
    themeAboutDesc:
      "Ethereal: the subtlety that encompasses perfection that is incompatible with reality;it's out of this world, impossible to reach, it's celestial perfection, not belonging to the humans, it's soft and immaterial, delicate and beautiful.",
    themeNFT: "../assets/natureAssets/nftNature.jpg",
    themePlaceHolderNFT: "",
    themeNFTArtistBtn: "../assets/auroraBtn.png",
    themeNFTArtistBtnArrow: "../assets/auroraBtnArrow.png",
    themeNFTPriceCrypto: "0.31 ETH",
    themeNFTPriceDollar: " ($700,00)",
    nftAssets: [
      {
        img: "../assets/natureAssets/nftAssetNature1.jpg",
      },
      {
        img: "../assets/natureAssets/nftAssetNature2.jpg",
      },
    ],
    themeNFTDesc: [
      {
        story:
          "Alexis Christodoulou, a self-taught 3D artist originally from Cape Town, South Africa has spent the last 10 years building a collection of works focusing on imaginary architecture, modernist objects and utopian ideas. From a lifelong fascination of digital worlds and 3D graphics from playing video games, Alexis became frustrated with the lack of modern aesthetics represented therein, starting to shape his own 3D graphic spaces.",
        tools: "",
        desc: "“The longest 8 seconds of your life.”",
        social: "https://instagram.com/@teaalexis",
        signature: "../assets/natureAssets/alexisSignature.png",
        behind:
          "The images that Alexis Christodoulou creates are a simple extension of this desire to see fantastic spaces come to life that echo a more modern and clean aesthetic. His NFT are the perfect merge between natural and technological: he uses 3D software to give life to architectonic spaces that are surrounded by nature elements, like flowers, plants, water or wind. He shapes spaces that are the union between artificial and nature.",
        myth: "Alexis Christodoulou, a self-taught 3D artist originally from Cape Town, South Africa has spent the last 10 years building a collection of works focusing on imaginary architecture, modernist objects and utopian ideas. From a lifelong fascination of digital worlds and 3D graphics from playing video games, Alexis became frustrated with the lack of modern aesthetics represented therein, starting to shape his own 3D graphic spaces.",

        storyBehindTitle: "../assets/story behind it.png",
        descTitle: "../assets/description.png",
        mythTitle: "../assets/the myth.png",
        artistName: "Alexis Cristodoulou",
        artistNameTitle: "",
        nftTitle: "8 seconds meditation",
        nftAssetTitle: "Ceramic mockup",
        socialMediaIcon: {
          function() {
            return (
              <Foundation iconSize={"2xl:w-20 lg:w-14 2xl:h-20 lg:h-14"} />
            );
          },
        },
      },
    ],
  },
];
export default xpoThemes;
