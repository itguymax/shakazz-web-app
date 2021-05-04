import React from 'react';
import { useWallets} from "../hooks";
import { useAppContext } from '../context';
import  LightBoxContainer from './common/lightBoxContainer';
import { constantes  } from "../config";
import  { Link } from "./Link";
export default function DashboardWallets() {

const context = useAppContext();
console.log("wsd", context.appState.accessToken);
const {data, isLoading, isFetching, isSuccess} = useWallets(context.appState.accessToken);
if (isLoading) return <div>Loading...</div>;
console.log("test data", data);
  return (
    <>
      { data?.data.wallets?.map((wallet, i)=> {
                      return   <LightBoxContainer key={i}>
                      <div className="container p-4">
                        <div >
                          <h2 style={{font: 'normal normal italic 16px/18px Ubuntu', color: '#444'}} > Wallet { `${wallet.type}`}</h2>
                          <h1 className="mb-4 mt-4" style={{font: 'normal normal normal 30px/35px Ubuntu',color: '#444',  lineHeight: '1.2'}}> {(`${wallet.montantUSD}`).toLocaleString('en-US', { style: 'currency', currency: 'USD',})}</h1>
                          <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                            {wallet.type === constantes.wallets.p && <Link label="Dépôt" path="/portal/depot" style={{ background: '#007A5E 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>}
                            {wallet.type === constantes.wallets.p && <Link label="Retrait" path="/portal/retrait" style={{ background: '#CE1126 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>}
                            { (wallet.type === constantes.wallets.p || wallet.type === constantes.wallets.v || wallet.type === constantes.wallets.n || wallet.type === constantes.wallets.t) && <Link label="Transfert" path="/portal/transfert" style={{ background: '#cc993a 0% 0% no-repeat padding-box', cursor:'pointer', padding:'10px', borderRadius:'6px',  font: 'normal italic normal 13px/14px Ubuntu', color:'#fff'}}/>}
                          </div>
                        </div>
                      </div>
                   </LightBoxContainer>
        })}
    </>
  )
}
