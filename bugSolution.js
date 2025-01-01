```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```