import './styles.css'; 



function CircleIcon({ imageUrl, altText, label }) {
  return (
    <div className="icon-container">
    <div>
        <img className="circle-img" src={imageUrl} alt={altText} />
      </div>
    <p className='label'>{label}</p>
    </div>
  );
}

export default CircleIcon;
