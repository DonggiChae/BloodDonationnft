/**
 * caver-js library helps making connection with klaytn node.
 * You can connect to specific klaytn node by setting 'rpcURL' value.
 * default rpcURL is 'https://api.baobab.klaytn.net:8651'.
 */
import Caver from "caver-js";
import CaverExtKas from "caver-js-ext-kas";

// const BAOBAB_TESTNET_RPC_URL = "https://api.baobab.klaytn.net:8651/";

// const rpcURL = BAOBAB_TESTNET_RPC_URL;

const KLAYTN = window.klaytn;

const caver = new Caver(KLAYTN);

export const caverExtKAS = new CaverExtKas(
  1001,
  process.env.ACCESS_KEY_ID,
  process.env.SECRET_ACCESS_KEY
);

export default caver;
