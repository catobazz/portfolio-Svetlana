import styled from 'styled-components';
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.ts";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet animi
                        corporis
                        expedita, harum in inventore minima, modi natus non numquam odit officiis porro reiciendis saepe
                        similique
                        sit soluta?
                    </Text>
                    <Name>@ivan pupkin</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={'active'}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Slide = styled.div`
    text-align: center;
`;
const Text = styled.p``;

const Name = styled.span`
    font-family: Josefin Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 20px 0 40px;
    display: inline-block;
`;

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`;
