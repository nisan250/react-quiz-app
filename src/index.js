import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './index.css';
import Quiz from './Quiz';
import AddQuestionForm from './AddQuestionForm';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Kyle Simpson',
    imageUrl: 'images/authors/kyle-simpson.jpeg',
    imageSource: '',
    books: ['You Don’t Know JS']
  },
  {
    name: 'Douglas Crockford',
    imageUrl: 'images/authors/douglas-crockford.jpg',
    imageSource: '',
    books: ['How Javascript Works', 'Javascript: The Good Parts']
  },
  {
    name: 'Marijn Haverbeke',
    imageUrl: 'images/authors/marijn-haverbeke.jpg',
    imageSource: '',
    books: ['Eloquent JavaScript']
  },
  {
    name: ' Eric Elliott',
    imageUrl: 'images/authors/eric-elliott.jpeg',
    imageSource: '',
    books: ['Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries']
  },
  {
    name: 'David Flanagan',
    imageUrl: 'images/authors/david-flanagan.jpg',
    imageSource: '',
    books: ['JavaScript: The Definitive Guide']
  },
  {
    name: 'Reginald Braithwaite',
    imageUrl: 'images/authors/reginald-braithwaite.jpg',
    imageSource: '',
    books: ['JavaScript Allongé: The Six Edition']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
      return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
      books: fourRandomBooks,
      author: authors.find((author) =>
          author.books.some((title) =>
              title === answer))
  }
}

// const state = {
//   turnData: getTurnData(authors),
//   highlight: '',
// };

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  };
}

let state = resetState();

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function App() {
  return <Quiz {...state}
    onAnswerSelected={onAnswerSelected}
    onContinue={() => {
      state = resetState();
      render();
    }}/>;
}

const AuthorWrapper = withRouter(({ history }) =>
  <AddQuestionForm onAddQuestion={(author) => {
    authors.push(author);
    history.push('/');
  }} />
);

function render() {
  ReactDOM.render(
  <BrowserRouter basename="/">
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/add" component={AuthorWrapper} />
    </React.Fragment>
  </BrowserRouter>, document.getElementById('root'));
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
