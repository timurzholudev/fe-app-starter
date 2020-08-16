import { customElement, html, LitElement } from 'lit-element';

@customElement('cm-header')
export class HeaderComponent extends LitElement {
    // adding css can be done this way, but there is no auto-complete
    // static get styles() {
    //     return css`
    //         header {
    //             width: 100%;
    //             height: 80px;
    //             background-color: #303030;
    //             font-size: 1rem;
    //         }
    //     `;
    // }

    render() {
        return html`
        <style>
            header {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 80px;
                background-color: #303030;
                font-size: 1rem;
                padding: 0 24px;
            }
            
            h2 {
                font-size: 1.4rem;
                color: #fff;
                letter-spacing: 0.5px;
            }
        </style>
        <header>
            <h2>Header</h2>
        </header>
        `;
    }
}