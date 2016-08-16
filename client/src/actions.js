// global actions shared across application
let actions = {};

/****************************************************************

                          MAP ACTIONS

*****************************************************************/


actions.addMarker = (previousState, data) => {
  let map = previousState.map;
  let markers = previousState.map.markers;
  let newMarker = markers.slice();
  newMarker.push(data);
  map.markers = newMarker;
  let newState = Object.assign({}, previousState, { map });
  return newState;
};

actions.addMarkerToMapStateSwitch = (previousState) => {
  const map = previousState.map;
  const addMarkerToMapState = previousState.map.addMarkerToMapState;
  const newMarkerAddState = !addMarkerToMapState;
  map.addMarkerToMapState = newMarkerAddState;
  const newState = Object.assign({}, previousState, { map });
  return newState;
};

actions.populateMarkers = (previousState, data) => {
  let map = previousState.map;
  let markers = previousState.map.markers;
  let newFiles = markers.slice();
  data.forEach(dataChunk => {
    console.log(dataChunk);
    newFiles.push(dataChunk);
  });
  map.markers = newFiles;
  const newState = Object.assign({}, previousState, { map });
  return newState;
};

/****************************************************************

                        UPLOAD ACTIONS

*****************************************************************/


actions.switchUploadModalState = (previousState) => {
  let upload = previousState.upload;
  let uploadModalState = previousState.upload.modalState;
  let newModalState = !uploadModalState;
  upload.modalState = newModalState;
  let newState = Object.assign({}, previousState, { upload });
  return newState;
};

actions.switchArtModalState = (previousState) => {
  let upload = previousState.upload;
  let artModalState = previousState.upload.artModalState;
  let newModalState = !artModalState;
  upload.artModalState = newModalState;
  let newState = Object.assign({}, previousState, { upload });
  return newState;
};

actions.uploadFiles = (previousState, data) => {
  const upload = previousState.upload;
  const files = previousState.upload.files;
  const newFiles = files.slice();
  data.forEach(dataChunk => {
    newFiles.push(dataChunk);
  });
  upload.files = newFiles;
  const newState = Object.assign({}, previousState, { upload });
  return newState;
};

actions.addDragAndDropFiles = (previousState, data) => {
  let upload = previousState.upload;
  let toUpload = previousState.upload.toUpload;
  let newFiles = toUpload.slice();
  newFiles.push(data);
  upload.toUpload = newFiles;
  let newState = Object.assign({}, previousState, { upload });
  return newState;
};

actions.emptyToUploadFiles = (previousState) => {
  let upload = previousState.upload;
  let toUpload = previousState.upload.toUpload;
  let newUpload = [];
  upload.toUpload = newUpload;
  let newState = Object.assign({}, previousState, { upload });
  return newState;
};

actions.populateArtFiles = (previousState, data) => {
  let upload = previousState.upload;
  let files = previousState.upload.files;
  let newFiles = files.slice();
  data.forEach(dataChunk => {
    console.log(dataChunk);
    newFiles.push(dataChunk);
  });
  upload.files = newFiles;
  const newState = Object.assign({}, previousState, { upload });
  return newState;
};

actions.updateCurrentArt = (previousState, data) => {
  let upload = previousState.upload;
  let toUpload = previousState.upload.currentArt;
  let newUpload = data;
  upload.currentArt = newUpload;
  let newState = Object.assign({}, previousState, { upload });
  return newState;
};


export { actions };
