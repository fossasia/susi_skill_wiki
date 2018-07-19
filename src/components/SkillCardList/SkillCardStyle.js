const styles = {
  skillCard: {
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #eaeded',
    padding: 7,
    lineHeight: '1.25',
  },
  row: {
    width: '100%',
    positive: 'relative',
    float: 'left',
    textAlign: 'start',
  },
  imageContainer: {
    display: 'inline-block',
    alignItems: 'center',
    padding: '10px',
    background: '#fff',
  },
  imageContainerMobile: {
    display: 'inline-block',
    alignItems: 'center',
    padding: '10px',
    background: '#fff',
    height: '110px',
    marginBottom: '6px',
    marginTop: '6px',
  },
  image: {
    position: 'relative',
    height: '180px',
    width: '180px',
    verticalAlign: 'top',
    borderRadius: '50%',
    marginLeft: '6.4%',
  },
  imageMobile: {
    position: 'relative',
    height: '110px',
    width: '110px',
    verticalAlign: 'top',
    borderRadius: '50%',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: '#4285f4',
    marginBottom: '6px',
    border: '1px',
    height: '20px',
  },
  authorName: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  feedback: {
    color: '#4285f4',
    fill: '#4285f4',
    display: 'flex',
  },
  description: {
    fontSize: '12px',
  },
  descriptionTitle: {
    fontWeight: 700,
    lineHeight: 1.25,
    fontSize: 13,
  },
  listStyle: {
    width: '100%',
  },
  gridlist: {
    marginTop: '20px',
    marginBottom: '40px',
    padding: '0px 10px',
    width: '100%',
  },
  content: {
    paddingLeft: '4.3%',
    float: 'left',
    display: 'block',
    width: '100%',
    color: '#949494',
  },
  header: {
    marginBottom: 10,
    width: '100%',
  },
  example: {
    fontStyle: 'italic',
    fontSize: '14px',
    padding: '14px 18px',
    borderRadius: '4px',
    border: '1px #ddd solid',
    backgroundColor: '#f3f3f3',
    marginRight: '3.5%',
    float: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: 260,
  },
  exampleSection: {
    float: 'left',
    display: 'flex',
    flexDirection: 'row',
    width: '57.448%',
    marginRight: '3%',
    maxWidth: '572.86px',
  },
  details: {
    width: 'auto',
    minWidth: 720,
    display: 'flex',
  },
  textData: {
    height: '100%',
    float: 'right',
    maxWidth: 270,
    minWidth: 160,
    fontSize: '12px',
    width: '40%',
    marginRight: '11%',
  },
  rating: {
    positive: 'relative',
  },
  totalRating: {
    fontSize: '13px',
    paddingLeft: '5px',
    color: '#108ee9',
  },
};

export default styles;
