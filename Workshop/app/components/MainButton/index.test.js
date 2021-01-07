
import MainButton from './index'
import React from 'react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

configure({adapter: new Adapter()})

describe('test snapshot', () => {
    it('renders correctly for styleButton is STYLE_1', () => {
        const tree = renderer
                        .create(<MainButton styleButton="STYLE_1" label="Hola Mundo" />)
                        .toJSON()
    
        expect(tree).toMatchSnapshot()
    })
    
    it('renders correctly for styleButton is undefined', () => {
        const tree = renderer
                        .create(<MainButton label="Hola Mundo" />)
                        .toJSON()
    
        expect(tree).toMatchSnapshot()
    })
    
    it('renders correctly for styleButton is STYLE_2', () => {
        const tree = renderer
                        .create(<MainButton styleButton="STYLE_2" label="Hola Mundo" />)
                        .toJSON()
    
        expect(tree).toMatchSnapshot()
    })
})


