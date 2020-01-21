/*Botão deletar*/
document.getElementById("btn-buy").addEventListener("mouseenter", mouseEnter);
document.getElementById("btn-buy").addEventListener("mouseleave", mouseLeave);

/*Botão de frete*/
document.getElementsByClassName("frete")[0].addEventListener("mouseenter", mouseEnter1);
document.getElementsByClassName("frete")[0].addEventListener("mouseleave", mouseLeave1);

/*Botão COMPRAR MAIS*/
document.getElementsByClassName("btn-compMais")[0].addEventListener("mouseenter", mouseEnter2);
document.getElementsByClassName("btn-compMais")[0].addEventListener("mouseleave", mouseLeave2);

/*Botão DELETAR TUDO*/
document.getElementsByClassName("btn-delTudo")[0].addEventListener("mouseenter", mouseEnter3);
document.getElementsByClassName("btn-delTudo")[0].addEventListener("mouseleave", mouseLeave3);

/*Botão CONFIRMAR COMPRA*/
document.getElementsByClassName("btn-conf")[0].addEventListener("mouseenter", mouseEnter4);
document.getElementsByClassName("btn-conf")[0].addEventListener("mouseleave", mouseLeave4);


/*____________________________Botão deletar__________________________________*/
  function mouseEnter() 
  {
    document.getElementById("btn-buy").style.background = "red";
  }
      
  function mouseLeave() 
  {
    document.getElementById("btn-buy").style.background = "rgba(255, 0, 0, 0.801)";
  }

/*__________________________Botão de frete______________________________________*/  
  function mouseEnter1()
  {
      document.getElementsByClassName("frete")[0].style.background = "yellow";
  }

  function mouseLeave1()
  {
      document.getElementsByClassName("frete")[0].style.background = 'rgb(241, 245, 244)';
  }

/*________________________Botão COMPRAR MAIS_______________________________________*/
function mouseEnter2()
{
    document.getElementsByClassName("btn-compMais")[0].style.background = "rgb(26, 100, 134)";
}

function mouseLeave2()
{
    document.getElementsByClassName("btn-compMais")[0].style.background = '#204d74';
}

/*_______________________Botão DELETAR TUDO________________________________________________*/
function mouseEnter3()
{
    document.getElementsByClassName("btn-delTudo")[0].style.background = "red";
}

function mouseLeave3()
{
    document.getElementsByClassName("btn-delTudo")[0].style.background = 'rgb(216, 44, 44)';
}

/*______________________Botão CONFIRMAR TUDO___________________________________________________*/
function mouseEnter4()
{
    document.getElementsByClassName("btn-conf")[0].style.background = "green";
}

function mouseLeave4()
{
    document.getElementsByClassName("btn-conf")[0].style.background = 'rgb(34, 204, 34)';
}