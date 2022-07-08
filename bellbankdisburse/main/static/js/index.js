document.addEventListener("DOMContentLoaded", () => {

    var caseid = document.querySelector("#caseid");

    caseid.addEventListener("keyup", function(e) {
        console.log(e.target.value);

        if (e.target.value.length >= 7){


            fetch(`https://sheetdb.io/api/v1/co0d5sqn0b3w6`, {
                method: "GET",
                // body: JSON.stringify({
                //     type: "username",
                //     username: user
                // })
            })
            .then(response => response.json())
            .then(result => {
            //    result.forEach(element => {
                
            //     if (element.caseid == e.target.value){
            //         console.log(element.fullname);
            //     }
        
            //     });
            // console.log(result);

            arr = JSON.parse(JSON.stringify(result).replace(/\s(?=\w+":)/g, ""));

            // Object.keys(result).forEach((key) => {
            //     var replacedKey = key.trim().toUpperCase().replace(/\s\s+/g, "_");
            //     if (key !== replacedKey) {
            //         result[replacedKey] = result[key];
            //         delete result[key];
            //     }
            //  });
            
            //console.log(arr);

            arr.forEach(element => {
                if (element.CaseID == e.target.value){
                    setData(element);
                } 
            });

            })  

        }

    });


    var pay = document.querySelector("#pay")

    pay.addEventListener("click", () => {
        
        fetch (`/payment`, {
            method: "POST",
            body: JSON.stringify({
                case_id: caseid.value
            })
        })
        .then(res => res.json())
        .then(result => {
            alert(result.response)
        })
        
        // fetch(`/payment`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         case_id: caseid.value
        //     })
        //     .then(response => response.json())
        //     .then(result => {
        //         alert(result.response);
        //     })
        // });

    });

});

function setData(val) {
    console.log(val);
    document.querySelector("#fullname").value = val.FullName
    document.querySelector("#age").value = val.Age
    document.querySelector("#gender").value = val.Sex
}

function tr(){
    fetch(`https://sheetdb.io/api/v1/co0d5sqn0b3w6`, {
                method: "GET",
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            }
        )

}