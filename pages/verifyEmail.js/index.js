import React from 'react';
import Head from 'next/head';
import  Bleu from '../../layouts/Bleu'

function VerifyEmail({ success }) {
  return (
    <>
      <Head>
        <title>Shakazz Email Verification </title>
      </Head>
      <div className="d-flex justify-content-center align-items-center">
         {success && <div>
            <h1 style={{color: "#fff"}}>Felicitation!!!</h1>
            <p className="text-center">{ 'Votre email a ete verifie avec succes'}</p>
         </div>}
      </div>
     
    </>
  );
}

export async function getServerSideProps(ctx) {

  // const { token } = ctx.query;

  // const deletedToken = await findAndDeleteTokenByIdAndType(ctx.req.db, token, 'emailVerify');

  // if (!deletedToken) return { props: { success: false } };

  // await updateUserById(ctx.req.db, deletedToken.creatorId, { emailVerified: true });

  return { props: { success: true } };
}



VerifyEmail.layout = Bleu;
export default VerifyEmail;