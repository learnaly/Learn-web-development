# Task

## Pretask notes

Here are few more notes about javascript you'll need here.

- To make HTTP (Browser standard for making requests) requests (Get something from the Web per say), you can use `fetch` built-in browser method OR, what i recommend npm library you can install `axios` `npm install axios`. For both or any of them, google their documentation and see how to use them.
- Async/await is javascript syntax used whenever you want to wait for a response within your code. Usually javascript executes each line synchronously, means very fast one like after the previous one, waits for nothing. Now that's potentially an issue, since making HTTP request can take some time (200ms, maybe 1s, maybe 3 min), but line of code where we wanna save the response is right after line in which we are making the request, those requests we wait are called asynchronous requests.

We can do that using async await syntax.

```jsx
  const [posts, setPosts] = useState();

  async function getPosts() {
    let response = await fetch('some-api-url.com/posts');
    response = await response.json();

    console.log('Blog posts we just fetched: ', response);

    setPosts(response);
  }
```
- Each react component you have to export so you can then import it in other places and use it.

```jsx
  // Home.js
  function Home() {
    return <div>Home</div>;
  }

  export default Home;

  // App.js
  import Home from './Home';

  function App() {
    return (
      <div>
        <Home />
      </div>
    )
  }
```

## Task

1. Create a Home react component.
- In home component create a state called posts.
- Create a method where you fetch blog posts from this url `https://jsonplaceholder.typicode.com/posts`, using `axios` library.
- Call above method in `useEffects` lifecycle method, where second argument of useEffects is empty array `[]`, meaning it will only be called once the component initially loads.
- Once you fetch posts, save response in posts state, using ofc setPosts method.
- And in Home JSX it returns loop through posts state value and render each post with any HTML element you want, at least add to it {post.title} and {post.body}.
- You can additionally create a css file and import it, you can see in example folder how it works, and add some custom css classes to your posts, and maybe style the title, and body a bit, or whatever you want.
- And finally import Home component in App.js and add it to App.js (you can remove all other App.js pregenerated JSX content).

## Notes

- My daily job usually is me few times a day (early years all the time) googling for answers for various use cases in code, like above, ie. `how to make http request react`, etc.
- Try to make it yourself.
- You'll have an example i made of this above in my own way (you can do it in many ways), in this folder, in folder named `solution`.
