import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>
                    <b>1. How will you improve the performance of a React Application?</b>
                </h2>
                <li>Keeping component state local where necessary </li>
                <li>Memoizing React components to prevent unnecessary re-renders</li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React</li>
                <li>Lazy loading images in React</li>
            </div>
            <br />
            <div>
                <h2>
                    <b>
                        2. What are the different ways to manage a state in a React
                        application?
                    </b>
                </h2>
                <p>There is a 5 way to manage a state in a React Application</p>
                <ol>Communication State</ol>
                <ol>Data State</ol>
                <ol>Control State</ol>
                <ol>Session State</ol>
                <ol>Location State</ol>
                <span>
                    You need to map out identifiers, build hierarchical trees, understand
                    a particular model to sort and identify information in a React app
                    easily. By structuring your app developed in React in the 5 State as
                    discussed above, you can easily sort, select and understand what kind
                    of data will go where and how to manage it efficiently.
                </span>
            </div>
            <br />
            <div>
                <h2>
                    <b>3. How does prototypical inheritance work?</b>
                </h2>
                <li>
                    The Prototypal Inheritance is a feature in javascript used to add
                    methods and properties in objects. It is a method by which an object
                    can inherit the properties and methods of another object.
                    Traditionally, in order to get and set the [[Prototype]] of an object,
                    we use Object. getPrototypeOf and Object.
                </li>
            </div>
            <br />
            <div>
                <h2>
                    <b>
                        4. Why you do not set the state directly in React. For example, if
                        you have const [products, setProducts] = useState([]). Why you do
                        not set products = [...] instead, you use the setProducts
                    </b>
                </h2>
                <p>
                    One should never update the state directly because of the following
                    reasons:
                </p>
                <li>
                    If you update it directly, calling the setState() afterward may just
                    replace the update you made.
                </li>
                <li>
                    When you directly update the state, it does not change this.state
                    immediately. Instead, it creates a pending state transition, and
                    accessing it after calling this method will only return the present
                    value.
                </li>
                <li>You will lose control of the state across all components.</li>
            </div>
            <br />
            <div>
                <h2>
                    <b>
                        5. You have an array of products. Each product has a name, price,
                        description, etc. How will you implement a search to find products
                        by name?
                    </b>
                </h2>
            </div>
            <br />
            <div>
                <h2>
                    <b>6. What is a unit test? Why should write unit tests?</b>
                </h2>
                <p>
                    An example of a real-world scenario that could be covered by a unit
                    test is a checking that your car door can be unlocked, where you test
                    that the door is unlocked using your car key, but it is not unlocked
                    using your house key, garage door remote, or your neighbor's (who
                    happen to have the same car as you) key
                </p>
                <p>
                    Unit testing is a powerful tool for software quality -- and has been
                    for decades. Unit tests provide a fundamental check that an
                    application meets its software design specifications and behaves as
                    intended. When done well, unit tests: decrease defects and expose them
                    early in the development lifecycle; increase code readability; enable
                    code reuse; and improve deployment velocity.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
