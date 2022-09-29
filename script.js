
// тест 1

// class NumberInput {
//     NumberInputOne;
//     NumberInputTwo;
//     NumberInputThree;
//     ButtonInput;
//     List;
//     tegLi;

//     constructor() {
//         this.renderInputOne();
//         this.renderInputTwo();
//         this.renderInputThree();
//         this.renderButton();
//         this.renderList();
//         this.renderComponent();
       
//     }

//     renderInputOne() {
//         this.NumberInputOne = document.createElement('input')
//         this.NumberInputOne.type = "number";
//         this.NumberInputOne.className = 'num'
        
//     }

//     renderInputTwo() {
//         this.NumberInputTwo = document.createElement('input')
//         this.NumberInputTwo.type = "number";
//         this.NumberInputTwo.className = 'num'

//     }

//     renderInputThree() {
//         this.NumberInputThree = document.createElement('input')
//         this.NumberInputThree.type = "number";
//         this.NumberInputThree.className = 'num'

//     }

//     renderButton() {
//         this.ButtonInput = document.createElement('input')
//         this.ButtonInput.type = 'button'
//         this.ButtonInput.className = 'button'
//         this.ButtonInput.value = "Start"
//         this.ButtonInput.onclick = () => {  this.addArray();   this.remoteNumberInput() }

//     }

//     renderList() {
//         this.List = document.createElement('ol')
//         this.List.className = 'tags-area'
             
//     }

//     renderComponent() {
//         let div = document.getElementById('component')
//         div.append(this.NumberInputOne)
//         div.append(this.NumberInputTwo)
//         div.append(this.NumberInputThree)
//         document.getElementById('component').append(this.ButtonInput)
//         document.getElementById('component').append(this.List)
//     }

//     remoteNumberInput() {
//         this.NumberInputOne.value = "";
//         this.NumberInputTwo.value = "";
//         this.NumberInputThree.value = ""
//     }

//     addArray() {
//         const arrayNumber = [];
//         const valueNumberOne = this.NumberInputOne.value;
//         const valueNumberTwo = this.NumberInputTwo.value;
//         const valueNumberThree = this.NumberInputThree.value;
//         arrayNumber.push(valueNumberOne, valueNumberTwo, valueNumberThree);
//         console.log(arrayNumber)
//         this.List.innerHTML = 
//             arrayNumber.map((elem) => {
//               if(elem == '') {
//                     return undefined
//               }

//             if(elem % 2 == 0 && elem % 3 == 0)  {
//                 return   `<li class = "new-teg">alterweb</li>` 
//             }

//             if(elem % 2 == 0) {
//                 return `<li class = "new-teg">alter</li>` 
//             }

//             if(elem % 3 == 0) {
//                 return `<li class = "new-teg">web</li>` 
//             } else {
//                 return `<li class = "new-teg">${elem}</li>` 
//             } 
//         })        
//     }
// }

// window.onload = () => { new NumberInput() }

// Тест 2

class FilterColor {
    buttonInput;
    divColors;
   
    
   
   constructor() {
       this.receiveButton ();
       this.renderComponent();
       this.randomClass()
   }
   
   
   renderDivColors() {
       this.divColors =document.createElement('div')
       const arrayCalor = ["red", "green", "blue", "yellow", "pink", "black", "orange", "purple"];
       this.divColors.className = this.randomClass(arrayCalor)
       document.querySelector('.container').append(this.divColors)
   }
   
   receiveButton () {
       this.buttonInput = document.createElement('input')
       this.buttonInput.type = 'button'
       this.buttonInput.className = 'btn third' 
       this.buttonInput.value = 'Создать'
       let count = 24;
       this.buttonInput.onclick = () => { 
           this.remoteButton();
           this.renderDivContainer();
           this.renderInputText();
           this.renderButtonFilter();
          while(count) {this.renderDivColors(); count--};
   
       }
   }
   renderDivContainer() {
       this.DivContainer = document.createElement('div')
       this.DivContainer.className = 'container'
       document.getElementById('component').append(this.DivContainer)
   }
   
   renderComponent() {
       document.getElementById('component').append(this.buttonInput)
      
   }
   
   remoteButton() {
       this.buttonInput.className = 'active'
   }
   
   randomClass(arr) {
       return arr[Math.floor(Math.random()*arr.length)]
   }
   
   renderInputText() {
       this.inputText = document.createElement('input')
       this.inputText.type ='text'
       this.inputText.className ='text-filter'
       document.getElementById('component').append( this.inputText)
   }
   
   remoteInputText() {
       this.inputText.value = ''
   }
   
   renderButtonFilter() {
       this.buttonFilter = document.createElement('input')
       this.buttonFilter.type = 'button'
       this.buttonFilter.className = 'button'
       this.buttonFilter.value = 'filter'
       document.getElementById('component').append( this.buttonFilter )
       this.buttonFilter.onclick = () => {
           this.renderButtonWord();
           this.renderInputRadio();
           this.renderInputRadioOr();
           this.remoteInputText();   
       }
   
   }
   
   renderButtonWord() {
       this.buttonWord = document.createElement('input')
       this.buttonWord.type = 'button'
       this.buttonWord.className = 'button-word'
       this.buttonWord.value = document.querySelector('.text-filter').value
       document.getElementById('component').append( this.buttonWord )
   }
   
   renderInputRadio() {
       this.InputRadio = document.createElement('input')
       this.InputRadio.type = 'radio'
       this.InputRadio.name = 'contact'
       this.InputRadio.className = 'button'
       this.InputRadio.value = 'или'
       document.getElementById('component').append( this.InputRadio )
   }
   
   renderInputRadioOr() {
       this.InputRadioOr = document.createElement('input')
       this.InputRadioOr.type = 'radio'
       this.InputRadioOr.name = 'contact'
       this.InputRadioOr.className = 'button'
       this.InputRadioOr.value = document.querySelector('.text-filter').value
       document.getElementById('component').append( this.InputRadioOr )
       this.InputRadioOr.onchange = () => {
           console.log(`.${document.querySelector('.button-word').value}`)
           // console.log(`${document.querySelector('.button-word').value}`)
           document.querySelectorAll(`.${this.InputRadioOr.value`).forEach((i) => i.remove())
       }
   }
   
     
   }
   window.onload = () => { new FilterColor() }
   
    
