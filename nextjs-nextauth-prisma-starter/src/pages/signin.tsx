import { getProviders, signIn } from "next-auth/react";
import { NextPageContext, NextPage } from "next";

import { SPageTitle } from "src/style/components";
import Button from "src/components/Atoms/Button";

const SignIn: NextPage<{ providers: any }> = ({ providers }) => {
  const handleLogin = (id: string) => async () => {
    await signIn(id, {
      callbackUrl: process.env.NEXTAUTH_URL || "http://localhost:3000/",
    });
  };

  return (
    <>
      <div className="flex-center padding-top-200">
        <SPageTitle>로그인 페이지</SPageTitle>
      </div>
      <div className="flex-center margin-top-16">
        <div>
          {providers.map((provider: any) => {
            console.log(provider);
            return (
              <div key={provider.id} className="margin-top-16">
                <Button onClick={handleLogin(provider.id)}>
                  {provider.name}으로 시작하기
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ req }: NextPageContext) => {
  const data = await getProviders;

  return {
    props: {
      providers: data,
    },
  };
};

export default SignIn;
