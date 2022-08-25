import { useState} from 'react';

const Home = () => {

    //hooks - special functions that do certain jobs in react. Begins with "use".
    //store function. Mario is the initial value (name) it is passed in and displayed in the template
    //second value is the function that changes the value that triggers the rerender and is outputted in the tempplate
    // const [name, setName ] = useState("Mario");

    // const [age, setAge] = useState(25)
    
    // let name = "Mario"
    
    //the value of name is dependent on the state of the value. It's reactive - if it changees, it changes in the template as well. 
    //Triggers react to re-render the component
    // const handleClick = () => {
    //     console.log("herroooo");

    //     setName("Luigi");
    //     setAge(30)
    // }

    // const handleClickAgain = (name)=> {
    //     console.log("helllo " + name)
    // }

    // const handleClickAgain = () => {
    //     setName("Mario")
    // }

    const [blogs, setBlogs] = useState([

        { title: "Entry 1", body: "yuhhhhhhh", author: "Sean", id:1 },
        { title: "Entry 2", body: "yuhhhhhhh", author: "Jos", id:2 },
        { title: "Entry 3", body: "yuhhhhhhh", author: "Rob", id:3 }

    ]);

    return ( 
        <div className="home">

            {/* <p> { name } </p>
            <p> {age} </p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={handleClickAgain}>Click Again</button> */}
            
            {/* can't invoke a paramter directly like the onclick above because it will do the function automatically without clicking first.
            to fix this, we must call the function like below
            <button onClick = {() => handleClickAgain("Sean")}>Click me again</button> */}
            
            {/* map method cycles through an array and can do something with each item in the array, we want to return a template for each
            item and that template will be outputted to the browser */}
            {/* blog is the temporary name for iteration */}
            { blogs.map ((blog) => (
                // when a list is outputted through map, each root element needs a key property. Used to keep Track
                // of each item in the DOM as it is outputted. Used to distinguish items, we'll use the id in our blogs array
                //but can be any unique property
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;
