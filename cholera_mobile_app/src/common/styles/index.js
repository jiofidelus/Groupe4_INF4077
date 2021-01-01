import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';

const CommonStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginChild: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  fab: {
    backgroundColor: Colors.color0,
  },
  cardAction: {
    margin: 10,
    justifyContent: 'space-between',
  },
  viewAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  pickerStyle: {
    height: 50,
    width: '100%',
    borderBottomColor: Colors.color,
    borderBottomWidth: 1,
  },
  viewPickerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.color0,
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  structSeptStyle: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 5,
    backgroundColor: Colors.color0,
  },
  circle: {
    width: 30,
    padding: 10,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    width: 50,
    padding: 10,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.color8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    marginTop: 15,
    marginBottom: 10,
    marginRight: 10,
  },
  buttonCircle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  otherStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
  },

  pickerItem: {
    marginLeft: 30,
    marginRight: 30,
  },
  picker: {
    height: 50,
    padding: 10,
    color: 'white',
  },
  FabStyle: {
    backgroundColor: Colors.color0,
    position: 'absolute',
    bottom: 30,
    right: 16,
  },
  headerProfile: {
    backgroundColor: Colors.color11,
  },
  headerProfileContent: {
    padding: 20,
    alignItems: 'center',
  },
  ligne_info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },

  positionFab: {
    position: 'absolute',
    bottom: -30,
    margin: 16,
    right: 0,
  },
  userInfo: {
    margin: 30,
  },
  userInfoMargin: {
    marginLeft: 28,
    marginTop: 5,
  },
  numberStyle: {
    fontSize: 70,
    color: Colors.color14,
    fontFamily: 'Roboto-Bold',
  },
  viewStyle: {
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop: 5,
  },
  second: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  line: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
  },
  textStyleBlood: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 5,
  },

  viewMargin: {
    marginVertical: 5,
  },
  viewBloodEdit: {
    marginTop: 10,
  },
  headerTilte: {
    color: 'white',
    fontFamily: 'Roboto-MediumItalic',
    marginLeft: 15,
    fontSize: 18,
  },
  iconSearch: {
    marginRight: 10,
  },
});

const StructureStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  methodText: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textColor: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'BalooBhai-Regular',
  },
  logout: {
    marginRight: 10,
  },

  viewImageBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  detailStructure: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    color: 'white',
  },

  editProfile: {
    height: 150,
  },
  titleSturcture: {
    fontSize: 12,
    color: 'white',
    marginBottom: 10,
  },
  titleSubStructure: {
    fontSize: 12,
    color: 'white',
  },
  customStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  serviceSubHeaderStyle: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  viewStyleMargin: {
    flex: 1,
    marginVertical: 5,
  },
  viewSubServiceStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceStyle: {
    marginVertical: 20,
  },
  priceTextStyle: {
    textAlign: 'center',
    color: Colors.color0,
    fontSize: 20,
    fontFamily: 'Roboto-Black',
  },
  filterStyle: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ChipStyle = StyleSheet.create({
  chip: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: Colors.color8,
  },
});

const connectStyle = StyleSheet.create({
  marginHorizontal: {
    marginTop: 20,
    marginBottom: 10,
  },
  subheadingStyle: {
    color: Colors.color,
    fontWeight: 'bold',
  },
  notAccountStyle: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ligneCreate: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
});

const profileStyle = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },

  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Roboto-BlackItalic',
    color: '#008885',
  },
  whoIsIt: {
    color: '#008885',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Roboto-Regular',
  },
  politicStyle: {
    textAlign: 'center',
  },

  politicWord: {
    color: Colors.color0,
    fontSize: 14,
    fontFamily: 'Roboto-Black',
  },
  loadingIndicator: {
    position: 'absolute',
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const pubStyle = StyleSheet.create({
  viewPosts: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  closeIcon: {
    marginHorizontal: 10,
    position: 'absolute',
    zIndex: 100,
    right: 0,
    top: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
  },
  barTools: {
    padding: 10,
    borderTopColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageStyle: {
    zIndex: 10,
    height: '60%',
    backgroundColor: 'white',
  },
  viewMargin: {
    marginTop: 20,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {
  CommonStyle,
  StructureStyle,
  ChipStyle,
  connectStyle,
  profileStyle,
  pubStyle,
};
