
import styled from "styled-components"

const StyledButton = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap: 8px;

width: 100px;
height: 40px;
color:${(props) => (props.color === "primary" ? "#fafafa" : props.color === "secondary" ? "#605DEC" : "")};
background: ${(props) => (props.color === "primary" ? "#605DEC" : props.color === "secondary" ? "#fafafa" : "")
  };

border: ${(props) => (props.color === "secondary" ? "1px solid #605DEC" : "none")};
border-radius: 4px;
&:hover {
  background:${(props) => (props.color === "primary" ? "#1513A0" : props.color === "secondary" ? "#E9E8FC" : "")
  };
};
&:disabled {
  border:1px solid #7C8DB0;
  color: #7C8DB0;
  background:${(props) => (props.color === "primary" ? "rgba(203, 212, 230, 0.3);" : props.color === "secondary" ? "#fafafa" : "")
}

`
const StyledLargeButton = styled(StyledButton)`
width: 200px;
height: 100px;
top:20px;
left:20px;
`

const StyledNormalButton = styled(StyledButton)`
width: 150px;
height: 70px;
top:20px;
left:20px;
`



const Button = ({ children, color, size = "small",disabled}) => {
  if (size === "large") {
    return <StyledLargeButton color={color} disabled={disabled}>{children}</StyledLargeButton>
  } else if (size === "normal") {
    return <StyledNormalButton color={color} disabled={disabled}>{children}</StyledNormalButton>
  } else {
    return <StyledButton color={color} disabled={disabled}>{children}</StyledButton>
  }
};


export default Button;