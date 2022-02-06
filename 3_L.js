// //  Liskov substitution principle

class Person {
}

class Member extends Person {
    access() {
        console.log('You have access')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {
    }
}

class Backend extends Member {
    canCreateBackend() {
    }
}

class PersonFromDifferentCompany extends Guest {
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())

//==========================================================================//

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {
    }
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {
    }
}

class HOC extends HigherOrderComponent {

}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())