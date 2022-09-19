import userimg from "../assets/profpic.jpg";


const ImagePro = (props) => {
  // const styleImg = { width: "90px", borderRadius: "50%", margin: "20px" };

  ImagePro.defaultProps = {
    src: [ userimg] ,
    alt: "userimg",
  };

  return (
    <>
    <div className="imgProfil" >
      <img style={{width:"450px"}} src={props.src} alt={props.alt}  />
      {props.children}
      </div>
    </>
  );
};

export default ImagePro;


