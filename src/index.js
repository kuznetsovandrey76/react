import React from 'react';
import {render} from 'react-dom';
// import Article from './Article';
import ArticleList from './ArticleList';
import {articles} from './articles'; 

// function HelloWorld() {
//     return (
//         <div>
//             <h3>Hello World</h3>
//             <p>Welcome to my react web page</p>
//         </div>
//     )
// }

// const article = articles[0];

// render(<Article article = {article} foo = 'bar' />, document.getElementById('root'));
render(<ArticleList articles = {articles} />, document.getElementById('root'));