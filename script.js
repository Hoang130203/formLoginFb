function hide(){
    let hide=document.getElementsByClassName('other_gender_container')[0];   
    hide.style.display='none'
    let icon_6=document.getElementById('icon_6');
    icon_6.style.display='none';
    let gender=document.getElementsByClassName('gender_container'); 
    for(let i=0;i<gender.length;i++){
        gender[i].classList.remove('border_war');
    }
}

function openHide(){
    let hide=document.getElementsByClassName('other_gender_container')[0];   
    hide.style.display='block'
    let icon_6=document.getElementById('icon_6');
    icon_6.style.display='none';
    let gender=document.getElementsByClassName('gender_container'); 
    for(let i=0;i<gender.length;i++){
        gender[i].classList.remove('border_war');
    }
}
document.addEventListener('DOMContentLoaded', function(){
    let day = document.getElementById('day');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    for(let i=1; i<=31; i++){
        let option = document.createElement('option');
        option.innerHTML = i;
        day.appendChild(option);
    }
    for(let i=1; i<=12; i++){
        let option = document.createElement('option');
        option.innerHTML = 'Tháng '+i;
        month.appendChild(option);
    }
    for(let i=1905; i<=2024; i++){
        let option = document.createElement('option');
        option.innerHTML = i;
        year.appendChild(option);
    }
    let curentdate=new Date();

    day.value=curentdate.getDate();
    month.value='Tháng '+(curentdate.getMonth()+1);
    year.value=curentdate.getFullYear();

    //tippy
    const list=[{var1:'firstname',var2:'tip1',var3:'icon_1'},
                {var1:'lastname',var2:'tip2',var3:'icon_2'},
                {var1:'sdt_email',var2:'tip3',var3:'icon_3'},
                {var1:'pass',var2:'tip4',var3:'icon_4'},
                {var1:'field_name_1',var2:'tip5',var3:'icon_5'},
                {var1:'field_name_2',var2:'tip6',var3:'icon_6'},
                ]
    list.map((item)=>{
        const inputField = document.getElementById(item.var1);
        const tooltip = document.getElementById(item.var2);
        const icon = document.getElementById(item.var3);
        icon.addEventListener('mouseover', function() {
            const rect = inputField.getBoundingClientRect();
            if(item.var2=='tip5' || item.var2=='tip6'){
                tooltip.style.left = rect.left+3 + 'px';
                tooltip.style.top = rect.bottom+34 + 'px';
            }else{
                tooltip.style.left = rect.left+3 + 'px';
                tooltip.style.top = rect.bottom+6 + 'px';
            }

            tooltip.style.display = 'flex';
            // tooltip.getElementsByClassName('icon_up')[0].style.display = 'block';
        });

        icon.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    })
})
let firstName= document.getElementById('firstname');
let lastName= document.getElementById('lastname');
let sdt_email= document.querySelector('.sdt_email');
let pass= document.querySelector('.pass');

let checkWar=[{element:firstName,icon:icon_1},{element:lastName,icon:icon_2},{element:sdt_email,icon:icon_3},{element:pass,icon:icon_4}];

checkWar.map((item)=>{
    item.element.addEventListener('blur', function(){
    let value = item.element.value;
    if(value.length==0){
        item.element.classList.add('border_war');
        item.icon.style.display='block';
    }else{
        item.element.classList.remove('border_war');
        item.icon.style.display='none';
    }
})
})
checkWar.map((item)=>{
    item.element.addEventListener('focus', function(){
        item.element.classList.remove('border_war');
        item.icon.style.display='none';
})
})
function submit(){
    let firstName= document.getElementById('firstname');
    let lastName= document.getElementById('lastname');
    let sdt_email= document.querySelector('.sdt_email');
    let pass= document.querySelector('.pass');
    let year= document.getElementById('year');
    let month= document.getElementById('month');
    let day= document.getElementById('day');
    let icon_1=document.getElementById('icon_1');
    let icon_2=document.getElementById('icon_2');
    let icon_3=document.getElementById('icon_3');
    let icon_4=document.getElementById('icon_4');
    let icon_5=document.getElementById('icon_5');
    let icon_6=document.getElementById('icon_6');
    let checkWar=[{element:firstName,icon:icon_1},{element:lastName,icon:icon_2},{element:sdt_email,icon:icon_3},{element:pass,icon:icon_4}];
    for(let i=0; i<checkWar.length; i++){
        if(checkWar[i].element==sdt_email){
            let value = checkWar[i].element.value;
            if(!isNaN(value)&&value.length>=10 && value.length<=11){
                continue
            }
            if(value.indexOf('@')==-1 || value.indexOf('.')==-1 || value.length<5 || value.length>320 || value.indexOf(' ')>-1 || value.indexOf('..')>-1 || value.indexOf('@.')>-1 || value.indexOf('.@')>-1 || value.indexOf('@@')>-1 || value.indexOf(' ')==0 || value.indexOf('.')==0 || value.indexOf('@')==0 || value.indexOf('.')==value.length-1 || value.indexOf('@')==value.length-1 || value.indexOf('..')>-1){
                checkWar[i].element.classList.add('border_war');
                checkWar[i].icon.style.display='block';
            }else{
                checkWar[i].element.classList.remove('border_war');
                checkWar[i].icon.style.display='none';
            }
        }else if(checkWar[i].element==pass){
                if(checkWar[i].element.value.length<6){
                    checkWar[i].element.classList.add('border_war');
                    checkWar[i].icon.style.display='block';
                }else{
                    checkWar[i].element.classList.remove('border_war');
                    checkWar[i].icon.style.display='none';
                }
        }else
            if(checkWar[i].element.value.length==0){
                checkWar[i].element.classList.add('border_war');
                checkWar[i].icon.style.display='block';
            }else{
                checkWar[i].element.classList.remove('border_war');
                checkWar[i].icon.style.display='none';
            }
    }
    if(year.value>=2016){
        year.classList.add('border_war');
        month.classList.add('border_war');
        day.classList.add('border_war');
        icon_5.style.display='block';
    }else{
        year.classList.remove('border_war');
        month.classList.remove('border_war');
        day.classList.remove('border_war');
        icon_5.style.display='none';
    }
    let genderInputs = document.getElementsByName('gender');
    let isChecked = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            if(genderInputs[i].id=='other'){
                let otherGender=document.getElementsByClassName('other_gender')[0];
                if(otherGender.value!='1' && otherGender.value!='2' && otherGender.value!='3'){
                   continue
                }else{
                    isChecked = true;
                    break;
                }
            }else{
                isChecked = true;
                break;
            }
        }
    }
    genderInput = document.getElementsByClassName('gender_container');
    if (!isChecked) {
        icon_6.style.display='block';
        for(let i=0;i<genderInput.length;i++){
            genderInput[i].classList.add('border_war');
        }
    }else{
        icon_6.style.display='none';
        for(let i=0;i<genderInput.length;i++){
            genderInput[i].classList.remove('border_war');
        }
    }
}

function removeborder(){
    let year= document.getElementById('year');
    let month= document.getElementById('month');
    let day= document.getElementById('day');
    let icon_5=document.getElementById('icon_5');
    year.classList.remove('border_war');
    month.classList.remove('border_war');
    day.classList.remove('border_war');
    icon_5.style.display='none';
    
}