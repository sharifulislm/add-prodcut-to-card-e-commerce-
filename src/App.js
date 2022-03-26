import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Card from './component/Card/Card';
import Navbar from './component/Navbar/Navbar';


function App() {
  return (
    <div className="app-js">
  

<Navbar> </Navbar>


<Card> </Card>

{/* cart.map((cart) => (<h2>{cart.name} </h2>) ) */}



<div className='mt-5 pb-5 pt-5'>
  <h1>How does React work:</h1>
<p>
প্রতিক্রিয়া হল একটি জাভাস্ক্রিপ্ট লাইব্রেরি (কোন ফ্রেমওয়ার্ক নয়) যা ঘোষণামূলক কোড ব্যবহার করে অনুমানযোগ্য এবং দক্ষ উপায়ে ব্যবহারকারী ইন্টারফেস (UIs) তৈরি করে।</p>

<p> While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
</p>
  
</div>
<div><h1>props and state  between differences</h1>
  <p > <b>Props</b> is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional</p>
  <p> <b>State</b>React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.</p>
</div>

    </div>
  );
}

export default App;
