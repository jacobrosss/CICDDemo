import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Home from '../src/app/page'

describe('Home', () => {
    it('renders changes text', () => {
        render(<Home />)
        
        // remove second and for test to pass
        const changes = screen.getByText('Save and see your changes instantly.')

        expect(changes).toBeInTheDocument();
    })
})