import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function DropDown(){
    const [selected, setSelected] = React.useState("Select a city");

    const handleSelect = (e: any) => {
        setSelected(e.target.value);
    };

    return (
        <Container>
            <select value={selected} onChange={handleSelect}>
                <option value="Select a city">Select a city</option>
                <option value="Mannheim">Mannheim</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select>
        </Container>
    );
}
