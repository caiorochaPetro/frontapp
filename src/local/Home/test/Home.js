import renderer from 'react-test-renderer';

import Content from '..';
import { render } from '@testing-library/react';

const testText = {
    Content:"Hello World"
}

it('correct rendering content', (testText)=>{
    const component = renderer.create(<Content textObj={testText}></Content>);
    let tree = component.toJSON();
    //expect(tree).toMatchSnapshot();

});