import '../stylesheets/Card.css';
import React, {useEffect} from 'react';
function Card() {
    const data = [
      {
        "day": "mon",
        "amount": 17.45
      },
      {
        "day": "tue",
        "amount": 34.91
      },
      {
        "day": "wed",
        "amount": 52.36
      },
      {
        "day": "thu",
        "amount": 31.07
      },
      {
        "day": "fri",
        "amount": 23.39
      },
      {
        "day": "sat",
        "amount": 43.28
      },
      {
        "day": "sun",
        "amount": 25.48
      }
    ]
    const expenses = [];
    var multiplier = getMultiplier();
    useEffect( () => {
      return window.addEventListener('resize', (e) => {
        document.querySelectorAll('.amount').forEach(amount => {
            amount.style.height = amount.dataset.amount * getMultiplier() + "px"
        })
      })
    })
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString("en-US", {weekday:"short"}).toLowerCase();
    for (var i=0; i < data.length; i++) 
    {
        let dataObject = data[i];
        let color = currentDay === dataObject.day ? "hsl(186, 34%, 60%)" : 'hsl(10, 79%, 65%)' ; 
        let day = 
        <div className='day' key={i} value = {i}>
          <div 
            className='amount' 
            style={{'height':(dataObject.amount*multiplier)+'px', 'backgroundColor': color}}
            onMouseEnter = { (e) => addAmountValue(e)}
            onMouseLeave = {(e) =>removeAmountValue(e)}
            data-amount = {dataObject.amount}
           >
          </div>
          <span>{dataObject.day}</span>
        </div>;
        expenses.push(day)
    }
  return (
    <div className="Card">
      <section className='card-header'>
        <div className='header-left'>
          <span className='span-top-left'>My balance</span>
          <span className='span-bottom-left'>$921.48</span>
        </div>
        <div className='header-right'>
          <span className='span-top-right'></span>
          <span className='span-bottom-right'></span>
        </div>
      </section>
      <section className='expenses-detail'>
        <h1>Spending - Last 7 days</h1>
        <section className='week'>
          {expenses}
        </section>
        <section className='card-footer'>
          <div className='footer-left'>
            <span className='footer-top-left'>Total this month</span>
            <span className='footer-bottom-left'>$478.33</span>
          </div>
          <div className='footer-right'>
            <span className='footer-top-right'>+2.4%</span>
            <span className='footer-bottom-right'>from last month</span>
          </div>
      </section>
      </section>
    </div>
  );
}

function addAmountValue(event)
{
  const amountValue = document.createElement('span');
  amountValue.classList.add('amountValue');
  amountValue.innerText = "$"+event.target.dataset.amount;
  event.target.parentNode.appendChild(amountValue);
}
function removeAmountValue(event)
{
  const amountValue = event.target.parentNode.querySelector('.amountValue');
  if(amountValue != null)
  {
    amountValue.remove();
  }
}

function getMultiplier()
{
  return window.innerWidth > 768 ? 2 : 3;
}
export default Card;
