export const Banner = () => {
  const bannerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    // padding: '50px 0',
    fontSize: '5em',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    marginTop:'0px',
    marginBottom:'150px',
    display:'grid',
    boxSizing: 'border-box',
    margin: '0 auto',
    width: '100vw', // Full viewport width
    maxWidth: '1200px',
    
  };

  const titleStyle = {
    fontWeight: 900, // Extra bold
    width:"100%",
    letterSpacing: '5px', // Extra spacing for a confident feel
    display:'grid'
  };

  return (
    <div style={bannerStyle}>
      <div style={titleStyle}>e m o b l a c k g i r l s</div>
    </div>
  );
};

export default Banner;
