import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import axios from "axios";

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      new_firstName: '',
      new_lastName: '',
      new_email:'',
      file: null,
      imagePreviewUrl: '',

    }
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleChange = (event)=> {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append('file', this.state.file);
    formData.append('firstName', this.state.new_firstName);
    formData.append('lastName', this.state.new_lastName);
    formData.append('email', this.state.new_email);
    axios.post(`http://localhost:5000/user/${this.props.currentUser.id}`,formData)
    .then(
      res => {
        if (res) {
          this.props.login(this.state.new_firstName, false, res.data)
        }
      }
    )
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/user/${this.props.currentUser.id}`).then(
      res => {
        this.setState({
          email: res.data.email,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          new_email:res.data.email,
        })
      }
    )

  }





  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt="" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

      return (
        <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="" name="new_firstName" placeholder={this.state.firstName} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="" name="new_lastName" placeholder={this.state.lastName} onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>



            <Form.Group controlId="formGridAddress1">
              <Form.Label>Email</Form.Label>
              <Form.Control name="new_email" defaultValue={this.state.email} placeholder={this.state.email} onChange={this.handleChange} />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlInput0" onSubmit={(e) => this._handleSubmit(e)}>
                <Form.Label>Avatar</Form.Label>
                <div>
                  <input className="fileInput"
                    type="file"
                    onChange={(e) => this._handleImageChange(e)} />
                </div>
                {$imagePreview}
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="button" onClick={this.handleSubmit}>
              Submit
       </Button>
          </Form>
        </div>
      );


  }
}

export default ProfileEdit;