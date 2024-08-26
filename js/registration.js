let signUpBtn=document.querySelector('.signupbtn');
let signInBtn=document.querySelector('.signinbtn');
let nameField=document.querySelector('.namefield');
let title=document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');
// let p=document.getElementById('sign-up');
// let a=JSON.parse(localStorage.getItem("signup")) || [];




signInBtn.addEventListener('click', ()=>{
    nameField.style.maxHeight= '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';

});

signUpBtn.addEventListener('click', ()=>{
    nameField.style.maxHeight= '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'password suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)';

});






function saveData(){
    let name,email,password,date;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    date = document.getElementById('date').value;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    localStorage.setItem("date",date);


    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")) : [];
    if(user_records.some((v)=>{
        return v.email==email
    })){
        alert("Duplicate Data");
    }
    else{
        user_records.push({
            "name":name,
            "email":email,
            "password":password,
            "date":date
        })

        localStorage.setItem("users",JSON.stringify(user_records));
        alert("Data Saved Successfully");
    }

}