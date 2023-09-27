var ttText=document.getElementById('ttText');
var append1=document.getElementById('append1');
var delete1=document.getElementById('delete1');
var save=document.getElementById('ttSave');
var tta=document.getElementById('tta');
var TTile=document.getElementById('ttTitle');
var TText=document.getElementById('tt-text');
var right=document.getElementById('right');
var homework=document.getElementById('homework');
var tn1=[0];
var tn2=[0];
//$("#append1").off("click").on("click",function(){});
$("#append1").off("click").on("click",function(){tn1++;tt(append1,tn1)});
$("#delete1").off("click").on("click",function(){tn2++;ttd(delete1,tn2)});
function tt(n,tn){
    if(n.id=='append1'){
        TTile.innerHTML='添加内容';
        TText.innerHTML='请输入要添加的内容';
    };
    if(n.id=='delete1'){
        TTile.innerHTML='删除内容';
        TText.innerHTML='请输入要删除的内容的编号';
    };
    tta.style.display='block';
    //save.addEventListener('click', function(){Save(n,tta);}, false);
    save.onclick=function(){Save(n,tta,tn)};
};
function Save(n,tta,tn){
        //获取内容
        var cn=document.getElementById(input);
        var select=document.getElementById('ttC');
        var select_ = select.selectedIndex;
        var area= select.options[select_].value;
        var input=ttText.value;
        var DEL_id=input;
        var text=document.getElementById('text');
        //创建div并调整样式
        var text_div=document.createElement('div');
        text_div.className='texts';
        text_div.id=tn;
        if(area=='热搜榜'){
            if(n.innerHTML=='添加内容'){
                right.appendChild(text_div);
                text_div.innerHTML=/*tn+'. '+*/input;
            }
            else{
                cn.style.display='none';
            };
        }
        else{
            if(n.innerHTML=='添加内容'){
                homework.appendChild(text_div);
                text_div.innerHTML=/*tn+'. '+*/input;
            }
            else{
                cn.style.display='none';
            };
        };
        tta.style.display='none';
};
//临时
function ttd(n,tn){
    alert('点击确定删除');
    window.location.reload();
};