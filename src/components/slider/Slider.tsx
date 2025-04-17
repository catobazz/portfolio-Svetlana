import styled from 'styled-components';
import {FlexWrapper} from "../FlexWrapper.tsx";

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
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Slide = styled.div`
    text-align: center;
`;
const Text = styled.p``;

const Name = styled.span``;

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: #75b5f6;
    }
`;
