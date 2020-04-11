import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from '@testing-library/react';
import Quiz from './Quiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const state = {
    turnData: {
      books: ['How JavaScript Works', 'JavaScript: The Good Parts', 'You Don’t Know JS', 'Eloquent JavaScript'],
      author: {
        name: 'Kyle Simpson',
        imageUrl: 'images/authors/kyle-simpson.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['You Don’t Know JS']
      },
    },
    highlight: 'none'
  }

describe("Quiz", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Quiz {...state} onAnswerSelected={()=>{}} />, div);
    });

    describe("When no answer has been selected", ()=>{
        let wrapper;
        beforeAll(()=> {
            wrapper = mount(<Quiz {...state} onAnswerSelected={()=> {}}/>);
        });

        it("should have no background color", () => {
            expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe("");
        });
    });

    describe('When the wrong answer has been selected', () => {
        let wrapper;

        beforeAll(() => {
          wrapper = mount(
            <Quiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={()=>{}} />);
        });

        it('should have a red background color', () => {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('red');
        });
      });

      describe('When the correct answer has been selected', () => {
        let wrapper;

        beforeAll(() => {
          wrapper = mount(
            <Quiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={()=>{}} />);
        });

        it('should have a green background color', () => {
            expect(wrapper.find('div.row.turn').props().style.backgroundColor).toBe('green');
        });
      });

      describe("When the first answer is selected", ()=>{
          let wrapper;
          const handleAnswerSelected = jest.fn();

          beforeAll(()=>{
            wrapper = mount(
                <Quiz {...state} onAnswerSelected={handleAnswerSelected} />);
            wrapper.find('.answer').first().simulate('click');
          });

          it("onAnswerSelected should be called", ()=>{
              expect(handleAnswerSelected).toHaveBeenCalled();
          });

          it("should receive The Shining", ()=>{
              expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
          });
      });
});
