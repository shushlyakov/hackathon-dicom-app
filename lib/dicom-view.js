import { html, PolymerElement } from '@polymer/polymer/polymer-element';

// function getTransferSyntax(image) {
//   const value = image.data.string('x00020010');
//   return `${value} [${uids[value]}]`;
// }

// function getSopClass(image) {
//   const value = image.data.string('x00080016');
//   return `${value} [${uids[value]}]`;
// }
//
// function getPixelRepresentation(image) {
//   const value = image.data.uint16('x00280103');
//   if (value === undefined) {
//     return;
//   }
//   return value + (value === 0 ? ' (unsigned)' : ' (signed)');
// }
//
// function getPlanarConfiguration(image) {
//   const value = image.data.uint16('x00280006');
//   if (value === undefined) {
//     return;
//   }
//   return value + (value === 0 ? ' (pixel)' : ' (plane)');
// }

class DicomView extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
            
        }
        .image {
          width:512px;
          height:512px;
          top:0;
          left:0;
          position:absolute;
        }
        .container {
          position: relative;
        }
      </style>

      <div class="container">
        <div class="image" id="dicomImage"></div>
      </div>
    `;
  }

  static get properties() {
    return {
      imageId: { type: String, observer: '_imageIdObserver' },
      meta: { type: Object, notify: true },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.cornerstone.enable(this.$.dicomImage);

    cornerstoneTools.init();
    const { ArrowAnnotateTool } = cornerstoneTools;

    cornerstoneTools.addTool(ArrowAnnotateTool);
    cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 });
  }

  _imageIdObserver(imageId) {
    window.cornerstone.loadImage(imageId).then((image) => {
      const viewport = window.cornerstone.getDefaultViewportForImage(this.$.dicomImage, image);
      window.cornerstone.displayImage(this.$.dicomImage, image, viewport);
      window.cornerstoneTools.zoom.activate(element, 4);
      // cornerstoneTools.mouseInput.enable(this.element);
      // cornerstoneTools.mouseWheelInput.enable(this.element);
      // cornerstoneTools.wwwc.activate(this.element, 1); // ww/wc is the default tool for left mouse button


      // cornerstoneTools.pan.activate(this.element, 2); // pan is the default tool for middle mouse button
      // cornerstoneTools.zoom.activate(this.element, 4); // zoom is the default tool for right mouse button
      // cornerstoneTools.zoomWheel.activate(this.element); // zoom is the default tool for middle mouse wheel
      // cornerstoneTools.imageStats.enable(this.element);

      this._parseMeta(image);
    });
  }

  _parseMeta(image) {
    this.meta = [
      { name: 'samplesPerPixel', value: image.data.uint16('x00280002') },
      { name: 'photometricInterpretation', value: image.data.string('x00280004') },
      { name: 'transferSyntax', value: image.data.string('x00020010') },
      { name: 'sopClass', value: image.data.string('x00080016') },
      { name: 'samplesPerPixel', value: image.data.uint16('x00280002') },
      { name: 'photometricInterpretation', value: image.data.string('x00280004') },
      { name: 'numberOfFrames', value: image.data.string('x00280008') },
      { name: 'planarConfiguration', value: image.data.uint16('x00280006') },
      { name: 'rows', value: image.data.uint16('x00280010') },
      { name: 'columns', value: image.data.uint16('x00280011') },
      { name: 'pixelSpacing', value: image.data.string('x00280030') },
      { name: 'bitsAllocated', value: image.data.uint16('x00280100') },
      { name: 'bitsStored', value: image.data.uint16('x00280101') },
      { name: 'highBit', value: image.data.uint16('x00280102') },
      { name: 'pixelRepresentation', value: image.data.uint16('x00280103') },
      { name: 'windowCenter', value: image.data.string('x00281050') },
      { name: 'windowWidth', value: image.data.string('x00281051') },
      { name: 'rescaleIntercept', value: image.data.string('x00281052') },
      { name: 'rescaleSlope', value: image.data.string('x00281053') },
      { name: 'fragments', value: image.data.elements.x7fe00010 && image.data.elements.x7fe00010.fragments ? image.data.elements.x7fe00010.fragments.length : '' },
      { name: 'minStoredPixelValue', value: image.minPixelValue },
      { name: 'maxStoredPixelValue', value: image.maxPixelValue },
    ];
  }
}

customElements.define('dicom-view', DicomView);
