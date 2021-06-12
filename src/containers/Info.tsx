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
          <h1>pSTAKE MASK</h1>
          <p>
          Share your support for pStake. Upload your photo, choose your mask, and download 
or share with the Twitter button! 

          </p>
          <Links>
            <a href="https://persistence.one/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/wired/16/000000/globe.png"/>
              <span style={{marginLeft:'8px'}}>Website</span>
            </a>
           
          </Links>
          <Divider />
          <a href={'https://discord.com/invite/SaBKpjbnhH'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADiklEQVRoge2Z70sVWRjHP+dW3muldm/plm5lSWWLWKxuJUVsZe8K2Y3+APUvKLVe9D5a+vUXJLtvgmCLICGqXYqCSnQ3KkIswiQpLEvzR3mt5vTiadJozu2euc1V435gmMHnPOd8v3PmmTnHCxkyZJjWqETBw826BtijoBKYkx5JAIwAbVpxrKlWnUvU0GjgaLM+pGH/N5dmi+ZgY706YAp7GjjcrGsUnA1OlR0KdjbUqRavWMiQsydAPdZo2GuKeRpQUBGcHF9UmgKmGZgbkBC/5JgCJgPThoyByWZmyh3MgNLlUFwEoRBca4f+wS/bRXNh8y+gNXT1QMdDePc+1dFTMKAU/PwTrC+HB91w/xHMy4Ut6yEvB7LDEAnDaBzexOHVEPT0wsAgLFkEmyqg9Tbc6hBTaTfwWzUsiIrwhflQvsq7XXZEjlgeLPtR/tb7Au53QUWZzNyZS35V+DSwtFDExMdgTal9/g/z5YiPST9LC6H7iR8lPou4skzO4Sx/g7q4+W5/frA2EMuTaf+WFBdJkfvB2kDpcn8DBdWvtYGSJf4GCqpfqyLOjkB+1DvW2wctV+R6xxYp0mRiLgWx8deuDVYzUFgg738v/rkBA0Ny/Hsj+ZiLUlBUYKNGsDKQHzPHXgyMX/f1Jx9Ltn8TdgYMjw/A/AmxBdHkYxNJFDNhZSA3wS6hukqWEtFc2FaVfCzZ/k1YFfGc7PHr+BjMmikLOJDCrN/lnWeKOQ68fTf+QZs720aNYDUDoQmtw1nQ2SULOcexG9RxJK+z6/OvecjHusBqBv6+AL9vh5yP/yFaXSKLuZMtUoCL8uU8OwLhMESyYHQM4nF4PQrPX8LT53JeVy75LkMjcPpiwAb6+uGvs7C5EspWyB1bWSwLsjudcO2/xO/xSBiq1sLWDfL4Abx34N4DuNouj2WgBkAGuXQdbt6Wz//ihXLX3dXl13ILYnJ+/FT2Bx0PYfi1vXAX3/uBoRFouytHsmgNp877HdGbab8nzhiYbEwGhtOqIgVMBtrTqiIFPA1oxbE06zgOjPpJ9DTQVKvOoTmYkiQLtGbQgY3AI9tcYxE31qsDCnYClwm4JpRi97469X/IoQKw+lIk/I1sMtBaqyN/sk/JE/DpBjfWee8Fp9xrVCmlm2rVH0pTDTz7WvspZ8CloV5d/vjraGuidlPWAEBDnXo8rPhVKU5MtpYM3y0fAA+L6Uiy8iSdAAAAAElFTkSuQmCC"/></a>
          <a href={'https://twitter.com/pStakeFinance'}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRoge2XTWgdVRiGn+/MpGnv3LRoqC4UhCz8I8RFRClSXdgqWkuV4CRpi1gqglZTuhFXkiDdCVIKBfEHo1Bzr0JRtGAqWhTBQhsaFX9ADbZisbXaJnPb5t6Z+VyotU0yc89MYlGYZzcz73fO+84ZzjcHCgoKCgoK/sfIJZ2tOnmdq+ZxYLXCNUCowvdG9b3QNbvo8Y7NLFm0O+iqry9/njRk0wDOSO2e6JvS+wxKnNv4oBr3hmBIkacBN8FKgLIt6vNe4u0Tbc65xXch8gSxfBn1eU/mC1A9Xna09JPAcNhb3prXvzMy9QIij1rKDwFdQAtwLJKoE3/Zb0likzqxercDyxQGnJHaLqrqWLv+e4xqsD6DeYBu/jR/0gj30lB13wjuTBKnBlCJO85fiD7maG0P1dOXW1tRFWJ91lr/DyHI/ljZ4bjud8bheJIwNQA66/laR51xtxqstnHRUjlzMyIdzZWzcEF7gFsQ2VT3y18kCVMDCGZijttXqzLqVKb28Nbk9Wn1Mdpp53dOfhXiVZHvvZMmSg0QLT6zHySY+6nc70TmK6cSvOtUamvZq60zFSralsXxDAbC3qWfNhMlbGl/sW75lFSCVxQGEhQCrAFd40zVJqnU9in6mREdC018VCJJ3D2aojptI2veyF5Tz22tjSlcm9tMDkS5O+wrjzbTpW+jI8EGZ1GtR2LpUxhfOHvNMYZZXXkuUj8hFW0XZEcsisDZhbFmhdbPeT/YCNNXQOTjCy6XzMtSBgS+5iGp2WhTAzT88mGEAwtjyx5FP7HVpjcywCBbgMa8HGXGpO79FymbCRq+dwjVDVy6ECcjKX1gK24aACDqa3vTqNyGcDC/LztEeRFf6rZ6qwAAsXAVyCDKq4BVk8nB2VBlZ5aC9E58MatQ3fJvnuEEdtLv/ZylxnoFIomHgF8yu7LnSNiY3p61yDoAftsJE5t1wO9ZJ7EgFuERNrZPZi20DwA0+ksHIie6Ffgw60RpqMhQ6Jf35anN/UW3VGvdkXKfiK5ESTzyWTAc+d4mRDRPcaYVuJDGg6UxgaMo3XnHAIYj8TbnNQ95VmCvtjpBrV9hmyhdOedVRZ6J/dL2+ZiHlAAtI8FNGHFVY0+FK1SlQ+AOYCUwn5PWhKCbw962j+YxxnkS+0CjtfGjW295SpGtKKUF2P5PK/JcPF163vZP04bmvnYHVxqHjcDDApkP6QrjqL4ct4av88Blp/KYTCPbi61O3ehgVhDrCgydxLockXZgKXAKZRLDBKrfouZgZMwo/pIjC226oKCgoKCg4L/CH/2pQ2x506tNAAAAAElFTkSuQmCC"/></a>
         <a href={'https://t.me/PersistenceOneChat'}><img src="https://img.icons8.com/color/48/000000/telegram-app.png"/></a>
          
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
