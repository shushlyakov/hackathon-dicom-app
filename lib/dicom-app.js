import {html, PolymerElement} from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-upload/vaadin-upload';

import './dicom-view';


class DicomApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
            
        }
        #dicomImage {
          width:512px;
          height:512px;
          top:0px;
          left:0px;
          position:absolute;
        }
        .dicomImageContainer {
          position: relative;
        }
      </style>
      <vaadin-upload
        id="uploader"
        target="/api/upload"
        form-data-name="files"
      ></vaadin-upload>
      <dom-repeat items="{{files}}">
        <template>
          [[item.meta.filename]]
        </template>
      </dom-repeat>
      <dicom-view image-id="[[currentFile.imageId]]"></dicom-view>      
    `;
  }

  static get properties() {
    return {
      files: { type: Array, value: () => [] },
      currentFile: { type: Object },
    };
  }

  constructor() {
    super();
    this._boundUploadSuccessHandler = this._uploadSuccessHandler.bind(this);
    this.loaded = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.$.uploader.addEventListener('upload-success', this._boundUploadSuccessHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.$.uploader.removeEventListener('upload-success', this._boundUploadSuccessHandler);
  }

  _uploadSuccessHandler(e) {
    this.push('files', {
      file: e.detail.file,
      meta: JSON.parse(e.detail.xhr.response),
      imageId: window.cornerstoneWADOImageLoader.wadouri.fileManager.add(e.detail.file)
    });

    this.currentFile = this.files[this.files.length - 1];
    const imageId = window.cornerstoneWADOImageLoader.wadouri.fileManager.add(e.detail.file);
    this._loadAndViewImage(imageId);
  }

  _loadAndViewImage(imageId) {
    console.log(imageId,this.element)

    window.cornerstone.loadImage(imageId).then((image) => {
      console.log(image, this.element);
      const viewport = window.cornerstone.getDefaultViewportForImage(this.element, image);
      window.cornerstone.displayImage(this.element, image, viewport);

      if (this.loaded === false) {
        //cornerstoneTools.mouseInput.enable(this.element);
        //cornerstoneTools.mouseWheelInput.enable(this.element);
        //cornerstoneTools.wwwc.activate(this.element, 1); // ww/wc is the default tool for left mouse button
        cornerstoneTools.init();
        const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;

        cornerstoneTools.addTool(ArrowAnnotateTool);
        cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 });


        //cornerstoneTools.pan.activate(this.element, 2); // pan is the default tool for middle mouse button
        //cornerstoneTools.zoom.activate(this.element, 4); // zoom is the default tool for right mouse button
        //cornerstoneTools.zoomWheel.activate(this.element); // zoom is the default tool for middle mouse wheel
        //cornerstoneTools.imageStats.enable(this.element);
        this.loaded = true;
      }

      document.getElementById('transferSyntax').textContent = image.data.string('x00020010');
      document.getElementById('sopClass').textContent = image.data.string('x00080016');
      document.getElementById('samplesPerPixel').textContent = image.data.uint16('x00280002');
      document.getElementById('photometricInterpretation').textContent = image.data.string('x00280004');
      document.getElementById('numberOfFrames').textContent = image.data.string('x00280008');
      document.getElementById('planarConfiguration').textContent = image.data.uint16('x00280006');
      document.getElementById('rows').textContent = image.data.uint16('x00280010');
      document.getElementById('columns').textContent = image.data.uint16('x00280011');
      document.getElementById('pixelSpacing').textContent = image.data.string('x00280030');
      document.getElementById('bitsAllocated').textContent = image.data.uint16('x00280100');
      document.getElementById('bitsStored').textContent = image.data.uint16('x00280101');
      document.getElementById('highBit').textContent = image.data.uint16('x00280102');
      document.getElementById('pixelRepresentation').textContent = image.data.uint16('x00280103');
      document.getElementById('windowCenter').textContent = image.data.string('x00281050');
      document.getElementById('windowWidth').textContent = image.data.string('x00281051');
      document.getElementById('rescaleIntercept').textContent = image.data.string('x00281052');
      document.getElementById('rescaleSlope').textContent = image.data.string('x00281053');
      document.getElementById('basicOffsetTable').textContent = image.data.elements.x7fe00010 && image.data.elements.x7fe00010.basicOffsetTable ? image.data.elements.x7fe00010.basicOffsetTable.length : '';
      document.getElementById('fragments').textContent = image.data.elements.x7fe00010 && image.data.elements.x7fe00010.fragments ? image.data.elements.x7fe00010.fragments.length : '';
      document.getElementById('minStoredPixelValue').textContent = image.minPixelValue;
      document.getElementById('maxStoredPixelValue').textContent = image.maxPixelValue;
      // const end = new Date().getTime();
      // const time = end - start;
      // document.getElementById('totalTime').textContent = time + "ms";
      // document.getElementById('loadTime').textContent = image.loadTimeInMS + "ms";
      // document.getElementById('decodeTime').textContent = image.decodeTimeInMS + "ms";

    });
  }
}

customElements.define('dicom-app', DicomApp);
