$("form").submit((e) =>{
    e.preventDefault()
})
$("form").on("submit",()=>{
    if($("input")[0].value===$("input")[1].value){
        var obj={}
        obj.username = $("input").value
        obj.password= $("input").value
        $.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",obj,()=>{
            alert("Login Successful")
            location.replace("./index.html")
            localStorage.setItem("loginStatus",true)
        }).fail(()=>{
            alert("Login Succesfully")
            location.replace("./index.html")
            localStorage.setItem("loginStatus",true)
        })
    }
    else{
        alert("Please enter  valid credentials")
    }
})