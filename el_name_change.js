// ==UserScript==
// @name         el name change
// @namespace    hskull
// @version      0.1
// @description  change name
// @author       hskull
// @include      https://paoding.b.qianxin-inc.cn/*
// @include      https://paoding.b.qianxin-inc.cn/sample/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function change(){
        var labelTag = document.getElementsByClassName('el-form-item__label');
        for(var i = 0; i < labelTag.length; i++)
        {
            var elName = labelTag[i].textContent;
            var parForm=labelTag[i].parentNode;
            if(elName == "AWA")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="AWA(avast)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "BFINDER")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="BFINDER(bd)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "FIREROM")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="FIREROM(huorong)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "SMT")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="SMT(symantec)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "MCF")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="MCF(mcafee)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "KPK")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="KPK(kaspersky)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "WEISOFT")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="WEISOFT(microsoft)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
            if(elName == "DMCLOUDVM")
            {
                labelTag[i].style.display="none";
                if(parForm.children.length <=2)
                {
                    let newLabel = document.createElement("label");
                    newLabel.style="width: 260px;display:block; padding-left: 16px; float: left;";
                    newLabel.className="change";
                    newLabel.textContent="DMCLOUDVM(jingyun)";
                    parForm.insertBefore(newLabel, labelTag[i]);
                }
                else
                {
                    labelTag[i].style.display="none";
                    parForm.children[0].style.display="block";
                }
            }
        }
    }
    function backVt(){
        var labelTag = document.getElementsByClassName('change');
        for(var i = 0; i < labelTag.length; i++)
        {
            var elName = labelTag[i].textContent;
            var parForm=labelTag[i].parentNode;
            if(elName == "AWA(avast)" || elName == "BFINDER(bd)" || elName == "FIREROM(huorong)" || elName == "SMT(symantec)" ||
               elName == "MCF(mcafee)" || elName == "KPK(kaspersky)" || elName == "WEISOFT(microsoft)" || elName == "DMCLOUDVM(jingyun)")
            {
                labelTag[i].style.display="none";
                parForm.children[1].style.display="block";
            }
        }
    }
    function backDetectionHistory(){
        var labelTag = document.getElementsByClassName('change');
        for(var i = 0; i < labelTag.length; i++)
        {
            var elName = labelTag[i].textContent;
            var parForm=labelTag[i].parentNode;
            if(elName == "AWA(avast)" || elName == "BFINDER(bd)" || elName == "FIREROM(huorong)" || elName == "SMT(symantec)" ||
               elName == "MCF(mcafee)" || elName == "KPK(kaspersky)" || elName == "WEISOFT(microsoft)" || elName == "DMCLOUDVM(jingyun)")
            {
                labelTag[i].style.display="block";
                parForm.children[1].style.display="none";
            }
        }
    }
    function begin(){
        var zion = document.getElementById("tab-zions");
        zion.addEventListener('click', function(){
            setTimeout(change,500);
        })
        var vt = document.getElementById("tab-vts");
        vt.addEventListener('click', function(){

            setTimeout(backVt,300);
        })
        var detectionHistory = document.getElementById("tab-detectionHistory");
        detectionHistory.addEventListener('click', function(){
            setTimeout(backDetectionHistory,300);
        })
    }
    document.addEventListener('click', function(){
        var url = window.location.href
        var re=RegExp("https:\/\/paoding.b.qianxin-inc.cn\/sample\/*",'i');
        if(re.test(url))
        {
            setTimeout(begin,1000);
        }
    })
})();
