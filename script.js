class NumberInput {
    NumberInputOne;
    NumberInputTwo;
    NumberInputThree;
    ButtonInput;
    List;
    tegLi;

    constructor() {
        this.renderInputOne();
        this.renderInputTwo();
        this.renderInputThree();
        this.renderButton();
        this.renderList();
        this.renderComponent();
       
    }

    renderInputOne() {
        this.NumberInputOne = document.createElement('input')
        this.NumberInputOne.type = "number";
        this.NumberInputOne.className = 'num'
        
    }

    renderInputTwo() {
        this.NumberInputTwo = document.createElement('input')
        this.NumberInputTwo.type = "number";
        this.NumberInputTwo.className = 'num'

    }

    renderInputThree() {
        this.NumberInputThree = document.createElement('input')
        this.NumberInputThree.type = "number";
        this.NumberInputThree.className = 'num'

    }

    renderButton() {
        this.ButtonInput = document.createElement('input')
        this.ButtonInput.type = 'button'
        this.ButtonInput.className = 'button'
        this.ButtonInput.value = "Start"
        this.ButtonInput.onclick = () => {  this.addArray();   this.remoteNumberInput() }

    }

    renderList() {
        this.List = document.createElement('ol')
        this.List.className = 'tags-area'
             
    }

    renderComponent() {
        let div = document.getElementById('component')
        div.append(this.NumberInputOne)
        div.append(this.NumberInputTwo)
        div.append(this.NumberInputThree)
        document.getElementById('component').append(this.ButtonInput)
        document.getElementById('component').append(this.List)
    }

    remoteNumberInput() {
        this.NumberInputOne.value = "";
        this.NumberInputTwo.value = "";
        this.NumberInputThree.value = ""
    }

    addArray() {
        const arrayNumber = [];
        const valueNumberOne = this.NumberInputOne.value;
        const valueNumberTwo = this.NumberInputTwo.value;
        const valueNumberThree = this.NumberInputThree.value;
        arrayNumber.push(valueNumberOne, valueNumberTwo, valueNumberThree);
        console.log(arrayNumber)
        this.List.innerHTML = 
            arrayNumber.map((elem) => {
              if(elem == '') {
                    return undefined
              }

            if(elem % 2 == 0 && elem % 3 == 0)  {
                return   `<li class = "new-teg">alterweb</li>` 
            }

            if(elem % 2 == 0) {
                return `<li class = "new-teg">alter</li>` 
            }

            if(elem % 3 == 0) {
                return `<li class = "new-teg">web</li>` 
            } else {
                return `<li class = "new-teg">${elem}</li>` 
            } 
        })        
    }
}

window.onload = () => { new NumberInput() }






