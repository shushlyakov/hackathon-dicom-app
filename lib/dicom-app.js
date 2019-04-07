import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-upload/vaadin-upload';
import '@vaadin/vaadin-details/vaadin-details';
import '@polymer/paper-spinner/paper-spinner-lite';
import './dicom-view';


class DicomApp extends PolymerElement {
  static get properties() {
    return {
      files: { type: Array, value: () => [] },
      selectedItem: { type: Object, value: () => {} },
      loading: { type: Boolean, value: true },
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
           width: 100%;
            display: flex;
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
         .play-button {
          width: 110px;
         margin-left: 16px;
        }
        .dicomImageContainer {
          position: relative;
        }
        vaadin-details {
          margin-top: 516px;
            max-width: 512px;
        }
        vaadin-grid {
          max-width: 256px;
          height: 100%;
        }
        .navbar {
         display: flex;
        }
        #spinner {
          position: absolute;
          top: 300px;
          left: 266px;
        }
      </style>     
      <div class="navbar">
        <el-button class="add-button" on-click="_saveAll">Export</el-button>
        <vaadin-button class="play-button" on-click="_play" disabled="[[disabled]]">Play</vaadin-button>
    </div>
    
      
      <div class="container">
        <div class="row1">
          <paper-spinner-lite id="spinner"  active="[[loading]]"></paper-spinner-lite>
          <dicom-view id = "dicomview" image-id="[[selectedItem.imageId]]" meta="{{currentMeta}}" state="{{selectedItem.state}}"></dicom-view>    
          
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
    this.$.dicomview.upd_state();
    var data = window.states
    var zip = new JSZip();
    for (var key in data) {
      if (!data[key]) continue;
        var v = data[key].data;
        var name = this.files.find(f => f.imageId === key).originalname;
      var txt = "";
      v.forEach(function(element) {
        txt += element.points_name+"\n";
        var ps = element.handles.points;
        ps.forEach(function(point) {
          txt+= point.x + " " +point.y+"\n"
        });
      });

        zip.file(name + ".txt",txt );
    }
    zip.generateAsync({
        type: "base64"
    }).then(function(content) {
        window.location.href = "data:application/zip;base64," + content;
    });
  }
  connectedCallback() {
    super.connectedCallback();

    window.states=[]
    const grid = this.$.grid;

    grid.addEventListener('active-item-changed', (event) => {
      const item = event.detail.value;
      grid.selectedItems = item ? [item] : [];
      if(item ) this.selectedItem = grid.selectedItems[0];
    });


    fetch(`/api/study/get?id=${this.location.params.id}`)
      .then(response => response.json())
      .then((data) => {
        data.files = data.files.reverse()
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

    setTimeout(() => {
      this.loading = false;
    }, 5000)
  }

  _clear() {

  }

  _play() {
    let i = 1;
    let n = this.files.length;
    const grid = this.$.grid;
    grid.selectedItems = [this.files[0]];
    this.selectedItem = this.files[0];
this.disabled = true;


    const interv = setInterval(() => {
      grid.selectedItems = [this.files[i]];
      this.selectedItem = this.files[i];
      i++;

      if (i === n) {
        clearInterval(interv);
        this.disabled = false;
      }
    }, 500);
  }
}

customElements.define('dicom-app', DicomApp);
