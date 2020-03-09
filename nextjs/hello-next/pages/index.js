import Link from 'next/link';
import Layout from '../comps/MyLayout';
import Header from '../comps/Header';

const PostLink = props => (
  <>
    <li> regular link :</li>
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
    <li> dynamic link : </li>
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  </>
);

export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
        <ul>
          <PostLink id="hello-nextjs" title={"Hello Next.js"}/>
          <PostLink id="learn-nextjs" title={"Learn nextjs is awesome"}/>
          <PostLink id="deploy-nextjs" title={"Maybe deploy apps with Zeit"}/>
        </ul>
      <div>
        <p>Hello next.js</p>
        {['lol'].map((el) => <p>{el}</p>)}
        <a href="/about">Server Side Route to About?</a><br/>
        <Link href="/about" title="About Page"><a>Client Side Route to About</a></Link>
      </div>
    </Layout>
  )
}
