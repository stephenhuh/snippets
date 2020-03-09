import Link from 'next/Link';
export default function About() {
  return (
    <>
      <div>
        <h1>About Page?</h1>
        <p>Hello next.js</p>
        {['lol'].map((el) => <p>{el}</p>)}
        <Link href="/"><a>Back to Index</a></Link>
      </div>
    </>
  )
}
