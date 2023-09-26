import './SocialButton.css'
const SocialButton = ({icon1, icon2, icon3}) => {
  return (
    <div className='iconContainer'>
      <div className="iconDiv">
        {icon1}
      </div>
      <div className="iconDiv">
        {icon2}
      </div>
      <div className="iconDiv">
        {icon3}
      </div>
    </div>
  )
}

export default SocialButton
