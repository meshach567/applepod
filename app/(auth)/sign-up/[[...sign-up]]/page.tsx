// pages/sign-up/[[...sign-up]].tsx
import { GetStaticPaths } from 'next';
import { SignUp } from '@clerk/nextjs';

// Define getStaticPaths to generate static paths
export const getStaticPaths: GetStaticPaths = async () => {
  // Define the possible paths
  const paths = [{ params: { signUp: [] } }];

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
      <SignUp />
    </div>
  );
};

export default Page;
