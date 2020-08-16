import {
    LitElement, html, customElement, property
} from 'lit-element';

//Import components
import './components/hello-world.component';
import './components/header/header'

@customElement('app-rout')
export class AppElem extends LitElement {

    render() {
        return html`
        <style>
        
        </style>
        <main>
            <cm-header></cm-header>
            <hello-world title="Hello World!" description="This is my super new awesome web component"></hello-world>
        </main>
        `;
    }
}