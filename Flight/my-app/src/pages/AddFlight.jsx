import { StyledComponents, Center } from "../components/Styles";
import { FlightForms } from "../components/Forms";

export const AddFlight = () =>{
    return(
        <>
        <StyledComponents/>
        <Center>
            <h2>
                Please Fill Out The Flight Form
            </h2>
        </Center>
        <Center>
            <FlightForms/>
        </Center>
        
        </>
    )
} 