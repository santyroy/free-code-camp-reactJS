import React from "react";

// props is an object which hold the properties of the passed parameters: eg-> name, imgUrl, phone, email
// or if we pass an object then props becomes the parent of that object and
// hence we need to use 'props.contact.imgUrl'
function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} alt="contact-img" />
      <h3>{props.contact.name}</h3>
      <p>{props.contact.phone}</p>
      <p>{props.contact.email}</p>
    </div>
  );
}

export default ContactCard;
