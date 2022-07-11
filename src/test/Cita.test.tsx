import { fireEvent, screen, act } from "@testing-library/react";
import Cita from "../features/quote/Cita"
import { crender } from "../test-utils"
import userEvent from '@testing-library/user-event'




describe("Cita", ()=>{

    describe("default", ()=>{
        it( "should render 'no hay cita' message", ()=>{
        crender(<Cita/>)
        expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument()
        })

    })

    describe("some good input", ()=>{
        it( "should render a new qoute from 'marge' input", async()=>{
            crender(<Cita/>)
            const inputChar = screen.getByPlaceholderText("Ingresa el nombre del autor")
            const getQuote = screen.getByLabelText("Obtener cita aleatoria")
            act(() => {
                fireEvent.change(inputChar, {target: {value:"marge"}})
                userEvent.click(getQuote)
                /* fire events that update state */
            });
            expect( await screen.findByText("Marge Simpson")).toBeInTheDocument()
           
        })

    })

    describe("some invalid input", ()=>{
        it( "should render a invalid character message", async()=>{
            crender(<Cita/>)
            const inputChar = screen.getByPlaceholderText("Ingresa el nombre del autor")
            const getQuote = screen.getByLabelText("Obtener cita aleatoria")
            act(() => {
                fireEvent.change(inputChar, {target: {value:"ramon"}})
                userEvent.click(getQuote)
                /* fire events that update state */
               });
            expect( await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument()
        })

    })

    describe("random quote", ()=>{
        it( "should render a random quote", async ()=>{
            crender(<Cita/>)
            const getQuote = screen.getByLabelText("Obtener cita aleatoria")
            userEvent.click(getQuote)
            expect( await screen.findByText("Mayor Quimby")).toBeInTheDocument()
        })

    })

    describe("clean", ()=>{
        it( "should render 'no hay cita' message after clean button press", async ()=>{
            crender(<Cita/>)
            const getQuote = screen.getByLabelText("Obtener cita aleatoria")
            const clean = screen.getByLabelText("Borrar")
            userEvent.click(getQuote)
            expect( await screen.findByText("Mayor Quimby")).toBeInTheDocument()
            userEvent.click(clean)
            expect(await screen.findByText("No se encontro ninguna cita")).toBeInTheDocument()

        })

    })
})