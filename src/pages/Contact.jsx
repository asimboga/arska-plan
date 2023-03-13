import logo from "../Image/Arska-logo.jpeg";
import { Container } from "react-bootstrap"


function Contact() {
  return (
    <div className="container-fluid view">
      <div className="row m-5 shadow-lg">
        <div className="col-7">
          <h2 className="text-center">Arska-Plan</h2>
          <p className="text-center"> Tenetur perspiciatis eaque animi porro magnam asperiores repellat natus amet!</p>
          <Container className="contact text-center">
            <h2 className="text-center">Contact</h2>
            <div className="contact__list container d-flex text-center p-3">
              <div className="contact__item p-3">
                <i className="fas fa-envelope"> Email</i>
                <div className="text-secondary">asimboga@gmail.com</div>
              </div>
              <div className="contact__item p-3">
                <i className="fas fa-mobile-alt"> Phone</i>
                <div className="text-secondary">(+90) 544-327-72-81</div>
              </div>
              <div className="contact__item p-3">
                <i className="fas fa-map-marker-alt"> Address</i>
                <div className="text-secondary">Kepez/Çanakkale</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="col-4 ">
          <img className="rounded-circle img-fluid center" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Contact;