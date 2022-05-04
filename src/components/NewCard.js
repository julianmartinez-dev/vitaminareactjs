 import React from 'react'
 import '../style.css';

const NewCard = () => {
   return (
    <div className="wrapper">
    <Card
      img="https://images.unsplash.com/photo-1541580790812-1e297ae345df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      title="The Everyday Salad"
      description="Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
    />

    <Card
      img="https://images.unsplash.com/photo-1635791552443-4653df1aed2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
      title="Simple Risotto"
      description="Fear Risotto no more! This simple recipe is perfect for family dinners."
    />

    <Card
      img="https://images.unsplash.com/photo-1650575185249-2b6a65f92d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      title="Baked Cod with Vegetables"
      description="Baked Cod with Vegetables. 30 minute meal!"
    />
  </div>
  )
 }

 function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} className="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">View Post</button>
      </div>
    );
  }
  


 export default NewCard


