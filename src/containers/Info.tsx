import React from "react"
import { useDropzone } from "react-dropzone"
import { Row, Col } from "react-styled-flexboxgrid"
import styled from "styled-components"
import { rem } from "polished"

import Button, { ButtonColor, ButtonSize } from "../components/Button"
import { IconInfo } from "../icons"

interface Props {
  onDrop: (files: File[]) => void
}

const Info: React.FC<Props> = ({ onDrop }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Wrapper>
      <Row middle="xs" center="xs">
        <Col xs={12}>
          <h1>PERSISTENCE MASK</h1>
          <p>
          Share your support for Persistence One. Upload your photo, choose your mask, and download 
or share with the Twitter button! 

          </p>
          <Links>
            <a href="https://persistence.one/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/wired/16/000000/globe.png"/>
              <span style={{marginLeft:'8px'}}>Website</span>
            </a>
           
          </Links>
          <Divider />
          <a href={'https://discord.com/invite/SaBKpjbnhH'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC8klEQVRoge3YTahVVRQH8J9PjSd+hAND6FGoaEQPNVMSHfiRqFNRisJxhIgiijqoWRNpok4yQgsnisPUwA8KdKaCwlMpQwc6CSVRfGapeB3sfX2H6znnnnPufe9Nzh/WZJ21/uu/zt73rLs3NWrUqFGjRo3Rw5gO88fiQyzCB/gb37bJ+RrTcQ2XcBnPO9RRGstxAHfRiDaAg5iQkzchxgwk8u7hB6wYRr2vsAQXEsUvYzP6WuImoR+Lo/VHXxJ9MfdKgu8ilg6TdluEpW4W+iT6x2ABduBX4Y02MuwuTmK7sPWaW3hV5GzEGpu7LX5hQvx19AjbYRtu5AhuZ39iK3oj5/Xof4Z53WzgVKLoE3yP2x0Ib7Xb2Id/E74T3RI/t4tCy1p/O3E9BRrYVKTLYcKXnRK8gftGbwXuRw2ZaLcCazC1cLvdx1SszAto18C67mmpjPWdJN8xetunaXeqiu8vUeQCdmEvBnPiBmPMLkODq4i9V6WBTQXJT2BcIm8BnqbE/S9M3ybGC5O7SI1KX6OfCpKnTczDKXE/p8TNL1jjxyyReT/ihTnPmnghjP9WDKT4rqb4rkWOdliU9SCrgXGK7bsevJ3if6egry9HQxLvC2ePwpip+A9sX0vuW9KH3z+Y1hK7v0Sdd8s0sKoEccPQgeQL/JUTdyPGrIg5ZWrkDrRWbCxJPhL2eZrQrP03uUy3I4RUTVkNTMzw/4Y5ONoNRQk0cCRy/54RM6UM4Vrpy3gTs2PMYpzNiCtjZ/Bx5Jwda6TFrS3TANlfiMfYaWiV5uAbnJc+gVvtKc4J1yvNlzExcj7OyNmbJTLvXqgHe4TDehruCUfLY8JAIvw9mBWbetPQvn2Eh8JX6KZw5iXcJX2Gr7z+iW3iO+xWbOClYo1w+M57qwcr8B5qw/kHVlcV3Yqx2IDjXl/mB5hRgXNGzE1yDeIX4QxQaPJWuVrsxTJ8JEzsYzhdgYfwhj/FLeGa8Rz+q8hVo0aNGjVq1BhxvAQoCucXfhs+JQAAAABJRU5ErkJggg=="></img></a>
          <a href={'https://twitter.com/PersistenceOne'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAByElEQVRoge3ZvWsUQRjH8Y9viEEFraxSqAiCL0VQCIiVomAjQQsrU9r5D0gKEQtrsRPsLBRrXyBgJGhnoZAgSCCghaCgIfE9WuwFgtzNzs1ksyrzheGKfd5+tzfzPLtHoVAoFDJYU3N9AHtXo5AAU1hIdR7Cr5bXUKjAtanK/haKgLYpAtqmCOiDCZzHEZzGLfzoXPuG6SaShvrAJ4xhMWCztC73iH8cF7ATL3v4BvtAjoC7HZuLNSIe1uTYjGu4gS+rKeDmMrtjmOlhNxKRZwsme/g3JuBplyLGMPuH3f6IPBOBPI0JWMThLj7rcAJXcS9SwMc2BLzCA+zISaCaeJOHufUZid+ovulNGTGoTqBkcvrAMHbjc04BqgMgmRwBG1XNaFtOATiV6R8k5oHmOc6qf7rrxgH1jbCxPbDEbdxJ9L0kTXg0MXdgTrUf+uVMROxGj9Hlax5XOvYbIuLuwoeVELBS0+gARnEIP2ts9+GJ/M2P9D3wFS/wDq/xCPfxvcbvHK5je2Levgn9hB6rxuGYuziM8UCsVk6ho6pRebbz+Qxv8R5bMYiDOIk9GXmyKC+2mqYIaJsioG3+eQH//R8chUKhUAjyG4VeIEJd/U18AAAAAElFTkSuQmCC"></img></a>
         <a href={'https://t.me/PersistenceOneChat'}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADLUlEQVRoge3YX4hVVRTH8Y+jaViZSWb1MBL9palAhcCXCBMqwpdACoLCHuyhYCAqiXroUXpIBRFECAx6kUAlIkwKCSlCzLQeKkiKjEn6I4LjmNXcHvY9se++Z5+5zsy5l+j8YD/MOWut81337LXO2kOjRo0aNfo/a+6gAUo0jJfwLP7ASUwOlKgHDeEh7MdfaEXrNJ4bHFq1FmMU3+mETtcbgwLMaRV2Ylw1eLGeGgxmp67EMzgmDzqJD7Evub5iALz/6nZsxm/y4GeFN3JX2+fN6N5FLOgvMvOxHgeFXzUHfhQbcUXifzSyOd4f5KAbsQk/ykNfwB6szcSYh4nI/q16kUMLfFh5C4zXt3geSxL/u7E8+nsk8XuhLvBeWuDfwjZahzmJ/xJswyGhwAs9kcTIvalpq5cWOCYU7vIS/3nCvv8Fh3FVcv/1JNZ1swF9OZ5U3QJbbaD1uCwTZy2+bNt+UgIPB6J4P80UfATbhTaXgz6DLUK7zOkOvBf5fIpFGduxyO79mcDvroBu4QiexsKKGNcIyV2M/D7D1Rn7ZckzNs8kgSMl0FO1wEJDwpY7nfgf092FYj2Y2D8+ffzuBCaE4ps/hd8anNCd/Oeq4eHFxOfOabKj/A208LPwam9O7IeFj06Zz3Fc28Mz3458zgsda9oaxakMUDF4HcRj7YQuZOxOYGmPzyw6VFFjM9aQsN/34M+KZHLra1zf47MW6Cz2XbORQKxizvk+A5uub3DDJcRfmfjXdgqbK4wG76pOYOQS425I/O+bJd5K5Qr9VGL3iFDkVdoa+U8Ks1bt2qQ8gXgEHhWGuh9wS0WsQ5H/yTpgy3ST8gPLBqEF7kiuj8lvrd8ju721UieKT0/FWomPSq63hK/zPUmM4cTmtX6AF3o5efi4cHipKvBfhbG80Lrk/qN9Yge3TgE7IdRBmtQZrG7HeDW5l37la9cX8r900Q6X6Z6RzuEBvBNdO6v79Fa7XtEN/5VQ5LGW6j4Ujev8l8vh/iB36rYE6oD8zL9YONDkttz2umFzul+Ym9aYeopchI+VJ7CxRsZZ1UJ8oDuBewcJ1ahRo0aN/lv6Bw1Kqdoba5CaAAAAAElFTkSuQmCC"></img></a>
          
          <UploadWrapper>
            <div>
              <Button $color={ButtonColor.White} $size={ButtonSize.Lg} {...getRootProps()}>
                Pick Photo
                <input {...getInputProps()} name="file" accept="image/*" />
              </Button>
              <Hint>or drag and drop your file here</Hint>
            </div>
          </UploadWrapper>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  ${Row} {
    height: 100%;
  }

  p {
    font-size: ${(props) => rem(props.theme.fontSize.lead)};
    margin-bottom: ${rem(28)};
  }

  @media all and (max-width: 480px) {
    p {
      margin-bottom: 20px;
    }
  }

  @media all and (max-width: 280px) {
    br {
      display: none;
    }
  }
`

const Links = styled.div`
  padding-bottom: ${rem(10)};

  svg path {
    fill: ${(props) => props.theme.colors.primary};
    transition: fill ${(props) => props.theme.transition.base};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    padding: ${rem(10)};
    white-space: nowrap;

    & + a {
      margin-left: ${rem(12)};
    }

    &:hover {
      color: #de0000;

      svg path {
        fill: #de0000;
      }
    }
  }

  @media all and (max-width: 767px) {
    margin-bottom: 24px;
    padding-bottom: 0;
  }
`

const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  width: ${rem(90)};
  margin: ${rem(30)} auto;
  margin: 3vh auto;

  @media all and (max-width: 767px) {
    display: none;
  }
`

const Hint = styled.div`
  margin: ${rem(14)} 0 0;
  opacity: 0.4;
  font-size: ${rem(14)};
  color: ${(props) => props.theme.colors.dark};
  letter-spacing: 0;
  text-align: center;
  pointer-events: none;

  @media all and (max-width: 767px) {
    display: none;
  }
`

const UploadWrapper = styled.div`
  padding: ${rem(20)};
  height: ${rem(148)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${Button} {
    max-width: 100%;
    min-width: ${rem(210)};
  }

  @media all and (min-width: 768px) {
    input {
      display: block !important;
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      appearance: none;
      cursor: pointer;
    }
  }

  @media all and (max-width: 767px) {
    height: auto;
    padding: 0;
  }

  @media all and (max-width: 480px) {
    display: block;

    ${Button} {
      width: 100%;
    }
  }
`

export default Info
