customElements.define('user-meta-data', class extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    get Name(){
        return this.getAttribute('name')
    }
    render() {
        this.shadowRoot.innerHTML = `
            <h3 style="opacity:0">Domain: A/B Testing</h3>
            <h4>Product/Company: ${this.Name}</h4>
        `;
    }
    connectedCallback() {
        // Attaches a shadow DOM tree to our element (this)
        this.render();
    }
});