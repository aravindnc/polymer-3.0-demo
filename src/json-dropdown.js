import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-ajax/iron-ajax.js';

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      employees: {
        type: Array
      }
    };
  }

  static get template () {
    return html`
      <paper-dropdown-menu label="Userlist" on-iron-select="itemSelected">
        <paper-listbox slot="dropdown-content" selected="1">
          <iron-ajax auto url="https://ajaxresponse.com/FaEjKw" handle-as="json" on-response="handleResponse"></iron-ajax>
          <template is="dom-repeat" items={{employees}} as="employee">
            <paper-item value="{{employee.id}}">{{employee.name}}</paper-item>          
          </template>
          
        </paper-listbox>
      </paper-dropdown-menu>
    `;
  }

  handleResponse(response){
    console.log('Handling ajax response');
    this.employees = response.detail.response;
  }

  itemSelected(e) {
    console.log("You've selected "+ e.target.selectedItem.innerText);    
  }
}

// Register the element with the browser.
customElements.define('poly-select', StartPolymer3);
