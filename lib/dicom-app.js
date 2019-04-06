import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-upload/vaadin-upload';

import './dicom-view';


class DicomApp extends PolymerElement {
  static get properties() {
    return {
      files: { type: Array, value: () => [] },
      currentFile: { type: Object },
      currentMeta: { type: Object },
    };
  }

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
      <dom-repeat items="{{currentMeta}}">
        <template>
          [[item.name]]
        </template>
      </dom-repeat>
      <dicom-view image-id="[[currentFile.imageId]]" meta="{{currentMeta}}"></dicom-view>      
    `;
  }

  constructor() {
    super();
    this._boundUploadSuccessHandler = this._uploadSuccessHandler.bind(this);
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
  }
}

customElements.define('dicom-app', DicomApp);
