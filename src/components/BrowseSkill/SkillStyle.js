import isMobileView from '../../utils/isMobileView';

const mobileView = isMobileView();

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'hidden',
    flex: '1 0 auto',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    position: 'relative',
    height: '64px',
    width: '64px',
    verticalAlign: 'top',
    borderRadius: '50%',
  },
  name: {
    textAlign: 'left',
    fontSize: '15px',
    color: '#4285f4',
    border: '1px',
    height: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '6px',
  },
  author: {
    textAlign: 'left',
    marginBottom: '4px',
    fontSize: '12px',
    color: '#555555',
  },
  feedback: {
    color: '#4285f4',
    fill: '#4285f4',
    display: 'flex',
  },
  description: {
    textAlign: 'left',
    fontSize: '14px',
  },
  listStyle: {
    width: '100%',
  },
  container: {
    marginTop: '15px',
    marginBottom: '15px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  propContainer: {
    width: 100,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  skillCard: {
    width: 260,
    height: 190,
    minHeight: '150px',
    margin: '10px 0 0 10px',
    overflow: 'hidden',
    justifyContent: 'center',
    fontSize: '10px',
    textAlign: 'center',
    display: 'inline-block',
    background: '#f2f2f2',
    borderRadius: '5px',
    backgroundColor: '#f4f6f6',
    border: '1px solid #eaeded',
    padding: '5px',
  },
  gridList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '10px',
    background: '#fff',
    height: '100px',
    marginBottom: '6px',
  },
  select: {
    margin: '0px 10px',
  },
  selection: {
    margin: '10px 10px 0px',
    width: '150px',
    overflowY: 'hidden',
    fontSize: '14px',
  },
  newSkillBtn: {
    padding: '10px 20px',
    marginRight: '24px',
  },
  example: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '14px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '138px',
    padding: '10px',
    verticalAlign: 'middle',
    display: 'block',
    color: 'black',
    maxHeight: '80px',
  },
  rating: {
    positive: 'relative',
    float: 'left',
  },
  totalRating: {
    fontSize: '13px',
    paddingLeft: '5px',
    color: '#108ee9',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '45px',
    marginRight: '10px',
    marginLeft: '20px',
  },
  sidebar: {
    width: 256,
    paddingTop: 50,
    display: 'block',
    zIndex: 2,
    borderRight: '1px solid #ddd',
    borderSpacing: '1px',
  },
  sidebarMenuItem: {
    minHeight: '24px',
    lineHeight: '24px',
    fontSize: '14px',
    padding: '0px 24px',
  },
  categorySidebarMenuItem: {
    minHeight: '24px',
    lineHeight: '24px',
    fontSize: '14px',
    padding: '0px 24px',
  },
  mobileMenuItem: {
    minHeight: '24px',
    lineHeight: '24px',
    fontSize: '14px',
    border: '1px #e7e7e7 solid',
    borderTopWidth: 0,
    margin: '0 14px',
    padding: '8px 8px 8px 8px',
  },
  sidebarSubheader: {
    fontWeight: 700,
    lineHeight: '28px',
    fontSize: '14px',
  },
  searchBar: {
    width: mobileView ? '100%' : '64%',
    marginRight: '20px',
    flexShrink: '10',
  },
  sortBy: {
    alignItems: 'center',
  },
  home: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  loader: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 200,
  },
  starRefine: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '24px',
    fontSize: 12,
  },
  ratingLabel: {
    fontSize: '14px',
    marginLeft: '4px',
  },
  singleRating: {
    display: 'flex',
    cursor: 'pointer',
    width: 'fit-content',
  },
  clearButton: {
    marginLeft: '24px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: 'fit-content',
    fontSize: 12,
  },
  metricsHeader: {
    paddingLeft: 16,
  },
  noSkill: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 24,
    padding: 16,
  },
  browseSkillRoot: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  staffPick: {
    margin: '4px 0 0 6px',
  },
  checkboxStyle: {
    width: '256px',
    paddingLeft: '8px',
    top: '3px',
  },
  selectedFilterStyle: {
    marginLeft: '10px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
};

export default styles;
