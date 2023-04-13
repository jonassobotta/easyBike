import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { State } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useEffect } from "react";

interface IOptionType {
    label: string;
    value: number;
}

const options: IOptionType[] = [
    { label: "Choose a Bike", value: 0 },
    { label: "City Bike", value: 1 },
    { label: "Mountain Bike", value: 2 },
    { label: "Racing Bike", value: 3 },
];

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

export function ImageDropdown(){
    const [option, setOption] = React.useState(options[0]);

    const state = useSelector ((state: State) => state.images);
    const dispatch = useDispatch();
    const { setSelectedIndex } = bindActionCreators(actionCreators, dispatch);

    const handleSeelect = (e: any) => {
        setOption(e.target.value);
        if(e.target.value !== 0) {
            setSelectedIndex(e.target.value);
        }
    }

    useEffect(() => {
        console.log(state.selectedIndex);
    }, [state.selectedIndex]);

    return (
        <Container>
            <select value={option.label} onChange={handleSeelect}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {state.selectedIndex !== 0 && (
                <img src={state.urls[state.selectedIndex]} alt="bike" />
            )}
        </Container>


        
    );
}

