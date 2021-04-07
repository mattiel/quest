import Header from './Header'
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Quest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8"/>
      </Head>
      <Header/>
      {children}
    </>
  )
}

export default Layout;