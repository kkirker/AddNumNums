window.onload = function(){
    new Dashboard();
};

class Dashboard {

  constructor() {
        this.dashboardValue = {
            id : 1,
            value : 0 
        }
        this.salesElement = document.getElementById("dashboardSales");
        this.salesWidget = new Widget(function(salesValue){
            if (this.dashboardValue.id !== salesValue.id) {  // Make sure they aren't adding a value which has already been added to support future updating.
                console.log("sales updated!");
                this.dashboardValue = salesValue;
                this.salesElement.innerHTML = this.dashboardValue.value;
            }
        });
    }
}

class Widget {
    constructor(callback){
        this.callback = callback;
        this.displayElement = document.getElementById("widgetValue");

        this.widgetValue = {
            id : 1,
            value : 0 
        }

        this.input = document.getElementById("widgetText").value;
        this.button = document.getElementById("widgetButton");
        this.button.addEventListener("click", (input) => this.AddSales(input))

    }
        

    AddSales(value)
    {
        this.widgetValue.id += 1;
        //console.log(this.widgetValue.id)
        this.widgetValue.value = value;
        console.log(this.widgetValue.value)
        this.displayElement.innerHTML = this.widgetValue.value;
        console.log(this.displayElement.innerHTML)
        //this.callback(this.widgetValue);
    }

    // TODO AddColorValidation 
    SetColor(){
        // if Sales < 0 color is red. 
    }
}