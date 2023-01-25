import '../stylesheets/Card.css';
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
    for (var i=0; i < data.length; i++) {
        let dataObject = data[i];
        let day = 
        <div className='day' key={i} value = {i}>
          <div className='amount' style={{'height':dataObject.amount+'px', 'backgroundColor':'hsl(10, 79%, 65%)'}}></div>
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
      </section>
        


        Total this month
        $478.33

        +2.4%
  from last month
    </div>
  );
}

export default Card;
