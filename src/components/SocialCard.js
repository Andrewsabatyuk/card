import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./SocialCard.css";
import Modal from "./Modal";


SocialCard.propTypes = {
  cardList: PropTypes.array,
};
SocialCard.defaultProps = {
  cardList:[],
}
function SocialCard({ user }){
  const [buttonModal, setButtonModal] = useState(false)

  useEffect(() => {}, [user]);

  return(
    <div className='post-list'>
      <div className='post-cards' key={user.id}  onDoubleClick ={() => setButtonModal(true)}>
        <div className='card__name'><span>Name:</span> {user.name ? user.name :"Username not found"}</div>
        <div className='card__email'><span>Email:</span> {user.email ? user.email :"Email not provided"}</div> 
        <div className='card__website'><span>Website:</span> {user.website ? user.website :"website not provided"}</div>
        <div className="card_city"><span>City:</span> {user.address.city ? user.address.city :"City not provided"}</div><br/>
        {buttonModal ? (
          <Modal setTrigger={setButtonModal} posts={user.posts} userName={user.name}/>
        ): null}
      </div>
    </div>
  )
}

export default SocialCard