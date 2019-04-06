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
      { name: 'samplesPerPixel', value: image.data.uint16('x00280002') },
      { name: 'photometricInterpretation', value: image.data.string('x00280004') },
    ];
  }
}

customElements.define('dicom-view', DicomView);
