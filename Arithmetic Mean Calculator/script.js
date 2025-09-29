
let dataset = [];

function addValue() {
    let input = document.getElementById("val").value.trim();
    
    if (input === "") { 
        alert("Input cannot be empty. Please enter a number.");
        return; 
    }

    let num = Number(input);
    if (isNaN(num)) {
        alert("Please enter a valid number."); 
        return; 
    
    }

    dataset.push(num);
    document.getElementById("val").value = "";
    updateDisplay();
}

function removeValue(){
    let input = document.getElementById("val").value.trim();
    
    if (input === "") {
        alert("Input cannot be empty. Please enter a number."); 
        return;
    }

    let num = Number(input);
    
    if (isNaN(num)) {
        alert("Please enter a valid number."); 
        return;
    }

    let index = dataset.indexOf(num);

    if (index === -1) { 
        alert("Value not found in dataset."); 
        return; 
    }
    
    
    dataset.splice(index, 1);
    document.getElementById("val").value = "";
    updateDisplay();
}

function updateDisplay() {
    let text = "[" + dataset.join(", ") + "]";
    document.getElementById("dataset").textContent = text;
}

function computeMean() {
    if (dataset.length === 0) {
        document.getElementById("mean").textContent = "—";
        return;
    }
    
    let sum = 0;
    for (let i = 0; i < dataset.length; i++) {
        sum = sum + dataset[i];
    }

    let mean = sum / dataset.length;
    document.getElementById("mean").textContent = mean.toFixed(2);
}
