import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import { Router } from '@vaadin/router';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-details/vaadin-details';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-dialog';
import '@vaadin/vaadin-text-field';

import './dicom-view';
import './page-study';
import './page-study-add';
import './dicom-app';


class DicomShell extends PolymerElement {
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
          width: 100%;
          height: 100%;
          
          font-family: var(--app-font-family);
          font-size: var(--app-font-size-md);
        }
        .content {
          padding: 16px;
        }
      
        h3 {
          text-align: center;
        }
      </style>
     
      <vaadin-app-layout>
        <h3 slot="branding" style="margin: 0;">DICOM — Studies list</h3>
        <vaadin-tabs slot="menu">
<!--          <vaadin-tab>Workspace</vaadin-tab>-->
        </vaadin-tabs>  
        
        <div class="content" id="outlet">
         
        </div>
      </vaadin-app-layout>
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    this.router = new Router(this.$.outlet);
    this.router.setRoutes([
      { path: '/', component: 'page-study' },
      { path: '/study-add', component: 'page-study-add' },
      { path: '/view/:id', component: 'dicom-app' },
    ]);

    window.router = this.router;
    console.log(this.router);
  }

}

customElements.define('dicom-shell', DicomShell);
