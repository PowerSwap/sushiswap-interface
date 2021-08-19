import { ChainId } from '@powerswap/sdk'
const THE_GRAPH = 'https://api.thegraph.com'

export const GRAPH_HOST = {
  [ChainId.MAINNET]: THE_GRAPH,
  [ChainId.XDAI]: THE_GRAPH,
  [ChainId.MATIC]: THE_GRAPH,
  [ChainId.FANTOM]: THE_GRAPH,
  [ChainId.BSC]: THE_GRAPH,
  [ChainId.AVALANCHE]: THE_GRAPH,
  [ChainId.CELO]: THE_GRAPH,
  [ChainId.HARMONY]: 'http://194.163.159.200:8000',
  [ChainId.OKEX]: 'https://graph.kkt.one/node',
}
