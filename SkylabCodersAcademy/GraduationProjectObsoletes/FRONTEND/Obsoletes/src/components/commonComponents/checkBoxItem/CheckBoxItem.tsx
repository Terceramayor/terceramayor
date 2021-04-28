// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { bindActionCreators } from 'redux';
import Dispatch, { connect } from 'react-redux';
import { validateDeathReason } from '../../../redux/actions/actionsObsoletesProductStats';
import { reduxStateInterface, CheckBoxItemPropsInterface, mapStateToPropsCheckBoxItemReturnInterface } from '../../../utils/interfaces';
import { AnimationControls } from '../../../utils/enums';
import checkBoxItemStyles from './checkBoxItemStyles';

function CheckBoxItem ({ deathReason, setCurrentDeathReason, okToSubmitDeathReason, actions }:CheckBoxItemPropsInterface) {
  const [deathReasonChecked, setDeathReasonChecked] = useState<boolean>(false);
  const { checkboxFormat } = checkBoxItemStyles;
  const itemDeathReason = deathReason;

  function onPressActionControl () {
    setCurrentDeathReason(itemDeathReason);

    if (deathReasonChecked === false) {
      actions.validateDeathReason(okToSubmitDeathReason, 1, false);
    } else {
      actions.validateDeathReason(okToSubmitDeathReason, -1, false);
    }
    setDeathReasonChecked(!deathReasonChecked);
  }
  return (

<View style={checkboxFormat}>

    <Checkbox.Item label={deathReason}
        status={(deathReasonChecked === false) ? AnimationControls.Unchecked : AnimationControls.Cheked}
        onPress={() => {
          onPressActionControl();
        }
    }/>

</View>
  );
}

const mapStateToProps = (state:reduxStateInterface):mapStateToPropsCheckBoxItemReturnInterface => ({
  obsoletesProductStats: state.obsoletesProductStats,
  userLogIn: state.userLogIn,
  okToSubmitDeathReason: state.okToSubmitDeathReason
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions: bindActionCreators({ validateDeathReason }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxItem);
