import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { State } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useEffect } from "react";
import axios from "axios";

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

    const handleSelect = async (e: any) => {
        setSelected(e.target.value);
        if (e.target.value !== "Select a city") {
            try {
                const selectedCityId = e.target.value;
                setStore(selectedCityId);
                bookingState.storeId = selectedCityId;
    
                const response = await axios.get(`/bikes/available/${selectedCityId}`);
                const bikes = response.data;
    
                setCityBikes(bikes.filter((bike: any) => bike.name === "city"));
                setMountainBikes(bikes.filter((bike: any) => bike.name === "mountain"));
                setRacingBikes(bikes.filter((bike: any) => bike.name === "racing"));
    
            } catch (error) {
                console.log(error);
            }
        }
    };
    
    const bookingState = useSelector ((state: State) => state.booking);
    const dispatch = useDispatch();
    const { setStore, setCityBikes, setMountainBikes, setRacingBikes  } = bindActionCreators(actionCreators, dispatch);

    return (
        <Container>
            <select value={selected} onChange={handleSelect}>
                <option value="Select a City">Select a city</option>
                <option value="6435a9e6c955f0d834f74393">Mannheim</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select>
        </Container>
    );
}
