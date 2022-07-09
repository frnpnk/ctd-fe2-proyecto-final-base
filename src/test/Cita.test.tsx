import { fireEvent, screen } from "@testing-library/react";
import Cita from "../features/quote/Cita"
import { render } from "./test-utils"
import userEvent from '@testing-library/user-event'




describe("Cita", ()=>{

    describe("default", ()=>{
        it( "should render 'no hay cita' message", ()=>{
        render(<Cita/>)
          const noHayCita = screen.getByText("No se encontro ninguna cita")
        expect(noHayCita).toBeInTheDocument(  )
        })

    })

    describe("some good input", ()=>{
        it( "should render a new qoute and 'obtener cita' button legend", async()=>{
            render(<Cita/>)
            const inputChar = screen.getByPlaceholderText("Ingresa el nombre del autor")
            const getQuote = screen.getByTestId("getButton")
            fireEvent.change(inputChar, {target: {value:"homer"}})
            userEvent.click(getQuote)
            expect( await screen.findByText("Homer Simpson")).toBeInTheDocument()
           
        })

    })

    describe("some invalid input", ()=>{
        it( "should render a invalid character message and 'obtener cita' button legend", async()=>{
            render(<Cita/>)
            const inputChar = screen.getByPlaceholderText("Ingresa el nombre del autor")
            const getQuote = screen.getByTestId("getButton")
            fireEvent.change(inputChar, {target: {value:"ramon"}})
            userEvent.click(getQuote)
            expect( await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument()
        })

    })

    describe("random quote", ()=>{
        it( "should render a random quote, clean input and random quote button legend", async ()=>{
            render(<Cita/>)
            const getQuote = screen.getByTestId("getButton")
            userEvent.click(getQuote)
            expect( await screen.getByTestId("autor")).any("")
        })

    })

    describe("clean", ()=>{
        it( "should render 'no hay cita' message, clean input and random quote button legend", async ()=>{
            render(<Cita/>)
            const getQuote = screen.getByTestId("getButton")
            const clean = screen.getByTestId("cleanButton")
            userEvent.click(getQuote)
            expect( await screen.getByTestId("autor")).toBeGreaterThan(1)
            userEvent.click(clean)
            expect(await screen.getByText("No se encontro ninguna cita")).toBeInTheDocument()

        })

    })
})