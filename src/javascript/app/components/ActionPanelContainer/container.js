import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  actionPanelContainerWidth: state.settings.actionPanelContainerWidth,
  activePanel: state.settings.activePanel,
});

const mapDispatchToProps = (dispatch) => ({
  updateActionPanelWidth: (actionPanelContainerWidth) => {
    dispatch({
      type: 'UPDATE_ACTION_PANEL_CONTAINER_WIDTH',
      actionPanelContainerWidth,
    });
  },
  closeActionPanel: () => {
    dispatch({
      type: 'CLOSE_ACTION_PANEL',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);