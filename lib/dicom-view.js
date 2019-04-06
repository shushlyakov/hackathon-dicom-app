import { html, PolymerElement } from '@polymer/polymer/polymer-element';

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
    });
  }
}

customElements.define('dicom-view', DicomView);
