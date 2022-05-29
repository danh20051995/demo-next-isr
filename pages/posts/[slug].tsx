import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext, NextPageContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  random?: string | number
}

export default function PostDetail(props: Props) {
  const router = useRouter()
  console.log(router, props)

  return (
    <>
      <Head>
        <title>Title {props.random}</title>
      </Head>

      <main>
        <h2>Random: {props.random}</h2>
      </main>
    </>
  )
}

// PostDetail.getInitialProps = async (ctx: NextPageContext): Promise<{ props: Props }> => {
//   const slug = ctx.query.slug as string
//   return {
//     props: {
//       random: Math.random()
//     }
//   }
// }

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx: GetServerSidePropsContext) => {
//   console.log('getServerSideProps')
//   return {
//     props: {
//       random: Math.random()
//     }
//   }
// }

export const getStaticPaths: GetStaticPaths = async (ctx: GetStaticPathsContext) => {
  console.log('getStaticPaths', ctx)
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx: GetStaticPropsContext) => {
  console.log('getStaticProps', ctx, Math.random())
  return {
    notFound: true,
    props: {
      random: Math.random()
    }
  }
}
