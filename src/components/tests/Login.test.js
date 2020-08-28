/**

    See https://devhints.io/enzyme for the "Enzyme cheatsheet"

    See https://github.com/enzymejs/enzyme for project homepage in github

    See https://github.com/enzymejs/enzyme/tree/master/docs/api for the full "api" reference

 */
import React from 'react';
import { shallow, mount, render } from '../../enzyme';
import Login from '../Login'

/**
    test for each part of component
    `describe` and `it` are part of "jest" and are installed as global variables.

    "jest" is installed as part of CRA



    - https://create-react-app.dev/docs/running-tests
    - https://create-react-app.dev/docs/debugging-tests

 */
describe('Login Form', () => {

    it('should render with email and password fields', () => {
        /**
            Shallow rendering is useful to constrain yourself to testing a component as a unit,
            and to ensure that your tests aren't indirectly asserting on behavior of child components.

            "You can think of the shallowRenderer as a “place” to render the component you’re testing, 
            and from which you can extract the component’s output."

            https://reactjs.org/docs/shallow-renderer.html

         */
        const wrapper = shallow(<Login />);

        /**
            `find` is part of the `wrapper`
            https://github.com/enzymejs/enzyme/blob/master/docs/api/ShallowWrapper/find.md

            `find` finds every node in the render tree of the current wrapper that matches the selector.

            These are css selectors that are also selectors supported by `find`:

            - form.login
            - #email
            - #password

         */
        expect(wrapper.find('form.login').exists()).toBe(true);
        expect(wrapper.find('#email').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
    })

    it('should render with email and password fields using data-test attributes', () => {
        const wrapper = shallow(<Login />);

        /**
            `find` is part of the `wrapper`
            https://github.com/enzymejs/enzyme/blob/master/docs/api/ShallowWrapper/find.md

            `find` finds every node in the render tree of the current wrapper that matches the selector.

            These are css selectors that are also selectors supported by `find`:

            These differ from the previous example in that they are used specifically to support testing.

            Common element attributes to be used as css selectors used to support testing:

            - data-test
            - data-testid

            - [data-test="login-form"]
            - [data-test="login-email"]
            - [data-test="login-password"]

         */
        expect(wrapper.find('[data-test="login-form"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="login-email"]').length).toEqual(1);
        expect(wrapper.find('[data-test="login-password"]').length).toEqual(1);
    })

})

describe('Email Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = shallow(<Login />);
        wrapper.find('#email').simulate('blur',
            {
                target: { name: 'email', value: 'logrocket@mail.com' }
            });

        expect(wrapper.state('email')).toEqual('logrocket@mail.com');
    })
})

describe('Password Test Suite', () => {

    it('should change the state of the Login component', () => {

        const wrapper = mount(<Login />);
        wrapper.find('#password').simulate('blur',
            {
                target: { name: 'password', value: 'my log is rocket' }
            });

        expect(wrapper.state('password')).toEqual('my log is rocket');
    })
})