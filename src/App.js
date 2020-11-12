import "./App.css";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { setState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Enter your name",
      bio: "Write your bio",
      profession: "What's your profession",
      imgSrc: "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png",
      isOpen: false,
      date:""
    };
  }
  componentDidMount() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    this.setState({date:n})
  }

  handleName = (e) => {
    this.setState({ fullName: e.target.value });
  };
  handleBio = (e) => {
    this.setState({ bio: e.target.value });
  };
  handleProfession = (e) => {
    this.setState({ profession: e.target.value });
  };
  handleImg = (e) => {
    this.setState({ imgSrc: e.target.value });
  };

  handleShow = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <>
          <div className="cont1">
            <br />
            <br />
            <h2>{this.state.fullName}</h2>
            <h3>{this.state.bio}</h3>
            <h3>{this.state.profession}</h3><br/><br/>
            <img src={this.state.imgSrc} alt="" height="250px"/>
            <br />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.setState({ isOpen: false })}
            >
              Close Profile
            </button><br/><br/><br/>
        <h2>{this.state.date}</h2></div>
          </>
        ) : (
          <>
            <Container>
              <br/><br/>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter your full name"
                  onChange={this.handleName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  type="bio"
                  placeholder="Write your bio "
                  onChange={this.handleBio}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Profession</Form.Label>
                <Form.Control
                  type="profession"
                  placeholder="What's your profession?"
                  onChange={this.handleProfession}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Profil Image</Form.Label>
                <Form.Control
                  type="profession"
                  placeholder="Image URL"
                  onChange={this.handleImg}
                />
              </Form.Group>
            </Container>
            <div className="button">
            <button className="btn btn-secondary " onClick={this.handleShow}>
              Open Profile
            </button></div>
          </>
        )}
      </div>
    );
  }
}

export default App;

// function App() {
//   const [fullName, setfullName] = useState("Enter your name");
//   const [bio, setbio] = useState("31 years old");
//   const [profession, setProfession] = useState("Web Developer");
//   const [imgSrc, setimgSrc] = useState(
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBJ0SkN-71wmYnwxq9i0FhjF56PtrvTl-zlA&usqp=CAU"
//   );
//   const [isOpen, setisOpen] = useState(false);

//   return (
//     <div className="App">
//       {/* {isOpen ? (
//         <div>
//           <br />
//           <br />
//           <h2>{fullName}</h2>
//           <h3>{bio}</h3>
//           <h3>{profession}</h3>
//           <img src={imgSrc} alt="" />
//           <br />
//           <button
//             type="button"
//             className="btn btn-danger"
//             onClick={() => setisOpen(false)}
//           >
//             Close Profile
//           </button>
//         </div>
//       ) : (
//         <>
//         <Container >
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Full name</Form.Label>
//             <Form.Control type="name" placeholder="Enter your full name" onChange={(e)=>setfullName(e.target.value)} />

//           </Form.Group>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Bio</Form.Label>
//             <Form.Control type="bio" placeholder="Write your bio " onChange={(e)=>setbio(e.target.value)} />

//           </Form.Group>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Profession</Form.Label>
//             <Form.Control type="profession" placeholder="What's your profession?" onChange={(e)=>setProfession(e.target.value)} />

//           </Form.Group>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Profil Image</Form.Label>
//             <Form.Control type="profession" placeholder="Image URL" onChange={(e)=>setimgSrc(e.target.value)} />

//           </Form.Group>

//           </Container>
//           <button className="btn btn-secondary" onClick={() => setisOpen(true)}>
//             Open Profile
//           </button>
//         </>
//       )} */}
//     </div>
//   );
// }

// export default App;
