export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
        <h2>Food Wastage Solutions</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
          <i class="fa fa-recycle" aria-hidden="true"></i>
                  <div className='service-desc'>
                    <h3>Recycle by Composting</h3>
                    <p>Food producers will solve 100% of their waste matter issues by merely organizing a good composting strategy. And doing therefore not solely eliminates waste, it saves you cash as a result of you don’t have to be compelled to “outsource” your compost production.</p>
                  </div>
          </div>
          <div className="col-lg-6 col-md-6">
          <i class="fa fa-cutlery" aria-hidden="true"></i>
                  <div className='service-desc'>
                    <h3>Turn Wasted Food into Animal Feed</h3>
                    <p>Cultivating compost is a method to recycle food, however it also can be drained of the bellies of cows, sheep, pigs, and alternative ethereal (themselves destined to become food).</p>
                  </div>
          </div>
          </div>
      <div className="row">
          <div className="col-lg-6 col-md-6">
          <i class="fa fa-suitcase" aria-hidden="true"></i>
                  <div className='service-desc'>
                    <h3>Use Waste Food to provide Products</h3>
                    <p>From biofuels to liquid fertilizer, there are several helpful merchandises that may be factory-made from bound styles of waste foods, and infrequently “leftovers” of one company might be helpful in another business for the food scrap.</p>
                  </div>
          </div>
          <div className="col-lg-6 col-md-6">
          <i class="fa fa-gift" aria-hidden="true"></i>
                  <div className='service-desc'>
                    <h3>Source Reduction and Food Donation</h3>
                    <p>The easiest method to curtail waste matter is to easily turn out less whenever production is clearly resulting in waste. Once excess foodstuffs are still safe to eat, there will be hungry and poor people who realize it troublesome to afford decent food in today’s dear economy..</p>
                  </div>
          </div>
          </div>
        </div>
        {/* <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-lg-6 col-md-6'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
  )
}
