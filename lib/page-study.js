import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-details/vaadin-details';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-upload/vaadin-upload';

import './dicom-view';
import './el-button';

class PageStudy extends PolymerElement {
  static get properties() {
    return {
      items: { type: Array, value: () => [] },
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          
          font-family: var(--app-font-family);
          font-size: var(--app-font-size-md);
        }
        vaadin-grid {
        max-width: 800px;
        margin-top: 16px;
        }
        .add-button {
          width: 100px;
        }
      </style>        
       <el-button class="add-button" href="/dicom/study-add" on-click="_addStudy">Add study</el-button>
       <vaadin-grid items="[[items]]" selected>
        <vaadin-grid-filter-column path="value" header="Name"></vaadin-grid-filter-column>
         <vaadin-grid-column text-align="end">
          <template>
            <el-button class="add-button" href="[[_computeLink(item)]]" on-click="_addStudy">Open</el-button>
          </template>
        </vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    console.log('fdf00');

    fetch('/dicom/api/study/list')
      .then(response => response.json())
      .then((data) => {
        this.set('items', data);
      });
  }

  _computeLink(item) {
    return `view/${item.id}`;
  }
}

customElements.define('page-study', PageStudy);
