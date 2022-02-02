import React, { useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  extendTheme,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Fonts from './Fonts';
import '@fontsource/righteous/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import { Home, Roadmap, About, Team,FAQ,Mint } from './pages';
import {  Footer } from './components';
import { fetchData } from './redux/data/dataActions';
import { connect } from './redux/blockchain/blockchainActions';

const extendedTheme = extendTheme({
  ...theme,
  fonts: {
    heading: 'Righteous',
    body: 'Space Grotesk',
  },
  colors: {
    ...theme.colors,
    bgLight: '#efeee8',
    ab: '#FFB951',
    bc: '#055E82',
    bd: '#060014',
    gr1: '#06425C',
    gr2: '#305560',
    gr3: '#BA926D',
    gr4: '#010C28',
    drawer: '#0A0518',
  },
});

const {REACT_APP_CONTRACT_ADDRESS} = process.env

function App() {
   const blockchain = useSelector(state => state.blockchain);
   const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const handleConnect = () => {
    dispatch(connect());
    getData();
  };

  useEffect(() => {
    if (!blockchain.account && !blockchain.smartContract) {
      // handleConnect();
    } else {
      getData();
    }
  }, [blockchain.account]);

  useEffect(() => {
    if (blockchain.errorMsg) {
      toast.error(blockchain.errorMsg);
    }
    if (data.errorMsg) {
      toast.error(data.errorMsg);
    }
  }, [blockchain.errorMsg, data.errorMsg]);

  const claimNFTs = (count) => {
    if (count <= 0) {
      return;
    }

    toast.info('Preparing your NFT...');
    const value = blockchain.web3.utils.toWei((data.cost * count).toString(), 'ether');
    blockchain.smartContract.methods
      .mint(count)
      .send({
        gasLimit: '4712388',
        to: REACT_APP_CONTRACT_ADDRESS,
        from: blockchain.account,
        value,
      })
      .once('error', (err) => {
        console.log(err);
        toast.error('It seems the transaction was cancelled.');
      })
      .then((receipt) => {
        toast.success(
          'Woohoo! NFT minted successfully!'
        );
        dispatch(fetchData(blockchain.account));
      });
  };

  return (
    <ChakraProvider theme={extendedTheme}>
      <Fonts />
      <Box
        minH="100vh"
        bg="bd"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Box>
          <Home
            onConnect={handleConnect}
            address={blockchain.account}
            data={data}
            onMint={claimNFTs}
            loading={blockchain.loading}
          />
          <About />
          <Roadmap />
          {/* <Gallery /> */}

          <Team />
          <FAQ />
          <Mint />
        </Box>
        <Footer />
        <ToastContainer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
