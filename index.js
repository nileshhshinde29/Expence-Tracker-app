        let mainArray = []


        let names = document.getElementById("inputName")
        let date = document.getElementById("inputDate")
        let amount = document.getElementById("InputAmount")
        let addButton = document.getElementById("addBtn")
        let table1 = document.getElementById("ntable")
       
        
        let listFromLocalStorage = JSON.parse(localStorage.getItem("myList"))
        console.log(listFromLocalStorage)


        addButton.addEventListener("click", function () {
            if(names.value=="" || date.value=="" || amount.value=="")
            {
                alert("Plese fill the all Inputs")

            }
            else
            {
            
                my()
               
            }

        })



        if (listFromLocalStorage) {
            mainArray = listFromLocalStorage;
            render()
        }



        function my() {

            const myObjet = {
                names: names.value,
                date: date.value,
                amount: amount.value,
            }
            console.log(myObjet)
            mainArray.push(myObjet)
            localStorage.setItem("myList", JSON.stringify(mainArray))

            render()
            
           
        }



        function render() {

            let list = "<th>Name</th><th>Date</th><th>Amount</th><th>Action</th>"

            for (let i = 0; i < mainArray.length; i++) {
                list += `<tr><td>${mainArray[i].names}</td><td>${mainArray[i].date}</td><td>${mainArray[i].amount}<td><button class="btn btn1 btn-danger" onClick="remove(${i})">Remove</button></td><tr>`
            }



            table1.innerHTML = list
          
            


        }

       

        function remove(i) {
            listFromLocalStorage.splice(i, 1)
            localStorage.setItem("myList", JSON.stringify(listFromLocalStorage))
            render()
        }

