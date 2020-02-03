import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../util/Colors';
import Constants from '../../util/Constants';
const {width: mw, height: mh} = Dimensions.get('screen');

export const commonStyles = StyleSheet.create({
  navBarHeaderContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navBarRightIconStyle: {
    height: 39,
    resizeMode: 'center',
  },
  navBarHeaderTitleStyle: {
    color: Colors.WHITE,
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
    fontFamily: Constants.FONT_FORMULA_REGULAR,
  },
  buttonStyle: {
    height: 50,
    borderColor: Colors.MONZA_RED,
    backgroundColor: Colors.BUNKER_BLACK,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonTitleStyle: {
    fontFamily: Constants.FONT_FORMULA_REGULAR,
    color: Colors.WHITE,
  },
});

export const errorTextStyle = {
  alignSelf: 'center',
  color: Colors.RED,
  marginTop: '50%',
  marginBottom: '50%',
};

export const quantityStyle = {
  fontSize: 14,
  color: Colors.SILVER,
};

export const listItemTitleStyle = {
  fontSize: 14,
};

export const listItemSubtitleStyle = {
  fontSize: 14,
};

export const modalStyle = {
  modalContainer: {
    width: mw * 0.8,
    height: mh * 0.25,
    backgroundColor: Colors.WHITE,
    elevation: 5,
    padding: 20,
  },

  modalTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalMessageContainer: {
    marginTop: 10,
  },
  modalMessageStyle: {
    fontSize: 18,
  },
  modalButtonSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'space-around',
    justifyContent: 'flex-end',
    marginTop: 40,
  },
  modalButtonTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.BLUE,
  },
  modalButtonStyle: {
    backgroundColor: Colors.WHITE,
    marginRight: 10,
  },
};

export const orderStyle = {
  headerTitle: {
    fontSize: 22,
  },
  headerSubTitle: {
    fontSize: 18,
    color: Colors.SILVER,
  },
};

export const buttonStyle = {borderRadius: 20, backgroundColor: Colors.RED};
