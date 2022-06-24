import PropTypes from "prop-types";
import styled from "styled-components"
import ClearIcon from '@mui/icons-material/Clear';

const StyledDiv = styled.div`
display: flex;
align-items: center;
padding: 16px 32px;
margin: 20px;
width: 900px;
height: 64px;

color:${(props) => (props.color === 'primary' ? '#FAFAFA' :
        props.color === 'error' ? '#FAFAFA' :
            props.color === 'warning' ? '#1513A0' : '')};
background:${(props) => (props.color === 'primary' ? '#605DEC' :
        props.color === 'error' ? '#EB5757' :
            props.color === 'warning' ? '#FFD12F' : '')}`




const Alert = ({ children, color, onClose }) => (
    <StyledDiv color={color}>{children}<ClearIcon onClick={onClose}/></StyledDiv>
);


Alert.propTypes = {
    onClose: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired

};



export default Alert;