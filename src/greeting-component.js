import { LitElement, html } from 'lit';

export class Greeting extends LitElement {
    static properties = {
        name: {},
    }

    constructor() {
        this.name = 'World';
    }

    render() {
        html`
            <p>Hello ${this.name}
        `;
    }
}
