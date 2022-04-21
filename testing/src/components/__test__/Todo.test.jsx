import { fireEvent, render, screen } from "@testing-library/react"
import App from "App"

describe('RTL을 이용한 Todo 통합 테스트', () => {
    test('input이 있는지 확인', () => {
        render(<App/>)
       const inputElement =  screen.getByLabelText(/Add New Todo!/i)
       expect(inputElement).toBeInTheDocument()
    })

    test('input에 기입 가능 여부 확인', ()=>{
        render(<App/>)
        const inputElement =  screen.getByRole('textbox')
        fireEvent.change(inputElement, {
            target: {
                value: 'Go to Starbucks!'
            }
        })

        expect(inputElement).toHaveValue('Go to Starbucks!')
    })

    test('button 클릭시 input value clear 이벤트 확인', async()=>{
        render(<App/>)
        const inputElement =  screen.getByRole('textbox')
        const buttonElement = screen.getByRole('button')

        expect(inputElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()

        fireEvent.change(inputElement, {
            target: {
                value: 'Go to Starbucks!'
            }
        })

        expect(inputElement).toHaveValue('Go to Starbucks!')

        fireEvent.click(buttonElement)
       
        expect(inputElement).toHaveValue('')
    })

    test('button 클릭시 NewTodo 추가 확인', async()=>{
     render(<App/>)
        const inputElement =  screen.getByRole('textbox')
        const buttonElement = screen.getByRole('button')
        
        await fireEvent.change(inputElement, {
            target: {
                value: 'Go to Starbucks!'
            }
        })

        expect(inputElement).toHaveValue('Go to Starbucks!')


        await expect(screen.getAllByRole('listitem')).toHaveLength(2)
        screen.debug()
        
        await fireEvent.click(buttonElement)
        screen.debug()

        expect(screen.getByText(/Go to Starbucks!/i))

       await expect(screen.getAllByRole('listitem')).toHaveLength(3)
    })
})