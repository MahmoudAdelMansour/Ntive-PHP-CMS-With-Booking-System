

setTimeout(()=>{

    let tableDataBooking = document.querySelectorAll('.hospitalbook');
    if(tableDataBooking.length <= 0 ){
        tableDataBooking = document.querySelectorAll('.hospitalbook');
        }
        const getHospitalsTable = () => {
            let reqOf = new XMLHttpRequest();
            reqOf.onreadystatechange = () => {
                if(reqOf.readyState === 4 && reqOf.status === 200) {
                    // console.log(JSON.parse(reqOf.responseText));
                    
                        tableDataBooking.forEach(that => {
                            let addItHospital = document.createTextNode(JSON.parse(reqOf.responseText)[that.getAttribute('hospitals') -1]['hospital_name']);
                            that.appendChild(addItHospital);
                        })
                        
                        
                    
                    
                }
            }
            reqOf.open('POST','management/config/includes/gethospitalstable.php',true);
            reqOf.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            reqOf.send();
        }
        document.querySelector('body').onload = getHospitalsTable();
    
},500);

