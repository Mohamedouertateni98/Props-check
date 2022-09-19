import ImagePro from "../profile/ImagePro";
import Img from "../assets/profpic.jpg";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";


function handleName(name) {
  return (
    <>
      <Alert variant="dark">I wish you liked my profil</Alert>
    </>
  );
}

const profile = (props) => {

 


  profile.defaultProps = {
    fullName: "user",
    bio: "No bio",
    profession: " No profession",
   
  };

  return (
    <div >     

      <div >
        <div>
          
          <ImagePro  src = {Img} alt='profilePhoto'></ImagePro>
        </div>

        <div >

          
          <p >{props.fullName}</p>
          <p >{props.bio}</p>
          <p >{props.profession}</p>
        </div>


      </div>

      <div>{handleName(props.fullName)}</div>
    </div>
  );
};

profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default profile;
