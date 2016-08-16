import { connect } from 'react-redux';
import { addToActions } from '../../Store.js';

const uploadStateToProps = state => {
  return { artModalState: state.upload.artModalState, modalState: state.upload.modalState, files: state.upload.files, toUpload: state.upload.toUpload, currentArt: state.upload.currentArt };
};

const uploadDispatchToProps = dispatch => {
  return {
    switchUploadModalState: () => {
      dispatch({ type: 'switchUploadModalState' });
    },
    switchArtModalState: () => {
      dispatch({ type: 'switchArtModalState' });
    },
    uploadFiles: (files) => {
      files.forEach(file => {
        file = file[0];
        const fileReader = new FileReader(file);
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = e => {
          const arrayBufferStr = fileReader.result;
          fetch('/art', {
            headers: {
              'Accept': 'application/octet-stream',
              'Content-Type': 'application/octet-stream',
              'File-Type': file.type,
            },
            credentials: 'same-origin',
            method: 'POST',
            body: arrayBufferStr,
          })
        };
      });
      dispatch({ type: 'uploadFiles', data: files });
    },
    emptyToUploadFiles: () => {
      dispatch({ type: 'emptyToUploadFiles' });
    },
    addDragAndDropFiles: (file) => {
      dispatch({ type: 'addDragAndDropFiles', data: file });
    },
    populateArtFiles: () => {
      fetch('/art', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
        credentials: 'same-origin',
      }).then(response => response.json())
      .then(body => {
        dispatch({ type: 'populateArtFiles', data: body });
      });
    },
    updateCurrentArt: (data) => {
      dispatch({ type: 'updateCurrentArt', data });
    },
  };
};


const connection = connect(uploadStateToProps, uploadDispatchToProps);
export { connection };
