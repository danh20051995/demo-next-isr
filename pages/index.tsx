import Head from 'next/head'

interface Props {
  random: number | string
}

export async function getStaticProps(): Promise<{ props: Props }> {
  return {
    props: {
      random: Math.random()
    }
  }
}

export default function Home({ random }: Props) {
  return (
    <>
      <Head>
        <title>Title {random}</title>
      </Head>

      <main>
        <h2>Random: {random}</h2>
      </main>
    </>
  )
}
