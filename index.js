const personImg =
  'https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
const watchImg =
  'https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
const congratsHeading = 'Congratulations'
const element = (
  // Write your code here.
  <div class='congrats-card-container'>
    <h1 class='congrats-heading'>{congratsHeading}</h1>
    <div class='content-container'>
      <img class='person-img' src={personImg} alt='person image' />
      <h1 class='person-name'>Kiran V</h1>
      <p class='college-name'>
        Vishnu Institute of Computer Education and Technology,
        <span>Bhimavaram</span>
      </p>
      <img class='watch-img' src={watchImg} alt='watch image' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
