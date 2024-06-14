customElements.define('user-info', class extends HTMLElement {
    showNewName = false;
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        console.log('this.innerHTML', this.innerHTML);
    }
    get Name(){
        return this.getAttribute('name')
    }

    set Name(newName){
        this.setAttribute('name',newName)
    }
    get NewName(){
        return this.getAttribute('new-name')
    }

    set NewName(newName){
        this.setAttribute('new-name',newName)
    }
    changeName() {
        this.showNewName = !this.showNewName;
        console.log('this.showNewName', this.showNewName);
        this.render();
    }
    get UpdatedName() {
        return this.showNewName ? this.NewName : this.Name
    }
    render() {
        this.shadowRoot.innerHTML = `
            <div class="user-info">
                <h1>User Info<h1>
                <h2>Hi  ${this.UpdatedName}</h2>
                <h2 id="xyz" style="visibility: hidden;">Well hello, ${this.UpdatedName}</h2>
                <user-meta-data name="${this.UpdatedName}"></user-meta-data>
                <button id="change-name" style="display: none;">Toggle Name</button>
            </div>
        `;
        this.shadowRoot.querySelector('#change-name')
        ?.addEventListener('click', this.changeName.bind(this));
    }
    connectedCallback() {
        // Attaches a shadow DOM tree to our element (this)
        this.render();
    }
});