import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Social from "./Social"

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
            <Social />
          </Col>
          <Col xs={12} sm={8}>
            <Disclaimer>
            We forked this code from stakefish & f2pool’s work. We’ve provided the “Persistence One Mask” app for fun and to support the launch of our XPRT token. We never store photos, and we don’t transmit any data other than an anonymous identifier, which contains no personal information. The source code is available for those who would like to review it.
            </Disclaimer>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding: ${rem(50)} 0;
  padding: 4vh 0;
  bottom: 0;
  left: 0;
  width: 100%;
  letter-spacing: 0;
  line-height: 1;
  color: ${(props) => props.theme.colors.dark};
  text-align: left;

  &:empty {
    display: none;
  }

  @media all and (max-width: 480px) {
    padding: 16px 0;
  }
`

const Disclaimer = styled.div`
  font-size: ${rem(14)};
  line-height: normal;
  opacity: 0.4;
`

export default Footer
