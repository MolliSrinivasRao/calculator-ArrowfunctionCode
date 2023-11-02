function Keypad({Result,Functionality,Clear,del})
{

return(

<div className="keypad">

<div className="row1">
  <button className="clearbtn"  type="button" onClick={()=>
{
    Clear()
}}>CLEAR</button>
  <button className="delbtn"  type="button" onClick={()=>
{
    del()
}}>DEL</button>
</div>
<div className="row2">
  <button className="numbtns" onClick={
    ()=>
    {
        Result("7")
  
    }
  } type="button">7</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("8")
    }
  } type="button">8</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("9")
    }
  } type="button">9</button>
  <button className="oprbtns" onClick={
    ()=>
    {
        Result("+")
    }
  } type="button">+</button>

</div>

<div className="row2">
  <button className="numbtns" onClick={
    ()=>
    {
        Result("4")
    }
  } type="button">4</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("5")
    }
  } type="button">5</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("6")
    }
  } type="button">6</button>
  <button className="oprbtns" onClick={
    ()=>
    {
        Result("-")
    }
  } type="button">-</button>

</div>
<div className="row2">
  <button className="numbtns" onClick={
    ()=>
    {
        Result("1")
    }
  } type="button">1</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("2")
    }
  } type="button">2</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("3")
    }
  } type="button">3</button>
  <button className="oprbtns" onClick={
    ()=>
    {
        Result("*")
    }
  } type="button">*</button>

</div>

<div className="row2">
  <button className="numbtns" onClick={
    ()=>
    {
        Result("%")
    }
  } type="button">%</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("0")
    }
  } type="button">0</button>
  <button className="numbtns" onClick={
    ()=>
    {
        Result("/")
    }
  } type="button">/</button>
  <button className="oprbtns" onClick={
    ()=>
    {
        Functionality("=")
    }
  } type="button">=</button>

</div>



</div>
)
}

export default Keypad;