// pages/sign-in/[[...sign-in]].tsx
import { GetStaticPaths } from 'next';
import { SignIn } from '@clerk/nextjs';

// Define getStaticPaths to generate static paths
export const getStaticPaths: GetStaticPaths = async () => {
  // Define the possible paths
  const paths = [{ params: { signIn: [] } }];

  return {
    paths,
    fallback: 'blocking', // Set fallback to blocking to handle dynamic routes at runtime if needed
  };
};

// If you need getStaticProps, you can add it here
// export const getStaticProps: GetStaticProps = async () => {
//   return { props: {} };
// };

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  );
};

export default Page;
