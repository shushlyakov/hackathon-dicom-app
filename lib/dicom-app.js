import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-upload/vaadin-upload';

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
          [[item.filename]]
        </template>
      </dom-repeat>
      <div class="dicomImageContainer">
        <div id="dicomImage"></div>
      </div>
      
    `;
  }

  static get properties() {
    return {
      files: { type: Array, value: () => [] },
    };
  }

  constructor() {
    super();
    this._boundUploadSuccessHandler = this._uploadSuccessHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.$.uploader.addEventListener('upload-success', this._boundUploadSuccessHandler);
    this.element = this.$.dicomImage;
    window.cornerstone.enable(this.element);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.$.uploader.removeEventListener('upload-success', this._boundUploadSuccessHandler);
  }

  _uploadSuccessHandler(e) {
    this.push('files', {
      file: e.detail.file,
      meta: JSON.parse(e.detail.xhr.response),
    });

    const imageId = window.cornerstoneWADOImageLoader.wadouri.fileManager.add(e.detail.file);
    this._loadAndViewImage(imageId);
  }

  _loadAndViewImage(imageId) {
    console.log(imageId,this.element)

    window.cornerstone.loadImage(imageId).then((image) => {
      console.log(image, this.element);
      const viewport = window.cornerstone.getDefaultViewportForImage(this.element, image);
      window.cornerstone.displayImage(this.element, image, viewport);
    });
  }
}

customElements.define('dicom-app', DicomApp);
