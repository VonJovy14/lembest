import "stylesheets/modules/additionalcontacts.scss";

import { Link } from "react-router-dom";

import Title from "script/components/display/Title";
import Button from "script/components/input/Button";

function AdditionalContacts() {
  return (
    <div className="additional-contacts-container">
      <div className="additional-contacts-wrapper">
        <Title text="Head office" variant="inline" color="blue" />
        <span>
          2069 Paseo De Carlos Candido St., Mapulang Lupa, Valenzuela City,
          Metro Manila
        </span>
      </div>

      <div className="additional-contacts-wrapper">
        <Title text="tel / fax" variant="inline" color="blue" />
        <span>(02) 8294-3336</span>
      </div>

      <div className="additional-contacts-wrapper">
        <Title text="mobile number" variant="inline" color="blue" />
        <span>(+63) 960 251 1133 (Viber and WhatsApp Ready)</span>
      </div>

      <div className="additional-contacts-wrapper">
        <Title text="Email" variant="inline" color="blue" />
        <span>inquiries@lembestlechon.com</span>
      </div>

      <div className="additional-contacts-wrapper">
        <Link to="/franchise" className="link">
          <Button variant="outlined" color="red" onClick={() => null}>
            BE A FRANCHISEE TODAY!
          </Button>
        </Link>
      </div>

      <div className="additional-contacts-wrapper">
        <Link to="/career" className="link">
          <Button variant="outlined" color="red" onClick={() => null}>
            BE PART OF OUR TEAM.
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AdditionalContacts;
