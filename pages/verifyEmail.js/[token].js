import React from 'react';
import Head from 'next/head';

export default function VerifyEmail({ success }) {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      
      <p className="text-center">{success ? 'Thank you for verifying your email address. You may close this page.' : 'This link may have been expired.'}</p>
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