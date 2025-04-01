import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  
  const bannerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: '5em',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    marginTop: '0px',
    marginBottom: '150px',
    display: 'grid',
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '100vw',
    maxWidth: '1200px',
  };

  const titleStyle = {
    fontWeight: 900,
    width: '100%',
    letterSpacing: '5px',
    display: 'grid',
  };

  const linkStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const imageStyle = {
    width: '40px',
    height: '25px',
  };

  const handleBannerClick = () => {
    navigate('/');
  };

  return (
    <>
    <div style={bannerStyle}>
      <div style={titleStyle} onClick={handleBannerClick}>e m o b l a c k g i r l s</div>
      
    </div>
    <a href="https://twitter.com/em0blackgirls" style={linkStyle} target="_blank" rel="noopener noreferrer">
    <img src="https://pnghq.com/wp-content/uploads/pnghq.com-x-logo-vibrant-transparen-6-2048x1152.png" alt="X Logo" style={imageStyle} />
  </a>
  </>
    
  );
};

export default Banner;
