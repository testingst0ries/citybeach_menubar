customElements.define('user-meta-data-container', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    get Name(){
        return this.getAttribute('name')
    }
    render() {
        this.shadowRoot.innerHTML = `
            <div id="nested-testing">
                <h3 style="display: block;overflow: visible;height: 0px;">
                    <span>Domain: Nested Testing</span>
                </h3>
                <user-meta-data></user-meta-data>
            </div>
        `;
    }
    connectedCallback() {
        // Attaches a shadow DOM tree to our element (this)
        this.render();
    }
});