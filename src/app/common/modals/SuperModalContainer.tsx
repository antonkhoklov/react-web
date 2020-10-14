import React, { useContext } from 'react';
import { RootStoreContext } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      width: '90%',
      maxWidth: 600,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const SuperModalContainer = () => {
  const rootStore = useContext(RootStoreContext);
  const { SuperModal: { openSuperModal, bodySuperModal }, closeSuperModal } = rootStore.modalStore;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);


  const modalbody = (
    <div className={classes.paper}>
      {bodySuperModal}
      {/* use following <SimpleModal/> if want to open modal inside model */}
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <Modal
        open={openSuperModal}
        className={classes.modal}
        onClose={closeSuperModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSuperModal}>
          {modalbody}
        </Fade>
      </Modal>
    </div>
  );
}
export default observer(SuperModalContainer);
