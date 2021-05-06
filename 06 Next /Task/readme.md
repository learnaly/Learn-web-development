# Task

## Pretask notes

- I've added src folder and inside it move pages folder, so it's a little bit more consistent with our React app.

## Task

1. We will recreate exactly the same thing as in our React task.
- In home component (/pages/index.js) create a state called posts.
- Create a method where you fetch blog posts from this url `https://jsonplaceholder.typicode.com/posts`, using `axios` library.
- Call above method in `useEffects` lifecycle method, where second argument of useEffects is empty array `[]`, meaning it will only be called once the component initially loads.
- Once you fetch posts, save response in posts state, using ofc setPosts method.
- And in Home JSX it returns loop through posts state value and render each post with any HTML element you want, at least add to it {post.title} and {post.body}.
- You can additionally create a css file and import it, you can see in example folder how it works, and add some custom css classes to your posts, and maybe style the title, and body a bit, or whatever you want.

## Notes

- My daily job usually is me few times a day (early years all the time) googling for answers for various use cases in code, like above, ie. `how to make http request react`, etc.
- Try to make it yourself.
- You'll have an example i made of this above in my own way (you can do it in many ways), in this folder, in folder named `solution`.
