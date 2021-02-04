import { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession, signOut } from 'next-auth/client';

import { Button } from 'antd';

const Page: NextPage = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const handleLogout = async () => {
        await signOut({ callbackUrl: 'http://localhost/signin' });
    };
    return (
        <div>
            <div>Hello {user.email}</div>
            <div>
                <Button onClick={handleLogout}>LOG OUT</Button>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session: any = await getSession({ req });
    if (session) {
        return {
            props: { user: session.user },
        };
    } else {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }
};

export default Page;
