import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-details/vaadin-details';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-text-field';

import './dicom-view';

class PageStudyAdd extends PolymerElement {
  static get properties() {
    return {
      files: { type: Array, value: () => [] },
      value: { type: String },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          font-family: var(--app-font-family);
          font-size: var(--app-font-size-md);
        }      
        
        .container {
           max-width: 400px;
        } 
        
        #add {
          width: 80px;
        }
        .add-button {
          width: 100px;
        }
      </style>
      
      <el-button class="add-button" href="/" on-click="_save">Save</el-button>
      
      <div class="container">
        <vaadin-text-field label="Name" value="{{value}}" autofocus></vaadin-text-field>
        <vaadin-upload
          id="uploader"
          target="/dicom/api/upload"
          form-data-name="files"
          files="{{files}}"
        ></vaadin-upload>
      </div>
    `;
  }
  _save() {
    const data = {
      value: this.value,
      files: this.files.map((item) => JSON.parse(item.xhr.response))
    }
    console.log(data);


    fetch('/dicom/api/study/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
}

customElements.define('page-study-add', PageStudyAdd);
