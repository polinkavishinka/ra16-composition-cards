import React from "react"

interface CardProps {
  children?: React.ReactElement,
  title: string,
  text: string,
}

function Card({ children, title, text }: CardProps) {
  console.log(children);
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{text}</p>
        <a href="#" className='btn btn-primary'>Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
