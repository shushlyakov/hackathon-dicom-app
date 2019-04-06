import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-upload/vaadin-upload';
import '@vaadin/vaadin-details/vaadin-details';

import './dicom-view';


class DicomApp extends PolymerElement {
  static get properties() {
    return {
      files: { type: Array, value: () => [] },
      selectedItem: { type: Object, value: () => {} },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%:
        }
        .container {
          margin-top: 16px;
          display: flex;
        }
        .row1 {
           min-width: 530px;
           
        }
        .row2 {
           width: 100%
        }
        #dicomImage {
          width:512px;
          height:512px;
          top:0px;
          left:0px;
          position:absolute;
        }
        .add-button {
          width: 110px;
         
        }
        .dicomImageContainer {
          position: relative;
        }
        vaadin-details {
          margin-top: 516px;
        }
        vaadin-grid {
          max-width: 256px;
          height: 100%;
        }
      </style>     
      <el-button class="add-button" on-click="_saveAll">Export</el-button>
      
      <div class="container">
        <div class="row1">
          <dicom-view image-id="[[selectedItem.imageId]]" meta="{{currentMeta}}" state="{{selectedItem.state}}"></dicom-view>    
          
          <vaadin-details theme="filled" opened>
            <div slot="summary">Details</div>
            <dom-repeat items="{{currentMeta}}">
              <template>
                <div>[[item.name]]: [[item.value]]</div>
              </template>
            </dom-repeat>
          </vaadin-details>
        </div>
        <div class="row2">
           <vaadin-grid items="[[files]]" selected id="grid">
              <vaadin-grid-filter-column path="originalname" header="Name"></vaadin-grid-filter-column>
            </vaadin-grid>
        </div>
      </div>
     
    `;
  }

  _saveAll(e) {
    console.log(this.files, e)
  }
  connectedCallback() {
    super.connectedCallback();


    const grid = this.$.grid;

    grid.addEventListener('active-item-changed', (event) => {
      const item = event.detail.value;
      grid.selectedItems = item ? [item] : [];
      if(item ) this.selectedItem = grid.selectedItems[0];
    });


    fetch(`/api/study/get?id=${this.location.params.id}`)
      .then(response => response.json())
      .then((data) => {

        data.files.forEach(file => {

          fetch(`/api/study/getFile`,
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({path: file.destination + '' + file.filename})
            })
            .then(response => response.blob())
            .then((d) => {

             //  imageId
              const f = new File([d], file.originalname);

              file.imageId = window.cornerstoneWADOImageLoader.wadouri.fileManager.add(f)

              this.push('files', file);

              if (!this.selectedItem) {
                grid.selectedItems = [this.files[0]];
                this.selectedItem = this.files[0];
              }
            });
        });
        // this.set('files', data);

        // fetch(`/api/study/getFile?id=${this.location.params.id}`)
        //   .then(response => response.json())
        //   .then((data) => {
        //     this.set('file', data);
        //   });
      });
  }

  _clear() {

  }
}

customElements.define('dicom-app', DicomApp);
