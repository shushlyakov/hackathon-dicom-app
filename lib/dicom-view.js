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

    const PanTool = cornerstoneTools.PanTool;
    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 2 })

    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;
    cornerstoneTools.addTool(ZoomMouseWheelTool)
    cornerstoneTools.setToolActive('ZoomMouseWheel', { mouseButtonMask: 1 })

    const FreehandMouseTool = cornerstoneTools.FreehandMouseTool;
    window.handtool = FreehandMouseTool

    cornerstoneTools.addTool(FreehandMouseTool)
    cornerstoneTools.setToolActive('FreehandMouse', { mouseButtonMask: 1 })

      // var x = cornerstoneTools.getToolState( this.$.dicomImage , 'FreehandMouse');
      // console.log(x)
  }

  _imageIdObserver(imageId) {
    window.cornerstone.loadImage(imageId).then((image) => {
      const viewport = window.cornerstone.getDefaultViewportForImage(this.$.dicomImage, image);
      window.cornerstone.displayImage(this.$.dicomImage, image, viewport);

      this._parseMeta(image);
    });
  }

  _parseMeta(image) {
    this.meta = [
      { name: 'Samples Per Pixel', value: image.data.uint16('x00280002') },
      { name: 'Photometric Interpretation', value: image.data.string('x00280004') },
      { name: 'Number Of Frames', value: image.data.string('x00280008') },
      { name: 'Planar Configuration', value: image.data.uint16('x00280006') },
      { name: 'Rows', value: image.data.uint16('x00280010') },
      { name: 'Columns', value: image.data.uint16('x00280011') },
      { name: 'Pixel Spacing', value: image.data.string('x00280030') },
      { name: 'Bits Allocated', value: image.data.uint16('x00280100') },
      { name: 'Bits Stored', value: image.data.uint16('x00280101') },
      { name: 'High Bit', value: image.data.uint16('x00280102') },
      { name: 'Pixel Representation', value: image.data.uint16('x00280103') },
      { name: 'WindowCenter', value: image.data.string('x00281050') },
      { name: 'WindowWidth', value: image.data.string('x00281051') },
      { name: 'RescaleIntercept', value: image.data.string('x00281052') },
      { name: 'RescaleSlope', value: image.data.string('x00281053') },
      { name: 'Fragments', value: image.data.elements.x7fe00010 && image.data.elements.x7fe00010.fragments ? image.data.elements.x7fe00010.fragments.length : '' },
      { name: 'Min Stored Pixel Value', value: image.minPixelValue },
      { name: 'Max Stored Pixel Value', value: image.maxPixelValue },
    ];
  }
}

customElements.define('dicom-view', DicomView);
