import { CompleteOrderForm } from "./components/CompleteOrderform";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage(){
    return (
        <CompleteOrderContainer className="container">
            <CompleteOrderForm/>
        </CompleteOrderContainer>
    )
}