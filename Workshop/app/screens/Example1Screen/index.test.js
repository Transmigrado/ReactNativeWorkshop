

import React from 'react'
import renderer from 'react-test-renderer'
import Example1Screen from './index'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({adapter: new Adapter()})

describe('testeaos snapshot', () => {
    it('renders correctly for styleButton is STYLE_1', () => {
        const tree = renderer
                        .create(<Example1Screen />)
                        .toJSON()
    
        expect(tree).toMatchSnapshot()
    })
    
    
})


it('simulamos presionar el boton y navegamos a Example2', () => {

    const navigation = {
        navigate: jest.fn()
    }

    const wrapper  = shallow(<Example1Screen navigation={navigation} />)
    const button = wrapper.find('#mainButton')
    button.simulate('press')

    expect(navigation.navigate).toHaveBeenCalledWith('Example1')

})