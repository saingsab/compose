import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, Grid, Space, Text, Title } from '@mantine/core'
import asset1 from "../Compost-Thorony2.png";
import { useState } from 'react'
import connectContract from '@/connectContract'
import { utils } from 'ethers'

const inter = Inter({ subsets: ['latin'] });

const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_Id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    try {
      setLoading(true);
      const { Contract } = connectContract('0x2FECb7cC09b11763d5Ded63a33BCd384C5b6c2A9', ABI);
      if (!Contract) return setLoading(false);
      const trx = await Contract.mint('1', {
        value: utils.parseEther('0.06'),
      });
      await trx.wait();
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Indoor Compose NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size={928}>
        <Grid columns={24} align='center' justify='space-between'>
          <Grid.Col md={12}>
            <Title>Indoor Compose NFT</Title>
            <Space h={24} />
            <Text>The environmental friendly way to reduce food waste, create nutrient-rich soil, and promote sustainable living. Become an NFT owner and digitally monitor your part of the environmental project start with 0.06 ETH.</Text>
            <Space h={24} /> 
            <Button px={80} size='md' loading={loading} onClick={handleMint}>Mint Now</Button>
          </Grid.Col>
          <Grid.Col md={12}>
            <Image
              alt=''
              src={asset1}
              width={320}
            />
          </Grid.Col>
          <br></br>
            <br></br>
            <h2>One NFT = One of the Indoor Compose for every house whole</h2>
        </Grid>
        <br></br>
        <Text>
        Indoor composting is a simple and successful method of reducing waste, promoting sustainable living, and promoting a healthier environment.
        <br></br>
        1. Reducing waste: According to the United States Environmental Protection Agency (EPA), food scraps and yard waste make up about 30% of what we throw away in the US. Indoor composting allows us to divert food waste from landfills and reduce the amount of methane gas that is generated by decomposing organic material in landfills.
        <br></br>
        2. Creating nutrient-rich soil: Composting organic material results in the creation of nutrient-rich soil that can be used to fertilize plants. This soil is often much healthier than store-bought fertilizers, which can contain harmful chemicals.
        <br></br>
        3. Supporting sustainable living: Indoor composting is a sustainable living practice that supports a circular economy. Instead of discarding food waste, it can be turned into nutrient-rich soil that can be used to grow more food, which reduces the need for chemical fertilizers and supports a more sustainable food system.
        <br></br>
        4. Saving money: Indoor composting can help save money on store-bought fertilizers and reduce waste disposal fees, especially for those living in urban areas where trash removal can be expensive.
        <br></br>
        5. Reducing greenhouse gas emissions: By composting organic material, we can reduce the amount of methane gas that is generated by decomposing waste in landfills. Methane is a potent greenhouse gas that contributes to climate change, so reducing its production is crucial for mitigating the effects of climate change.

        </Text>
        <br></br>
        <h2>Incentive Process, under way...</h2>
        <Text>
        Order a Compost Kit and send it to your decider reception.
        <br></br>
        Connect your Matamask account to receive NFT after the completion of the purchase.
        <br></br> 
        Stake the NFT you will receive a Daily reward 
        <br></br>
        Stake your reward to get more ICK(Indoor compost Kit tokens)
        <br></br>
        You can trade NFT in order the exchange the compost owner, you also can swap the reward you are earning from owning the compost. 
        </Text>
      </Container>
    </>
  )
}
