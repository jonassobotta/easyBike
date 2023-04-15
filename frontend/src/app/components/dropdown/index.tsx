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
            setStore(e.target.value);
            

            try {
                const response = await axios.get(`/bikes/available/${bookingState.storeId}`);
                console.log(response.data);

                const bikes = response.data;

                //count bikes
                await setCitybikeCount(bikes.filter((bike: any) => bike.name === "city").length);
                await setMountainbikeCount(bikes.filter((bike: any) => bike.name === "mountain").length);
                await setRacingbikeCount(bikes.filter((bike: any) => bike.name === "racing").length);

            } catch (error) {
                console.log(error);
            }
        }
    };
    const bikeState = useSelector((state: State) => state.bikes);
    const bookingState = useSelector ((state: State) => state.booking);
    const dispatch = useDispatch();
    const { setStore, setCitybikeCount, setMountainbikeCount, setRacingbikeCount } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        console.log(bookingState.storeId, bikeState.citybikeCount, bikeState.mountainbikeCount, bikeState.racingbikeCount);
    }, [bookingState.storeId, bikeState.citybikeCount, bikeState.mountainbikeCount, bikeState.racingbikeCount]);

    return (
        <Container>
            <select value={selected} onChange={handleSelect}>
                <option value="Select a city">Select a city</option>
                <option value="6435a9e6c955f0d834f74393">Mannheim</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
            </select>
        </Container>
    );
}
