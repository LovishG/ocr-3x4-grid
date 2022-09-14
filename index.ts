const codedCharacters: any = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9",
    " _ |_|| |   ": "A",
    "    _ |_||_|": "B",
    "    _ |  |_ ": "C",
    " _ | || ||_|": "D",
    "    _ |_ |_ ": "E",
    "    _ |_ |  ": "F",
    "    _ |_ |_|": "G",
    "      |_|| |": "H",
    "       |  | ": "I",
    "       | _| ": "J",
    "      |/ |\ ": "K",
    "      |  |_ ": "L",
    "": "M",
    " ": "N",
    "    _ | ||_|": "O",
    "    _ |_||  ": "P",
    "    _ | ||\|": "Q",
    " _ |_|| \   ": "R",
    "    _ |_  _|": "S",
    "       _  | ": "T",
    "      | ||_|": "u",
    "   ": "V",
    "    ": "w",
    "\ / | / \   ": "X",
    "\ / \ /     ": "y",
    "   _   / /_ ": "Z",
  };
  const button = document.querySelector('button');
  const arrayOfIds = ['0-0','0-1','0-2','1-0','1-1','1-2','2-0','2-1','2-2','3-0','3-1', '3-2'];
  let str = '';

  button?.addEventListener('click',function(){
    for(let i=0; i<arrayOfIds.length;i++){
        let id:any = document.getElementById(arrayOfIds[i])
        let inputboxValue = id.value;
        if(inputboxValue ===''){
            inputboxValue = ' ';
        }
        str += inputboxValue;
        console.log(i,str);
    }
    if(str in codedCharacters){
            alert('your character is ===>'+ codedCharacters[str]);
    }
    else {
            alert('????????');
    }
    str = '';
  });
  
  
  window.onload = function () {
    setGame();
  };

  function setGame() {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) {
        let input = document.createElement("input");
        input.id = r.toString() + "-" + c.toString();
        input.classList.add("inputBox");
        input.setAttribute('maxlength', '1');
        input.value = "";
        const outerBox:any = document.getElementById("outer-box");
        outerBox.appendChild(input);
      }
    }
  }
